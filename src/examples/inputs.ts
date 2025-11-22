import { createCodeCollapse } from '../components/code-collapse'

export function renderInputExamples(container: HTMLElement) {
  const inputSection = document.createElement('div')
  inputSection.innerHTML = `
    <!-- Inputs Dark Mode Section -->
    <section class="section dark-mode">
      <h2>Dark Mode Inputs</h2>
      <div class="input-container">
        <!-- Dark Input -->
        <div class="form-group">
          <label class="input-label">Search</label>
          <div class="input-field input-field--dark">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <i class="ph-bold ph-magnifying-glass"></i>
            </span>
          </div>
        </div>

        <!-- Light Input -->
        <div class="form-group">
          <label class="input-label is-required">Search with required</label>
          <div class="input-field input-field--light">
            <input type="text" class="input-field__input" placeholder="What are you looking for?" required>
            <span class="input-field__icon">
              <i class="ph-bold ph-magnifying-glass"></i>
            </span>
          </div>
        </div>

        <!-- Gradient Input -->
        <div class="form-group">
          <label class="input-label has-error">Search with error</label>
          <div class="input-field input-field--gradient">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <i class="ph-bold ph-magnifying-glass"></i>
            </span>
          </div>
        </div>

        <!-- Gradient Light Input -->
        <div class="form-group">
          <label class="input-label">Search with gradient</label>
          <div class="input-field input-field--gradient-light">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <i class="ph-bold ph-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Input Fields Section -->
    <section class="section">
      <h2>Light Mode Inputs</h2>
      <div class="input-container">
        <!-- Dark Input -->
        <div class="form-group">
          <label class="input-label">Search</label>
          <div class="input-field input-field--dark">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <i class="ph-bold ph-magnifying-glass"></i>
            </span>
          </div>
        </div>

        <!-- Light Input -->
        <div class="form-group">
          <label class="input-label is-required">Search with required</label>
          <div class="input-field input-field--light">
            <input type="text" class="input-field__input" placeholder="What are you looking for?" required>
            <span class="input-field__icon">
              <i class="ph-bold ph-magnifying-glass"></i>
            </span>
          </div>
        </div>

        <!-- Gradient Input -->
        <div class="form-group">
          <label class="input-label has-error">Search with error</label>
          <div class="input-field input-field--gradient">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <i class="ph-bold ph-magnifying-glass"></i>
            </span>
          </div>
        </div>

        <!-- Gradient Light Input -->
        <div class="form-group">
          <label class="input-label">Search with gradient</label>
          <div class="input-field input-field--gradient-light">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <i class="ph-bold ph-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  `

  // Add code collapse
  const lightSection = inputSection.querySelector('.section:not(.dark-mode)')
  if (lightSection) {
    const codeExample = `<div class="form-group">
  <label class="input-label">Search</label>
  <div class="input-field input-field--dark">
    <input type="text" class="input-field__input" placeholder="What are you looking for?">
    <span class="input-field__icon">
      <i class="ph-bold ph-magnifying-glass"></i>
    </span>
  </div>
</div>`
    lightSection.appendChild(createCodeCollapse('View Code', codeExample))
  }

  container.appendChild(inputSection)
}