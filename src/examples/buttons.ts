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
  container.appendChild(buttonSection)
}
