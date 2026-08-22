#Demo Apology Website

A static, GitHub Pages-ready apology experience from Bhola to Manas. It uses HTML5, CSS3, vanilla JavaScript, SVG-like CSS motifs, and Canvas fireworks. No tracking, cookies, backend, or external dependencies are used.

## Final structure

```text
manas-apology/
├── index.html
├── css/style.css
├── js/app.js
├── js/apology.js
├── js/effects.js
├── js/celebration.js
├── js/fireworks.js
└── assets/
    ├── images/             # intentionally empty; CSS motifs avoid unverified deity images
    └── music/
        └── apology-song.mp3  # add this file yourself
```

## Customize

Edit `js/app.js` to change the sender, receiver, audio path, complete apology text, and five playful responses. The requested names are already set to Bhola and Manas.

## Music asset

MISSING ASSET:

```text
./assets/music/apology-song.mp3
```

Place a legally usable, calm devotional instrumental at:

```text
C:\Users\hmbhola\manas-apology\assets\music\apology-song.mp3
```

The site distinguishes a missing/unloadable file from a browser playback restriction. If autoplay is blocked, it shows `Tap ▶ to play the music.` If the file is missing or unsupported, it shows a load-error message and logs the technical error in the console.

## Local test

```powershell
cd C:\Users\hmbhola\manas-apology
python -m http.server 8000
```

Open `http://localhost:8000/`. This local URL is only for testing; the project contains no localhost dependency.

## GitHub Pages

1. Create or open a GitHub repository.
2. Upload every file from this project.
3. Ensure `index.html` is in the repository root.
4. Commit the changes.
5. Open **Settings**.
6. Open **Pages**.
7. Select **Deploy from a branch**.
8. Select branch **main**.
9. Select folder **/ (root)**.
10. Save and wait for deployment.

Final URL template:

(https://hmbholamajhi-eng.github.io/apology/)

All links use relative paths such as `./css/style.css`, `./js/app.js`, and `./assets/music/apology-song.mp3`, so project-site deployment works.

## Troubleshooting

- **White page:** Confirm `index.html` is in the repository root and inspect the browser console.
- **CSS not loading:** Verify the file is exactly `css/style.css` and the link begins `./css/style.css`.
- **JavaScript not working:** Confirm all five files are under `js/`; run `node --check` on them locally.
- **Broken image:** The project intentionally uses CSS spiritual motifs instead of unverified deity-image files. No image reference is required.
- **Music not playing:** Add the MP3 at the path above, then click the visible Play button. Check the console for the exact audio error.
- **404 on GitHub Pages:** Check that Pages uses `main` and `/ (root)`, and that paths are relative.
- **GitHub Pages not updating:** Wait for the Pages workflow to complete, then hard-refresh or open the deployment URL in a private window.
