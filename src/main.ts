import 'normalize.css'
import './main.scss'
import { renderComponentExamples } from './examples/components'

// Import Phosphor Icons from CDN
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css'
document.head.appendChild(link)

// Render component examples
const app = document.querySelector<HTMLDivElement>('#app')
if (app) {
  renderComponentExamples(app)
}
