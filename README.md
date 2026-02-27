# Drishyam Media Marketing Agency Website

A stunning, modern marketing agency website built with **React** and **Tailwind CSS**, featuring beautiful animations and a sleek dark theme with blue accents.

## 🌟 Features

### Pages
- **Home Page** - Compelling hero section with signature brand messaging
- **Services Pages**:
  - Graphic Design Services
  - Web Development Services
  - Video Editing Services
- **Testimonials & About** - Client reviews, success stories, and company information

### Design Highlights
- 🎨 Dark theme with signature blue (#0061B0) accents
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎯 Clean, modern UI/UX
- 🌊 Beautiful gradient backgrounds and blur effects

## 🚀 Technology Stack

- **React 18.3.1** - Modern UI framework with .jsx files (no TypeScript)
- **React Router DOM** - Client-side routing
- **Tailwind CSS v4** - Utility-first styling
- **Vite** - Fast build tool and development server

## 📁 Project Structure

```
/src
├── /app
│   └── App.jsx         # Main app with routing
├── /pages             # Page components
│   ├── HomePage.jsx
│   ├── GraphicServices.jsx
│   ├── WebServices.jsx
│   ├── VideoServices.jsx
│   └── Testimonials.jsx
├── /components        # Shared components
│   ├── NavBar.jsx
│   └── Footer.jsx
├── /utils            # Utility functions
│   └── navigation.js
├── /styles           # Global styles
│   ├── index.css
│   ├── theme.css
│   └── tailwind.css
└── /assets           # Images and media
```

## 🎯 Key Features

### Navigation
- Fixed navigation bar with dropdown services menu
- Smooth page transitions
- Scroll-to-top on route change
- Interactive hover effects

### Services Showcase
The website showcases three main service categories:

1. **Graphic Design**
   - Social Media Posts
   - Thumbnails
   - Brochures
   - Posters
   - Album Art Covers
   - Reel Covers

2. **Web Development**
   - E-Commerce Websites
   - Startup Websites
   - Service Websites
   - Custom Web Solutions

3. **Video Editing**
   - Professional video editing services
   - Viral content creation
   - Social media video optimization

### Client Testimonials
- Real client feedback
- Success stories
- About us section
- Company values

## 🎨 Design System

### Colors
- **Primary**: #0061B0 (Signature Blue)
- **Primary Hover**: #0078d4
- **Accent Blue**: #489CB7
- **Teal**: #0678A6
- **Background**: #000000 (Black)
- **Text**: #FFFFFF (White)

### Typography
- **Font Family**: Inter (via Google Fonts)
- **Weights**:
  - Regular (400) - Body text
  - Semi-Bold (600) - Subheadings
  - Bold (700) - Headlines
- **Sizes**: Responsive scaling from mobile to desktop

### Spacing
- Border Radius: 15px (cards), 45px (buttons)
- Consistent padding and margins
- Grid-based layouts

## 🔧 Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd c:\Users\jaideep\Desktop\nagar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Routes
- `/` - Home page
- `/services/graphic` - Graphic design services
- `/services/web` - Web development services
- `/services/video` - Video editing services
- `/testimonials` - Client testimonials and about page

## 🌐 Browser Support

The website is tested and optimized for:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1440px+)
- Laptop (1024px - 1439px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## ✨ Performance

- Fast page loads with Vite
- Optimized images
- Smooth animations with CSS transitions
- Efficient React rendering

## 🎬 Animations

- Smooth page transitions
- Hover effects on interactive elements
- Scroll-triggered animations
- Gradient animations on backgrounds

## 📞 Contact Information

**Drishyam Media Marketing Agency**
- Services: Graphic Design, Web Development, Video Editing
- Tagline: "Crafting designs & strategies that help your brand shine online"

## 🛠️ Customization

### Adding New Pages

1. Create a new component in `/src/pages/`
2. Import and add the route in `/src/app/App.jsx`
3. Update navigation in `/src/components/NavBar.jsx`

### Changing Colors

Edit the color variables in `/src/styles/theme.css`:
```css
:root {
  --brand-blue: #0061B0;
  --brand-blue-dark: #0078d4;
  /* Add your custom colors here */
}
```

### Updating Content

All page content is in the respective component files in `/src/pages/`. Simply edit the JSX to update text, images, or layout.

## 📝 License

© 2025 Drishyam Media Marketing Agency. All Rights Reserved.

## 🙏 Acknowledgments

- Design inspired by modern web design trends
- Built with modern web technologies
- Optimized for user experience and performance

---

Built with ❤️ using React and Tailwind CSS
# drishiyam
