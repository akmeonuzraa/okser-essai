import { injectLayout, buildConnexionCard, buildServicesNavCard, buildOffresCard } from '../layout.js'

injectLayout('Espace Candidat')
document.getElementById('right-sidebar').innerHTML =
  buildConnexionCard() + buildServicesNavCard() + buildOffresCard()
