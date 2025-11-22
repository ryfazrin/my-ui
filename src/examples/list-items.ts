export function renderListExamples(container: HTMLElement) {
  const section = document.createElement('div')
  section.innerHTML = `
    <section class="section">
      <h2>List Items & Settings</h2>
      
      <div class="card" style="padding: 8px;">
        <div class="list-group">
          
          <!-- List Item 1 -->
          <div class="list-item">
            <div class="list-item__leading" style="background-color: rgba(56, 122, 255, 0.1); color: #387AFF;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div class="list-item__content">
              <div class="list-item__title">Screen Time</div>
              <div class="list-item__subtitle">Daily average: 4h 12m</div>
            </div>
            <div class="list-item__trailing">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>

          <!-- List Item 2 -->
          <div class="list-item">
            <div class="list-item__leading" style="background-color: rgba(34, 201, 166, 0.1); color: #22C9A6;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 12a11 11 0 1 1-11-11 11 11 0 0 1 11 11z"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <div class="list-item__content">
              <div class="list-item__title">Samsung Pay</div>
              <div class="list-item__subtitle">Default payment method</div>
            </div>
            <div class="list-item__trailing">
              <span style="font-size: 12px; margin-right: 8px;">On</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>

          <!-- List Item 3 (Switch) -->
          <div class="list-item">
            <div class="list-item__leading" style="background-color: rgba(255, 59, 48, 0.1); color: #FF3B30;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
            </div>
            <div class="list-item__content">
              <div class="list-item__title">Notifications</div>
            </div>
            <div class="list-item__trailing">
              <label class="switch">
                <input type="checkbox" class="switch__input" checked>
                <span class="switch__track">
                  <span class="switch__thumb"></span>
                </span>
              </label>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section dark-mode">
      <h2>List Items (Dark Mode)</h2>
      <div class="card" style="padding: 8px;">
        <div class="list-group">
           <div class="list-item">
            <div class="list-item__leading">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div class="list-item__content">
              <div class="list-item__title">Accounts and backup</div>
              <div class="list-item__subtitle">Manage accounts, Smart Switch</div>
            </div>
            <div class="list-item__trailing">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
  container.appendChild(section)
}
