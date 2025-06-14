import 'normalize.css'
import './main.scss'
import { setupCounter } from '../lib/main'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>OneUI 7 Button Examples</h1>
    
    <!-- Light Mode Section -->
    <div class="section">
      <h2>Light Mode</h2>
      <div class="button-container">
        <!-- Dark Button -->
        <button type="button" class="button button--dark">
          <span class="button-icon">⋮</span>
          Dark Button
        </button>

        <!-- Gradient Button -->
        <button type="button" class="button button--light">
          <span class="button-icon">⋮</span>
          Light Button
        </button>

        <!-- Primary Button -->
        <button type="button" class="button button--primary">
          <span class="button-icon">⋮</span>
          Primary Button
        </button>

        <!-- Light Button -->
        <button type="button" class="button button--gradient">
          <span class="button-icon">⋮</span>
          Gradient Button
        </button>
      </div>
    </div>

    <!-- Dark Mode Section -->
    <div class="section dark-mode">
      <h2>Dark Mode</h2>
      <div class="button-container">
        <!-- Dark Button -->
        <button type="button" class="button button--dark">
          <span class="button-icon">⋮</span>
          Dark Button
        </button>

        <!-- Primary Button in Dark Mode -->
        <button type="button" class="button button--primary">
          <span class="button-icon">⋮</span>
          Primary Button
        </button>

        <!-- Light Button in Dark Mode -->
        <button type="button" class="button button--light">
          <span class="button-icon">⋮</span>
          Light Button
        </button>

        <!-- Light Button -->
        <button type="button" class="button button--gradient">
          <span class="button-icon">⋮</span>
          Gradient Button
        </button>
      </div>
    </div>
  </div>
`

// Add some basic styling
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
    gap: 1rem;
    margin: 1rem 0;
  }
`
document.head.appendChild(style)
