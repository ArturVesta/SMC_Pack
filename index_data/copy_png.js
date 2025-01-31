const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', async () => {
  const image = document.getElementById("expandedImg");
    try {
      const blob = await fetch(image.src).then(r => r.blob());
      await navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob
        })
      ]);
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy Image';
      }, 1000);
    } catch (err) {
      copyButton.textContent = 'Error!, Failed to copy: ' + err;
      setTimeout(() => {
        copyButton.textContent = 'Copy Image';
      }, 5000);
    }
});