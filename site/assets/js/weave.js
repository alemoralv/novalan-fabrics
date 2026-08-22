/* =============================================================================
   Novalan — weave.js
   <nv-weave> draws wool cloth weaving itself on a loom, driven by scroll —
   an adaptation of the "Tejido Scroll" study, recoloured with the Novalan
   design-system palette. Canvas only: no captions, no HUD, no text.

   Two variants, both purely decorative (aria-hidden in the markup):

     variant="edges"  pale threads (paper / khaki / walnut) behind a text
                      section. The element measures where the section's text
                      actually sits and erases the cloth behind it, so the
                      weave only shows in the side margins. If neither margin
                      is wide enough (small screens, CJK measures) it hides
                      itself completely.

     variant="band"   the original dark colourway translated to Novalan tokens
                      (ink / paper / brick / khaki), full-bleed inside
                      .nv-band__media, behind the band's existing veil.

   Without JavaScript the element stays empty: the band's --nv-ink-900
   background and the page's paper show through, and nothing else depends on
   this file. With prefers-reduced-motion the finished cloth is drawn as a
   static texture — no progression, no shuttle, no wave.
   ============================================================================= */

(function () {
  'use strict';

  if (!window.customElements || customElements.get('nv-weave')) { return; }

  var PALETTES = {
    /* edges — khaki/walnut threads over the page's paper */
    paper: {
      bg: null,                          /* transparent: the page is the ground */
      dark: '#C4B995',                   /* --nv-khaki-300 */
      light: '#E9E4D6',                  /* between paper-400 and paper-500 */
      aw: '#9C8266',                     /* --nv-walnut-300, accent warp end */
      af: '#B07A2E',                     /* --nv-ochre-500, accent weft pick */
      woodHi: '#C4B995', woodLo: '#6B5340',
      shade: 'rgba(74,55,40,0.12)', sheen: 'rgba(255,255,255,0.35)',
      teeth: 'rgba(74,55,40,0.30)',
      reedA: 0.7, noise: 0, vignette: 0
    },
    /* band — the study's "óxido" colourway mapped to Novalan tokens */
    ink: {
      bg: '#0B0B0B',                     /* --nv-ink-900 */
      dark: '#2A2723',                   /* --nv-ink-700 */
      light: '#E3DDCE',                  /* --nv-paper-500 */
      aw: '#8E3B2E',                     /* --nv-brick-500, accent warp end */
      af: '#A89B72',                     /* --nv-khaki-500, accent weft pick */
      woodHi: '#6B5340', woodLo: '#2E2118',
      shade: 'rgba(0,0,0,0.20)', sheen: 'rgba(255,255,255,0.10)',
      teeth: 'rgba(0,0,0,0.35)',
      reedA: 0.95, noise: 0.4, vignette: 0.55
    }
  };

  var PAD = 40;    /* px kept fully clear around measured text (edges)   */
  var FADE = 120;  /* px over which the horizontal erase feathers out    */
  var FADE_V = 120;/* px of fade at the section's top and bottom (edges) */
  var STRIP = 140; /* a side margin narrower than this shows no weave    */

  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var norm = function (v, a, b) { return clamp((v - a) / (b - a), 0, 1); };
  var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
  var easeInOut = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };

  var reduced = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  class NvWeave extends HTMLElement {

    connectedCallback() {
      if (this._ready) { return; }
      this._ready = true;

      this.band = this.getAttribute('variant') === 'band';
      this.pal = this.band ? PALETTES.ink : PALETTES.paper;

      var canvas = document.createElement('canvas');
      this.appendChild(canvas);
      this.canvas = canvas;
      this.ctx = canvas.getContext('2d');

      this.p = 0;               /* smoothed progress                       */
      this.dirty = true;        /* forces a draw after (re)measures        */
      this.hiddenBySize = false;
      this.showL = true; this.showR = true;
      this.eraseX0 = 0; this.eraseX1 = 0;

      this.makeNoise();

      var self = this;
      this._onResize = function () { self.resize(); };
      addEventListener('resize', this._onResize, { passive: true });
      if (window.ResizeObserver) {
        /* lazy images and font swaps change the section's geometry */
        this._ro = new ResizeObserver(function () { self.resize(); });
        this._ro.observe(this);
      }
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () { self.resize(); });
      }
      this.resize();

      var loop = function (now) {
        self._raf = requestAnimationFrame(loop);
        self.frame(now);
      };
      this._raf = requestAnimationFrame(loop);
    }

    disconnectedCallback() {
      cancelAnimationFrame(this._raf);
      removeEventListener('resize', this._onResize);
      if (this._ro) { this._ro.disconnect(); }
    }

    makeNoise() {
      var n = document.createElement('canvas');
      n.width = n.height = 180;
      var c = n.getContext('2d');
      var d = c.createImageData(180, 180);
      for (var i = 0; i < d.data.length; i += 4) {
        var v = 118 + Math.random() * 74;
        d.data[i] = d.data[i + 1] = d.data[i + 2] = v;
        d.data[i + 3] = 42;
      }
      c.putImageData(d, 0, 0);
      this.noise = n;
      this.noisePat = null;
    }

    resize() {
      var r = this.canvas.getBoundingClientRect();
      if (!r.width || !r.height) { return; }
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.W = r.width;
      this.H = r.height;
      this.SH = this.band ? r.height : this.getBoundingClientRect().height;
      this.canvas.width = Math.round(this.W * this.dpr);
      this.canvas.height = Math.round(this.H * this.dpr);
      this.noisePat = null;                 /* pattern belongs to the old context state */
      this.pitch = this.band ? 16 : 13;
      this.cols = Math.ceil(this.W / this.pitch);
      if (!this.band) { this.measureText(); }
      this.dirty = true;
    }

    /* edges only — union of the ink rectangles of the host section's text, so
       the erase adapts to every locale (64ch is a very different width in
       Chinese than in Spanish) and to every viewport. Ranges measure the text
       itself, not the grid boxes, which stretch to the full container. */
    measureText() {
      var scope = this.closest('.nv-section') || this.parentElement;
      var els = scope.querySelectorAll('h1, h2, h3, p, figure');
      var selfL = this.getBoundingClientRect().left;
      var L = Infinity, R = -Infinity;
      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (el.tagName !== 'FIGURE' && el.closest('figure')) { continue; }
        var b;
        if (el.tagName === 'FIGURE') {
          b = el.getBoundingClientRect();
        } else {
          var range = document.createRange();
          range.selectNodeContents(el);
          b = range.getBoundingClientRect();
        }
        if (!b || !b.width) { continue; }
        if (b.left < L) { L = b.left; }
        if (b.right > R) { R = b.right; }
      }
      if (L === Infinity) {                  /* no text found: show nothing */
        this.showL = this.showR = false;
      } else {
        this.eraseX0 = L - selfL - PAD;
        this.eraseX1 = R - selfL + PAD;
        this.showL = this.eraseX0 >= STRIP;
        this.showR = this.W - this.eraseX1 >= STRIP;
        if (!this.showL) { this.eraseX0 = 0; }
        if (!this.showR) { this.eraseX1 = this.W; }
      }
      this.hiddenBySize = !this.showL && !this.showR;
      this.canvas.style.visibility = this.hiddenBySize ? 'hidden' : '';
    }

    frame(now) {
      if (this.hiddenBySize || !this.W) { return; }
      var r = this.getBoundingClientRect();
      var vh = innerHeight;
      if (r.bottom < -60 || r.top > vh + 60) { return; }

      /* progress: 0 as the top enters the viewport bottom, 1 as the bottom
         leaves the top — no pinning, the page scrolls as it always did */
      var target = reduced ? 1 : clamp((vh - r.top) / (vh + r.height), 0, 1);

      /* scroll offset of the sticky canvas inside the section (edges) */
      var off = this.band ? 0 : clamp(-r.top, 0, Math.max(0, r.height - this.H));

      var dt = Math.min(120, now - (this._last || now - 16));
      this._last = now;
      var d = target - this.p;
      var moved = Math.abs(d) > 0.0004;
      this.p = moved ? this.p + d * (1 - Math.exp(-dt / 90)) : target;

      /* once draped, the band's cloth breathes — capped at ~22 fps */
      var waving = this.band && !reduced && this.p > 0.55;
      var offMoved = off !== this._off;
      if (!moved && !offMoved && !this.dirty && !(waving && now - (this._waveT || 0) > 45)) { return; }
      if (waving) { this._waveT = now; }
      this._off = off;
      this.dirty = false;
      this.draw(this.p, off, now);
    }

    draw(p, off, now) {
      var ctx = this.ctx, W = this.W, H = this.H, P = this.pal;
      var pitch = this.pitch, cols = this.cols;
      var SH = this.SH;
      var rows = Math.ceil(SH / pitch);
      var i;

      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (P.bg) { ctx.fillStyle = P.bg; ctx.fillRect(0, 0, W, H); }

      /* phases — the warp is dressed first, the weft advances with the scroll */
      var warpP, weaveP;
      if (this.band) {
        warpP = norm(p, 0.0, 0.16);
        weaveP = easeInOut(norm(p, 0.04, 0.62));
      } else {
        warpP = norm(p, 0.01, 0.30);
        weaveP = easeInOut(norm(p, 0.12, 0.86));
      }
      if (reduced) { warpP = 1; weaveP = 1; }

      var drape = this.band && !reduced ? norm(p, 0.55, 0.90) : 0;
      var amp = 4.5 * drape;
      var ph = now * 0.00035;
      var freq = Math.PI * 3 / W;

      var band4 = function (n) { return Math.floor(n / 4) % 2 === 0; };
      var warpCol = function (c) { return c % 16 === 7 ? P.aw : (band4(c) ? P.dark : P.light); };
      var weftCol = function (rr) { return rr % 16 === 7 ? P.af : (band4(rr) ? P.dark : P.light); };
      var tw = pitch * 0.8, tOff = (pitch - tw) / 2;

      /* cells that the central erase will delete anyway are never drawn */
      var skip = !this.band;
      var sk0 = this.eraseX0, sk1 = this.eraseX1;

      ctx.save();
      ctx.translate(0, -off);
      var yMin = off - pitch * 2, yMax = off + H + pitch * 2;

      /* warp threads (vertical), staggered descent */
      for (var c = 0; c < cols; c++) {
        var x = c * pitch;
        if (skip && x >= sk0 && x + pitch <= sk1) { continue; }
        var a = easeOut(clamp((warpP - (c / cols) * 0.55) / 0.45, 0, 1));
        if (a <= 0) { continue; }
        var len = (SH + pitch * 2) * a;
        var y0 = Math.max(0, yMin), y1 = Math.min(len, yMax);
        if (y1 <= y0) { continue; }
        ctx.globalAlpha = 0.5 + 0.5 * a;
        ctx.fillStyle = warpCol(c);
        ctx.fillRect(x + tOff, y0, tw, y1 - y0);
        ctx.fillStyle = P.shade;
        ctx.fillRect(x + tOff + tw * 0.72, y0, tw * 0.28, y1 - y0);
        ctx.fillStyle = P.sheen;
        ctx.fillRect(x + tOff + tw * 0.10, y0, tw * 0.20, y1 - y0);
        ctx.globalAlpha = 1;
      }

      /* woven cells: weft under/over warp in a 2/2 twill → pata de gallo */
      var rowsF = weaveP * rows, full = Math.floor(rowsF), frac = rowsF - full;
      var rStart = Math.max(0, Math.floor(yMin / pitch));
      var rEnd = Math.min(full, rows - 1, Math.ceil(yMax / pitch));
      for (var rr = rStart; rr <= rEnd; rr++) {
        var isCur = rr === full;
        var ltr = rr % 2 === 0;
        var done = isCur ? frac : 1;
        var nCells = Math.round(done * cols);
        var wcol = weftCol(rr);
        var y = rr * pitch;
        for (var k = 0; k < nCells; k++) {
          var cc = ltr ? k : cols - 1 - k;
          if (cc < 0 || cc >= cols) { continue; }
          var xw = cc * pitch;
          if (skip && xw >= sk0 && xw + pitch <= sk1) { continue; }
          if (clamp((warpP - (cc / cols) * 0.55) / 0.45, 0, 1) <= 0) { continue; }
          var dy = amp ? amp * Math.sin(xw * freq + ph) : 0;
          var over = ((cc - rr + 400) % 4) < 2;      /* warp on top */
          ctx.fillStyle = wcol;
          ctx.fillRect(xw, y + tOff + dy, pitch + 0.4, tw);
          ctx.fillStyle = P.shade;
          ctx.fillRect(xw, y + tOff + tw * 0.70 + dy, pitch + 0.4, tw * 0.30);
          if (over) {
            ctx.fillStyle = warpCol(cc);
            ctx.fillRect(xw + tOff, y + dy - 0.3, tw, pitch + 0.6);
            ctx.fillStyle = P.shade;
            ctx.fillRect(xw + tOff + tw * 0.72, y + dy - 0.3, tw * 0.28, pitch + 0.6);
            ctx.fillStyle = P.sheen;
            ctx.fillRect(xw + tOff + tw * 0.10, y + dy - 0.3, tw * 0.20, pitch + 0.6);
          } else {
            ctx.fillStyle = P.sheen;
            ctx.fillRect(xw, y + tOff + dy, pitch + 0.4, tw * 0.26);
          }
        }

        /* shuttle + live weft on the row in progress */
        if (isCur && !reduced && weaveP > 0.001 && weaveP < 0.999 && y > yMin && y < yMax) {
          var xs = (ltr ? done : 1 - done) * W;
          var ys = y + pitch / 2 + (amp ? amp * Math.sin(xs * freq + ph) : 0);
          ctx.strokeStyle = wcol;
          ctx.lineWidth = tw * 0.5;
          ctx.beginPath();
          ctx.moveTo(xs, ys);
          ctx.lineTo(ltr ? xs + pitch * 2.2 : xs - pitch * 2.2, ys - pitch * 0.5);
          ctx.stroke();
          ctx.save();
          ctx.translate(xs, ys);
          ctx.rotate(ltr ? 0.06 : -0.06);
          var sg = ctx.createLinearGradient(0, -pitch, 0, pitch);
          sg.addColorStop(0, P.woodHi);
          sg.addColorStop(1, P.woodLo);
          ctx.fillStyle = sg;
          ctx.beginPath();
          var sw = pitch * 4.6, sh = pitch * 1.5;
          ctx.moveTo(-sw / 2, 0);
          ctx.quadraticCurveTo(-sw / 2 + sh, -sh / 2, 0, -sh / 2);
          ctx.quadraticCurveTo(sw / 2 - sh, -sh / 2, sw / 2, 0);
          ctx.quadraticCurveTo(sw / 2 - sh, sh / 2, 0, sh / 2);
          ctx.quadraticCurveTo(-sw / 2 + sh, sh / 2, -sw / 2, 0);
          ctx.fill();
          ctx.fillStyle = wcol;
          ctx.fillRect(-sw * 0.16, -sh * 0.24, sw * 0.32, sh * 0.48);
          ctx.restore();
        }
      }

      /* reed / beater bar riding just ahead of the woven edge */
      if (!reduced && weaveP > 0.001 && weaveP < 0.999) {
        var fy = weaveP * SH + pitch * 1.4;
        if (fy > yMin && fy < yMax) {
          var rg = ctx.createLinearGradient(0, fy, 0, fy + pitch * 1.3);
          rg.addColorStop(0, P.woodHi);
          rg.addColorStop(1, P.woodLo);
          ctx.globalAlpha = P.reedA;
          ctx.fillStyle = rg;
          ctx.fillRect(0, fy, W, pitch * 1.3);
          ctx.fillStyle = P.teeth;
          for (var ct = 0; ct < cols; ct += 2) {
            var xt = ct * pitch + pitch * 0.9;
            if (skip && xt >= sk0 && xt <= sk1) { continue; }
            ctx.fillRect(xt, fy, pitch * 0.22, pitch * 1.3);
          }
          ctx.globalAlpha = 1;
        }
      }
      ctx.restore();

      /* band finish — drape shading, fibre noise, vignette (screen space) */
      if (drape > 0.01) {
        for (i = 0; i < 96; i++) {
          var xd = i / 96 * W;
          var v = Math.sin((xd - W / 2) / (W * 0.5) * Math.PI * 3 + ph);
          ctx.fillStyle = v > 0
            ? 'rgba(255,244,224,' + (v * 0.08 * drape).toFixed(3) + ')'
            : 'rgba(10,7,5,' + (-v * 0.18 * drape).toFixed(3) + ')';
          ctx.fillRect(xd, 0, W / 96 + 1, H);
        }
      }
      if (P.noise) {
        ctx.save();
        ctx.globalCompositeOperation = 'overlay';
        ctx.globalAlpha = P.noise;
        if (!this.noisePat) { this.noisePat = ctx.createPattern(this.noise, 'repeat'); }
        ctx.fillStyle = this.noisePat;
        ctx.fillRect(0, 0, W, H);
        ctx.restore();
      }
      if (P.vignette) {
        var vg = ctx.createRadialGradient(
          W / 2, H * 0.46, Math.min(W, H) * 0.28,
          W / 2, H * 0.50, Math.max(W, H) * 0.78
        );
        vg.addColorStop(0, 'rgba(0,0,0,0)');
        vg.addColorStop(1, 'rgba(0,0,0,' + P.vignette + ')');
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, W, H);
      }

      /* edges finish — erase the text column and feather every boundary */
      if (!this.band) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';

        var hg = ctx.createLinearGradient(0, 0, W, 0);
        if (this.showL) {
          hg.addColorStop(clamp((this.eraseX0 - FADE) / W, 0, 1), 'rgba(0,0,0,0)');
          hg.addColorStop(clamp(this.eraseX0 / W, 0, 1), 'rgba(0,0,0,1)');
        } else {
          hg.addColorStop(0, 'rgba(0,0,0,1)');
        }
        if (this.showR) {
          hg.addColorStop(clamp(this.eraseX1 / W, 0, 1), 'rgba(0,0,0,1)');
          hg.addColorStop(clamp((this.eraseX1 + FADE) / W, 0, 1), 'rgba(0,0,0,0)');
        } else {
          hg.addColorStop(1, 'rgba(0,0,0,1)');
        }
        ctx.fillStyle = hg;
        ctx.fillRect(0, 0, W, H);

        var topY = -off;                    /* section top, canvas coords */
        if (topY + FADE_V > 0) {
          var tg = ctx.createLinearGradient(0, topY, 0, topY + FADE_V);
          tg.addColorStop(0, 'rgba(0,0,0,1)');
          tg.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = tg;
          ctx.fillRect(0, Math.max(0, topY), W, Math.min(H, topY + FADE_V) - Math.max(0, topY));
        }
        var botY = SH - off;                /* section bottom, canvas coords */
        if (botY - FADE_V < H) {
          var bg = ctx.createLinearGradient(0, botY - FADE_V, 0, botY);
          bg.addColorStop(0, 'rgba(0,0,0,0)');
          bg.addColorStop(1, 'rgba(0,0,0,1)');
          ctx.fillStyle = bg;
          ctx.fillRect(0, Math.max(0, botY - FADE_V), W, Math.min(H, botY) - Math.max(0, botY - FADE_V));
        }
        ctx.restore();
      }
    }
  }

  customElements.define('nv-weave', NvWeave);
})();
