// quartz/util/wake-svg.inline.ts

// Register our handler to fire every time Quartz 5 completes a SPA "nav" event
document.addEventListener("nav", () => {
  // Find all standard img tags loading vector assets
  const svgImages = document.querySelectorAll<HTMLImageElement>('img[src$=".svg"]');

  svgImages.forEach((img) => {
    // Isolate the base source URL, stripping existing timestamps
    const baseSrc = img.src.split('?')[0];
    
    // Append a live micro-timestamp cache buster string
    img.src = `${baseSrc}?t=${new Date().getTime()}`;
  });
});
