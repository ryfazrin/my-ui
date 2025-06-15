import 'normalize.css'
import './main.scss'
import { renderComponentExamples } from './examples/components'

// Render component examples
const app = document.querySelector<HTMLDivElement>('#app')
if (app) {
  renderComponentExamples(app)
}
