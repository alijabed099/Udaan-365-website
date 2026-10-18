# UDAAN 365 — Static Website

A responsive, multi-page static website for UDAAN 365, built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — Home, facilities, scholarships, refund policy, admission offer and document links
- `about.html` — About UDAAN 365 and Centre Head message
- `courses.html` — SIP and repeater programmes, fee structure and scholarship criteria
- `faculty.html` — Three faculty profiles using the supplied faculty cards
- `hostel.html` — Hostel facilities and fee structure
- `contact.html` — Calls, email, WhatsApp and social links

## Run locally
Open `index.html` in a browser. No build step, server, database or framework is required.

## Hosting
Upload the complete contents of this folder to any static hosting provider (for example GitHub Pages, Netlify, Cloudflare Pages or a standard web host). Keep the `assets/` directory alongside the HTML files.

## Contact links
- Call: +91 9181037600 / +91 9181047600
- Email: udaan365education@gmail.com
- WhatsApp opens a prefilled admission enquiry for academic year 2027–2028.
- Instagram and Facebook links are set to the URLs supplied for the institute.

## Source materials
The supplied UDAAN 365 brochure PDF, logo, campus, faculty and classroom images are included in `assets/`. The academic calendar graphic is included as `academic-calendar-2027.jpg`.

Note: Scholarship, fee and refund information is displayed from the provided brochure. Please confirm current eligibility and fee terms directly with UDAAN 365 before publishing any changes.


## Updated UI refresh
- Emerald + sapphire palette, responsive hover/focus states and card/table interactions.
- Lightweight page transitions and scroll reveal animations (respects reduced-motion settings).
- Recognizable inline SVG WhatsApp and email icons linked to the official contact destinations.
- Academic calendar links are grouped on the Contact Us page rather than in the navigation.
- Hostel gallery uses the two newly supplied room photos.


Final UI adjustments: removed the utility top bar from all pages; the home page now has a fixed WhatsApp, call and email contact rail; the campus photo is fitted inside its frame without cropping; and compact academic-session/scholarship cards sit above the photo.


Admission enquiry form: the WhatsApp button opens WhatsApp with a prefilled enquiry to +91 9181037600; the email button opens the visitor's default email application addressed to udaan365education@gmail.com. Because this is a static website, neither option silently sends or stores submissions; the visitor must confirm sending in the chosen app. The Contact Us page includes an embedded Google Map and a directions link. The fixed contact rail is available across all pages.
