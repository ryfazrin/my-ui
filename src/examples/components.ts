import { renderButtonExamples } from './buttons'
import { renderInputExamples } from './inputs'
import { renderSwitchExamples } from './switches'
import { renderCardExamples } from './cards'
import { renderListExamples } from './list-items'
import { renderNavigationExamples } from './navigation'
import { renderSliderExamples } from './sliders'

export function renderComponentExamples(container: HTMLElement) {
  // Create main container
  const mainContainer = document.createElement('div')
  mainContainer.className = 'container'
  mainContainer.innerHTML = '<h1>OneUI 7 Components</h1>'

  // Render
  renderSwitchExamples(mainContainer)
  renderInputExamples(mainContainer)
  renderButtonExamples(mainContainer)
  renderCardExamples(mainContainer)
  renderListExamples(mainContainer)
  renderNavigationExamples(mainContainer)
  renderSliderExamples(mainContainer)

  // Add to main container
  container.appendChild(mainContainer)
}
