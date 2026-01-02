# Banner Size Guide for Login/Signup Screens

## Current Banner Implementation

**Current Banner URL:**
```
https://res.cloudinary.com/dvkxgrcbv/image/upload/v1767337925/White_Teal_Yellow_And_Blue_Illustrative_Digital_Payment_Solutions_Presentation_1900_x_1000_px_ljtfbw.svg
```

**Current Size:** 1900 x 1000 pixels (as per filename)

## Recommended Banner Sizes

### For Full Screen Background (Current Implementation)

1. **Desktop (Full HD):**
   - Width: 1920px
   - Height: 1080px
   - Aspect Ratio: 16:9
   - Format: SVG, PNG, or JPG

2. **Desktop (4K):**
   - Width: 3840px
   - Height: 2160px
   - Aspect Ratio: 16:9

3. **Mobile:**
   - Width: 1080px
   - Height: 1920px
   - Aspect Ratio: 9:16 (portrait)

### Optimal Size for Responsive Design

**Recommended:** 1920 x 1080px (16:9 aspect ratio)
- Works well on most desktop screens
- Can be scaled down for smaller screens
- Maintains quality on high-DPI displays

## How to Customize Banner

### Option 1: Replace the Image URL

In both `Login.jsx` and `Signup.jsx`, replace the `src` attribute:

```jsx
<img 
  src="YOUR_NEW_BANNER_URL_HERE" 
  alt="Digital Payment Solutions" 
  className="w-full h-full object-cover"
/>
```

### Option 2: Change Banner Positioning

Current: `object-cover` (fills entire area, may crop)
Alternatives:
- `object-contain` - Shows full image, may have gaps
- `object-fill` - Stretches to fill (may distort)
- `object-center` - Centers the image

### Option 3: Adjust Banner Container

Current container classes:
```jsx
<div className="fixed inset-0 w-full h-full z-0 bg-white">
```

You can modify:
- `bg-white` - Change background color
- Add padding/margins if needed
- Change positioning (fixed/absolute)

## File Locations

1. **Login Screen:** `frontend/src/pages/Login.jsx` (Line 46-50)
2. **Signup Screen:** `frontend/src/pages/Signup.jsx` (Line 74-78)

## Current Banner Settings

- **Position:** Fixed (covers entire viewport)
- **Size:** Full width and height
- **Object Fit:** Cover (fills area, maintains aspect ratio)
- **Z-Index:** 0 (behind form)
- **Background:** White

## Tips for Best Results

1. Use high-resolution images (at least 1920x1080)
2. Keep file size optimized (< 500KB recommended)
3. Use SVG format for scalability
4. Ensure important content is in center (may be covered by form)
5. Test on different screen sizes

## Example Customization

If you want to use a different banner:

1. Upload your banner to Cloudinary or your image hosting
2. Update the `src` in both Login.jsx and Signup.jsx
3. Adjust `object-cover` to `object-contain` if you want full image visible
4. Test on different screen sizes

