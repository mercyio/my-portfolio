# Portify 🚀 - Your Developer Portfolio in Minutes

<div align="center">
  <img src="public/images/portify-banner.png" alt="Portify Banner" width="100%"/>
  
  <p align="center">
    <strong>Create a stunning developer portfolio without writing a single line of code.</strong>
  </p>

  <p align="center">
    <a href="#-demo">View Demo</a>
    ·
    <a href="#-why-portify">Features</a>
    ·
    <a href="#-quick-start">Quick Start</a>
    ·
    <a href="#-templates">Templates</a>
    ·
    <a href="#-customization">Customization</a>
    ·
    <a href="#-deploy">Deploy</a>
  </p>
</div>

## ✨ Why Portify?

- 🎯 **Zero Code Required** - Just update config files
- ⚡ **Lightning Fast** - Built with Next.js 14
- 🎨 **Modern Design** - Clean, responsive layouts
- 🔧 **Easy Configuration** - Simple JSON/TS configs
- 🌗 **Dark Mode** - Beautiful dark theme by default
- 📱 **Mobile First** - Looks great on all devices
- 🔍 **SEO Ready** - Optimized for search engines

## 🎯 Demo

Check out these portfolios built with Portify:

- [jc coder portfolio](https://jc-coder.vercel.app) - Minimal Design

<div align="center">
  <h3 class="text-xl font-semibold">Your Portfolio Awaits!</h3>
  <p>Showcase your skills effortlessly with Portify.</p>
  <a href="#-quick-start" class="btn">Get Started</a>
</div>

## 🚀 Quick Start

### 1️⃣ Clone & Install

```bash
git clone https://github.com/JC-Coder/portify.git
cd portify && npm install
```

### 2️⃣ Configure

Update these key files:

<details>
<summary>📄 Basic Info (Click to expand)</summary>

```typescript:data/usersInfo.ts
export const UserInfo = {
  fullName: 'Your Name',
  tagLine: 'Your Title',
  location: 'Your Location',
  miniBio: 'Your brief bio here...'
};
```

</details>

<details>
<summary>🔗 Social Links</summary>

```typescript:data/socials.ts
export const UserSocials = {
  github: {
    icon: Github,
    url: "https://github.com/JC-Coder",
  },
  twitter: {
    icon: TwitterIcon,
    url: "https://twitter.com/jc_coder1",
  }
  // Add more socials...
};
```

</details>

<details>
<summary>💼 Projects</summary>

```typescript:data/projects.ts
export const UserProjects: Project[] = [
  {
    title: "Amazing Project",
    role: "Creator",
    description: "Project description...",
    url: "https://project-url.com",
    previewImage: "https://image-url.com/preview.png",
  }
];
```

</details>

### 3️⃣ Preview & Deploy

```bash
npm run dev     # Start local server
npm run build   # Build for production
```

## 🎨 Templates

Currently available templates:

- Base Template (Modern, Minimal)
- More coming soon!

## 🛠️ Customization

### Toggle Features

```typescript:data/templates/base.ts
export const BaseTemplate = {
  features: {
    SOCIALS_SECTION: true,
    SKILLS_SECTION: true,
    PROJECTS_SECTION: true,
    WORK_EXPERIENCE_SECTION: true,
  }
};
```

### Profile Image

Two options:

1. **Local**: Add to `/public/images/`
2. **Remote**: Use direct URL

### Adding New Sections

To add new sections, modify the `BaseTemplate` in `data/templates/base.ts` and create corresponding components in the `components` directory.

## 🚀 Deploy

One-click deploy with your favorite platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JC-Coder/portify)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JC-Coder/portify)

## 🤝 Contributing

1. Fork it
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by developers, for developers
</p>
