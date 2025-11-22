import { createCodeCollapse } from '../components/code-collapse'

export function renderButtonExamples(container: HTMLElement) {
  const buttonSection = document.createElement('div')
  buttonSection.innerHTML = `
    <!-- Buttons Light Mode Section -->
    <section class="section">
      <h2>Light Mode Buttons</h2>
      <div class="button-container">
        <button type="button" class="button button--dark">
          <span class="button-icon"><i class="ph-bold ph-star"></i></span>
          Dark Button
        </button>

        <button type="button" class="button button--light">
          <span class="button-icon"><i class="ph-bold ph-star"></i></span>
          Light Button
        </button>

        <button type="button" class="button button--primary">
          <span class="button-icon"><i class="ph-bold ph-star"></i></span>
          Primary Button
        </button>

        <button type="button" class="button button--gradient">
          <span class="button-icon"><i class="ph-bold ph-star"></i></span>
          Gradient Button
        </button>
      </div>
    </section>

    <!-- Buttons Dark Mode Section -->
    <section class="section dark-mode">
      <h2>Dark Mode Buttons</h2>
      <div class="button-container">
        <button type="button" class="button button--dark">
          <span class="button-icon"><i class="ph-bold ph-star"></i></span>
          Dark Button
        </button>

        <button type="button" class="button button--light">
          <span class="button-icon"><i class="ph-bold ph-star"></i></span>
          Light Button
        </button>

        <button type="button" class="button button--primary">
          <span class="button-icon"><i class="ph-bold ph-star"></i></span>
          Primary Button
        </button>

        <button type="button" class="button button--gradient">
          <span class="button-icon"><i class="ph-bold ph-star"></i></span>
          Gradient Button
        </button>
      </div>
    </section>
  `

  // Add code collapse for light mode buttons
  const lightSection = buttonSection.querySelector('.section:not(.dark-mode)')
  if (lightSection) {
    const codeExample = `<button type="button" class="button button--primary">
  <span class="button-icon"><i class="ph-bold ph-star"></i></span>
  Primary Button
</button>

<button type="button" class="button button--gradient">
  <span class="button-icon"><i class="ph-bold ph-star"></i></span>
  Gradient Button
</button>`

    const codeBlock = createCodeCollapse('View Code', codeExample)
    lightSection.appendChild(codeBlock)
  }

  // Add code collapse for dark mode buttons
  const darkSection = buttonSection.querySelector('.section.dark-mode')
  if (darkSection) {
    const codeExample = `<div class="dark-mode">
  <button type="button" class="button button--dark">
    <span class="button-icon"><i class="ph-bold ph-star"></i></span>
    Dark Button
  </button>
</div>`

    const codeBlock = createCodeCollapse('View Code', codeExample)
    darkSection.appendChild(codeBlock)
  }

  container.appendChild(buttonSection)
}
