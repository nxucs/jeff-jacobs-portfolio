/* ============================================================
   Jeff Jacobs Portfolio — script.js
   Theme toggle · Scroll reveal · Timeline accordion · Nav
   ============================================================ */

(function () {
  'use strict';

  /* ── Font loading → visibility ──────────────────────────── */
  if (document.fonts) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add('fonts-ready');
    });
  } else {
    document.documentElement.classList.add('fonts-ready');
  }

  /* ── Theme Toggle ───────────────────────────────────────── */
  const html = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');

  // Determine initial theme
  let currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  html.setAttribute('data-theme', currentTheme);
  updateToggleIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', currentTheme);
      updateToggleIcon(currentTheme);
    });
  }

  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    if (theme === 'dark') {
      themeToggle.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      themeToggle.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
  }

  /* ── Scroll Reveal (IntersectionObserver) ───────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all elements immediately
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ── Sticky Header Shadow ───────────────────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.style.borderBottomColor = window.scrollY > 10
        ? 'var(--color-border)'
        : 'transparent';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Active Nav Link on Scroll ──────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            link.style.color = href === `#${id}`
              ? 'var(--color-accent)'
              : '';
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-60px 0px -60% 0px' }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ── Mobile Navigation ──────────────────────────────────── */
  const menuToggle = document.getElementById('navMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');

  function openMobileNav() {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileNav);

  // Close on link click
  document.querySelectorAll('.mobile-nav-links a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
    }
  });

  /* ── Timeline Accordion ─────────────────────────────────── */
  // Exposed as global function (called via inline onclick)
  window.toggleTimeline = function (headerEl) {
    const item = headerEl.closest('.timeline-item');
    const body = item.querySelector('.timeline-body');
    const isOpen = item.classList.contains('open');

    if (isOpen) {
      item.classList.remove('open');
      body.classList.remove('open');
      headerEl.setAttribute('aria-expanded', 'false');
    } else {
      item.classList.add('open');
      body.classList.add('open');
      headerEl.setAttribute('aria-expanded', 'true');
    }
  };

  // Keyboard accessibility for timeline headers
  document.querySelectorAll('.timeline-header').forEach((header) => {
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.toggleTimeline(header);
      }
    });
  });

  /* ── Smooth Scroll for Anchor Links ─────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
