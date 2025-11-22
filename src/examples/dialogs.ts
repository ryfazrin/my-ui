export function renderDialogExamples(container: HTMLElement) {
  const section = document.createElement('div')
  section.innerHTML = `
    <section class="section">
      <h2>Dialogs & Bottom Sheets</h2>
      
      <div class="button-container">
        <button id="btn-show-dialog" class="button button--primary">Show Dialog</button>
        <button id="btn-show-bottom-sheet" class="button button--light">Show Bottom Sheet</button>
      </div>

      <!-- Dialog Overlay -->
      <div id="dialog-overlay" class="dialog-overlay">
        <div class="dialog">
          <h3 class="dialog__title">This is a title</h3>
          <p class="dialog__content">
            This is placeholder text for the dialog.
          </p>
          <div class="dialog__actions">
            <button class="button" onclick="document.getElementById('dialog-overlay').classList.remove('dialog-overlay--visible'); document.querySelector('.dialog').classList.remove('dialog--visible')">
              Cancel
            </button>
            <button class="button" onclick="document.getElementById('dialog-overlay').classList.remove('dialog-overlay--visible'); document.querySelector('.dialog').classList.remove('dialog--visible')">
              Apply
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Sheet Overlay -->
      <div id="sheet-overlay" class="dialog-overlay" style="align-items: flex-end;">
        <div class="bottom-sheet">
          <div class="bottom-sheet__handle"></div>
          <h3 class="dialog__title" style="text-align: left;">Share</h3>
          
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0;">
            <!-- Share Targets -->
            ${Array(4).fill(0).map(() => `
              <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <div style="width: 48px; height: 48px; background: #E8E8EA; border-radius: 50%;"></div>
                <span style="font-size: 12px; color: #666;">Name</span>
              </div>
            `).join('')}
          </div>

          <div class="list-group">
            <div class="list-item">
              <div class="list-item__leading">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </div>
              <div class="list-item__content">Copy link</div>
            </div>
             <div class="list-item">
              <div class="list-item__leading">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              </div>
              <div class="list-item__content">Nearby Share</div>
            </div>
          </div>

          <button class="button button--light" style="width: 100%; margin-top: 16px;" 
            onclick="document.getElementById('sheet-overlay').classList.remove('dialog-overlay--visible'); document.querySelector('.bottom-sheet').classList.remove('bottom-sheet--visible')">
            Cancel
          </button>
        </div>
      </div>

    </section>
  `
  container.appendChild(section)

  // Event Listeners
  const btnDialog = section.querySelector('#btn-show-dialog');
  const btnSheet = section.querySelector('#btn-show-bottom-sheet');
  const dialogOverlay = section.querySelector('#dialog-overlay');
  const sheetOverlay = section.querySelector('#sheet-overlay');
  const dialog = section.querySelector('.dialog');
  const sheet = section.querySelector('.bottom-sheet');

  if (btnDialog && dialogOverlay && dialog) {
    btnDialog.addEventListener('click', () => {
      dialogOverlay.classList.add('dialog-overlay--visible');
      dialog.classList.add('dialog--visible');
    });

    dialogOverlay.addEventListener('click', (e) => {
      if (e.target === dialogOverlay) {
        dialogOverlay.classList.remove('dialog-overlay--visible');
        dialog.classList.remove('dialog--visible');
      }
    });
  }

  if (btnSheet && sheetOverlay && sheet) {
    btnSheet.addEventListener('click', () => {
      sheetOverlay.classList.add('dialog-overlay--visible');
      sheet.classList.add('bottom-sheet--visible');
    });

    sheetOverlay.addEventListener('click', (e) => {
      if (e.target === sheetOverlay) {
        sheetOverlay.classList.remove('dialog-overlay--visible');
        sheet.classList.remove('bottom-sheet--visible');
      }
    });
  }
}
