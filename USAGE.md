# 🚀 Quick Start Guide - Portify

Welcome to Portify! Create your stunning developer portfolio in minutes. This guide will help you get started quickly.

## 🎯 3 Steps to Your Portfolio

### 1️⃣ Setup (2 minutes)

```bash
# Clone and install
git clone https://github.com/IDAN-DEVS/portify.git
cd portify
npm install   # or: yarn install

# Start development
npm run dev   # or: yarn dev
```

Your site is now running at `http://localhost:3000` 🎉

### 2️⃣ Add Your Info (5 minutes)

All your information goes in the `data` folder:

📁 **data/**

- `usersInfo.ts` - Your name, title, and bio
- `projects.ts` - Your cool projects
- `skills.ts` - Your tech skills
- `socials.ts` - Your social links
- `workExperience.ts` - Your work history

#### Quick Examples:

**🧑‍💻 Personal Info** (`usersInfo.ts`):

```typescript
export const UserInfoData = {
  fullName: "Jane Doe",
  tagLine: "Full Stack Developer",
  location: "San Francisco, CA",
  miniBio: "Passionate about creating beautiful web experiences",
  heroImage: {
    type: "url",
    url: "/images/profile.png", // Add your image to public/images/
  },
}
```

**🛠️ Projects** (`projects.ts`):

```typescript
export const ProjectsData = [
  {
    title: "My Awesome App",
    description: "A cool app that does amazing things",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/you/project",
    liveUrl: "https://myapp.com",
    image: "/images/project.png",
  },
]
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

### 3️⃣ Customize (Optional)

#### 🎨 Theme

Edit colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
      // Add more colors
    },
  },
}
```

#### 🖼️ Images

1. Add images to `public/images/`
2. Reference them as `/images/your-image.png`

## 🚀 Deploy

Ready to go live? Deploy to Vercel in one click:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

## 🆘 Need Help?

- 📖 Check our [GitHub Issues](https://github.com/IDAN-DEVS/portify/issues)
- 🤝 Join our community discussions
- ⭐ Star us on GitHub if you like Portify!

---

Happy coding! 🎉
