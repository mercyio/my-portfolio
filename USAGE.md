# 📚 Portify Usage Guide

Welcome to Portify! This guide will help you create and customize your professional developer portfolio.

## Table of Contents

- [Quick Start](#-quick-start)
- [Templates](#-templates)
- [Configuration](#-configuration)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [FAQ](#-faq)

## 🚀 Quick Start

### 1. Setup (2 minutes)
```bash
# Clone and install
git clone https://github.com/IDAN-DEVS/portify.git
cd portify
npm install   # or: yarn install

# Start development
npm run dev   # or: yarn dev
```

### 2. Choose a Template

1. Visit `http://localhost:3000/templates`
2. Browse available templates:
   - **Base Template**: Clean, minimal design with dark mode
   - **Shadow Template**: Modern and elegant with subtle shadows
3. Click on any template to view a live demo
4. Use the "Use Template" button when you've found your perfect match

### 3. Configure Your Portfolio

All configuration files are in the `data/` folder:

📁 **data/**
- `usersInfo.ts` - Your name, title, and bio
- `projects.ts` - Your projects
- `skills.ts` - Your technical skills
- `socials.ts` - Your social media links
- `workExperience.ts` - Your work history
- `appSetting.ts` - Template selection and app settings

#### Examples:

**👤 Personal Info** (`usersInfo.ts`):
```typescript
export const UserInfoData = {
  fullName: "Jane Doe",
  tagLine: "Full Stack Developer",
  location: "San Francisco, CA",
  miniBio: "Passionate about creating beautiful web experiences",
  heroImage: {
    type: "url",
    url: "/images/profile.png", // Add image to public/images/
  },
}
```

**🔗 Social Links** (`socials.ts`):
```typescript
export const UserSocialsData = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "you@example.com",
}
```

**💼 Work Experience** (`workExperience.ts`):
```typescript
export const UserWorkExperienceData = [
  {
    company: "Tech Company",
    position: "Senior Developer",
    period: "2022 - Present",
    responsibilities: [
      "Led development of key features",
      "Mentored junior developers",
    ],
  },
]
```

**🛠️ Projects** (`projects.ts`):
```typescript
export const ProjectsData = [
  {
    title: "Project Name",
    description: "A brief description",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/you/project",
    liveUrl: "https://project.com",
    image: "/images/project.png",
  },
]
```

### 4. Select Your Template

In `data/appSetting.ts`:
```typescript
export const AppSettingData = {
  template: AVAILABLE_TEMPLATES.BASE, // or AVAILABLE_TEMPLATES.SHADOW
}
```

## 🎨 Customization

### Images
1. Add your images to `public/images/`
2. Reference them as `/images/your-image.png`

### Colors
Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
    },
  },
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

## ❓ FAQ

### How do I switch templates?
1. Visit `/templates` to preview all templates
2. Choose your preferred template
3. Update `template` in `data/appSetting.ts`

### Can I customize the template design?
Yes! Each template uses Tailwind CSS for styling. You can:
1. Modify colors in `tailwind.config.ts`
2. Edit component styles in their respective files
3. Add new CSS classes as needed

### How do I add my own template?
See our [Contributing Guide](CONTRIBUTING.md) for instructions on creating and submitting new templates.

## 🤝 Need Help?

- 📖 Check [GitHub Issues](https://github.com/IDAN-DEVS/portify/issues)
- 🌟 Star us on GitHub if you like Portify!
- 🤝 Join our community discussions

---
Happy coding! 🎉
