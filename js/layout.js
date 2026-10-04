// Shared layout builder for OKSER Maroc site
// Injects header, footer, and sidebar cards into pages

export function buildHeader(activePage) {
  const pages = [
    { name: 'Accueil', url: 'index.html' },
    { name: 'Présentation', url: 'presentation.html' },
    { name: 'Espace Candidat', url: 'candidat.html' },
    { name: 'Espace Entreprise', url: 'entreprise.html' },
    { name: 'Contact', url: 'contact.html' },
  ];

  const navItems = pages.map(p =>
    `<a href="${p.url}" class="${p.name === activePage ? 'active' : ''}">${p.name}</a>`
  ).join('');

  return `
  <div class="topbar">
    <div class="topbar-inner">
      <span class="topbar-item"><span class="ico">&#128205;</span> 5, Imm LAHRACH, Bd Mohamed VI, AIT MELLOUL, Agadir, Maroc</span>
      <span class="topbar-item"><span class="ico">&#9742;</span> Okser siège (+212)528-837555</span>
      <span class="topbar-item"><span class="ico">&#9993;</span> abdelkabir.amoura@okser-maroc.com</span>
    </div>
  </div>
  <header class="header">
    <div class="header-inner">
      <a href="index.html" class="logo-area">
        <img src="/images/logo-okser.svg" alt="OKSER Logo" class="logo-img" />
        <div class="logo-text">
          <span class="logo-okser"><span class="ok">OK</span><span class="ser">SER</span></span>
          <span class="logo-slogan">Votre confiance est en lieu sûr</span>
        </div>
      </a>
      <nav class="nav">${navItems}</nav>
    </div>
  </header>`;
}

export function buildFooter() {
  const socials = ['f', 't', 'G+', 'ig', 'pin', 'sk'];
  const socialHtml = socials.map(s =>
    `<a href="#" aria-label="${s}">${s}</a>`
  ).join('');

  return `
  <footer class="footer">
    <div class="footer-social">
      ${socialHtml}
    </div>
    <div class="footer-copyright">
      &copy; Copyright 2016, by <a href="#">Medo Freelance</a>
    </div>
  </footer>`;
}

export function buildServicesNavCard() {
  return `
  <div class="sidebar-card">
    <div class="sidebar-card-header">Nos Sevices</div>
    <ul class="services-nav">
      <li><a href="gard.html?id=1">Gardiennage et Surveillance <span class="chevron">&rsaquo;</span></a></li>
      <li><a href="gard.html?id=2">Recrutement et mise à disposition <span class="chevron">&rsaquo;</span></a></li>
      <li><a href="gard.html?id=3">Externalisation des taches et services <span class="chevron">&rsaquo;</span></a></li>
    </ul>
  </div>`;
}

export function buildOkserCard() {
  return `
  <div class="sidebar-card">
    <div class="sidebar-card-header">OKSER Maroc</div>
    <div class="sidebar-card-body okser-card-body">
      <div class="okser-name">OKser OKSER MAROC</div>
      <div class="info-line"><span class="ico">&#128205;</span><span>5, Imm LAHRACH, Bd Mohamed VI, AIT MELLOUL, Agadir, Maroc</span></div>
      <div class="info-line"><span class="ico">&#9742;</span><span>(+212)528-837555</span></div>
      <div class="info-line"><span class="ico">&#128241;</span><span>(+212)662-086277</span></div>
      <div class="info-line"><span class="ico">&#9993;</span><span>abdelkabir.amoura@okser-maroc.com</span></div>
    </div>
  </div>`;
}

export function buildConnexionCard() {
  return `
  <div class="sidebar-card">
    <div class="sidebar-card-header">Connexion Candidat</div>
    <div class="sidebar-card-body connexion-body">
      <p class="desc">Accedez à votre compte, actualiser votre profil ou votre CV</p>
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Mot de Passe" />
      <button class="btn-rouge">Connexion</button>
      <div class="connexion-links">
        <a href="#">Mot de passe Oublie?</a>
        <a href="candidat.html">creer un compte</a>
      </div>
      <button class="share-btn">Partager</button>
    </div>
  </div>`;
}

export function buildOffresCard() {
  return `
  <div class="sidebar-card">
    <div class="sidebar-card-header">Derniers Offres</div>
    <div class="sidebar-card-body offres-body">
      <div class="offre-item">
        <span class="date-badge">29/07/2019</span>
        <div class="offre-title">Relations clients / Chargé de relations clientèle Services aux Entreprises</div>
        <div class="offre-location">Agadir et région</div>
      </div>
    </div>
  </div>`;
}

export function buildLeftSidebar() {
  return `<div class="col-left">${buildServicesNavCard()}${buildOkserCard()}</div>`;
}

export function buildRightSidebar(options = {}) {
  const { showConnexion = true, showOffres = true, showOkser = false } = options;
  let html = '';
  if (showOffres) html += buildOffresCard();
  if (showConnexion) html += buildConnexionCard();
  if (showOkser) html += buildOkserCard();
  if (!showConnexion && !showOffres) html += buildServicesNavCard() + buildOkserCard();
  return `<div class="col-right">${html}</div>`;
}

export function injectLayout(activePage) {
  const headerSlot = document.getElementById('header-slot');
  const footerSlot = document.getElementById('footer-slot');
  if (headerSlot) headerSlot.innerHTML = buildHeader(activePage);
  if (footerSlot) footerSlot.innerHTML = buildFooter();
}

export function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}

export function initTabs() {
  const tabs = document.querySelectorAll('.gard-tab');
  const panels = document.querySelectorAll('.tab-panel');
  if (tabs.length === 0) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

export function initCarousel() {
  const arrows = document.querySelectorAll('.carousel-arrow');
  const track = document.querySelector('.carousel-track');
  if (!track || arrows.length === 0) return;
  const slideHeight = 320;
  let offset = 0;
  const totalSlides = track.children.length;
  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const dir = arrow.dataset.dir;
      if (dir === 'next') {
        offset = Math.min(offset + slideHeight, (totalSlides - 1) * slideHeight);
      } else {
        offset = Math.max(offset - slideHeight, 0);
      }
      track.style.transform = `translateY(-${offset}px)`;
    });
  });
}

export function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
