# NBL-2027 Conference Website

Static website for the **11th International Conference on Nanotechnology for Better Living (NBL-2027)**,
07–11 September 2027 — NIT Srinagar & IIT Ropar.

Plain HTML + CSS + vanilla JS. No build step and no framework.

## Run locally in VS Code
1. Open this folder in VS Code (`File > Open Folder…`).
2. Install the **Live Server** extension (Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.
(You can also just double-click `index.html`.)

## Structure
```
index.html              Home: slider, countdown, welcome, programme, spectrum
about.html              About, programme structure, host institutions, General Chair's message
call-for-papers.html    30 tracks, abstract guidelines, dates, poster walkway, industry meet
committees.html         General Chair, International / National / Local Advisory Boards, organizing teams
registration.html       Fee table, inclusions, bank details + QR, accommodation
sponsorship.html        Diamond / Gold / Silver tiers and benefits
venue.html              SKUAST-K venue, Google map, how to reach, Kashmir attractions
contact.html            Contact cards
assets/css/style.css    All styles (colours/fonts are CSS variables at the top)
assets/js/main.js       Menu, slider, countdown, animations, back-to-top
assets/img/             Logos, campus photos, payment QR, favicon
assets/docs/            Brochure and leaflet PDFs (linked from the site)
```

## Common edits
- **Colours/fonts:** change the variables in `:root` at the top of `style.css`.
- **Countdown date:** `CONFERENCE_START` at the top of `main.js`.
- **Header, menu, sidebar, footer** appear in every page. To change one, use
  VS Code's *Search > Replace in Files* (Ctrl+Shift+H) so all 8 pages stay in sync.
- **Placeholders:** search for `TODO` (Ctrl+Shift+F). These mark the abstract-submission
  link, the registration form link, the conference e-mail/phone, the single point of contact,
  and the organizing committee member names.

## Deploying
Upload the whole folder to any static host (NIT web server, GitHub Pages, Netlify).
Fonts (Google Fonts) and icons (Font Awesome 6 via cdnjs) load from CDNs.
