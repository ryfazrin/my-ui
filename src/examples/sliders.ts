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
          
          <!-- Sliders Row -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            
            <!-- Slider 1 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-high"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="100" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 100%, rgba(153, 153, 157, 0.3) 100%, rgba(153, 153, 157, 0.3) 100%);">
            </div>

            <!-- Slider 2 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-high"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="75" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 75%, rgba(153, 153, 157, 0.3) 75%, rgba(153, 153, 157, 0.3) 100%);">
            </div>

            <!-- Slider 3 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-low"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="50" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 50%, rgba(153, 153, 157, 0.3) 50%, rgba(153, 153, 157, 0.3) 100%);">
            </div>

            <!-- Slider 4 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-low"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="25" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 25%, rgba(153, 153, 157, 0.3) 25%, rgba(153, 153, 157, 0.3) 100%);">
            </div>

             <!-- Slider 5 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-none"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="0" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 0%, rgba(153, 153, 157, 0.3) 0%, rgba(153, 153, 157, 0.3) 100%);">
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

          <!-- Sliders Row -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            
            <!-- Slider 1 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-high"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="100" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 100%, rgba(132, 132, 135, 0.3) 100%, rgba(132, 132, 135, 0.3) 100%);">
            </div>

            <!-- Slider 2 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-high"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="75" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 75%, rgba(132, 132, 135, 0.3) 75%, rgba(132, 132, 135, 0.3) 100%);">
            </div>

            <!-- Slider 3 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-low"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="50" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 50%, rgba(132, 132, 135, 0.3) 50%, rgba(132, 132, 135, 0.3) 100%);">
            </div>

            <!-- Slider 4 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-low"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="25" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 25%, rgba(132, 132, 135, 0.3) 25%, rgba(132, 132, 135, 0.3) 100%);">
            </div>

             <!-- Slider 5 -->
            <div class="slider-container">
              <div class="slider-icon">
                <i class="ph-bold ph-speaker-none"></i>
              </div>
              <input type="range" class="slider slider--thick" min="0" max="100" value="0" 
                style="background: linear-gradient(to right, #387AFF 0%, #387AFF 0%, rgba(132, 132, 135, 0.3) 0%, rgba(132, 132, 135, 0.3) 100%);">
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
