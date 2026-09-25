/* ============================================================
   PORTFOLIO — Maria-Inès Ayélé Gaba
   Script : bouton thème clair/sombre + bouton langue FR/EN
   ============================================================ */

/* ------------------------------------------------------------
   1. THÈME CLAIR / SOMBRE
   On pose l'attribut data-theme="light" ou "dark" sur <html>.
   Le CSS réagit déjà à cet attribut. Le choix est mémorisé
   dans localStorage pour être retrouvé à la prochaine visite.
   ------------------------------------------------------------ */
const themeButton = document.getElementById('theme-toggle');
const themeIcon = themeButton.querySelector('.icon');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
}
updateThemeIcon();

themeButton.addEventListener('click', () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = html.getAttribute('data-theme') || (isDark ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon();
});

function updateThemeIcon() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const current = html.getAttribute('data-theme') || (isDark ? 'dark' : 'light');
  themeIcon.textContent = current === 'dark' ? '☀️' : '🌙';
}


/* ------------------------------------------------------------
   2. LANGUE FRANÇAIS / ANGLAIS
   Chaque élément traduisible porte un attribut data-i18n="clé"
   dans mon_portfolio.html. Ce dictionnaire fournit la version
   française et anglaise pour chaque clé.
   ------------------------------------------------------------ */
const translations = {
  fr: {
    'nav.apropos': 'À propos de moi',
    'nav.competences': 'Mes compétences',
    'nav.projets': 'Mes projets',
    'nav.parcours': 'Mon parcours',
    'nav.contact': 'Me contacter',

    'hero.lead': 'Étudiante en informatique',
    'hero.btn1': 'Voir mes projets',
    'hero.btn2': 'Me contacter',

    'apropos.titre': 'À propos de moi',
    'apropos.p1': "Durant mon parcours scolaire, en tant que lycéenne, j'ai eu l'opportunité d'apprendre les bases de la programmation en Python. Apprendre cela, m'a fasciné et de là, j'ai entamé des recherches sur l'informatique. Très vite, ce que je pensais n'etre qu'une discipline parmis tant d'autres est devenue une passion que je nourris encore aujourd'hui.",
    'apropos.p2': "Mon objectif est clair. M'améliorer et devenir une icone en cyber sécurité.",
    'apropos.p3': 'Je reçois une formation de qualité et n\u2019hésite pas à parfaire mes acquis en pratiquant. Vous verrez ici mes projets et sachez que ce Portfolio en est un également.',
    'apropos.f1t': 'Je suis',
    'apropos.f1d': 'Passionnée par le numériques, les sciences, la cybersécurité et la technologie. Je conçois des sites web et pose les bases de leur sécurité.',
    'apropos.f2t': 'Je cherche',
    'apropos.f2d': "Des opportunitées d'apprendre et de progresser à travers un projet, des travaux de groupe, un stage ou meme des ateliers immersifs.",

    'comp.titre': 'Mes compétences',
    'comp.s1t': 'Programmation',
    'comp.s1d': 'Les bases de la programation',
    'comp.algo': 'Algorithmique',
    'comp.s2t': 'Web',
    'comp.s2d': 'Créer des pages claires et adaptées aux mobiles.',
    'comp.s3t': 'Outils',
    'comp.s3d': 'Pour travailler proprement et à plusieurs.',
    'comp.s4t': 'Conception',
    'comp.s4d': "Pour apprendre à modéliser et à concevoir des sytèmes d'informations et des bases de données",
    'comp.s5t': 'Savoir-être',
    'comp.s5d': 'Ce qui fait avancer un projet.',
    'comp.rigueur': 'Rigueur',
    'comp.curiosite': 'Curiosité',
    'comp.equipe': "Travail d'équipe",
    'comp.critique': 'Esprit critique',
    'comp.legende': 'Bordure pleine : acquis en cours. Bordure en pointillés : en cours d\u2019apprentissage.',

    'projets.titre': 'Mes projets',
    'projets.termine': 'Terminé',
    'projets.encours': 'En cours',
    'projets.p1t': 'Mon premier projet en groupe',
    'projets.p1d': "Reéalisation d'un site web de A à Z pour l'implémentation d'une plateforme numérique dans les hopitaux pour un suivi médical optimal des patients. Je suis principalement chargée de la sécurité du site.",
    'projets.fonctions': 'Fonctions',
    'projets.tests': 'Tests',
    'projets.p2t': 'Mon premier site web',
    'projets.p2d': "Un site web entièrement pensé pour la prise de rendez-vous dans un salon de coiffure avec apperçu sur les prestations déjà réalisées.",
    'projets.responsive': 'Responsive',
    'projets.p3t': 'Application de gestion de stock',
    'projets.p3d': "Une application de gestion de stock pratique pour les entrepots et les boutiques grossistes pensées pour permettre au fournisseur de mieux gérer ses produits, leur nombre et leur prix.",

    'parcours.titre': 'Mon parcours',
    'parcours.e1t': "Deuxième année d'informatique",
    'parcours.e1d': 'Ascenscia Keyce · en cours',
    'parcours.e2t': "Première année d'informatique",
    'parcours.e3t': 'Baccalauréat',

    'contact.titre': 'Mes contacts',
    'contact.texte': 'Un stage, un projet ou une question ? Écrivez-moi, je vous répondrai volontiers.',
    'contact.email': 'E-mail',

    'footer.texte': '© 2026 Maria-Inès Ayélé GABA · Étudiante en informatique',
  },

  en: {
    'nav.apropos': 'About me',
    'nav.competences': 'My skills',
    'nav.projets': 'My projects',
    'nav.parcours': 'My background',
    'nav.contact': 'Contact me',

    'hero.lead': 'Computer Science Student',
    'hero.btn1': 'See my projects',
    'hero.btn2': 'Contact me',

    'apropos.titre': 'About me',
    'apropos.p1': "During high school, I had the chance to learn the basics of programming in Python. Learning it fascinated me, and from there I started researching computer science further. What I first saw as just one subject among many quickly became a passion I still nurture today.",
    'apropos.p2': 'My goal is clear: to keep improving and become a leading figure in cybersecurity.',
    'apropos.p3': "I'm getting a quality education and I make sure to reinforce what I learn through practice. You'll find my projects here, and this portfolio itself is one of them.",
    'apropos.f1t': "I'm",
    'apropos.f1d': 'Passionate about digital technology, science, cybersecurity and tech in general. I design websites and lay the groundwork for their security.',
    'apropos.f2t': 'Looking for',
    'apropos.f2d': 'Opportunities to learn and grow through a project, group work, an internship, or even hands-on workshops.',

    'comp.titre': 'My skills',
    'comp.s1t': 'Programming',
    'comp.s1d': 'The fundamentals of programming.',
    'comp.algo': 'Algorithms',
    'comp.s2t': 'Web',
    'comp.s2d': 'Building clear, mobile-friendly pages.',
    'comp.s3t': 'Tools',
    'comp.s3d': 'For working cleanly, alone or with others.',
    'comp.s4t': 'Design',
    'comp.s4d': 'Learning to model and design information systems and databases.',
    'comp.s5t': 'Soft skills',
    'comp.s5d': 'What moves a project forward.',
    'comp.rigueur': 'Rigor',
    'comp.curiosite': 'Curiosity',
    'comp.equipe': 'Teamwork',
    'comp.critique': 'Critical thinking',
    'comp.legende': 'Solid border: already acquired. Dashed border: currently learning.',

    'projets.titre': 'My projects',
    'projets.termine': 'Completed',
    'projets.encours': 'In progress',
    'projets.p1t': 'My first group project',
    'projets.p1d': 'Building a website from scratch to roll out a digital platform for hospitals, for better patient follow-up. I mainly handle the site\u2019s security.',
    'projets.fonctions': 'Functions',
    'projets.tests': 'Tests',
    'projets.p2t': 'My first website',
    'projets.p2d': 'A website designed entirely for booking appointments at a hair salon, with a preview of past work.',
    'projets.responsive': 'Responsive',
    'projets.p3t': 'Inventory management app',
    'projets.p3d': 'A practical inventory management app for warehouses and wholesale shops, built to help suppliers better manage their products, quantities and prices.',

    'parcours.titre': 'My background',
    'parcours.e1t': 'Second-year computer science',
    'parcours.e1d': 'Ascenscia Keyce · ongoing',
    'parcours.e2t': 'First-year computer science',
    'parcours.e3t': 'High school diploma',

    'contact.titre': 'My contacts',
    'contact.texte': "An internship, a project, or just a question? Feel free to reach out, I'll gladly reply.",
    'contact.email': 'Email',

    'footer.texte': '© 2026 Maria-Inès Ayélé GABA · Computer Science Student',
  },
};

const langButton = document.getElementById('lang-toggle');

let currentLang = localStorage.getItem('lang') || 'fr';
applyLanguage(currentLang);

langButton.addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('lang', currentLang);
  applyLanguage(currentLang);
});

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text) {
      el.textContent = text;
    }
  });

  document.documentElement.setAttribute('lang', lang);
  langButton.textContent = lang === 'fr' ? 'FR / EN' : 'EN / FR';
}