# creative-tech-website
Portfolio website showcasing creative technology projects, research, and more.

## Quick start
- Open `index.html` in your browser to preview.
- Edit text and links directly inside `index.html`.
- Add images to `assets/img/` and update the image placeholders.

## Local preview (optional)
If you want a local server:
1. Open PowerShell in the project folder.
2. Run:
   - `python -m http.server 8000`
3. Visit `http://localhost:8000` in your browser.

## Deploy to GitHub Pages
1. Push your changes to the `main` branch on GitHub.
2. In the GitHub repo: `Settings` → `Pages`.
3. Under `Build and deployment`, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` and folder `/ (root)`
4. Save. After a minute, your site will appear at:
   - `https://<your-username>.github.io/creative-tech-website/`

## Custom domain
1. Buy a domain from any registrar.
2. In GitHub `Settings` → `Pages`, add your domain (e.g. `yourname.com`).
3. Update your DNS at the registrar:
   - A records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - CNAME for `www` to `<your-username>.github.io`
4. Wait for DNS to propagate (minutes to 48 hours).

## Updating content
- Projects: edit the cards under the `#projects` section.
- About: update the text under `#about`.
- Process: edit the ordered list under `#process`.
- Contact: update the email and social links under `#contact`.
