// ============================================
// JUAN DAVID SÁNCHEZ — PORTFOLIO
// Navigation, theme, interactions
// ============================================

(function () {
  // ---- State ----
  let currentPage = 'home';
  let mobileOpen = false;

  // ---- DOM refs ----
  const body = document.body;
  const themeBtn = document.getElementById('theme-btn');
  const themeIcon = document.getElementById('theme-icon');
  const menuBtn = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const pages = document.querySelectorAll('.page');
  const navBtns = document.querySelectorAll('[data-page]');

  // ---- Theme ----
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    body.classList.add('light');
    if (themeIcon) themeIcon.textContent = '🌙';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      body.classList.toggle('light');
      const isLight = body.classList.contains('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      if (themeIcon) themeIcon.textContent = isLight ? '🌙' : '☀️';
    });
  }

  // ---- Mobile menu ----
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      if (mobileNav) mobileNav.classList.toggle('open', mobileOpen);
      menuBtn.textContent = mobileOpen ? '✕' : '☰';
    });
  }

  function closeMobile() {
    mobileOpen = false;
    if (mobileNav) mobileNav.classList.remove('open');
    if (menuBtn) menuBtn.textContent = '☰';
  }

  // ---- Page routing ----
  function showPage(name) {
    if (name === currentPage) {
      closeMobile();
      return;
    }
    currentPage = name;

    pages.forEach(p => {
      p.classList.remove('active');
    });

    const target = document.getElementById('page-' + name);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav state
    navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === name);
    });

    closeMobile();
  }

  // Attach to all data-page elements
  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(btn.dataset.page);
    });
  });

  // Expose globally for inline onclick fallbacks
  window.showPage = showPage;

  // ---- Smooth anchor scroll (for #contacto) ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        // If target is on home page, switch first
        if (currentPage !== 'home') {
          showPage('home');
          setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 420);
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        closeMobile();
      }
    });
  });

  // ---- Intersection observer: subtle card entrance ----
  const cards = document.querySelectorAll('.project-card, .idea-card, .social-card, .stat-card');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      card.style.transition = `opacity 0.45s ease ${i * 0.04}s, transform 0.45s ease ${i * 0.04}s, border-color 0.22s, background 0.22s, box-shadow 0.22s`;
      io.observe(card);
    });
  }

  // ---- Hero text entrance ----
  const heroEls = document.querySelectorAll('.hero-eyebrow, .hero-name, .hero h1, .hero-sub, .hero-ctas');
  heroEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`;
    requestAnimationFrame(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });

})();
