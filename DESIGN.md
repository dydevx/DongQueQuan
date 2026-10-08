---
name: "Dong Que Quan München"
description: "A warm Vietnamese restaurant identity built from ivory paper, charcoal rooms, muted burgundy and brass."
colors:
  charcoal: "#11100e"
  ink: "#1b1714"
  ivory: "#fbf4e8"
  paper: "#fffaf0"
  paper-muted: "#f3e9d8"
  burgundy: "#6b2428"
  burgundy-deep: "#4c171b"
  brass: "#9a7742"
  herb: "#476245"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.5rem, 6.4vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.9
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  control: "8px"
  surface: "10px"
  framed: "12px"
---

# Design System: Dong Que Quan München

## Direction

**Creative north star: “Vietnamese Dining Journal.”** The site feels like a refined restaurant menu opened in a warm, contemporary dining room. Ivory paper and serif display type bring hospitality; charcoal sections create depth; muted burgundy marks action without shouting; brass lines provide quiet structure. Food and interior photography remain the richest material.

The page borrows the reference site’s editorial pacing—fixed three-part navigation, full-bleed hero, alternating light and dark chapters, and a framed menu-book composition—while keeping an original Dong Que Quan München identity and working restaurant content.

## Identity

- The logo combines a rice bowl, terraced field lines and a rice sprout inside a circular seal.
- The horizontal wordmark is used in the header; the seal becomes the favicon.
- Burgundy is `#6b2428`, with `#4c171b` for hover and emphasis. Do not return to saturated lacquer red.
- Brass is ornamental and structural, not a second CTA color.

## Typography

- Cormorant Garamond carries restaurant names, hero statements and section headings.
- Manrope carries navigation, body text, controls, prices and operational information.
- Display text may be dramatic; functional text never drops below 11px.
- Body copy remains sentence case. Uppercase is reserved for short labels and wordmark details.

## Layout

- Desktop header is 78px and arranged as logo / centered links / utilities.
- The hero fills the first viewport with a centered seal, two-line name, three actions and compact operational facts over a Vietnamese courtyard image.
- Content shells cap at 1180px with generous vertical spacing.
- The full menu sits in a charcoal room: branded dark book frame outside, ivory paper inside, sticky filters on the page.
- At 1050px the navigation becomes a full-screen mobile menu. Major grids collapse to one column by 900px.

## Components

- Primary buttons: muted burgundy, warm-paper text, 8px corners, 50px minimum height.
- Secondary actions: transparent or charcoal with a defined warm hairline.
- Menu filters: horizontally scrollable 8px controls; active uses burgundy.
- Menu rows: no cards; use disciplined spacing, hairlines, aligned prices and clear add controls.
- Media: restrained 10–12px corners and intentional object-position per image.

## Motion

- Keep the one-time page opening and hero image settle.
- Section reveals are short and staggered only where they reinforce reading order.
- Hover motion stays within 2–4px; active controls compress subtly.
- `prefers-reduced-motion` must remove the intro lock and all decorative movement.

## Rules

- Preserve every supplied dish name, price, allergen code, address and opening hour.
- Never reuse a food photo for a different named dish.
- Do not introduce generic Asian symbols; use the restaurant’s rice-field identity.
- Avoid bright red fields, pill-shaped controls, excessive cards, gradient text and ornamental clutter.
- Maintain search, filters, cart, WhatsApp requests, phone, directions, reservation and lightbox behavior.
