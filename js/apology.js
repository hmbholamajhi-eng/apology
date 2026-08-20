(() => {
  'use strict';
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
  async function reveal(node, text) { node.textContent = ''; for (const char of text) { node.textContent += char; await wait(char === '\n' ? 95 : 12); } }
  function init() {
    const { CONFIG, state, $ } = window.ManasApp;
    $('openApology').addEventListener('click', async () => {
      if (state.opened) return;
      state.opened = true;
      $('openApology').disabled = true;
      $('opening').classList.add('hidden');
      $('letterSection').classList.remove('hidden');
      await reveal($('letterText'), CONFIG.letter);
      await wait(220);
      $('decision').classList.remove('hidden');
    });
    $('forgiveButton').addEventListener('click', () => window.Celebration.start());
    $('angryButton').addEventListener('click', () => {
      const index = Math.min(state.noCount, CONFIG.noMessages.length - 1);
      $('reaction').textContent = CONFIG.noMessages[index];
      state.noCount += 1;
      $('reaction').animate?.([{ opacity: .1, transform: 'translateY(7px)' }, { opacity: 1, transform: 'none' }], { duration: 420, easing: 'ease-out' });
    });
  }
  window.Apology = { init };
})();
