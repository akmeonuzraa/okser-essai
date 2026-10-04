import { injectLayout, buildLeftSidebar, buildRightSidebar } from '../layout.js'

injectLayout('Présentation')
document.getElementById('left-sidebar').innerHTML = buildLeftSidebar()
document.getElementById('right-sidebar').innerHTML = buildRightSidebar()
