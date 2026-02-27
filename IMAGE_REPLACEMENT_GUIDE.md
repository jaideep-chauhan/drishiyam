# Image Replacement Guide - Drishyam Media Website

This guide will help you replace all placeholder images with your own high-quality, relevant images to match your Figma design perfectly.

## 📍 Location: src/pages/HomePage.jsx

### 1. Hero Section - Signature Clips Cards (5 Portrait Images)
**Lines ~53-101**
These should be **vertical portrait photos** of creators/influencers you've worked with.

```javascript
// Replace these URLs with your own images:
Card 1 (Far Left):    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8..."
Card 2 (Left):        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48..."
Card 3 (Center):      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d..."
Card 4 (Right):       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d..."
Card 5 (Far Right):   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e..."
```

**Image Requirements:**
- Aspect ratio: Portrait (3:4 or 2:3)
- Recommended size: 400px × 600px
- Format: JPG, PNG, or WebP
- Content: High-quality photos of real creators/influencers

---

### 2. "We've Worked With" Section (4 Client Images)
**Lines ~118-160**
These should be **square photos** of athletes, creators, or clients you've worked with.

```javascript
// Replace these URLs:
Client 1 (Bottom Left):      "https://images.unsplash.com/photo-1551958219-acbc608c6377..."
Client 2 (Top Center):       "https://images.unsplash.com/photo-1599058917212-d750089bc07e..."
Client 3 (Bottom Right):     "https://images.unsplash.com/photo-1554080353-a576cf803bda..."
Client 4 (Top Right):        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80..."
```

**Image Requirements:**
- Aspect ratio: Square (1:1)
- Recommended size: 500px × 500px
- Format: JPG, PNG, or WebP
- Content: Action shots, portraits of clients/athletes

---

### 3. Design Showcase Section (8 Design Examples)
**Lines ~178-230**
These should be **square thumbnails** of your actual design work (thumbnails, social media posts, reel covers).

```javascript
// Top Row:
Design 1: "https://images.unsplash.com/photo-1561070791-2526d30994b5..."
Design 2: "https://images.unsplash.com/photo-1626785774573-4b799315345d..."
Design 3: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7..."
Design 4: "https://images.unsplash.com/photo-1558655146-d09347e92766..."

// Bottom Row:
Design 5: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf..."
Design 6: "https://images.unsplash.com/photo-1542744094-3a31f272c490..."
Design 7: "https://images.unsplash.com/photo-1557838923-2985c318be48..."
Design 8: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0..."
```

**Image Requirements:**
- Aspect ratio: Square (1:1)
- Recommended size: 400px × 400px
- Format: JPG, PNG, or WebP
- Content: Your best graphic design work, thumbnails, social posts, reel covers

---

### 4. E-Commerce Website Section (2 Website Screenshots)
**Lines ~258-270**
These should be **landscape screenshots** of your website projects.

```javascript
// Replace these URLs:
Website 1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f..."
Website 2: "https://images.unsplash.com/photo-1557821552-17105176677c..."
```

**Image Requirements:**
- Aspect ratio: Landscape (4:3 or 16:10)
- Recommended size: 800px × 600px
- Format: JPG, PNG, or WebP
- Content: Screenshots of websites you've built

---

## 🎯 How to Replace Images

### Option 1: Using Local Images (Recommended)

1. **Save your images** in the `src/assets/` folder with descriptive names:
   ```
   src/assets/
   ├── hero-creator-1.jpg
   ├── hero-creator-2.jpg
   ├── client-athlete-1.jpg
   ├── design-thumbnail-1.jpg
   ├── website-project-1.jpg
   └── ...
   ```

2. **Import them** at the top of `HomePage.jsx`:
   ```javascript
   import heroCreator1 from '../assets/hero-creator-1.jpg';
   import heroCreator2 from '../assets/hero-creator-2.jpg';
   // ... etc
   ```

3. **Replace the URLs** with the imported variables:
   ```javascript
   // Before:
   src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8..."

   // After:
   src={heroCreator1}
   ```

### Option 2: Using Online URLs

If your images are hosted online (Cloudinary, AWS S3, etc.), simply replace the Unsplash URLs directly:

```javascript
// Before:
src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8..."

// After:
src="https://your-cdn.com/your-image.jpg"
```

---

## 🎨 Image Optimization Tips

1. **Compress images** before using them (use TinyPNG or ImageOptim)
2. **Use WebP format** for better performance
3. **Maintain consistent quality** across all images
4. **Ensure good lighting** and professional quality
5. **Use images that reflect your brand** and actual work

---

## 📝 Quick Checklist

- [ ] 5 Hero Section creator portraits
- [ ] 4 Client showcase images
- [ ] 8 Design portfolio thumbnails
- [ ] 2 Website project screenshots
- [ ] All images optimized and compressed
- [ ] All images match your Figma design
- [ ] Test on mobile and desktop

---

## 🚀 After Replacing Images

Run your development server to see the changes:
```bash
npm run dev
```

Your website should now match your Figma design perfectly with your real content!

---

## Need Help?

If you encounter any issues:
1. Check that image paths are correct
2. Verify image formats are supported (JPG, PNG, WebP)
3. Ensure images are not too large (< 500KB each recommended)
4. Clear browser cache if images don't update
