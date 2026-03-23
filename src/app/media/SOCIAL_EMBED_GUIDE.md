# Social Media Integration Guide

This application features a natively architected Next.js Lightbox component inside `src/app/media/page.tsx` that supports high-speed injection of localized media, YouTube, Instagram, and TikTok links.

## How the Media Grid Works
Inside `media/page.tsx`, there is an array called `mediaItems`. Each object defines a block in the Masonry visual archive:

```javascript
{ 
   id: 3, 
   title: 'Tricking Session', 
   type: 'VIDEO', 
   format: 'TIKTOK', 
   embedUrl: 'https://www.tiktok.com/embed/v2/7123456789012345678', 
   category: 'TRAINING', 
   wide: false, 
   tall: true 
}
```

By specifying `format: 'TIKTOK'` and providing the correct `embedUrl`, the Lightbox rendering engine will automatically execute a specialized `iframe` player scaled perfectly for vertical video!

---

## 1. How to get the TikTok Embed URL
1. Go to the TikTok video on your browser (e.g., `https://www.tiktok.com/@keomoni/video/7342...`).
2. Do not use the standard URL! You must use the **V2 Embed Router**.
3. Extract the 19-digit video ID from the end of the URL.
4. Construct the URL like this: `https://www.tiktok.com/embed/v2/YOUR_VIDEO_ID`

*Example:* `embedUrl: 'https://www.tiktok.com/embed/v2/7123456789012345678'`

## 2. How to get the Instagram Embed URL
1. Go to your Instagram Reel or Post on a browser (e.g., `https://www.instagram.com/p/C-XYZ.../`).
2. Add `embed` to the end of the URL before any parameters.

*Example:* `embedUrl: 'https://www.instagram.com/p/C-XYZ123/embed'`

## 3. How to get the YouTube Embed URL
1. Go to a YouTube video.
2. Click **Share** > **Embed**.
3. Look at the `src=` attribute in the requested iframe.

*Example:* `embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'`
