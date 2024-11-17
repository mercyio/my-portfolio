# Portify 🚀 - Your Developer Portfolio in Minutes

<div align="center">
  <img src="public/images/portify_logo.png" alt="Portify Banner" width="100%"/>
  
  <p align="center">
    <strong>Create a stunning developer portfolio without writing a single line of code.</strong>
  </p>

  <p align="center">
    <a href="/templates">View Templates</a>
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

- 🎨 **Multiple Templates** - Choose from various professionally designed templates
- 🎯 **Zero Code Required** - Just update config files
- ⚡ **Lightning Fast** - Built with Next.js 14
- 🌗 **Dark & Light Modes** - Beautiful themes for each template
- 📱 **Mobile First** - Looks great on all devices
- 🔍 **SEO Ready** - Optimized for search engines
- 📊 **Analytics Ready** - Easy integration with your preferred analytics
- 🚀 **One-Click Deploy** - Deploy to Vercel instantly
- 🎉 **Live Preview** - Try templates before you choose

## 🎮 Templates & Demo

Visit our [Templates Gallery](/templates) to explore all available templates:

- **Base Template** - Clean, minimal design with dark mode
- **Shadow Template** - Modern and elegant with subtle shadows
- More templates coming soon!

Try them live:

1. Visit `/templates` to see all available templates
2. Click on any template to view a live demo
3. Use the "Use Template" button to get started

## 🚀 Quick Start

1. **Clone & Install**

```bash
git clone https://github.com/IDAN-DEVS/portify.git
cd portify && npm install
```

2. **Start Development**

```bash
npm run dev
# or
yarn dev
```

3. **Choose Your Template**

Visit `http://localhost:3000/templates` to:

- Browse available templates
- Preview each template with demo data
- Select your preferred design

4. **Configure**

Update these key files in the `data` folder:

<details>
<summary>📄 Basic Info (Click to expand)</summary>

```typescript:data/usersInfo.ts
export const UserInfoData = {
  fullName: "Your Name",
  tagLine: "Your Title",
  location: "Your Location",
  miniBio: "Your brief bio here...",
  heroImage: {
    type: "url",
    url: "/images/your-image.png",
  },
};
```

</details>

<details>
<summary>🔗 Social Links</summary>

```typescript:data/socials.ts
export const UserSocialsData = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "you@example.com",
};
```

</details>

<details>
<summary>💼 Projects & Experience</summary>

See [USAGE.md](USAGE.md) for detailed examples of:

- Project configuration
- Work experience
- Skills and education
</details>

## 🚀 Deploy

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/IDAN-DEVS/portify)

## 📚 Documentation

For detailed instructions and examples, check out our [Usage Guide](USAGE.md).

## 🤝 Contributing

We welcome contributions! See our [Contributing Guide](CONTRIBUTING.md) for details.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 💖 Credits

Created with ❤️ by [JC CODER](https://github.com/JC-Coder) and [IDAN DEVS](https://github.com/IDAN-DEVS)

Templates designed by:

- Base Template: [JC CODER](https://github.com/JC-Coder)
- Shadow Template: [Bright Bassey](https://github.com/bright-bassey)
