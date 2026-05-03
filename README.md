# 🌟 Dar Al Nujoom — Textiles & Tailoring Website

Premium Next.js website for Dar Al Nujoom tailoring business with full SEO optimization and Framer Motion animations.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
dar-al-nujoom/
├── pages/
│   ├── _app.js          # App wrapper + global SEO
│   ├── _document.js     # HTML document + structured data
│   ├── index.js         # Homepage (Hero, Services, Stats, CTA)
│   ├── services.js      # All services detail page
│   ├── gallery.js       # Portfolio gallery with filters
│   ├── about.js         # About + Timeline + Values
│   └── contact.js       # Contact form + FAQ
├── components/
│   ├── Layout.js        # Navbar + Footer + WhatsApp float
│   ├── Navbar.js        # Sticky nav with mobile menu
│   └── Footer.js        # Full footer with links
├── styles/
│   └── globals.css      # Design tokens + global styles
├── public/
│   ├── sitemap.xml      # For Google indexing
│   └── robots.txt       # Search engine directives
└── next-seo.config.js   # Global SEO configuration
```

---

## 🔧 Before Going Live — Customize These

### 1. Update contact details in:
- `components/Footer.js` → Phone, address, email
- `pages/contact.js` → WhatsApp number (`wa.me/92XXXXXXXXXX`)
- `components/Layout.js` → WhatsApp float button number
- `pages/index.js` → WhatsApp CTA button
- `pages/_document.js` → Structured data (address, phone)

### 2. Update your domain in:
- `next-seo.config.js` → Replace `daralnujoomtextiles.com`
- `public/sitemap.xml` → Replace domain
- `public/robots.txt` → Replace domain

### 3. Add real photos:
- Add actual tailoring photos to `/public/gallery/`
- Update `pages/gallery.js` to use `<Image>` components
- Replace emoji icons with real photos

### 4. Add Google Analytics:
```js
// In pages/_document.js or _app.js
// Add your GA4 tracking ID
```

---

## 🔍 SEO Features Included

✅ Meta title & description per page  
✅ Open Graph tags for social sharing  
✅ JSON-LD structured data (LocalBusiness schema)  
✅ XML Sitemap  
✅ robots.txt  
✅ Canonical URLs  
✅ Mobile responsive  
✅ Fast load performance  
✅ Semantic HTML headings  
✅ Alt text ready for images  
✅ Google-friendly URL structure  

---

## 🚀 Deployment Options

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

### Shared Hosting (cPanel)
```bash
npm run build
npm run export
# Upload 'out' folder to public_html
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Gold | `#C9A84C` |
| Navy Dark | `#0A1628` |
| Cream | `#F5EDD8` |
| Font Heading | Cormorant Garamond |
| Font Body | Montserrat |
| Font Arabic | Amiri |

---

## 📞 Support

Built for Dar Al Nujoom Textiles & Tailoring  
Update your WhatsApp number before launching!
# Daralnujoom
