import { injectLayout, buildLeftSidebar, buildRightSidebar, initTabs, initCarousel, getQueryParam } from '../layout.js'

injectLayout('')

const id = getQueryParam('id') || '1'

// ---- Banner config ----
const banners = {
  '1': { title: 'Gardiennage et Surveillance', lines: 1 },
  '2': { title: 'Recrutement et mise à disposition<br>du personnel', lines: 2 },
  '3': { title: 'Externalisation des taches et services', lines: 1 },
}

// ---- Carousel images ----
const carouselImages = {
  '1': ['/images/gard1-a.svg', '/images/gard1-b.svg'],
  '2': ['/images/gard2-a.svg', '/images/gard2-b.svg'],
  '3': ['/images/gard3-a.svg', '/images/gard3-b.svg', '/images/gard3-c.svg'],
}

// ---- Tabs config ----
const tabsConfig = {
  '1': [
    { id: 'surveillance', label: 'Gardiennage et Surveillance' },
    { id: 'accueil', label: 'Accueil / Animation' },
  ],
  '2': [
    { id: 'gestion', label: 'Gestion de contrat' },
    { id: 'recrutement', label: 'Recrutement' },
    { id: 'delegation', label: 'Délégation du personnel temporaire' },
  ],
  '3': [
    { id: 'nettoyage', label: 'Nettoyage Industriel' },
    { id: 'jardinage', label: 'Jardinage' },
    { id: 'deratisation', label: 'Dératisation et désinsectisation' },
  ],
}

// ---- Content for each tab ----
const content = {
  '1': {
    surveillance: `
      <h3>SURVEILLANCE ET CONTROLE D'ACCES</h3>
      <p>Le gardiennage est une dissuasion efficace pour sécuriser vos biens mobiliers et immobiliers. Il protège les intérêts des entreprises et des particuliers en analysant les formes de risques et de malveillance. Le gardiennage est la clé de votre sécurité !</p>
      <ul>
        <li>Surveiller les lieux. S'assurer du respect des procédures de sécurité.</li>
        <li>Examiner les portes et les fenêtres pour s'assurer qu'elles sont bien verrouillées.</li>
        <li>Maintenir l'ordre et prévenir toute agitation indue, infraction ou vol de biens.</li>
        <li>Décourager le comportement inadéquat. Faire appliquer les règlements de sécurité en vigueur dans l'établissement.</li>
        <li>Expulser les intrus et les flâneurs indésirables. Rédiger des rapports.</li>
        <li>Contrôler l'accès à un site manuellement ou à distance par système électronique ainsi que l'ouverture et la fermeture des barrières.</li>
        <li>Contrôler l'accès et appliquer les règles de l'établissement relatives à la circulation intérieure et extérieure du personnel, des visiteurs, des usagers et des fournisseurs, ainsi que toutes les règles en vigueur.</li>
        <li>Contrôler la circulation des véhicules et des piétons.</li>
      </ul>
      <h3>SERVICE A LA CLIENTELE</h3>
      <ul>
        <li>Inscrire les visiteurs et délivrer des laissez-passer.</li>
        <li>Diriger et renseigner les visiteurs, les clients, les fournisseurs vers les endroits appropriés.</li>
        <li>Recueillir et enregistrer les objets trouvés.</li>
      </ul>
      <h3>PREVENTION SECOURISME</h3>
      <p>Faire des rondes périodiques, à pied ou dans un véhicule, pour inspecter les zones désignées des bâtiments ou des sites et relever toutes anomalies. Rechercher et signaler aux autorités compétentes les dangers d'incendie, les anomalies dans le fonctionnement des systèmes ou l'interruption des services d'utilité publique (électricité, chauffage, eau).</p>
      <ul>
        <li>Surveiller et assurer le bon fonctionnement des équipements de sécurité et d'alarme.</li>
        <li>Prêter secours en cas d'accident ou de malaise et alerter les secours appropriés.</li>
        <li>Appliquer les premiers secours en attendant l'arrivée des équipes d'urgence.</li>
        <li>Veiller au respect des normes de sécurité incendie dans les bâtiments.</li>
        <li>Évacuer les locaux en cas de sinistre selon les procédures établies.</li>
      </ul>
    `,
    accueil: `
      <div class="sub-section">
        <h4>Hôtes et Hôtesses</h4>
        <p>Nos hôtes et hôtesses sont l'image de marque de votre société. C'est pour cela que nous privilégions la ponctualité, le sourire, Nous recrutons des hôtes et hôtesses d'accueil pour tous types d'événementiels. Nos équipes sont polyvalentes ou spécialisées selon le profil recherché. La sous-traitance du service accueil de votre entreprise est le choix de la sérénité !</p>
      </div>
      <div class="sub-section">
        <h4>Accueil en Entreprise</h4>
        <p>La majorité des contacts avec une entreprise s'établit par le téléphone. De la rapidité des réponses, de l'analyse des questions et de la courtoisie de l'accueil, dépend l'image de l'entreprise. La qualité du premier contact peut dépendre la perte ou le gain d'un marché. Nous vous offrons une gamme complète de services à la mesure de vos attentes :</p>
        <ul>
          <li>Accueil des visiteurs et du personnel Renseignements, contrôle et orientation des visiteurs</li>
          <li>Réception et aiguillage des appels téléphoniques entrants Pesée et tarification du courrier</li>
          <li>Réception et redistribution des fax Gestion des courses Réservation de voitures de location, des taxis, hôtels</li>
          <li>Bureautique d'accueil (Windows, Word, Excel, Internet) Gestion des salles de réunion</li>
        </ul>
        <p>OKSER vous garanti un contact excellent de façon suivie et dès la première rencontre.</p>
      </div>
      <div class="sub-section">
        <h4>Animation et Promotion des Ventes</h4>
        <p>Face à une concurrence de plus en plus vive et pour optimiser leur vente, les fabricants et producteurs sont dans la nécessité d'aller à la rencontre des consommateurs au moment de l'achat.</p>
      </div>
      <div class="sub-section">
        <h4>Les animations types</h4>
        <p>Nos équipes animent vos podiums, manifestations, jeux concours et font la promotion de vos produits. Leurs compétences…</p>
        <ul>
          <li>Campagnes promotionnelles Lancements de produits Démonstrations de produits, dégustations</li>
          <li>Distributions d'échantillons, bons de réduction ou leaflets</li>
        </ul>
      </div>
      <div class="sub-section">
        <h4>Méthodologie</h4>
        <p>Notre méthodologie repose sur une analyse approfondie de vos besoins, une sélection rigoureuse du personnel et un suivi constant de la qualité de service.</p>
      </div>
    `,
  },
  '2': {
    gestion: `
      <h3>GESTION DE CONTRAT</h3>
      <p>Nous déléguer l'ensemble des démarches administratives et juridiques liée à la gestion de votre personnel non permanent.</p>
      <ul>
        <li>Gestion administrative complète du personnel détaché</li>
        <li>Établissement et gestion des contrats de mission</li>
        <li>Déclaration et paiement des charges sociales</li>
        <li>Gestion de la paie et des bulletins de salaire</li>
        <li>Respect de la législation du travail et des conventions collectives</li>
        <li>Suivi médical et formation du personnel</li>
      </ul>
    `,
    recrutement: `
      <h3>RECRUTEMENT</h3>
      <p>Notre équipe de professionnels vous accompagne dans toutes les étapes de votre processus de recrutement, de la définition du poste à l'intégration du candidat.</p>
      <ul>
        <li>Analyse et définition de vos besoins en compétences</li>
        <li>Sourcing et diffusion des offres d'emploi</li>
        <li>Préqualification et entretiens des candidats</li>
        <li>Sélection et présentation des profils adaptés</li>
        <li>Vérification des références et des compétences</li>
        <li>Accompagnement à l'intégration du nouveau collaborateur</li>
      </ul>
    `,
    delegation: `
      <h3>DÉLÉGATION DU PERSONNEL TEMPORAIRE</h3>
      <p>OKSER est à votre écoute pour répondre avec précision, rapidité et fiabilité à vos demandes, pour obtenir les compétences les plus adaptées à vos besoins, dans le délai le plus court, avec la garantie du suivi de la mission et du respect de la législation.</p>
      <ul>
        <li>Mise à disposition de personnel qualifié pour vos missions temporaires</li>
        <li>Flexibilité des effectifs selon vos pics d'activité</li>
        <li>Remplacement rapide en cas d'absence ou de congé</li>
        <li>Suivi régulier et évaluation du personnel délégué</li>
        <li>Respect strict des délais et des engagements</li>
      </ul>
    `,
  },
  '3': {
    nettoyage: `
      <h3>LA PROPRETE : UN METIER, UNE EXPERTISE</h3>
      <p>Travailler dans un environnement propre, c'est vital pour votre métier. Hygiène et sécurité en entreprise doivent être irréprochables sur votre lieu d'activité. Que ce soit pour l'accueil de votre clientèle, votre production industrielle ou encore pour le travail de vos collaborateurs, nous savons que notre prestation de nettoyage est déterminante. C'est pour ça que nous, nous sommes vos partenaires privilégiés.</p>
      <ul>
        <li>Nettoyage de bureaux administration et immeuble</li>
        <li>Nettoyage de locaux, villas, appartements</li>
        <li>Nettoyage de fin de chantier</li>
        <li>Hygiène 3D</li>
        <li>Désinfection</li>
        <li>Nettoyage des locaux et assainissement</li>
      </ul>
      <p>En prenant la responsabilité de votre besoin en nettoyage industriel, nous nous engageons auprès de vous pour vous garantir un haut niveau d'exécution, une garantie de votre image de marque ainsi que de votre confort de travail.</p>
      <p>L'état d'esprit d'OKSER, c'est d'être à vos côtés et vous apporter notre expertise reconnue. Nous vous proposons une offre complète et un accompagnement dédié pour vous livrer une prestation de nettoyage de haute qualité.</p>
    `,
    jardinage: `
      <h3>Traitement des Espaces Vert</h3>
      <p>L'entretien du jardin est devenu une corvée, donc faire appel à une société professionnelle est nécessaire pour vous dégager de la responsabilité et mettre à votre disposition des jardiniers pour se charger d'une grande liste de taches qu'ils peuvent effectuer :</p>
      <ul>
        <li>Tonte de pelouse Taille des haies, arbres, rosiers… Débroussaillage Ramassage de feuilles</li>
        <li>Nettoyage des espaces extérieurs Béchage (arbustes, haies…) Désherbage Plantation et refleurissement</li>
        <li>Arrosage et entretien des végétaux</li>
      </ul>
    `,
    deratisation: `
      <h3>DÉRATISATION ET DÉSINSECTISATION</h3>
      <p>Nous intervenons rapidement sur les lieux pour effectuer un examen attentif destiné à localiser les abris et les sources de nourriture de manière à poser des appâts de plusieurs types (poison anticoagulant, pièges ou pesticides pour les insectes) et éviter toute réinfestation.</p>
      <ul>
        <li>Inspection complète des lieux et identification des nuisibles</li>
        <li>Pose d'appâts et de pièges adaptés à chaque type de nuisible</li>
        <li>Traitement par pesticides homologués pour les insectes</li>
        <li>Désinsectisation des locaux et des espaces infestés</li>
        <li>Mise en place de mesures préventives contre la réinfestation</li>
        <li>Suivi régulier et contrôle de l'efficacité des traitements</li>
      </ul>
      <p>Notre équipe de professionnels certifiés utilise des produits homologués respectant les normes de sécurité et d'hygiène en vigueur, tout en assurant la protection de l'environnement et la sécurité des occupants des lieux.</p>
    `,
  },
}

// ---- Render banner ----
const banner = banners[id] || banners['1']
const bannerEl = document.getElementById('page-banner')
bannerEl.className = 'page-banner'
bannerEl.innerHTML = `<div><h1>${banner.title}</h1></div>`

// ---- Render carousel ----
const images = carouselImages[id] || carouselImages['1']
const carouselEl = document.getElementById('gard-carousel')
carouselEl.className = 'gard-carousel'
carouselEl.innerHTML = `
  <button class="carousel-arrow" data-dir="prev">&#9650;</button>
  <div class="carousel-viewport">
    <div class="carousel-track">
      ${images.map(src => `<img src="${src}" alt="Image service" />`).join('')}
    </div>
  </div>
  <button class="carousel-arrow" data-dir="next">&#9660;</button>
`

// ---- Render tabs ----
const tabs = tabsConfig[id] || tabsConfig['1']
const tabsEl = document.getElementById('gard-tabs')
tabsEl.className = 'gard-tabs'
tabsEl.innerHTML = tabs.map((t, i) =>
  `<div class="gard-tab ${i === 0 ? 'active' : ''}" data-tab="${t.id}">${t.label}</div>`
).join('')

// ---- Render content panels ----
const contentEl = document.getElementById('gard-content')
contentEl.className = 'gard-content'
const pageContent = content[id] || content['1']
contentEl.innerHTML = tabs.map((t, i) =>
  `<div class="tab-panel ${i === 0 ? 'active' : ''}" id="tab-${t.id}">${pageContent[t.id] || ''}</div>`
).join('')

// ---- Render sidebars ----
document.getElementById('left-sidebar').innerHTML = buildLeftSidebar()
document.getElementById('right-sidebar').innerHTML = buildRightSidebar()

// ---- Init interactions ----
initTabs()
initCarousel()
