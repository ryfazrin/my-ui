export function renderSliderExamples(container: HTMLElement) {
  const section = document.createElement('div')
  section.innerHTML = `
    <section class="section">
      <h2>Sliders & Range</h2>
      
      <div class="card">
        <div class="card__header">
          <h3 class="card__title">Display & Sound</h3>
        </div>
        <div class="card__body">
          
          <!-- Standard Slider -->
          <div class="slider-container">
            <div class="slider-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </div>
            <input type="range" class="slider" min="0" max="100" value="50">
            <div class="slider-icon slider-icon--active">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </div>
          </div>

          <!-- Thick Slider (Volume Style) -->
          <div class="slider-container">
            <div class="slider-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              </svg>
            </div>
            <!-- Note: For the thick slider fill effect, we use a gradient background trick in this static example -->
            <input type="range" class="slider slider--thick" min="0" max="100" value="75" 
              style="background: linear-gradient(to right, #387AFF 0%, #387AFF 75%, rgba(153, 153, 157, 0.3) 75%, rgba(153, 153, 157, 0.3) 100%);">
            <div class="slider-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section dark-mode">
      <h2>Sliders (Dark Mode)</h2>
      <div class="card">
        <div class="card__header">
          <h3 class="card__title">Display & Sound</h3>
        </div>
        <div class="card__body">

          <!-- Standard Slider -->
          <div class="slider-container">
             <div class="slider-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </div>
            <input type="range" class="slider" min="0" max="100" value="30">
             <div class="slider-icon slider-icon--active">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="5"/>
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            </div>
          </div>

          <!-- Thick Slider (Volume Style) Dark -->
          <div class="slider-container">
            <div class="slider-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              </svg>
            </div>
            <input type="range" class="slider slider--thick" min="0" max="100" value="40" 
              style="background: linear-gradient(to right, #387AFF 0%, #387AFF 40%, rgba(132, 132, 135, 0.3) 40%, rgba(132, 132, 135, 0.3) 100%);">
            <div class="slider-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
  container.appendChild(section)

  // Add simple interaction for the thick slider demo
  const thickSliders = section.querySelectorAll('.slider--thick');
  thickSliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const val = target.value;
      // Determine background color based on mode (parent check or just generic logic)
      // For simplicity in this demo, we use the same active color but different track opacity/color if needed.
      // But since we are setting inline style, we can just use the same logic for now or detect dark mode parent.
      const isDarkMode = target.closest('.dark-mode') !== null;
      const trackColor = isDarkMode ? 'rgba(132, 132, 135, 0.3)' : 'rgba(153, 153, 157, 0.3)';

      target.style.background = `linear-gradient(to right, #387AFF 0%, #387AFF ${val}%, ${trackColor} ${val}%, ${trackColor} 100%)`;
    });
  });
}
