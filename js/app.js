(() => {
  'use strict';
  const CONFIG = window.MANAS_APOLOGY_CONFIG = {
    senderName: 'Bhola', receiverName: 'Manas', songPath: './assets/music/apology-song.mp3',
    letter: `Bhool meri thi...\n\nAur agar meri kisi baat, behavior ya action se tujhe hurt hua hai,\ntoh Bhola dil se sorry bol raha hai. ❤️\n\nMera intention tujhe hurt karna kabhi nahi tha.\n\nTu sirf dost nahi hai,\ntu apna hai.\n\nIsliye ego side mein rakh ke keh raha hoon—\n\nMAAF KAR DE BHAI. 🙏\n\nGussa hona tera haq hai,\nlekin mujhse baat karna band kar dena...\nye Bhola ke liye thoda zyada punishment hai. 😭😂\n\nBas ek baar baat kar le.\n\nBaaki jo daantna hai,\nwoh saamne aake daant lena. 😂❤️`,
    noMessages: ['Haan bhai, gussa valid hai... 😔','Bhola ko punishment mil rahi hai 😂','Theek hai... Bhola wait karega. ❤️','Par bhai, ek baar baat toh kar le...','Maa ke saamne promise, galti repeat nahi karunga. 🙏']
  };
  window.ManasApp = { CONFIG, state: { noCount: 0, opened: false, celebrating: false }, $: id => document.getElementById(id) };
  document.addEventListener('DOMContentLoaded', () => { window.Effects?.init(); window.Apology?.init(); window.Celebration?.init(); });
})();
