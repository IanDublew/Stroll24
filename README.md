# 🚶‍♀️ Stroll 24 – Nairobi City Guide

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

A curated web app to discover Nairobi's hidden gems, restaurants, events, and attractions.

## 🌟 Features
- 📝 **Curated Blog Posts**: Detailed guides on restaurants, cafes, hotels, and attractions
- 📊 **Category Browsing**: Filter places by food, coffee, brunch, activities, and more
- 🗓️ **Event Listings**: Share and explore weekend events in Nairobi
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile
- 🔥 **Firebase Integration**: Firestore for dynamic content, Firebase Storage for images
- 🔍 **SEO Optimized**: Pre-configured meta tags, sitemaps, and structured data
- 💬 **User Engagement**: Feedback form and subreddit integration for community interaction

## ⚙️ Tech Stack
- **Frontend**: React + React Router
- **Backend**: Firebase Firestore & Hosting
- **Styling**: CSS Modules + Font Awesome
- **Tools**: SEO-friendly setup with React Helmet, Firebase CLI

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or Yarn
- Firebase CLI (for deployment)

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/stroll24.git 
cd stroll24

# 2. Install dependencies
npm install

# 3. Configure Firebase
cp example.firebase.config.js firebase.config.js
# Edit firebase.config.js with your credentials
```

### Development
```bash
npm start
```
Visit http://localhost:3000

## 🛠️ Deployment

```bash
# Build and deploy
npm run build
firebase login
firebase deploy
```

## 🎨 Customization

### Blog Posts
1. Create a new Markdown file in `posts/`
2. Add frontmatter:
```markdown
---
title: "Your Title"
category: "category"
date: "YYYY-MM-DD"
author: "Author Name"
---
```

### Event Listings
Manage events through Firebase Firestore console under `weekendevent` collection.

## 🤝 Contributing
1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
[MIT License](LICENSE)

## 🙏 Acknowledgements
- Built with [Create React App](https://create-react-app.dev/)
- Powered by [Firebase](https://firebase.google.com/)
- Icons by [Font Awesome](https://fontawesome.com/)
- Inspired by Nairobi's vibrant community 🌍

---
*Stroll 24 brings Nairobi to life—one hidden gem at a time.* 🌿✨
