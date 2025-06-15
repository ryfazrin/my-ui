import { renderButtonExamples } from './buttons'
import { renderInputExamples } from './inputs'

export function renderComponentExamples(container: HTMLElement) {
  // Create main container
  const mainContainer = document.createElement('div')
  mainContainer.className = 'container'
  mainContainer.innerHTML = '<h1>OneUI 7 Components</h1>'
  
  // Render inputs and buttons
  renderInputExamples(mainContainer)
  renderButtonExamples(mainContainer)
  
  // Add to main container
  container.appendChild(mainContainer)

  // Add component styles
  const style = document.createElement('style')
  style.textContent = `
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 2rem;
    }

    .section {
      padding: 2rem;
      margin: 1rem 0;
      border-radius: 8px;
    }

    .button-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin: 1rem 0;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem 0;
      max-width: 600px;
    }
  `
  document.head.appendChild(style)
}
