# ⚡ RAMELEC — Site Web Professionnel

Site vitrine complet pour **RAMELEC SAS** — Électricien professionnel à Pantin, Île-de-France.

---

## 🗂️ Structure du projet

```
ramelec/
├── public/
│   └── index.html                   # HTML de base avec meta SEO
├── src/
│   ├── index.js                     # Point d'entrée React
│   ├── App.js                       # Routeur principal
│   ├── styles/
│   │   └── global.css               # Système de design global
│   ├── components/
│   │   ├── Navbar.js / .css         # Navigation responsive
│   │   ├── Footer.js / .css         # Pied de page complet
│   │   └── ServiceCard.js / .css    # Composant carte service réutilisable
│   └── pages/
│       ├── Home.js / .css           # Page d'accueil
│       ├── Services.js / .css       # Page services
│       ├── About.js / .css          # Page à propos
│       ├── Contact.js / .css        # Page contact avec formulaire
│       ├── Testimonials.js / .css   # Page témoignages
│       ├── Portfolio.js / .css      # Page réalisations
│       ├── MentionsLegales.js       # Mentions légales
│       ├── Confidentialite.js       # RGPD
│       └── Legal.css                # CSS partagé pages légales
├── api/
│   └── send-email.js                # Vercel Serverless Function (email)
├── .env.example                     # Variables d'environnement
├── vercel.json                      # Configuration Vercel
└── package.json
```

---

## 🚀 Déploiement sur Vercel

### Étape 1 — Prérequis

- Compte [Vercel](https://vercel.com) (gratuit)
- Node.js 18+ installé localement
- Git installé

### Étape 2 — Installation locale

```bash
cd ramelec
npm install
npm start   # Lance sur http://localhost:3000
```

### Étape 3 — Variables d'environnement

1. Copiez `.env.example` vers `.env`
2. Remplissez vos valeurs SMTP

**Avec Gmail :**
- Activez l'authentification à deux facteurs sur votre compte Google
- Créez un mot de passe d'application : Google → Sécurité → Mots de passe d'application
- Utilisez ce mot de passe d'application pour `SMTP_PASS`

### Étape 4 — Déploiement Vercel

**Méthode recommandée — Via GitHub :**

```bash
# 1. Créez un dépôt GitHub et poussez le code
git init
git add .
git commit -m "Initial commit — RAMELEC website"
git remote add origin https://github.com/votre-user/ramelec.git
git push -u origin main

# 2. Sur vercel.com :
# → New Project → Importer le dépôt GitHub
# → Framework: Create React App
# → Build Command: npm run build
# → Output Directory: build
```

**Méthode alternative — Vercel CLI :**

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Étape 5 — Variables d'environnement sur Vercel

1. Allez sur [vercel.com](https://vercel.com) → votre projet → **Settings → Environment Variables**
2. Ajoutez ces variables :

| Variable | Valeur |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `votre@email.com` |
| `SMTP_PASS` | `votre-mot-de-passe-app` |
| `CONTACT_EMAIL` | `ramelec.ang@gmail.com` |

3. Redéployez : Deployments → **Redeploy**

---

## 📧 Alternative : Utiliser Resend

[Resend](https://resend.com) est plus fiable que SMTP pour la production.

```bash
npm install resend
```

Dans `api/send-email.js`, commentez la section Option A et décommentez Option B, puis ajoutez :
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

---

## 🎨 Design

- **Typographie** : Syne (display) + DM Sans (body) — Google Fonts
- **Couleurs** : Marine profond (#1a1a2e) + Ambre électrique (#f5a623)
- **Esthétique** : Industrial Luxury — sérieux, moderne, professionnel
- **Responsive** : Mobile-first, breakpoints 560px / 768px / 900px / 1024px

---

## 📄 Pages incluses

| Page | URL |
|---|---|
| Accueil | `/` |
| Services | `/services` |
| Réalisations | `/realisations` |
| Témoignages | `/temoignages` |
| À Propos | `/a-propos` |
| Contact | `/contact` |
| Mentions légales | `/mentions-legales` |
| Politique de confidentialité | `/confidentialite` |

---

## ✏️ Personnalisation

### Remplacer les informations de contact

Recherchez et remplacez dans le code :
- ` +33 7 60 49 39 67` → votre numéro de téléphone réel
- `ramelec.ang@gmail.com` → votre email réel

### Intégrer Google Maps

Dans `src/pages/Contact.js`, décommentez le bloc `<iframe>` et remplacez l'URL par votre embed Google Maps.

### Ajouter des vraies photos

Remplacez les icônes emoji dans `Portfolio.js` par de vraies photos en ajoutant une propriété `image` à chaque projet et en l'affichant dans la carte.

---

## ⚖️ Informations légales RAMELEC

- **Raison sociale** : RAMELEC
- **Forme** : SAS
- **SIREN** : 978 951 291
- **NAF** : 43.21A
- **Adresse** : 3 Rue Lavoisier, 93500 Pantin
