# Dong Que Quan München

Statische, responsive Restaurant-Website in deutscher Sprache. Sie verwendet nur HTML5, CSS3 und Vanilla JavaScript.

## Lokal starten

Ein lokaler HTTP-Server wird empfohlen, damit Schriften, Bilder und die Google-Maps-Einbettung wie in Produktion geladen werden.

```powershell
python -m http.server 8080
```

Danach `http://localhost:8080` öffnen.

## Struktur

- `index.html`: semantische Seitenstruktur, SEO, OpenGraph und Restaurant JSON-LD
- `css/style.css`: komplette responsive Gestaltung, lokale Schriften und Reduced-Motion-Regeln
- `js/main.js`: vollständige Speisekarte, Filter, Suche, Warenkorb, WhatsApp-Anfragen, Navigation, Reveal und Lightbox
- `images/`: eigens erzeugte, gerichtsspezifische Fotografie
- `fonts/`: lokal ausgelieferte Cormorant-Garamond- und Manrope-Schriften

## Wichtige Hinweise

- Die Originalfotos der Speisekarte im Projektstamm sind die Datenquelle. Eine doppelte Mittagskarten-Seite wurde nur einmal übernommen.
- Die bereitgestellten Bilder enthalten VS1 bis VS4 sowie VS15 bis VS18. VS5 bis VS14 wurden nicht erfunden.
- Vor dem produktiven Deployment sollte die Canonical-URL in `index.html` gegen die endgültige Domain geprüft werden.
- Warenkorb und Reservierungsformular erstellen strukturierte WhatsApp-Anfragen an `+49 89 20569403`; ein eigenes Bestell- oder Booking-Backend ist nicht erforderlich.
- Der Warenkorb wird lokal im Browser gespeichert. Bestellungen sind als Abholanfragen ausgelegt und erst nach Antwort des Restaurants bestätigt.
- Die 14 PNG-Fotografien enthalten ihre Image-Generation-Prompts als eingebettete Metadaten; die lesbaren Promptdateien liegen unter `.impeccable/prompts/`.

## Kontakt

Dong Que Quan München  
Warngauer Str. 17, 81539 München  
+49 89 20569403  
dongquequan77@gmail.com
