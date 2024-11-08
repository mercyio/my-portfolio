# Portify 🚀 - Your Developer Portfolio in Minutes

<div align="center">
  <img src="public/images/portify-banner.png" alt="Portify Banner" width="100%"/>
  
  <p align="center">
    <strong>Create a stunning developer portfolio without writing a single line of code.</strong>
  </p>

  <p align="center">
    <a href="#-demo">View Demo</a>
    ·
    <a href="#-features">Features</a>
    ·
    <a href="USAGE.md">Documentation</a>
    ·
    <a href="CONTRIBUTING.md">Contributing</a>
    ·
    <a href="#-deploy">Deploy</a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/github/stars/IDAN-DEVS/portify?style=social" alt="GitHub stars"/>
    <img src="https://img.shields.io/github/forks/IDAN-DEVS/portify?style=social" alt="GitHub forks"/>
    <img src="https://img.shields.io/github/issues/IDAN-DEVS/portify" alt="GitHub issues"/>
  </p>
</div>

## 🎯 Overview

Portify is a modern, customizable portfolio generator built with Next.js 14. It allows developers to create professional portfolios by simply updating configuration files - no coding required! Perfect for developers who want to showcase their work without spending time on portfolio development.

## ✨ Features

- 🎯 **Zero Code Required** - Just update config files
- ⚡ **Lightning Fast** - Built with Next.js 14
- 🎨 **Modern Design** - Clean, responsive layouts
- 🔧 **Easy Configuration** - Simple JSON/TS configs
- 🌗 **Dark Mode** - Beautiful dark theme by default
- 📱 **Mobile First** - Looks great on all devices
- 🔍 **SEO Ready** - Optimized for search engines
- 📊 **Analytics Ready** - Easy integration with your preferred analytics
- 🚀 **One-Click Deploy** - Deploy to Vercel or Netlify instantly
- 🎉 **Multiple Templates** - Choose from various designs

## 🎮 Demo

Check out these portfolios built with Portify:

- [JC Coder Portfolio](https://jc-coder.vercel.app) - Minimal Design
- [Add yours!](CONTRIBUTING.md#showcasing-your-portfolio)

## 🚀 Quick Start

1. **Clone & Install**

```bash
git clone https://github.com/IDAN-DEVS/portify.git
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

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/IDAN-DEVS/portify)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/IDAN-DEVS/portify)

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
