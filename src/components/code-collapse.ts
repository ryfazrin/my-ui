export function createCodeCollapse(title: string, code: string): HTMLElement {
  const collapse = document.createElement('div')
  collapse.className = 'code-collapse'

  const escapedCode = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

  collapse.innerHTML = `
    <div class="code-collapse__header">
      <h4 class="code-collapse__title">
        <i class="ph-bold ph-caret-right"></i>
        ${title}
      </h4>
      <div class="code-collapse__actions">
        <button class="code-collapse__button code-collapse__copy">
          <i class="ph-bold ph-copy"></i>
          Copy
        </button>
      </div>
    </div>
    <div class="code-collapse__content">
      <pre class="code-collapse__code">${escapedCode}</pre>
    </div>
  `

  // Toggle collapse
  const header = collapse.querySelector('.code-collapse__header')
  header?.addEventListener('click', (e) => {
    // Don't toggle if clicking the copy button
    if ((e.target as HTMLElement).closest('.code-collapse__copy')) {
      return
    }
    collapse.classList.toggle('code-collapse--expanded')
  })

  // Copy to clipboard
  const copyButton = collapse.querySelector('.code-collapse__copy')
  copyButton?.addEventListener('click', async (e) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(code)
      const originalHTML = copyButton.innerHTML
      copyButton.innerHTML = '<i class="ph-bold ph-check"></i> Copied!'
      setTimeout(() => {
        copyButton.innerHTML = originalHTML
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  })

  return collapse
}
