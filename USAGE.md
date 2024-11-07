# 📚 Portify Usage Guide

This guide will walk you through setting up and customizing your Portify portfolio.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Customization](#customization)
- [Templates](#templates)
- [Deployment](#deployment)
- [FAQ](#faq)

## Installation

1. **System Requirements**

   - Node.js 16.8 or later
   - npm or yarn
   - Git

2. **Setup**

   ```bash
   # Clone the repository
   git clone https://github.com/JC-Coder/portify.git

   # Navigate to project directory
   cd portify

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

## Configuration

### Basic Information

Edit `data/usersInfo.ts`:

```typescript
export const UserInfo = {
  fullName: "Your Name",
  tagLine: "Your Title",
  location: "Your Location",
  miniBio: "Your brief bio here...",
};
```

### Social Links

Edit `data/socials.ts` to add your social media profiles:

```typescript
export const UserSocials = {
  github: {
    icon: Github,
    url: "https://github.com/yourusername",
  },
  twitter: {
    icon: TwitterIcon,
    url: "https://twitter.com/yourusername",
  },
  email: {
    icon: Mail,
    url: "your.email@example.com",
  },
};
```

### Projects

Add your projects in `data/projects.ts`:

```typescript
export const UserProjects: Project[] = [
  {
    title: "Project Name",
    role: "Your Role",
    description: "Project description...",
    url: "https://project-url.com",
    previewImage: "https://image-url.com/preview.png",
  },
];
```

### Skills

Configure your skills in `data/skills.ts`:

```typescript
export const UserSkills = [
  {
    name: "Skill Category",
    description: "Brief description",
    projects_completed: "X+",
  },
];
```

### Work Experience

Add your work history in `data/workExperience.ts`:

```typescript
export const UserWorkExperience: WorkExperience[] = [
  {
    company: "Company Name",
    position: "Your Position",
    period: "Start - End Date",
    responsibilities: ["Responsibility 1", "Responsibility 2"],
  },
];
```

## Customization

### Template Selection

Choose your template in `data/appSetting.ts`:

```typescript
export const AppSetting = {
  template: AVAILABLE_TEMPLATES.BASE,
};
```

### Feature Toggles

Enable/disable sections in `data/templates/base.ts`:

```typescript
export const BaseTemplate = {
  features: {
    SOCIALS_SECTION: true,
    SKILLS_SECTION: true,
    PROJECTS_SECTION: true,
    WORK_EXPERIENCE_SECTION: true,
  },
};
```

### Profile Image

Two options for profile images:

1. **Local Image**:

   - Add image to `/public/images/`
   - Update `heroImage` in base template:

   ```typescript
   heroImage: {
     type: "file",
     url: "your-image.png"
   }
   ```

2. **Remote Image**:
   ```typescript
   heroImage: {
     type: "url",
     url: "https://your-image-url.com/image.png"
   }
   ```

## Deployment

Deploy to your preferred platform:

- **Vercel**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JC-Coder/portify)
- **Netlify**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/JC-Coder/portify)

## FAQ

### How do I add a new section?

1. Create component in `components/BaseTemplate/`
2. Add feature toggle in `data/templates/base.ts`
3. Import and add component to `templates/base/page.tsx`

### How do I change the theme?

Edit colors in `app/globals.css` under the `:root` and `.dark` selectors.

### Can I use my own fonts?

Yes, modify the font-family in `app/globals.css` or use Next.js font optimization.
