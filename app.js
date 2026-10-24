(() => {
  const art = document.getElementById('art');
  const brokenBtn = document.getElementById('brokenBtn');
  const originalBtn = document.getElementById('originalBtn');
  const status = document.getElementById('status');
  const files = {
    broken: new URL('./broken-pixel.jpg', document.baseURI).href,
    original: new URL('./original.jpg', document.baseURI).href
  };
  function showError(which) {
    status.textContent = 'Could not load ' + which + ' image. Check that ' +
      (which === 'Original' ? 'original.jpg' : 'broken-pixel.jpg') +
      ' is uploaded beside index.html on Cloudflare.';
    status.style.display = 'block';
  }
  art.addEventListener('error', () => {
    showError(art.dataset.which || 'Original');
  });
  art.addEventListener('load', () => { status.style.display = 'none'; });
  function show(which) {
    const broken = which === 'broken';
    art.dataset.which = broken ? 'Broken Pixel' : 'Original';
    art.alt = broken ? 'Broken Pixel NFT artwork' : 'Original NFT artwork';
    brokenBtn.setAttribute('aria-pressed', String(broken));
    originalBtn.setAttribute('aria-pressed', String(!broken));
    status.style.display = 'none';
    art.src = files[which];
  }
  brokenBtn.addEventListener('click', () => show('broken'));
  originalBtn.addEventListener('click', () => show('original'));
  // Preload the original so a missing or incorrect file path is easier to detect.
  const preload = new Image();
  preload.onerror = () => {
    if (art.dataset.which !== 'Original') {
      status.textContent = 'Original image not found at: ' + files.original;
      status.style.display = 'block';
    }
  };
  preload.src = files.original;
})();