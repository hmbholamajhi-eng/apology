(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function particle(symbol, i) { const el = document.createElement('span'); el.className = 'floating'; el.textContent = symbol; el.style.setProperty('--x', `${Math.random() * 96}%`); el.style.setProperty('--y', `${Math.random() * 95}%`); el.style.setProperty('--size', `${10 + Math.random() * 15}px`); el.style.setProperty('--duration', `${5 + Math.random() * 6}s`); el.style.setProperty('--delay', `${Math.random() * 4}s`); el.style.setProperty('--color', ['#e5b65f','#ffb18d','#f4c3d5','#d6b7f0'][i % 4]); document.getElementById('particles').append(el); }
  function init() { if (reduced) return; for (let i = 0; i < 25; i += 1) particle(i % 3 === 0 ? '✦' : (i % 2 ? '❀' : '·'), i); }
  function celebrate() { if (reduced) return; for (let i = 0; i < 38; i += 1) particle(i % 4 === 0 ? '♥' : (i % 2 ? '✦' : '❀'), i); }
  window.Effects = { init, celebrate };
})();
