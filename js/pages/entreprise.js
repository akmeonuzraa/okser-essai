import { injectLayout, buildServicesNavCard, buildOkserCard } from '../layout.js'

injectLayout('Espace Entreprise')
document.getElementById('right-sidebar').innerHTML =
  buildServicesNavCard() + buildOkserCard()
