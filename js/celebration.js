(() => {
  'use strict';
  function init() {
    const { CONFIG, $ } = window.ManasApp; const song = $('song'); const play = $('playButton'); const mute = $('muteButton');
    song.src = CONFIG.songPath;
    song.addEventListener('error', () => { $('audioStatus').textContent = 'Music file could not be loaded. Please check the audio file.'; console.error('Audio loading error:', song.error); play.textContent = '▶ Play music'; });
    play.addEventListener('click', () => { if (song.paused) { song.play().then(() => { play.textContent = 'Ⅱ Pause music'; $('audioStatus').textContent = ''; }).catch(error => { console.warn('Audio playback was blocked or failed:', error); if (song.error) $('audioStatus').textContent = 'Music file could not be loaded. Please check the audio file.'; else $('audioStatus').textContent = 'Tap ▶ to play the music.'; }); } else { song.pause(); play.textContent = '▶ Play music'; } });
    mute.addEventListener('click', () => { song.muted = !song.muted; mute.textContent = song.muted ? '×' : '♪'; mute.setAttribute('aria-label', song.muted ? 'Unmute music' : 'Mute music'); });
  }
  function start() { const { state, $ } = window.ManasApp; if (state.celebrating) return; state.celebrating = true; $('letterSection').classList.add('hidden'); $('celebration').classList.remove('hidden'); window.Effects?.celebrate(); window.Fireworks?.start($('fireworks')); const song = $('song'); song.play().then(() => { $('playButton').textContent = 'Ⅱ Pause music'; }).catch(error => { console.warn('Forgiveness-click audio playback:', error); $('audioStatus').textContent = song.error ? 'Music file could not be loaded. Please check the audio file.' : 'Tap ▶ to play the music.'; }); }
  window.Celebration = { init, start };
})();
