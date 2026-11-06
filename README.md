# Malhotra Dental Clinic site (Next.js 14 + Tailwind)

## Run
npm install && npm run dev   (open http://localhost:3000)

## Assumptions
Dummy phone/WhatsApp (919999999999), address, hours, map, reviews, certifications and images. No privacy page, spam protection or CMS yet. All copy and data live in `lib/site.js`. UI follows the uploaded malhotra_dental_clinic.tsx reference (blue/teal, icon cards, gradient doctor card). Team, awards, reviews, rating and results are sample content: replace before launch and remove any claim the clinic cannot back up.

## Google Sheets (form submissions)
1. New Google Sheet > Extensions > Apps Script, paste:
   function doPost(e){const d=JSON.parse(e.postData.contents);SpreadsheetApp.getActiveSheet().appendRow([new Date(),d.name,d.phone,d.service,d.message]);return ContentService.createTextOutput('ok')}
2. Deploy > New deployment > Web app > Execute as: Me, Access: Anyone. Copy the URL.
3. Put it in `.env.local` as NEXT_PUBLIC_SHEET_URL (and in Vercel env vars). Add NEXT_PUBLIC_GA_ID (GA4, G-XXXX) the same way.

## Deploy on Vercel
Push to GitHub > vercel.com/new > import repo > add the env vars > Deploy > connect domain, then update `site.url` in lib/site.js.

## Replace before launch
Phone/WhatsApp, address, hours, map embed, dentist story, reviews (real Google reviews), certifications, before/after photos (use next/image with real WebP files), logo, FAQ answers (EMI/insurance).

## Launch checklist
Test form + WhatsApp link on a real phone, run Lighthouse (mobile), submit sitemap in Google Search Console, claim Google Business Profile, verify GA4 events.

## Next improvements
CMS (Decap or Sanity), blog detail pages, privacy policy (needed once you store patient data), spam protection, Google Business reviews widget.

## Images
All images are sample SVG illustrations in `public/images` (hero, s1-s7 services, g1-g6 clinic, ba1-ba3 before/after, doctor). To use real photos, save them with the same names as .jpg or .webp, then set `ext` in `lib/site.js`. Google reviews and the 4.9 rating are samples: replace with real reviews and your Google Business link (`site.gbp`).
