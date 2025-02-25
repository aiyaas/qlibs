// Apply highlighting block by block after DOM update
// https://prismjs.com/
setTimeout(() => {
  document.querySelectorAll('pre code').forEach((block, index) => {
    setTimeout(function () {
      Prism.highlightElement(block);
    }, index * 100); // Delay each block by 100ms
  });
}, 0);

