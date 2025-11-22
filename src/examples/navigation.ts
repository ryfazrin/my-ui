export function renderNavigationExamples(container: HTMLElement) {
  const section = document.createElement('div')
  section.innerHTML = `
    <section class="section">
      <h2>Navigation & Headers</h2>
      
      <!-- Expanded Header Demo -->
      <div class="card" style="padding: 0; overflow: hidden; height: 300px; position: relative; background-color: #F1F1F3;">
        <div class="header header--expanded">
          <div class="header__top-bar">
            <div class="header__action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </div>
            <div class="header__action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="5" r="1"/>
                <circle cx="12" cy="19" r="1"/>
              </svg>
            </div>
          </div>
          <h1 class="header__title">Settings</h1>
          <div class="header__subtitle">Manage your device options</div>
        </div>
        
        <div style="padding: 16px;">
          <p style="color: #999;">Scroll content goes here...</p>
        </div>

        <!-- Bottom Nav Demo -->
        <div class="bottom-nav" style="position: absolute; bottom: 0;">
          <div class="bottom-nav__item bottom-nav__item--active">
            <div class="bottom-nav__icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4z"/>
              </svg>
            </div>
            <span class="bottom-nav__label">Home</span>
          </div>
          <div class="bottom-nav__item">
            <div class="bottom-nav__icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"/>
              </svg>
            </div>
            <span class="bottom-nav__label">Search</span>
          </div>
          <div class="bottom-nav__item">
            <div class="bottom-nav__icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
              </svg>
            </div>
            <span class="bottom-nav__label">Profile</span>
          </div>
        </div>
      </div>

      <div style="margin-top: 24px;"></div>

      <!-- Collapsed Header Demo (Dark Mode) -->
      <div class="card dark-mode" style="padding: 0; overflow: hidden; height: 150px; position: relative; background-color: #000;">
        <div class="header header--collapsed">
           <div class="header__action">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
          
          <div class="header__content-wrapper">
            <h1 class="header__title">Title</h1>
            <div class="header__subtitle">Subtitle</div>
          </div>

          <div style="display: flex; gap: 8px;">
            <div class="header__action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div class="header__action">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="5" r="1"/>
                <circle cx="12" cy="19" r="1"/>
              </svg>
            </div>
          </div>
        </div>
        <div style="padding: 16px;">
          <p style="color: #666;">Collapsed state for scrolled content.</p>
        </div>
      </div>

    </section>
  `
  container.appendChild(section)
}
