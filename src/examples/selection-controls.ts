import { createCodeCollapse } from '../components/code-collapse'

export function renderSelectionControlExamples(container: HTMLElement) {
  const section = document.createElement('div')
  section.innerHTML = `
    <section class="section">
      <h2>Selection Controls</h2>
      
      <div class="card">
        <div class="card__header">
          <h3 class="card__title">Radio & Checkbox</h3>
        </div>
        <div class="card__body">
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <!-- Checkboxes -->
            <div>
              <h4 style="margin-bottom: 16px; font-size: 14px; color: #999;">Checkboxes</h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <label class="control-label">
                  <div class="checkbox">
                    <input type="checkbox" class="checkbox__input" checked>
                    <div class="checkbox"></div>
                  </div>
                  Selected Option
                </label>
                
                <label class="control-label">
                  <div class="checkbox">
                    <input type="checkbox" class="checkbox__input">
                    <div class="checkbox"></div>
                  </div>
                  Unselected Option
                </label>

                <label class="control-label control-label--disabled">
                  <div class="checkbox">
                    <input type="checkbox" class="checkbox__input" disabled checked>
                    <div class="checkbox"></div>
                  </div>
                  Disabled Selected
                </label>
              </div>
            </div>

            <!-- Radios -->
            <div>
              <h4 style="margin-bottom: 16px; font-size: 14px; color: #999;">Radio Buttons</h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <label class="control-label">
                  <div class="radio">
                    <input type="radio" name="radio-demo" class="radio__input" checked>
                    <div class="radio"></div>
                  </div>
                  Option 1
                </label>
                
                <label class="control-label">
                  <div class="radio">
                    <input type="radio" name="radio-demo" class="radio__input">
                    <div class="radio"></div>
                  </div>
                  Option 2
                </label>

                <label class="control-label control-label--disabled">
                  <div class="radio">
                    <input type="radio" name="radio-demo-disabled" class="radio__input" disabled>
                    <div class="radio"></div>
                  </div>
                  Disabled Option
                </label>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section dark-mode">
      <h2>Selection Controls (Dark Mode)</h2>
      <div class="card">
        <div class="card__header">
          <h3 class="card__title">Controls</h3>
        </div>
        <div class="card__body">
           <div style="display: flex; flex-direction: column; gap: 12px;">
              <label class="control-label">
                <div class="checkbox">
                  <input type="checkbox" class="checkbox__input" checked>
                  <div class="checkbox"></div>
                </div>
                Sync Data
              </label>
              
              <label class="control-label">
                <div class="radio">
                  <input type="radio" name="radio-demo-dark" class="radio__input" checked>
                  <div class="radio"></div>
                </div>
                Always Allow
              </label>
           </div>
        </div>
      </div>
    </section>
  `

  // Add code collapse
  const lightSection = section.querySelector('.section:not(.dark-mode)')
  if (lightSection) {
    const codeExample = `<label class="control-label">
  <div class="checkbox">
    <input type="checkbox" class="checkbox__input" checked>
    <div class="checkbox"></div>
  </div>
  Selected Option
</label>

<label class="control-label">
  <div class="radio">
    <input type="radio" name="radio-demo" class="radio__input" checked>
    <div class="radio"></div>
  </div>
  Selected Option
</label>`
    lightSection.appendChild(createCodeCollapse('View Code', codeExample))
  }

  container.appendChild(section)
}
