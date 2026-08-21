/* =============================================================================
   Novalan — site.js
   Vanilla, no dependencies, loaded with `defer`. Every behaviour guards its own
   markup, so this same file runs unchanged on every page of the site.

   1  Mobile drawer      [data-nv-drawer]      + [data-nv-drawer-toggle]
   2  Fabric lightbox    [data-nv-lightbox]    + [data-nv-lightbox-open]
   3  YouTube facade     [data-nv-video]
   4  Reveal on scroll   .nv-reveal
   5  Header state       .nv-header  → .is-scrolled
   6  Language menu      .nv-lang__toggle + .nv-lang__panel
   ============================================================================= */

(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;

  /* CSS arms .nv-reveal only when this class is present, so the page still
     reads with JavaScript switched off. */
  root.classList.add('nv-js');

  var prefersReducedMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  var FOCUSABLE = [
    'a[href]', 'button:not([disabled])', 'input:not([disabled])',
    'select:not([disabled])', 'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ].join(',');

  function focusables(container) {
    return Array.prototype.filter.call(
      container.querySelectorAll(FOCUSABLE),
      function (el) { return el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement; }
    );
  }

  /* Keeps Tab inside an open modal. Returns the keydown handler so it can be
     detached when the modal closes. */
  function trapFocus(container) {
    return function (event) {
      if (event.key !== 'Tab') { return; }
      var items = focusables(container);
      if (!items.length) { event.preventDefault(); return; }
      var first = items[0];
      var last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
  }

  var scrollLocks = 0;
  function lockScroll() {
    scrollLocks += 1;
    body.classList.add('nv-no-scroll');
  }
  function unlockScroll() {
    scrollLocks = Math.max(0, scrollLocks - 1);
    if (scrollLocks === 0) { body.classList.remove('nv-no-scroll'); }
  }


  /* ---------------------------------------------------------------------------
     1  MOBILE DRAWER
     ------------------------------------------------------------------------ */

  (function drawer() {
    var panelHost = document.querySelector('[data-nv-drawer]');
    var toggles = document.querySelectorAll('[data-nv-drawer-toggle]');
    if (!panelHost || !toggles.length) { return; }

    var panel = panelHost.querySelector('.nv-drawer__panel') || panelHost;
    var closers = panelHost.querySelectorAll('[data-nv-drawer-close]');
    var lastToggle = toggles[0];
    var trap = trapFocus(panel);
    var isOpen = false;

    function open(fromEl) {
      if (isOpen) { return; }
      isOpen = true;
      lastToggle = fromEl || toggles[0];
      panelHost.classList.add('is-open');
      Array.prototype.forEach.call(toggles, function (t) { t.setAttribute('aria-expanded', 'true'); });
      lockScroll();
      document.addEventListener('keydown', onKeydown);
      panel.addEventListener('keydown', trap);
      var first = focusables(panel)[0];
      if (first) { first.focus(); }
    }

    function close() {
      if (!isOpen) { return; }
      isOpen = false;
      panelHost.classList.remove('is-open');
      Array.prototype.forEach.call(toggles, function (t) { t.setAttribute('aria-expanded', 'false'); });
      unlockScroll();
      document.removeEventListener('keydown', onKeydown);
      panel.removeEventListener('keydown', trap);
      if (lastToggle) { lastToggle.focus(); }
    }

    function onKeydown(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        event.preventDefault();
        close();
      }
    }

    Array.prototype.forEach.call(toggles, function (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.addEventListener('click', function () {
        if (isOpen) { close(); } else { open(toggle); }
      });
    });

    Array.prototype.forEach.call(closers, function (closer) {
      closer.addEventListener('click', close);
    });

    /* following a link inside the drawer must not leave the page scroll-locked */
    Array.prototype.forEach.call(panel.querySelectorAll('a[href]'), function (link) {
      link.addEventListener('click', function () {
        if (isOpen) {
          isOpen = false;
          panelHost.classList.remove('is-open');
          Array.prototype.forEach.call(toggles, function (t) { t.setAttribute('aria-expanded', 'false'); });
          unlockScroll();
          document.removeEventListener('keydown', onKeydown);
          panel.removeEventListener('keydown', trap);
        }
      });
    });

    /* leaving the mobile range with the drawer open would strand the lock */
    if (window.matchMedia) {
      var wide = window.matchMedia('(min-width: 901px)');
      var onChange = function (event) { if (event.matches && isOpen) { close(); } };
      if (wide.addEventListener) { wide.addEventListener('change', onChange); }
      else if (wide.addListener) { wide.addListener(onChange); }
    }
  }());


  /* ---------------------------------------------------------------------------
     2  FABRIC LIGHTBOX
     Openers carry data-nv-lightbox-open with the -1600 source, the caption and
     the family label. The dialog itself is one element reused for all of them.
     ------------------------------------------------------------------------ */

  (function lightbox() {
    var box = document.querySelector('[data-nv-lightbox]');
    var openers = document.querySelectorAll('[data-nv-lightbox-open]');
    if (!box || !openers.length) { return; }

    var dialog = box.querySelector('.nv-lightbox__dialog') || box;
    var img = box.querySelector('[data-nv-lightbox-img]');
    var source = box.querySelector('[data-nv-lightbox-source]');
    var caption = box.querySelector('[data-nv-lightbox-caption]');
    var index = box.querySelector('[data-nv-lightbox-index]');
    var closers = box.querySelectorAll('[data-nv-lightbox-close]');
    var prevBtn = box.querySelector('[data-nv-lightbox-prev]');
    var nextBtn = box.querySelector('[data-nv-lightbox-next]');

    var items = Array.prototype.slice.call(openers);
    var total = items.length;
    var current = 0;
    var origin = null;
    var trap = trapFocus(dialog);
    var isOpen = false;

    function pad(n) { return (n < 10 ? '0' : '') + n; }

    function render(i) {
      var el = items[i];
      if (!el) { return; }
      current = i;
      var jpg = el.getAttribute('data-nv-src') || '';
      var webp = el.getAttribute('data-nv-src-webp') || '';
      var label = el.getAttribute('data-nv-caption') || '';
      var alt = el.getAttribute('data-nv-alt') || label;
      if (source) { source.setAttribute('srcset', webp); }
      if (img) {
        img.setAttribute('src', jpg);
        img.setAttribute('alt', alt);
      }
      if (caption) { caption.textContent = label; }
      if (index) { index.textContent = pad(i + 1) + ' / ' + pad(total); }
    }

    function open(i, fromEl) {
      origin = fromEl || null;
      render(i);
      box.classList.add('is-open');
      isOpen = true;
      lockScroll();
      document.addEventListener('keydown', onKeydown);
      dialog.addEventListener('keydown', trap);
      var first = focusables(dialog)[0];
      if (first) { first.focus(); }
    }

    function close() {
      if (!isOpen) { return; }
      isOpen = false;
      box.classList.remove('is-open');
      unlockScroll();
      document.removeEventListener('keydown', onKeydown);
      dialog.removeEventListener('keydown', trap);
      if (origin) { origin.focus(); }
    }

    function step(delta) {
      render((current + delta + total) % total);
    }

    function onKeydown(event) {
      if (event.key === 'Escape' || event.key === 'Esc') { event.preventDefault(); close(); }
      else if (event.key === 'ArrowRight') { event.preventDefault(); step(1); }
      else if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1); }
    }

    items.forEach(function (el, i) {
      el.addEventListener('click', function (event) {
        event.preventDefault();
        open(i, el);
      });
    });

    Array.prototype.forEach.call(closers, function (el) { el.addEventListener('click', close); });
    if (prevBtn) { prevBtn.addEventListener('click', function () { step(-1); }); }
    if (nextBtn) { nextBtn.addEventListener('click', function () { step(1); }); }
  }());


  /* ---------------------------------------------------------------------------
     3  YOUTUBE FACADE
     Nothing is requested from YouTube until the visitor clicks.
     ------------------------------------------------------------------------ */

  (function videoFacade() {
    var players = document.querySelectorAll('[data-nv-video]');
    if (!players.length) { return; }

    Array.prototype.forEach.call(players, function (player) {
      var facade = player.querySelector('.nv-video__facade');
      if (!facade) { return; }

      facade.addEventListener('click', function () {
        var id = player.getAttribute('data-nv-video-id');
        if (!id) { return; }
        var title = player.getAttribute('data-nv-video-title') || 'Novalan';

        var frame = document.createElement('iframe');
        frame.className = 'nv-video__frame';
        frame.setAttribute('src',
          'https://www.youtube-nocookie.com/embed/' + id +
          '?autoplay=1&rel=0&modestbranding=1');
        frame.setAttribute('title', title);
        frame.setAttribute('allow',
          'accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture');
        frame.setAttribute('allowfullscreen', '');
        frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');

        player.appendChild(frame);
        player.classList.add('is-playing');
        frame.focus();
      });
    });
  }());


  /* ---------------------------------------------------------------------------
     4  REVEAL ON SCROLL
     ------------------------------------------------------------------------ */

  (function reveal() {
    var targets = document.querySelectorAll('.nv-reveal');
    if (!targets.length) { return; }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(targets, function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    Array.prototype.forEach.call(targets, function (el) { observer.observe(el); });
  }());


  /* ---------------------------------------------------------------------------
     5  HEADER STATE
     ------------------------------------------------------------------------ */

  (function headerState() {
    var header = document.querySelector('.nv-header');
    if (!header) { return; }

    var ticking = false;

    function apply() {
      ticking = false;
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      header.classList.toggle('is-scrolled', y > 8);
    }

    function onScroll() {
      if (ticking) { return; }
      ticking = true;
      window.requestAnimationFrame(apply);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
  }());



  /* ---------------------------------------------------------------------------
     6  LANGUAGE MENU
     The seven-locale disclosure in the header: .nv-lang__toggle + .nv-lang__panel.
     Click toggles aria-expanded, Esc closes and returns focus to the toggle,
     a click or a focus outside closes, Up/Down move between items and Home/End
     jump to the ends.

     Every .nv-lang without both a toggle and a panel is skipped, so this no-ops
     on the drawer's static .nv-lang--block, on any page still carrying the old
     two-way ES/EN paragraph, and on a page with no switcher at all. The links
     are real <a href> elements in the markup, so they still work with script
     switched off — site.css turns the panel into a plain list of links whenever
     .nv-js is absent from <html>.
     ------------------------------------------------------------------------ */

  (function languageMenu() {
    var groups = document.querySelectorAll('.nv-lang');
    if (!groups.length) { return; }

    Array.prototype.forEach.call(groups, function (group) {
      var toggle = group.querySelector('.nv-lang__toggle');
      var panel = group.querySelector('.nv-lang__panel');
      if (!toggle || !panel) { return; }

      /* the current locale is a <span>, so the focusable ring is the six links */
      var items = Array.prototype.slice.call(panel.querySelectorAll('a.nv-lang__item'));
      var isOpen = false;

      /* script is present, so the menu always starts closed */
      panel.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');

      function focusItem(i) {
        if (!items.length) { return; }
        var n = i % items.length;
        if (n < 0) { n += items.length; }
        items[n].focus();
      }

      function open() {
        if (isOpen) { return; }
        isOpen = true;
        panel.removeAttribute('hidden');
        toggle.setAttribute('aria-expanded', 'true');
        document.addEventListener('keydown', onDocumentKeydown);
        document.addEventListener('click', onDocumentClick);
        document.addEventListener('focusin', onDocumentFocus);
      }

      function close(returnFocus) {
        if (!isOpen) { return; }
        isOpen = false;
        panel.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
        document.removeEventListener('keydown', onDocumentKeydown);
        document.removeEventListener('click', onDocumentClick);
        document.removeEventListener('focusin', onDocumentFocus);
        if (returnFocus) { toggle.focus(); }
      }

      function onDocumentKeydown(event) {
        if (event.key === 'Escape' || event.key === 'Esc') {
          event.preventDefault();
          close(true);
        }
      }

      function onDocumentClick(event) {
        if (!group.contains(event.target)) { close(false); }
      }

      function onDocumentFocus(event) {
        if (!group.contains(event.target)) { close(false); }
      }

      toggle.addEventListener('click', function () {
        if (isOpen) { close(false); } else { open(); }
      });

      /* opening from the keyboard lands on an item straight away */
      toggle.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          open();
          focusItem(0);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          open();
          focusItem(items.length - 1);
        }
      });

      panel.addEventListener('keydown', function (event) {
        var at = items.indexOf(document.activeElement);
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          focusItem(at < 0 ? 0 : at + 1);
        } else if (event.key === 'ArrowUp') {
          event.preventDefault();
          focusItem(at < 0 ? items.length - 1 : at - 1);
        } else if (event.key === 'Home') {
          event.preventDefault();
          focusItem(0);
        } else if (event.key === 'End') {
          event.preventDefault();
          focusItem(items.length - 1);
        }
      });
    });
  }());

}());
