# 🌟 AI‑Story‑Crafter

> “Give the AI a scene — it writes the dream.”

---

## 🎯 Project Purpose

AI‑Story‑Crafter empowers users to effortlessly generate creative short stories via text prompts or image uploads. It’s the perfect companion for authors, educators, parents, and anyone looking to spark imagination with AI.

---

## 📸 Project Images

 
| Landing Page | Generator | Story Feed | Mobile View |
|--------------|-----------|------------|-------------|
| ![Home](docs/screenshot-home.png) | ![Generator](docs/screenshot-generator.png) | ![Feed](docs/screenshot-feed.png) | ![Mobile](docs/screenshot-mobile.png) |

---

## ✨ Features

- **Text or Image Input** – Prompt the AI with a descriptive sentence or upload an image to generate a story.
- **Theme Selection** – Choose a tone like “Fantasy”, “Sci‑Fi”, “Mystery” or “Anime” to tailor the story style.
- **Live Markdown Preview** – Instantly see the story rendered with formatting and emojis.
- **Public & Private Stories** – Save stories to your own dashboard or share them publicly.
- **User Authentication** – Secure registration, login, and protected story access.
- **Media Storage** – Uploaded images are stored using Cloudinary.
- **Responsive UI** – Built with Tailwind CSS and designed for accessibility across mobile and desktop.

---

## 🛠️ Tools & Tech

| Component      | Technology                              |
| -------------- | --------------------------------------- |
| Front‑end      | React, Vite, Tailwind CSS               |
| Back‑end       | Node.js, Express                        |
| Database       | MongoDB + Mongoose                      |
| AI Integration | Google Gemini API                       |
| Media Storage  | Cloudinary via Multer                   |
| Auth           | JWT, bcrypt                             |
| UI/UX          | Tailwind CSS, mobile‑responsive layouts |

---

## 🚀 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/mkkapadi12/AI-Story-Crafter.git
cd AI-Story-Crafter

# Back-end setup
cd server
npm install
cp .env.example .env
# Fill in MONGODB_URI, GEMINI_API_KEY, CLOUDINARY_API_KEY/SECRET, JWT_SECRET
npm run dev

# Front-end setup (from root)
npm install
cp .env.example .env
# Set VITE_API=http://localhost:5000 or your deployed server
npm run dev
```

---

## 📺 Roadmap

- Multi-modal input: support for text and image prompts
- Theme-based story generation using Gemini API
- Live Markdown rendering of AI-generated stories
- Save and view public/private stories with user dashboard
- User authentication and secure JWT login
- 📸 Comic Mode: convert story into illustrated panels
- 🎤 AI-generated voice narration of stories
- 💬 Like, comment, and share features for public stories
- 🌐 Internationalization support (i18n)
- 🔗 Share-to-social or export as PDF

---

## 🔮 Future Enhancements

1. **PWA Mode** – Offline support & installable on devices
2. **Story similarity search** – Embed stories & search by theme or mood
3. **Story editor** – Drag-and-drop sections for flexible editing
4. **Analytics dashboard** – Insights on themes, views, and usage trends

---

## 📬 Contact

- **Maintained by**: [Mayur Kapadi](https://github.com/mkkapadi12)
- **Email**: [mayurkapadi12@gmail.com](mailto:mayurkapadi12@gmail.com)
- **Portfolio / Demo**: [https://mayurkapadi24.vercel.app](https://mayurkapadi24.vercel.app)

Contributions, feedback, and PRs are welcome! 🤝

---

_Made with ❤️ by Mayur Kapadi – 2025_
