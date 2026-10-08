---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets:
  - "css/style.css"
  - "css/redesign.css"
  - "js/main.js"
---

# Surface brief: index.html

## Scope and mode

Single-page German restaurant site. Mode: Persuade with an experience-led food narrative, then support exact menu browsing, pickup ordering, reservation, calling, and routing.

## Audience, job, action, proof, constraints

Guests in München must understand the Vietnamese offer, inspect exact menu details, then order for pickup, reserve a table, call, or open a route. Orders and reservations are structured WhatsApp requests to the supplied restaurant number and remain unconfirmed until the restaurant replies. Proof comes from the complete photographed menu, precise local information, and dish-specific photography. Preserve all supplied facts, prices, allergen codes, quantities, and Vietnamese names. No fabricated confirmation, payment flow, delivery service, awards, testimonials, or business history.

## Direction contract

THESIS: “Vietnamese Dining Journal.” A warm editorial restaurant experience built from ivory paper, charcoal rooms, muted burgundy, brass lines, serif display type and real food photography.

OWN-WORLD: Ivory `#fbf4e8` is the page ground, paper `#fffaf0` is the reading surface, charcoal `#11100e` creates dramatic rooms, muted burgundy `#6b2428` owns actions, and brass `#9a7742` structures the page. Cormorant Garamond carries expressive headings and Manrope carries functional content. The original bowl, field and rice-sprout mark identifies Dong Que Quan München.

STORY: Open with the full-bleed dining hero, move through the light restaurant story and dish mosaic, interrupt with the muted burgundy lunch chapter, then enter a charcoal menu room containing an ivory menu book. Continue through speciality stories, gallery, hours, location, reservation and footer.

FIRST VIEWPORT: A full-bleed Vietnamese courtyard photograph uses a centered architectural vanishing point and real dining guests. The transparent 78px header places the seal and wordmark at left, links in the center and one reservation action at right. A centered seal, two-line restaurant name, three actions and three operational facts reproduce the reference composition with Dong Que Quan München content.

FORM: Code-led build. The authoritative visual layer is `css/redesign.css`, loaded after `css/style.css`; the latter remains the structural and behavioral fallback. Existing `js/main.js` functionality is preserved. The signature interaction is a single opening sequence in which hero copy rises and deblurs while the image settles into place. Generic repeated reveals are disabled; filters, buttons, forms, cart, dialog, and navigation states remain tactile. Reduced-motion behavior is mandatory.

RESPONSIVE: Below 1050px the desktop navigation becomes the full-screen mobile menu. At 900px primary grids collapse, the menu paper becomes one column and the toolbar stacks while filters continue to scroll horizontally. Compact controls and forms simplify further at 640px.

FINISH: The implementation is documented as shipped in root `DESIGN.md` and `.impeccable/design.json`. The visual record must follow the authoritative redesign layer, not the superseded porcelain/serif declarations still present in the fallback stylesheet.

## Resolved direction notes

This surface intentionally replaces the former dark matchbook direction. The new hierarchy comes from serif scale, warm paper, charcoal chapter breaks, restrained burgundy, brass hairlines and asymmetric photography. Food imagery remains dish-specific. The complete menu, search and filtering, cart quantities and subtotal, WhatsApp order and reservation requests, direct phone and route actions, lightbox, responsive navigation, accessibility states and reduced-motion support remain product invariants.

## Unresolved decisions

The production canonical URL and HoangCaster profile URL remain unverified and unresolved. Any current canonical value in markup must not be treated as confirmed production truth until the owner supplies it. Instagram and TikTok links continue to use URLs inferred from the supplied public handles.
