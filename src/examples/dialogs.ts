import { createCodeCollapse } from '../components/code-collapse'

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
                <i class="ph-bold ph-copy"></i>
              </div>
              <div class="list-item__content">Copy link</div>
            </div>
             <div class="list-item">
              <div class="list-item__leading">
                <i class="ph-bold ph-share-network"></i>
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

  // Add code collapse
  const mainSection = section.querySelector('.section')
  if (mainSection) {
    const codeExample = `<div class="dialog">
  <h3 class="dialog__title">Dialog Title</h3>
  <p class="dialog__content">
    This is the dialog content.
  </p>
  <div class="dialog__actions">
    <button class="button">Cancel</button>
    <button class="button">Apply</button>
  </div>
</div>`
    mainSection.appendChild(createCodeCollapse('View Code', codeExample))
  }

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
