// <novalan-weave> — scroll-driven canvas animation of wool cloth being woven on a loom.
// Drop-in: <script src="novalan-weave.js"></script> then <novalan-weave></novalan-weave>
// Attributes: colorway="oxido|carbon|ocre" density="48..96" captions="on|off" scroll="3..6" (viewport heights)

const PALETTES = {
  oxido:  { bg: '#171412', dark: '#2c2723', light: '#e9e0d1', aw: '#9c4a26', af: '#b3873a', wood: '#3b2f26' },
  carbon: { bg: '#101215', dark: '#23262b', light: '#dcdde0', aw: '#44586a', af: '#8f9aa3', wood: '#2a2e33' },
  ocre:   { bg: '#191509', dark: '#4a3a1e', light: '#efe4c9', aw: '#b3873a', af: '#8a6a2c', wood: '#3a2e1c' }
};

const CAPTIONS = [
  { from: 0.02, to: 0.21, k: 'Urdimbre', t: 'Miles de hilos de lana, tensados a lo largo del telar.' },
  { from: 0.26, to: 0.49, k: 'Trama', t: 'La lanzadera cruza y regresa. Pasada por pasada, nace la tela.' },
  { from: 0.53, to: 0.71, k: 'Pata de gallo', t: 'Cuatro hilos claros, cuatro oscuros, ligamento de sarga: el dibujo aparece solo.' },
  { from: 0.80, to: 1.01, k: 'Novalan', t: 'Tejiendo belleza desde 1983.' }
];

const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
const norm = (v, a, b) => clamp((v - a) / (b - a), 0, 1);
const lerp = (a, b, t) => a + (b - a) * t;
const easeOut = t => 1 - Math.pow(1 - t, 3);
const easeInOut = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

class NovalanWeave extends HTMLElement {
  static get observedAttributes() { return ['colorway', 'density', 'captions', 'scroll']; }

  connectedCallback() {
    if (this._ready) return;
    this._ready = true;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `
      <style>
        :host { display: block; position: relative; }
        .track { position: relative; }
        .stage { position: sticky; top: 0; height: 100vh; overflow: hidden; background: ${PALETTES.oxido.bg}; }
        canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
        .caps { position: absolute; inset: 0; pointer-events: none; }
        .cap { position: absolute; left: clamp(20px, 6vw, 96px); bottom: clamp(84px, 12vh, 150px);
               max-width: min(30ch, 42vw); opacity: 0; transform: translateY(18px); will-change: opacity, transform; }
        .k { font: 400 clamp(12px,0.86vw,15px)/1 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: 0.22em;
             text-transform: uppercase; color: var(--ac, #b3873a); margin: 0 0 14px; }
        .t { font: 400 clamp(23px,2.05vw,40px)/1.24 'Newsreader', Georgia, serif; color: #f2ece1; margin: 0;
             text-wrap: pretty; letter-spacing: -0.01em; }
        .hud { position: absolute; left: clamp(20px,6vw,96px); right: clamp(20px,6vw,96px); bottom: clamp(30px,5vh,56px);
               display: flex; align-items: center; gap: 18px;
               font: 400 11px/1 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: 0.16em;
               text-transform: uppercase; color: rgba(242,236,225,0.5); }
        .bar { flex: 1; height: 1px; background: rgba(242,236,225,0.16); position: relative; }
        .bar i { position: absolute; inset: 0 auto 0 0; background: var(--ac, #b3873a); width: 0; }
        .eyebrow { position: absolute; top: clamp(24px,5vh,54px); left: clamp(20px,6vw,96px);
                   font: 400 11px/1 'IBM Plex Mono', ui-monospace, monospace; letter-spacing: 0.24em;
                   text-transform: uppercase; color: rgba(242,236,225,0.42); }
        @media (max-width: 700px) { .cap { max-width: 88vw; } }
      </style>
      <div class="track">
        <div class="stage">
          <canvas></canvas>
          <div class="caps">
            <div class="eyebrow">Procesos · Tejido</div>
            ${CAPTIONS.map(c => `<div class="cap"><p class="k">${c.k}</p><p class="t">${c.t}</p></div>`).join('')}
            <div class="hud"><span class="ct">Urdimbre 000 hilos</span><span class="bar"><i></i></span><span class="cn">Pasada 000</span></div>
          </div>
        </div>
      </div>`;

    this.canvas = root.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.stage = root.querySelector('.stage');
    this.capEls = [...root.querySelectorAll('.cap')];
    this.hud = root.querySelector('.hud');
    this.fill = root.querySelector('.bar i');
    this.ct = root.querySelector('.ct');
    this.cn = root.querySelector('.cn');
    this.p = 0; this.target = 0;
    this.applyAttrs();
    this.makeNoise();

    this._resize = () => this.resize();
    addEventListener('resize', this._resize, { passive: true });
    this.resize(); this.measure();
    const loop = () => { this._raf = requestAnimationFrame(loop); this.measure(); this.tick(); };
    loop();
  }

  disconnectedCallback() { cancelAnimationFrame(this._raf); removeEventListener('resize', this._resize); }
  attributeChangedCallback() { if (this._ready) { this.applyAttrs(); this.resize(); } }

  applyAttrs() {
    this.pal = PALETTES[this.getAttribute('colorway')] || PALETTES.oxido;
    this.cols = clamp(parseInt(this.getAttribute('density') || '64', 10) || 64, 32, 112);
    this.rows = Math.round(this.cols * 0.58);
    this.showCaps = this.getAttribute('captions') !== 'off';
    const vh = clamp(parseFloat(this.getAttribute('scroll') || '4'), 2, 8);
    this.style.setProperty('--ac', this.pal.af);
    if (this.stage) {
      this.shadowRoot.querySelector('.track').style.height = (vh * 100) + 'vh';
      this.stage.style.background = this.pal.bg;
      this.shadowRoot.querySelector('.caps').style.display = this.showCaps ? 'block' : 'none';
    }
  }

  makeNoise() {
    const n = document.createElement('canvas'); n.width = n.height = 180;
    const c = n.getContext('2d'); const d = c.createImageData(180, 180);
    for (let i = 0; i < d.data.length; i += 4) {
      const v = 118 + Math.random() * 74;
      d.data[i] = d.data[i + 1] = d.data[i + 2] = v; d.data[i + 3] = 42;
    }
    c.putImageData(d, 0, 0); this.noise = n;
  }

  resize() {
    const r = this.stage.getBoundingClientRect();
    this.dpr = Math.min(devicePixelRatio || 1, 2);
    this.W = Math.max(1, r.width); this.H = Math.max(1, r.height);
    this.canvas.width = Math.round(this.W * this.dpr);
    this.canvas.height = Math.round(this.H * this.dpr);
    this.dirty = true;
  }

  measure() {
    const r = this.getBoundingClientRect();
    const span = Math.max(1, r.height - innerHeight);
    this.target = clamp(-r.top / span, 0, 1);
    this.visible = r.bottom > -40 && r.top < innerHeight + 40;
  }

  tick() {
    if (!this.visible && !this.dirty) return;
    const now = performance.now();
    const dt = Math.min(120, now - (this._last || now - 16));
    this._last = now;
    const d = this.target - this.p;
    const k = 1 - Math.exp(-dt / 90);
    this.p += Math.abs(d) < 0.0005 ? d : d * k;
    this.draw(this.p, now);
    if (this.showCaps) this.updateCaps(this.p);
    this.dirty = false;
  }

  updateCaps(p) {
    CAPTIONS.forEach((c, i) => {
      const el = this.capEls[i];
      const inA = norm(p, c.from, c.from + (c.to - c.from) * 0.22);
      const outA = 1 - norm(p, c.to - (c.to - c.from) * 0.26, c.to);
      const a = Math.min(inA, outA);
      el.style.opacity = a.toFixed(3);
      el.style.transform = `translateY(${((1 - easeOut(inA)) * 20).toFixed(2)}px)`;
    });
    const weave = norm(p, 0.12, 0.70);
    this.fill.style.width = (p * 100).toFixed(2) + '%';
    this.ct.textContent = `Urdimbre ${String(Math.round(norm(p, 0, 0.12) * this.cols)).padStart(3, '0')} hilos`;
    this.cn.textContent = `Pasada ${String(Math.round(weave * this.rows)).padStart(3, '0')}/${this.rows}`;
    this.hud.style.opacity = (0.35 + 0.65 * norm(p, 0.01, 0.06)).toFixed(2);
  }

  draw(p, now) {
    const ctx = this.ctx, W = this.W, H = this.H, P = this.pal;
    const cols = this.cols, rows = this.rows, pitch = 14;
    const clothW = cols * pitch, clothH = rows * pitch;
    ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    ctx.fillStyle = P.bg; ctx.fillRect(0, 0, W, H);

    const warpP = norm(p, 0.0, 0.13);
    const weaveP = easeInOut(norm(p, 0.12, 0.70));
    const front = weaveP * clothH;
    const drape = norm(p, 0.72, 0.92);
    const fit = Math.min(W * 0.94 / clothW, H * 0.86 / clothH);
    const zoom = p < 0.62 ? lerp(2.3, 1.0, easeInOut(norm(p, 0.05, 0.62))) : lerp(1.0, 0.93, easeOut(norm(p, 0.62, 1)));
    const s = fit * zoom;
    const focusY = lerp(clamp(front, clothH * 0.12, clothH * 0.88), clothH / 2, easeInOut(norm(p, 0.42, 0.70)));

    ctx.save();
    ctx.translate(W / 2, H / 2 + lerp(0, -H * 0.02, drape));
    ctx.scale(s, s);
    ctx.translate(-clothW / 2, -focusY);

    const amp = 8 * drape, freq = Math.PI * 3 / clothW, ph = now * 0.00035;
    const wave = x => amp * Math.sin(x * freq + ph);
    const band = i => (Math.floor(i / 4) % 2 === 0);
    const warpCol = c => c % 16 === 7 ? P.aw : (band(c) ? P.dark : P.light);
    const weftCol = r => r % 16 === 7 ? P.af : (band(r) ? P.dark : P.light);
    const tw = pitch * 0.80, off = (pitch - tw) / 2;

    // loom beams + warp tension beyond the cloth
    const beam = (y, h) => {
      const g = ctx.createLinearGradient(0, y, 0, y + h);
      g.addColorStop(0, P.wood); g.addColorStop(0.45, '#6a543f'); g.addColorStop(1, '#241c15');
      ctx.fillStyle = g; ctx.fillRect(-pitch * 3, y, clothW + pitch * 6, h);
    };
    beam(-pitch * 7, pitch * 2.6);
    beam(clothH + pitch * 4.4, pitch * 2.6);

    // warp threads (vertical), staggered descent
    for (let c = 0; c < cols; c++) {
      const a = easeOut(clamp((warpP - (c / cols) * 0.55) / 0.45, 0, 1));
      if (a <= 0) continue;
      const x = c * pitch + off;
      const top = -pitch * 5;
      const len = (clothH + pitch * 10) * a;
      ctx.fillStyle = warpCol(c);
      ctx.globalAlpha = 0.5 + 0.5 * a;
      ctx.fillRect(x, top, tw, len);
      ctx.globalAlpha = 1;
      ctx.fillStyle = 'rgba(0,0,0,0.20)';
      ctx.fillRect(x + tw * 0.72, top, tw * 0.28, len);
      ctx.fillStyle = 'rgba(255,255,255,0.10)';
      ctx.fillRect(x + tw * 0.10, top, tw * 0.20, len);
    }

    // woven cells: weft under/over warp in a 2/2 twill → pata de gallo
    const rowsF = weaveP * rows, full = Math.floor(rowsF), frac = rowsF - full;
    for (let r = 0; r <= Math.min(full, rows - 1); r++) {
      const isCur = r === full;
      const ltr = r % 2 === 0;
      const done = isCur ? frac : 1;
      const nCells = Math.round(done * cols);
      const wcol = weftCol(r);
      for (let k = 0; k < nCells; k++) {
        const c = ltr ? k : cols - 1 - k;
        if (c < 0 || c >= cols) continue;
        const warpA = easeOut(clamp((warpP - (c / cols) * 0.55) / 0.45, 0, 1));
        if (warpA <= 0) continue;
        const x = c * pitch, y = r * pitch;
        const dy = wave(x);
        const over = ((c - r + 400) % 4) < 2; // warp on top
        ctx.fillStyle = wcol;
        ctx.fillRect(x, y + off + dy, pitch + 0.4, tw);
        ctx.fillStyle = 'rgba(0,0,0,0.16)';
        ctx.fillRect(x, y + off + tw * 0.70 + dy, pitch + 0.4, tw * 0.30);
        if (over) {
          ctx.fillStyle = warpCol(c);
          ctx.fillRect(x + off, y + dy - 0.3, tw, pitch + 0.6);
          ctx.fillStyle = 'rgba(0,0,0,0.18)';
          ctx.fillRect(x + off + tw * 0.72, y + dy - 0.3, tw * 0.28, pitch + 0.6);
          ctx.fillStyle = 'rgba(255,255,255,0.09)';
          ctx.fillRect(x + off + tw * 0.10, y + dy - 0.3, tw * 0.20, pitch + 0.6);
        } else {
          ctx.fillStyle = 'rgba(255,255,255,0.07)';
          ctx.fillRect(x, y + off + dy, pitch + 0.4, tw * 0.26);
        }
      }
      // shuttle + live weft on the row in progress
      if (isCur && weaveP > 0.001 && weaveP < 0.999) {
        const xs = (ltr ? done : 1 - done) * clothW;
        const y = r * pitch + pitch / 2 + wave(xs);
        ctx.strokeStyle = wcol; ctx.lineWidth = tw * 0.5;
        ctx.beginPath(); ctx.moveTo(xs, y); ctx.lineTo(ltr ? xs + pitch * 2.2 : xs - pitch * 2.2, y - pitch * 0.5); ctx.stroke();
        ctx.save();
        ctx.translate(xs, y);
        ctx.rotate(ltr ? 0.06 : -0.06);
        const g = ctx.createLinearGradient(0, -pitch, 0, pitch);
        g.addColorStop(0, '#8a6b4c'); g.addColorStop(0.5, '#4b3826'); g.addColorStop(1, '#20170f');
        ctx.fillStyle = g;
        ctx.beginPath();
        const sw = pitch * 4.6, sh = pitch * 1.5;
        ctx.moveTo(-sw / 2, 0); ctx.quadraticCurveTo(-sw / 2 + sh, -sh / 2, 0, -sh / 2);
        ctx.quadraticCurveTo(sw / 2 - sh, -sh / 2, sw / 2, 0);
        ctx.quadraticCurveTo(sw / 2 - sh, sh / 2, 0, sh / 2);
        ctx.quadraticCurveTo(-sw / 2 + sh, sh / 2, -sw / 2, 0);
        ctx.fill();
        ctx.fillStyle = wcol; ctx.fillRect(-sw * 0.16, -sh * 0.24, sw * 0.32, sh * 0.48);
        ctx.restore();
      }
    }

    // reed / beater bar riding just ahead of the woven edge
    if (weaveP > 0.001 && weaveP < 0.999) {
      const y = front + pitch * 1.4;
      const g = ctx.createLinearGradient(0, y, 0, y + pitch * 1.5);
      g.addColorStop(0, 'rgba(150,124,96,0.95)'); g.addColorStop(1, 'rgba(30,23,16,0.95)');
      ctx.fillStyle = g; ctx.fillRect(-pitch * 2, y, clothW + pitch * 4, pitch * 1.5);
      ctx.fillStyle = 'rgba(0,0,0,0.35)';
      for (let c = 0; c < cols; c += 2) ctx.fillRect(c * pitch + pitch * 0.9, y, pitch * 0.22, pitch * 1.5);
    }
    ctx.restore();

    // drape shading, fiber noise, vignette
    if (drape > 0.01) {
      for (let i = 0; i < 96; i++) {
        const x = i / 96 * W;
        const v = Math.sin((x - W / 2) / (W * 0.5) * Math.PI * 3 + ph);
        ctx.fillStyle = v > 0 ? `rgba(255,244,224,${(v * 0.10 * drape).toFixed(3)})` : `rgba(10,7,5,${(-v * 0.22 * drape).toFixed(3)})`;
        ctx.fillRect(x, 0, W / 96 + 1, H);
      }
    }
    ctx.save();
    ctx.globalCompositeOperation = 'overlay';
    ctx.globalAlpha = 0.5;
    const pat = ctx.createPattern(this.noise, 'repeat');
    ctx.fillStyle = pat; ctx.fillRect(0, 0, W, H);
    ctx.restore();
    const vg = ctx.createRadialGradient(W / 2, H * 0.46, Math.min(W, H) * 0.28, W / 2, H * 0.5, Math.max(W, H) * 0.78);
    vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,0.72)');
    ctx.fillStyle = vg; ctx.fillRect(0, 0, W, H);
    const dim = norm(p, 0.86, 1) * 0.34;
    if (dim > 0) { ctx.fillStyle = `rgba(8,6,5,${dim.toFixed(3)})`; ctx.fillRect(0, 0, W, H); }
  }
}

if (!customElements.get('novalan-weave')) customElements.define('novalan-weave', NovalanWeave);
