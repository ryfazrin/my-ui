export function renderSwitchExamples(container: HTMLElement) {
const section = document.createElement('div')
section.className = 'section'
section.innerHTML = `
    <section class="section">
      <h2>Light Mode Switches</h2>
      <div class="switch-container">
        <!-- Default Switch -->
        <label class="switch">
          <span class="switch__label">Default Switch</span>
          <input type="checkbox" class="switch__input">
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>

        <!-- Checked Switch -->
        <label class="switch">
          <span class="switch__label">Checked Switch</span>
          <input type="checkbox" class="switch__input" checked>
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>

        <!-- Disabled Switch -->
        <label class="switch">
          <span class="switch__label">Disabled Switch</span>
          <input type="checkbox" class="switch__input" disabled>
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>

        <!-- Disabled Checked Switch -->
        <label class="switch">
          <span class="switch__label">Disabled Checked Switch</span>
          <input type="checkbox" class="switch__input" disabled checked>
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>

        <!-- Switch with Description -->
        <label class="switch">
          <div>
            <span class="switch__label">Switch with Description</span>
            <div class="switch__description">Additional information about this switch option</div>
          </div>
          <input type="checkbox" class="switch__input">
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>
      </div>
    </section>

    <section class="section dark-mode">
      <h2>Dark Mode Switches</h2>
      <div class="switch-container">
        <!-- Default Switch -->
        <label class="switch">
          <span class="switch__label">Default Switch</span>
          <input type="checkbox" class="switch__input">
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>

        <!-- Checked Switch -->
        <label class="switch">
          <span class="switch__label">Checked Switch</span>
          <input type="checkbox" class="switch__input" checked>
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>

        <!-- Disabled Switch -->
        <label class="switch">
          <span class="switch__label">Disabled Switch</span>
          <input type="checkbox" class="switch__input" disabled>
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>

        <!-- Disabled Checked Switch -->
        <label class="switch">
          <span class="switch__label">Disabled Checked Switch</span>
          <input type="checkbox" class="switch__input" disabled checked>
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>

        <!-- Switch with Description -->
        <label class="switch">
          <div>
            <span class="switch__label">Switch with Description</span>
            <div class="switch__description">Additional information about this switch option</div>
          </div>
          <input type="checkbox" class="switch__input">
          <span class="switch__track">
            <span class="switch__thumb"></span>
          </span>
        </label>
      </div>
    </section>
  `
  container.appendChild(section)
}