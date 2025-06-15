export function renderInputExamples(container: HTMLElement) {
  const inputSection = document.createElement('div')
  inputSection.innerHTML = `
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5Z"
                  fill="currentColor" />
                <path
                  d="M12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5Z"
                  fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Light Input -->
        <div class="form-group">
          <label class="input-label is-required">Search with required</label>
          <div class="input-field input-field--light">
            <input type="text" class="input-field__input" placeholder="What are you looking for?" required>
            <span class="input-field__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5Z"
                  fill="currentColor" />
                <path
                  d="M12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5Z"
                  fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Gradient Input -->
        <div class="form-group">
          <label class="input-label has-error">Search with error</label>
          <div class="input-field input-field--gradient">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5Z"
                  fill="currentColor" />
                <path
                  d="M12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5Z"
                  fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Gradient Light Input -->
        <div class="form-group">
          <label class="input-label">Search with gradient</label>
          <div class="input-field input-field--gradient-light">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5Z"
                  fill="currentColor" />
                <path
                  d="M12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5Z"
                  fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>

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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5Z"
                  fill="currentColor" />
                <path
                  d="M12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5Z"
                  fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Light Input -->
        <div class="form-group">
          <label class="input-label is-required">Search with required</label>
          <div class="input-field input-field--light">
            <input type="text" class="input-field__input" placeholder="What are you looking for?" required>
            <span class="input-field__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5Z"
                  fill="currentColor" />
                <path
                  d="M12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5Z"
                  fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Gradient Input -->
        <div class="form-group">
          <label class="input-label has-error">Search with error</label>
          <div class="input-field input-field--gradient">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5Z"
                  fill="currentColor" />
                <path
                  d="M12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5Z"
                  fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>

        <!-- Gradient Light Input -->
        <div class="form-group">
          <label class="input-label">Search with gradient</label>
          <div class="input-field input-field--gradient-light">
            <input type="text" class="input-field__input" placeholder="What are you looking for?">
            <span class="input-field__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5Z"
                  fill="currentColor" />
                <path
                  d="M12 19.5C14.76 19.5 17 17.26 17 14.5C17 11.74 14.76 9.5 12 9.5C9.24 9.5 7 11.74 7 14.5C7 17.26 9.24 19.5 12 19.5Z"
                  fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  `
  container.appendChild(inputSection)
}