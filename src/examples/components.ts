import { renderButtonExamples } from './buttons'
import { renderInputExamples } from './inputs'
import { renderSwitchExamples } from './switches'

export function renderComponentExamples(container: HTMLElement) {
  // Create main container
  const mainContainer = document.createElement('div')
  mainContainer.className = 'container'
  mainContainer.innerHTML = '<h1>OneUI 7 Components</h1>'
  
  // Render
  renderSwitchExamples(mainContainer)
  renderInputExamples(mainContainer)
  renderButtonExamples(mainContainer)
  
  // Add to main container
  container.appendChild(mainContainer)
}
