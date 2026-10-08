const menuGroups = [
  {
    id: "vorspeisen",
    category: "vorspeisen",
    title: "Vorspeisen",
    subtitle: "Gerichte 1 bis 17",
    items: [
      [
        "1",
        "Hoanh Thanh Suppe",
        "Hoanh Thanh Teig, Schweinefleisch, Garnele, Pak Choi",
        "5,90 €",
        "a,e,3,9",
      ],
      ["2", "Gemüse Suppe", "", "4,90 €", "a,e,3,9"],
      [
        "3",
        "Peking Suppe",
        "Ente, Eier, Gemüse, süß und sauer",
        "4,90 €",
        "a,e,3,9",
      ],
      ["4", "Tom Kha Gai", "Hähnchen, Gemüse, Kokosmilch", "4,90 €", "a,e,3,9"],
      [
        "5",
        "Tom Yam Gung",
        "Garnele, Gemüse, süß und sauer",
        "4,90 €",
        "a,e,3,9",
      ],
      [
        "6",
        "Dim Sum",
        "Eine kleine Dumpling und vier Stück (Schweinefleisch, Garnele)",
        "7,90 €",
        "a,e,3,9",
      ],
      [
        "7",
        "Ga Sate Spieße in Erdnuss-Soße",
        "Chicken satay skewers in peanut sauce (3 Stk.)",
        "6,90 €",
        "a,e,3,9",
      ],
      [
        "8",
        "Vietnamesische Frühlingsrollen",
        "Reispapier, Schweinefleisch, Gemüse (3 Stk.)",
        "5,90 €",
        "a,e,3,9",
      ],
      [
        "9",
        "Cha gio chay (6 Stk.) Vegetarisch",
        "Knusprige Frühlingsrolle mit Gemüse",
        "4,90 €",
        "a,e,3,9",
      ],
      ["10", "Banh Phong Tom", "Krabbenchips", "2,50 €", "a,e,3,9"],
      ["11", "Dau Chao Quay", "Frittierte Teigstange", "1,50 €", "a,e,3,9"],
      [
        "12",
        "Goi Cuon (2 Stk.)",
        "Sommerrollen, eingerollt in Reispapier, Schweinefleisch, Reisnudeln, Garnelen, frischer Salat und Kräuter, dazu Hoisinsoße mit Erdnüssen",
        "6,90 €",
        "a,b,e",
      ],
      [
        "13",
        "Goi Cuon chay (2 Stk.) Vegetarisch",
        "Sommerrollen mit Tofu, Salat und Kräutern, Reisnudeln und Hoisin Sauce",
        "5,90 €",
        "a,e,3,9",
      ],
      [
        "14",
        "Goi Du Du",
        "Grüner Papayasalat mit getrocknetem Fisch, verschiedenem Gemüse und Toppings, mit Krabbenchips",
        "10,90 €",
        "a,b,3,9",
      ],
      [
        "15",
        "Goi Thap Cam",
        "Frischer Gemüsesalat mit Garnelen, Schweinefleisch und Fischsoße, mit Krabbenchips",
        "10,90 €",
        "a,b,3,9",
      ],
      [
        "16",
        "Banh Bao Chay (Vegetarisch)",
        "Teigtaschen gefüllt mit vegetarischem Hackfleisch und Gemüse",
        "5,90 €",
        "a,e,3,9",
      ],
      [
        "17",
        "Banh Bao",
        "Teigtaschen gefüllt mit Schweinehackfleisch, Gemüse, Ei und vietnamesischen Salamischeiben",
        "6,90 €",
        "a,e,3,9",
      ],
    ],
  },
  {
    id: "vegetarisch",
    category: "vegetarisch",
    title: "Vegetarisch",
    subtitle: "V01 bis V17",
    items: [
      ["V01", "Gebratenes Gemüse mit Tofu", "", "10,90 €", ""],
      ["V02", "Frisches Wokgemüse", "", "10,90 €", ""],
      [
        "V03",
        "Gebratenes Gemüse nach „Gong Bao Art“ (pikant)",
        "",
        "10,90 €",
        "",
      ],
      ["V04", "Tom Yum gebratener Reis (scharf)", "", "9,90 €", ""],
      ["V05", "Gebratene Nudeln mit Gemüse", "", "9,90 €", ""],
      ["V06", "Rot Curry mit Tofu, Gemüse", "", "11,90 €", ""],
      [
        "V07",
        "Mit Kho nam rom Chay",
        "Geschmorte Jackfrucht, Champignons, gebratenes Gemüse",
        "10,90 €",
        "",
      ],
      [
        "V08",
        "Dau Hu Sot Ca Chay",
        "Gebratenes Tofu mit Tomaten in Tomatensoße und dazu Reis",
        "10,90 €",
        "",
      ],
      [
        "V09",
        "Bun Cha Gio Chay (6 Stk. / 6 pieces)",
        "Reisnudeln mit vegetarischen Frühlingsrollen und Gemüse",
        "12,90 €",
        "",
      ],
      [
        "V10",
        "Bun Dau Hu Chay",
        "Reisnudeln mit vegetarischem Tofu und Kräutern, Erdnuss, Röstzwiebeln",
        "12,90 €",
        "",
      ],
      [
        "V11",
        "Bun thit nuong chay",
        "Reisnudeln mit gegrilltem Soja-Fleisch-Medaillons, Tofu mit einer würzigen Fischsoße oder Sojasoße und verschiedenen Kräutern, Erdnuss, Röstzwiebeln",
        "12,90 €",
        "",
      ],
      [
        "V12",
        "Bun Bo La Lot Chay",
        "Reisnudeln mit veganem Hackfleisch, gerollt in La-Lot-Blättern, mit einer würzigen Fischsoße und Kräutern, Erdnuss, Röstzwiebeln",
        "12,90 €",
        "",
      ],
      [
        "V13",
        "Banh Xeo Chay (Pfannkuchen)",
        "Reismehl, Tofu, veganes Hackfleisch und Salat, Kräuter",
        "12,90 €",
        "",
      ],
      [
        "V14",
        "Banh Canh xao Chay",
        "Gebratene Udon Nudeln mit Gemüse",
        "12,90 €",
        "",
      ],
      [
        "V15",
        "Banh Canh xao Dau Hu",
        "Gebratene Udon Nudeln mit Tofu und Gemüse",
        "12,90 €",
        "",
      ],
      [
        "V16",
        "Pho Tofu",
        "Reisnudelsuppe mit Tofu und frischen Kräutern",
        "12,90 €",
        "",
      ],
      [
        "V17",
        "Pad Thai Tofu",
        "Gebratene Reisnudeln mit Tofu und Erdnüssen",
        "12,90 €",
        "",
      ],
    ],
  },
  {
    id: "fleisch",
    category: "hauptspeisen",
    title: "Hauptspeisen · Fleisch",
    subtitle: "Rinderlende und Schweinelende",
    items: [
      [
        "18",
        "Rinderlende gebacken",
        "Mit pikanter süß-saurer Soße",
        "18,90 €",
        "a,3,9",
      ],
      [
        "19",
        "Rinderlende gebraten",
        "Mit buntem Gemüse und Austernsoße",
        "18,90 €",
        "a,b,3,9",
      ],
      [
        "20",
        "Rinderlende gebraten nach Peking Art",
        "Mit Gemüsestreifen und Chili (scharf)",
        "18,90 €",
        "a,3,9",
      ],
      ["21", "Rinderlende in Thai Rot Curry", "Mit Gemüse", "18,90 €", ""],
      [
        "22",
        "Schweinelende gebraten",
        "Mit Chili, Knoblauch, Zwiebeln und Gemüse",
        "17,90 €",
        "a,2,3,9",
      ],
      [
        "23",
        "Schweinelende gebraten",
        "Mit süß-saurer Soße, frischer Ananas und Gemüse",
        "17,90 €",
        "a,h,g,3,9",
      ],
      [
        "24",
        "Schweinelende „Gong Bao“",
        "Mit Cashewkernen und Gemüse (scharf)",
        "17,90 €",
        "a,h,g,3,9",
      ],
      [
        "25",
        "Schweinelende",
        "Mit gebratenen Nudeln und Gemüse",
        "17,90 €",
        "a,2",
      ],
    ],
  },
  {
    id: "gefluegel",
    category: "hauptspeisen",
    title: "Hauptspeisen · Geflügel",
    subtitle: "Ente, Hähnchen und Pad Thai",
    items: [
      [
        "26",
        "Halbe Ente gegrillt auf Thai Rot Curry",
        "Gemüse mit Limettenblättern (scharf)",
        "19,90 €",
        "a,e,3,9",
      ],
      [
        "27",
        "Halbe Ente nach traditioneller Art",
        "Mit Pak-Choi-Gemüse und süßer Sojasoße",
        "19,90 €",
        "a,f,2,3,9",
      ],
      [
        "28",
        "Halbe Ente gegrillt",
        "Mit süß-saurer Soße und Gemüse",
        "19,90 €",
        "a,2,3,9",
      ],
      [
        "29",
        "Halbe Ente gegrillt",
        "Auf Gemüse und Hoisin-Soße",
        "19,90 €",
        "a,3,9",
      ],
      [
        "30",
        "Thai Gelb Curry mit Hähnchenbrust",
        "Limettenblätter und frische Ananas",
        "17,90 €",
        "a,g",
      ],
      [
        "31",
        "Hähnchen gebraten",
        "Mit Zitronengras, Zwiebeln, Chili und Gemüse",
        "17,90 €",
        "a,3,9",
      ],
      [
        "32",
        "Hähnchen gebraten",
        "Mit Zwiebeln, Ingwer und Gemüse",
        "17,90 €",
        "a,3,9",
      ],
      [
        "33",
        "Pad Thai · Gebratene Reisbandnudeln",
        "Mit Hähnchen und Erdnüssen",
        "17,90 €",
        "a,e,f",
      ],
    ],
  },
  {
    id: "meeresfruechte",
    category: "hauptspeisen",
    title: "Hauptspeisen · Meeresfrüchte",
    subtitle: "Riesengarnelen, Fisch und Meeresfrüchte",
    items: [
      [
        "34",
        "Riesengarnelen in Tempurateig",
        "Dazu Ingwer-Pflaumensoße und Gemüse",
        "20,90 €",
        "a,b,3,9",
      ],
      [
        "35",
        "Riesengarnelen in Meersalz gebraten",
        "Mit Zwiebeln und Gemüse",
        "20,90 €",
        "a,b,3,9",
      ],
      [
        "36",
        "Riesengarnelen gebraten",
        "Mit Zitronengras, Chili und Gemüse",
        "20,90 €",
        "a,b,3,9",
      ],
      [
        "37",
        "Thai Rot Curry mit Riesengarnelen",
        "Gemüse und Limettenblätter (scharf)",
        "20,90 €",
        "a,b,3,9",
      ],
      [
        "38",
        "Lachsfilet gegrillt auf Thai Rot Curry",
        "Mit Gemüse",
        "20,90 €",
        "a,g,d,4",
      ],
    ],
  },
  {
    id: "spezialitaeten",
    category: "spezialitaeten",
    title: "Vietnamesische Spezialitäten",
    subtitle: "Originale Gerichte aus unserer Karte",
    items: [
      [
        "VS1",
        "Pho Bo / Ga",
        "Reisbandnudelsuppe mit Rindfleisch oder Hähnchen und frischen Kräutern (Sojasprossen, Basilikum, Koriander, Zwiebel, Frühlingszwiebel)",
        "15,90 €",
        "a,e,c,3,9",
      ],
      [
        "VS2",
        "Pho bat da",
        "Reisbandnudelsuppe mit Rindsteak und frischen Kräutern (Sojasprossen, Basilikum, Koriander, Zwiebel, Frühlingszwiebel) in einer Steinschale",
        "19,90 €",
        "a,e,c,3,9",
      ],
      [
        "VS3",
        "Bun Bo Hue",
        "Reisnudelsuppe mit Rindfleisch und Schweinefleisch, die leicht scharf-sauer gewürzt ist, und frischen Kräutern",
        "15,90 €",
        "a,e,c,3,9",
      ],
      [
        "VS4",
        "Hu tieu Nam Vang",
        "Reisnudelsuppe mit Schweinefleisch, Garnelen, Wachteleiern, verschiedenen Toppings und frischen Kräutern",
        "15,90 €",
        "a,e,c,3,9",
      ],
      [
        "VS15",
        "Canh ga chien nuoc mam",
        "In Fischsoße gebratene Hähnchenflügel mit Reis",
        "11,90 €",
        "a,d,1,2,9",
      ],
      [
        "VS16",
        "Xoi Ga Roti",
        "Klebreis mit Hähnchenfleisch, eingelegten Karotten und Blumenkohl",
        "10,90 €",
        "a,2,3,9",
      ],
      [
        "VS17",
        "Lau Hai San (Hot Pot für 2 Personen)",
        "Hot Pot mit Garnelen, Tintenfisch, Fisch, Rindfleisch, Reisnudeln, Instant-Nudeln und frischem Gemüse",
        "49,90 €",
        "a,b,3,9",
      ],
      [
        "VS18",
        "Dong Que Platte (Platte für 2 Personen)",
        "2 Suppen, 1 Papayasalat und eine Fingerfoodplatte mit verschiedenen Fleischsorten wie Chicken Wings, vegetarischen Frühlingsrollen sowie Frühlingsrollen mit Schweinefleisch, gebratenem Rindfleisch gerollt in La-Lot-Blättern und dazu Fischsoße",
        "39,90 €",
        "a,b,3,9",
      ],
    ],
  },
  {
    id: "dessert",
    category: "dessert",
    title: "Dessert",
    subtitle: "Allergencodes der Kategorie: a,c,e,h,9",
    items: [
      [
        "39",
        "Mochi",
        "Mit Kokos-, Grüntee- oder Mango-Füllung",
        "4,90 €",
        "a,c,e,h,9",
      ],
      [
        "40",
        "Gebackene Banane",
        "Mit Vanilleeis, Honig und Mandeln",
        "5,90 €",
        "a,c,e,h,9",
      ],
      [
        "41",
        "Gebackene Apfel",
        "Mit Vanilleeis, Honig und Mandeln",
        "5,90 €",
        "a,c,e,h,9",
      ],
      [
        "42",
        "Banh Flan",
        "Karamell mit Milch, Ei und Kaffee",
        "3,90 €",
        "a,c,e,h,9",
      ],
      [
        "43",
        "Banh Cam",
        "Klebreismehl mit Sesam und roten Bohnen",
        "4,90 €",
        "a,c,e,h,9",
      ],
      [
        "44",
        "Banh Chuoi",
        "Klebreis mit Banane, Kuchen und Kokosnuss",
        "4,90 €",
        "a,c,e,h,9",
      ],
      [
        "45",
        "Sam Bo Luong",
        "Ginseng, getrocknete Jujube, getrocknete Longanfrüchte, Schneepilz, Gojibeeren und Algen",
        "5,50 €",
        "a,c,e,h,9",
      ],
      [
        "46",
        "Che Thai Sau Rieng",
        "Kokosmilch, Bohnen, Erdnüsse, Jackfrucht, Kräutergelee, Wasserkastanie, Cendol und Durian",
        "5,90 €",
        "a,c,e,h,9",
      ],
    ],
  },
  {
    id: "alkoholfrei",
    category: "getraenke",
    title: "Alkoholfreie Getränke",
    subtitle: "Erfrischungen",
    items: [
      ["1", "Wasser still oder spritzig", "0,25 l", "2,50 €", ""],
      ["2", "Wasserflasche still oder spritzig", "1 l", "6,20 €", ""],
      ["3", "Cola, Cola light, Fanta", "0,4 l", "3,20 €", "1,3,11"],
      ["4", "Apfelschorle, Mangoschorle, Lycheeschorle", "0,4 l", "3,20 €", ""],
      [
        "5",
        "Guavaschorle, Soursopschorle, Rhabarberschorle",
        "0,4 l",
        "3,20 €",
        "",
      ],
      ["6", "Spezi", "0,5 l", "3,20 €", ""],
    ],
  },
  {
    id: "vietnamesische-getraenke",
    category: "getraenke",
    title: "Vietnamesische Getränke",
    subtitle: "Kalt serviert",
    items: [
      ["7", "Sting (Red Ginseng) (Vietnam)", "0,32 l", "3,20 €", ""],
      ["7A", "RedBull (Vietnam)", "0,25 l", "3,20 €", ""],
      ["8", "Tac Xi Muoi (Mui Kumquat)", "0,4 l", "4,90 €", "9"],
      ["9", "Nuoc Da Me (Tamarinden-Eiswürfel)", "0,4 l", "4,90 €", "2"],
      ["10", "Nuoc Da Chanh (Zitronensaft-Eiswürfel)", "0,4 l", "4,90 €", ""],
      ["11", "Nuoc Mia (Zuckerrohrsaft)", "0,4 l", "5,90 €", ""],
      ["12", "Sinh to Bo (Avocado Smoothie)", "0,4 l", "5,90 €", ""],
      ["12", "Sinh to Mang Cau (Soursop Smoothie)", "0,4 l", "5,90 €", ""],
      ["12", "Sinh to Dau (Erdbeer Smoothie)", "0,4 l", "5,90 €", ""],
      ["12", "Sinh to Xoai (Mango Smoothie)", "0,4 l", "5,90 €", ""],
    ],
  },
  {
    id: "tee-kaffee",
    category: "getraenke",
    title: "Tee & Kaffee",
    subtitle: "Heiß und aromatisch",
    items: [
      ["13", "Tee (Jasmin, Grün, Ingwer)", "", "2,20 €", ""],
      [
        "14",
        "Vietnamesischer Kaffee oder Bac Xiu mit Eiswürfel",
        "",
        "4,20 €",
        "",
      ],
      ["15", "Espresso", "", "2,80 €", ""],
      ["16", "Cappuccino", "", "3,20 €", ""],
    ],
  },
  {
    id: "bier",
    category: "getraenke",
    title: "Bier",
    subtitle: "Flasche",
    items: [
      ["17", "Weißbier", "0,5 l", "4,20 €", "a1,a2"],
      ["18", "Weißbier alkoholfrei", "0,5 l", "4,20 €", ""],
      ["19", "Lagerbier hell", "0,5 l", "4,20 €", "a2"],
      ["20", "Lagerbier hell alkoholfrei", "0,5 l", "4,20 €", ""],
      ["21", "Dunkel Weißbier", "0,5 l", "4,20 €", ""],
      ["22", "Saigon Bier (vietnamesisch)", "0,30 l", "4,90 €", ""],
      ["23", "Chang Bier (thailändisch)", "0,32 l", "4,70 €", ""],
    ],
  },
  {
    id: "cocktails",
    category: "getraenke",
    title: "Cocktails",
    subtitle: "Mit oder ohne Alkohol",
    items: [
      [
        "24",
        "Cocktail (Pina Colada) mit oder ohne Alk.",
        "0,4 l",
        "6,90 €",
        "",
      ],
      ["25", "Aperol Spritz", "", "6,90 €", ""],
      ["26", "Long Drink oder Wodka", "0,4 l", "7,90 €", ""],
      ["27", "Chivas Cola oder Chivas Cocktail", "0,4 l", "7,90 €", ""],
      ["28", "Sprizzero Hugo", "0,4 l", "6,90 €", ""],
      ["29", "Mionetto Hugo", "0,4 l", "6,90 €", ""],
      ["30", "Sprittzoso (La Gioiosa)", "Flasche 200 ml", "6,90 €", ""],
    ],
  },
  {
    id: "rotwein",
    category: "getraenke",
    title: "Rotwein",
    subtitle: "0,2 l",
    items: [
      ["31", "Markowitsch", "0,2 l", "6,90 €", ""],
      ["32", "Merlot (TREVENEZIE)", "0,2 l", "6,90 €", ""],
      ["33", "Zenato", "0,2 l", "6,90 €", ""],
    ],
  },
  {
    id: "weisswein",
    category: "getraenke",
    title: "Weißwein",
    subtitle: "Wein und Prosecco",
    items: [
      ["34", "Weinschorle", "", "6,90 €", ""],
      ["35", "Pinot Gigio", "0,2 l", "6,90 €", ""],
      ["36", "Zenato", "0,2 l", "6,90 €", ""],
      ["37", "Poggio Dei Vegneti", "0,2 l", "6,90 €", ""],
      ["38", "CA VEGAR Custoza", "0,2 l", "6,90 €", ""],
      ["39", "LA Gioiosa Prosecco", "0,2 l", "5,90 €", ""],
      ["40", "Prosecco extra dry", "Flasche 200 ml", "6,90 €", ""],
      ["41", "Maschio Rose", "Flasche 200 ml", "6,90 €", ""],
    ],
  },
  {
    id: "schnaps",
    category: "getraenke",
    title: "Schnaps",
    subtitle: "1 Shot",
    items: [
      ["42", "Wodka", "1 Shot", "5,90 €", ""],
      ["43", "Klebreiswein Vietnam Schnaps", "1 Shot", "5,90 €", ""],
      ["44", "Haselnuss oder Alpen Marille Schnaps", "1 Shot", "5,90 €", ""],
      ["45", "Cinzano oder Martini Schnaps", "1 Shot", "5,90 €", ""],
    ],
  },
  {
    id: "mittag-rind",
    category: "mittag",
    title: "Mittagskarte · Rinderlende",
    subtitle: "Montag bis Sonntag · 11:00 bis 15:00 Uhr",
    items: [
      [
        "M14",
        "Rinderlende gebraten",
        "Mit Gemüse und Austernsoße",
        "14,90 €",
        "a,3,9",
      ],
      [
        "M15",
        "Rinderlende gebraten",
        "Mit Thai Basilikum und Chili",
        "14,90 €",
        "a,g,f",
      ],
      [
        "M16",
        "Rinderlende gebraten nach „Peking Art“",
        "Mit Gemüse (pikant)",
        "14,90 €",
        "a",
      ],
      [
        "M17",
        "Rinderlende in Thai Rot Curry",
        "Mit Gemüse",
        "14,90 €",
        "a,4,9",
      ],
      [
        "M18",
        "Gebratene Nudeln",
        "Mit Rinderlende und Gemüse",
        "14,90 €",
        "a,3,9",
      ],
      [
        "M19",
        "Gebratene Reisbandnudel",
        "Mit Rinderlende und Gemüse",
        "14,90 €",
        "a,2,9",
      ],
    ],
  },
  {
    id: "mittag-schwein",
    category: "mittag",
    title: "Mittagskarte · Schweinelende",
    subtitle: "Montag bis Sonntag · 11:00 bis 15:00 Uhr",
    items: [
      [
        "M20",
        "Schweinelende gebacken",
        "Mit pikanter süß-saurer Soße",
        "13,90 €",
        "a,e,f,2",
      ],
      [
        "M21",
        "Schweinelende gebacken",
        "Mit Cashewkernen nach „Gong Bao Art“ (pikant)",
        "13,90 €",
        "a,e,f,2",
      ],
    ],
  },
  {
    id: "mittag-meer",
    category: "mittag",
    title: "Mittagskarte · Meeresfrüchte & Fisch",
    subtitle: "Montag bis Sonntag · 11:00 bis 15:00 Uhr",
    items: [
      [
        "M22",
        "Riesengarnelen in Thai Rot Curry",
        "Mit Gemüse",
        "14,90 €",
        "a,g,4",
      ],
      [
        "M23",
        "Riesengarnelen gebraten",
        "Mit Cashewkernen nach „Gon Bou Art“ (pikant)",
        "14,90 €",
        "a,e,1,4,9",
      ],
      [
        "M24",
        "Riesengarnelen",
        "In einer pikanten süß-sauren Tamarindensoße",
        "14,90 €",
        "a,b,2,3,9",
      ],
      [
        "M25",
        "Gebratene Thai-Reis mit Garnelen",
        "Gemüse und Curry",
        "14,90 €",
        "a,b,d",
      ],
      [
        "M26",
        "Gebratene Udon Nudeln",
        "Mit Garnelen und Gemüse",
        "14,90 €",
        "a,f,3,9",
      ],
      [
        "M27",
        "Gegrillt Lachsfilet",
        "Auf Thai Rot Curry Gemüse",
        "14,90 €",
        "a,g,d,4",
      ],
    ],
  },
];

const menuContent = document.querySelector("#menu-content");
const menuStatus = document.querySelector("#menu-status");
const menuEmpty = document.querySelector("#menu-empty");
const searchInput = document.querySelector("#menu-search");
const menuFilters = document.querySelector("#menu-filters");
const filterButtons = [...document.querySelectorAll(".filter-button")];
let activeFilter = "all";

const normalise = (value) =>
  value
    .toLocaleLowerCase("de-DE")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function itemTemplate(item, group) {
  const [number, name, description, price, allergens] = item;
  const key = `${group.id}::${group.items.indexOf(item)}`;
  return `<article class="menu-item">
    <div class="menu-item-copy">
      <div class="menu-item-head"><span class="menu-number">${number}</span><h4>${name}</h4></div>
      ${description ? `<p class="menu-description">${description}</p>` : ""}
      ${allergens ? `<p class="menu-meta">Allergene: ${allergens}</p>` : ""}
    </div>
    <div class="menu-item-actions">
      <span class="menu-price">${price}</span>
      <button class="menu-add" type="button" data-cart-key="${key}" aria-label="${number} ${name} zum Warenkorb hinzufügen">Hinzufügen</button>
    </div>
  </article>`;
}

function renderMenu() {
  const query = normalise(searchInput.value.trim());
  let total = 0;
  const groups = menuGroups
    .map((group) => {
      if (activeFilter !== "all" && group.category !== activeFilter) return "";
      const matches = group.items.filter((item) =>
        normalise(item.join(" ")).includes(query),
      );
      if (!matches.length) return "";
      total += matches.length;
      return `<section class="menu-group" data-group="${group.category}" aria-labelledby="group-${group.id}">
      <header class="menu-group-header"><span class="menu-group-count">${matches.length} ${matches.length === 1 ? "Gericht" : "Gerichte"}</span><h3 id="group-${group.id}">${group.title}</h3><p class="menu-group-subtitle">${group.subtitle}</p></header>
      <div class="menu-list">${matches.map((item) => itemTemplate(item, group)).join("")}</div>
    </section>`;
    })
    .join("");
  menuContent.innerHTML = groups;
  menuEmpty.hidden = total !== 0;
  menuStatus.textContent = total === 1 ? "1 Eintrag" : `${total} Einträge`;
}

function animateMenuRefresh() {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    typeof menuContent.animate !== "function"
  )
    return;
  menuContent.animate(
    [
      { opacity: 0.35, transform: "translateY(10px)", filter: "blur(3px)" },
      { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
    ],
    { duration: 320, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
  );
}

function centerActiveFilter(button) {
  if (!menuFilters) return;
  const filtersRect = menuFilters.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  const targetLeft =
    menuFilters.scrollLeft +
    buttonRect.left -
    filtersRect.left -
    (menuFilters.clientWidth - buttonRect.width) / 2;
  menuFilters.scrollTo({
    left: Math.max(0, targetLeft),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

function setFilter(filter, shouldScroll = false) {
  activeFilter = filter;
  filterButtons.forEach((button) => {
    const selected = button.dataset.filter === filter;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
    if (selected) centerActiveFilter(button);
  });
  renderMenu();
  animateMenuRefresh();
  if (shouldScroll)
    document
      .querySelector("#speisekarte")
      .scrollIntoView({ behavior: "smooth", block: "start" });
}

filterButtons.forEach((button) =>
  button.addEventListener("click", () => setFilter(button.dataset.filter)),
);
searchInput.addEventListener("input", renderMenu);
document.querySelector("#reset-menu").addEventListener("click", () => {
  searchInput.value = "";
  setFilter("all");
  searchInput.focus();
});
document
  .querySelectorAll("[data-open-filter]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      setFilter(button.dataset.openFilter, true),
    ),
  );
renderMenu();

const WHATSAPP_NUMBER = "498920569403";
const CART_STORAGE_KEY = "dong-que-quan-cart-v1";
const inventory = new Map();
menuGroups.forEach((group) =>
  group.items.forEach((item, itemIndex) => {
    const [number, name, description, price, allergens] = item;
    inventory.set(`${group.id}::${itemIndex}`, {
      key: `${group.id}::${itemIndex}`,
      number,
      name,
      description,
      price,
      allergens,
      group: group.title,
    });
  }),
);

function readCart() {
  try {
    const stored = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    if (!Array.isArray(stored)) return new Map();
    return new Map(
      stored
        .filter(({ key, quantity }) => inventory.has(key) && Number.isInteger(quantity))
        .map(({ key, quantity }) => [key, Math.min(99, Math.max(1, quantity))]),
    );
  } catch {
    return new Map();
  }
}

let cart = readCart();
let toastTimer;

const cartDialog = document.querySelector("#cart-dialog");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartTotal = document.querySelector("#cart-total");
const cartCountElements = document.querySelectorAll("[data-cart-count]");
const cartSubmit = document.querySelector(".cart-submit");
const orderForm = document.querySelector("#order-form");
const cartToast = document.querySelector("#cart-toast");

const priceToCents = (price) => {
  const match = price.match(/(\d+),(\d{2})/);
  return match ? Number(match[1]) * 100 + Number(match[2]) : 0;
};

const formatEuro = (cents) =>
  new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);

function saveCart() {
  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(
        [...cart].map(([key, quantity]) => ({ key, quantity })),
      ),
    );
  } catch {
    // The cart still works for the current page if storage is unavailable.
  }
}

function getCartDetails() {
  return [...cart]
    .map(([key, quantity]) => ({ ...inventory.get(key), quantity }))
    .filter(({ name }) => name);
}

function renderCart() {
  const details = getCartDetails();
  const itemCount = details.reduce((sum, item) => sum + item.quantity, 0);
  const total = details.reduce(
    (sum, item) => sum + priceToCents(item.price) * item.quantity,
    0,
  );

  cartCountElements.forEach((element) => {
    element.textContent = String(itemCount);
    element.setAttribute(
      "aria-label",
      itemCount === 1 ? "1 Artikel" : `${itemCount} Artikel`,
    );
  });
  cartTotal.textContent = formatEuro(total);
  cartEmpty.hidden = details.length !== 0;
  cartItems.hidden = details.length === 0;
  cartSubmit.disabled = details.length === 0;

  cartItems.innerHTML = details
    .map(
      (item) => `<article class="cart-item">
        <div class="cart-item-copy">
          <p>${item.group} · ${item.number}</p>
          <h3>${item.name}</h3>
          <span>${item.price}</span>
        </div>
        <div class="quantity-control" aria-label="Menge für ${item.name}">
          <button type="button" data-cart-action="decrease" data-cart-key="${item.key}" aria-label="Menge von ${item.name} verringern">-</button>
          <output aria-live="polite">${item.quantity}</output>
          <button type="button" data-cart-action="increase" data-cart-key="${item.key}" aria-label="Menge von ${item.name} erhöhen">+</button>
        </div>
        <button class="cart-remove" type="button" data-cart-action="remove" data-cart-key="${item.key}">Entfernen</button>
      </article>`,
    )
    .join("");
}

function showCartToast(message) {
  clearTimeout(toastTimer);
  cartToast.textContent = message;
  cartToast.hidden = false;
  requestAnimationFrame(() => cartToast.classList.add("is-visible"));
  toastTimer = setTimeout(() => {
    cartToast.classList.remove("is-visible");
    setTimeout(() => {
      cartToast.hidden = true;
    }, 220);
  }, 2600);
}

function addToCart(key) {
  const item = inventory.get(key);
  if (!item) return;
  cart.set(key, Math.min(99, (cart.get(key) || 0) + 1));
  saveCart();
  renderCart();
  animateCartFeedback();
  showCartToast(`${item.name} wurde hinzugefügt.`);
}

function animateCartFeedback() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  cartCountElements.forEach((element) =>
    element.animate(
      [
        { transform: "scale(1) rotate(0deg)" },
        { transform: "scale(1.22) rotate(-7deg)", offset: 0.48 },
        { transform: "scale(1) rotate(0deg)" },
      ],
      { duration: 360, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
    ),
  );
}

const addButtonTimers = new WeakMap();

function showAddedState(button) {
  clearTimeout(addButtonTimers.get(button));
  button.textContent = "Hinzugefügt";
  button.classList.add("is-added");
  const timer = window.setTimeout(() => {
    if (!button.isConnected) return;
    button.textContent = "Hinzufügen";
    button.classList.remove("is-added");
  }, 1100);
  addButtonTimers.set(button, timer);
}

menuContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-key]");
  if (!button || button.dataset.cartAction) return;
  addToCart(button.dataset.cartKey);
  showAddedState(button);
});

function openCart() {
  if (!mobileNav.hidden) closeMobileMenu();
  renderCart();
  if (!cartDialog.open) cartDialog.showModal();
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartDialog.close();
  document.body.classList.remove("cart-open");
}

document
  .querySelectorAll("[data-open-cart]")
  .forEach((button) => button.addEventListener("click", openCart));
document
  .querySelector(".cart-close")
  .addEventListener("click", closeCart);
document.querySelector("[data-cart-to-menu]").addEventListener("click", () => {
  closeCart();
  document
    .querySelector("#speisekarte")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});
cartDialog.addEventListener("click", (event) => {
  if (event.target === cartDialog) closeCart();
});
cartDialog.addEventListener("close", () =>
  document.body.classList.remove("cart-open"),
);

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-action]");
  if (!button) return;
  const { cartAction: action, cartKey: key } = button.dataset;
  const quantity = cart.get(key) || 0;
  if (action === "increase") cart.set(key, Math.min(99, quantity + 1));
  if (action === "decrease" && quantity > 1) cart.set(key, quantity - 1);
  if (action === "decrease" && quantity === 1) cart.delete(key);
  if (action === "remove") cart.delete(key);
  saveCart();
  renderCart();
  animateCartFeedback();
});

function setFieldError(input, message) {
  const error = document.querySelector(`[data-error-for="${input.id}"]`);
  input.setAttribute("aria-invalid", message ? "true" : "false");
  if (error) error.textContent = message;
}

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const opened = window.open(url, "_blank");
  if (opened) opened.opener = null;
  else window.location.href = url;
}

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const details = getCartDetails();
  const nameInput = document.querySelector("#order-name");
  const timeInput = document.querySelector("#order-time");
  const noteInput = document.querySelector("#order-note");
  const status = document.querySelector("#order-status");
  const name = nameInput.value.trim();
  const time = timeInput.value;

  setFieldError(nameInput, name ? "" : "Bitte geben Sie Ihren Namen ein.");
  setFieldError(timeInput, time ? "" : "Bitte wählen Sie eine Abholzeit.");
  status.textContent = details.length
    ? ""
    : "Bitte fügen Sie mindestens einen Artikel hinzu.";
  if (!details.length || !name || !time) {
    (details.length ? (!name ? nameInput : timeInput) : cartItems).focus?.();
    return;
  }

  const total = details.reduce(
    (sum, item) => sum + priceToCents(item.price) * item.quantity,
    0,
  );
  const lines = details.map(
    (item) =>
      `${item.quantity} x ${item.number} ${item.name} - ${formatEuro(
        priceToCents(item.price) * item.quantity,
      )}`,
  );
  const message = [
    "Bestellanfrage zur Abholung",
    "",
    `Name: ${name}`,
    `Gewünschte Abholzeit: ${time} Uhr`,
    "",
    "Bestellung:",
    ...lines,
    "",
    `Zwischensumme: ${formatEuro(total)}`,
    noteInput.value.trim() ? `Hinweis: ${noteInput.value.trim()}` : "",
    "",
    "Bitte bestätigen Sie Preis und Abholzeit. Vielen Dank!",
  ]
    .filter(Boolean)
    .join("\n");
  openWhatsApp(message);
});

const reservationForm = document.querySelector("#reservation-form");
const reservationDate = document.querySelector("#reservation-date");
const now = new Date();
reservationDate.min = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

function isWithinOpeningHours(time) {
  if (!time) return false;
  const [hours, minutes] = time.split(":").map(Number);
  const value = hours * 60 + minutes;
  return (value >= 660 && value <= 900) || (value >= 1020 && value <= 1320);
}

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.querySelector("#reservation-name");
  const guestsInput = document.querySelector("#reservation-guests");
  const dateInput = document.querySelector("#reservation-date");
  const timeInput = document.querySelector("#reservation-time");
  const phoneInput = document.querySelector("#reservation-phone");
  const noteInput = document.querySelector("#reservation-note");
  const status = document.querySelector("#reservation-status");
  const name = nameInput.value.trim();
  const guests = Number(guestsInput.value);
  const date = dateInput.value;
  const time = timeInput.value;

  const dateIsValid = date && date >= reservationDate.min;
  const timeIsValid = isWithinOpeningHours(time);
  setFieldError(nameInput, name ? "" : "Bitte geben Sie Ihren Namen ein.");
  setFieldError(
    guestsInput,
    guests >= 1 && guests <= 30 ? "" : "Bitte wählen Sie 1 bis 30 Personen.",
  );
  setFieldError(
    dateInput,
    dateIsValid ? "" : "Bitte wählen Sie ein gültiges Datum.",
  );
  setFieldError(
    timeInput,
    timeIsValid
      ? ""
      : "Bitte wählen Sie 11:00-15:00 oder 17:00-22:00 Uhr.",
  );
  status.textContent = "";
  if (!name || guests < 1 || guests > 30 || !dateIsValid || !timeIsValid) {
    const firstInvalid = reservationForm.querySelector('[aria-invalid="true"]');
    firstInvalid?.focus();
    return;
  }

  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00`));
  const message = [
    "Reservierungsanfrage",
    "",
    `Name: ${name}`,
    `Personen: ${guests}`,
    `Datum: ${formattedDate}`,
    `Uhrzeit: ${time} Uhr`,
    phoneInput.value.trim() ? `Telefon: ${phoneInput.value.trim()}` : "",
    noteInput.value.trim() ? `Wunsch: ${noteInput.value.trim()}` : "",
    "",
    "Bitte bestätigen Sie die Reservierung. Vielen Dank!",
  ]
    .filter(Boolean)
    .join("\n");
  openWhatsApp(message);
});

document
  .querySelectorAll("#order-form input, #reservation-form input")
  .forEach((input) =>
    input.addEventListener("input", () => setFieldError(input, "")),
  );
renderCart();

const pageIntro = document.querySelector(".page-intro");
const introStartedAt = performance.now();

function finishPageIntro() {
  if (document.documentElement.classList.contains("page-ready")) {
    window.setTimeout(() => pageIntro?.remove(), 1150);
    return;
  }
  document.documentElement.classList.add("page-ready");
  window.setTimeout(() => pageIntro?.remove(), 1150);
}

function queuePageIntroFinish() {
  const minimumIntroTime = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
    ? 0
    : 620;
  window.setTimeout(
    finishPageIntro,
    Math.max(0, minimumIntroTime - (performance.now() - introStartedAt)),
  );
}

if (document.readyState === "complete") queuePageIntroFinish();
else window.addEventListener("load", queuePageIntroFinish, { once: true });
window.setTimeout(queuePageIntroFinish, 1800);

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Menü öffnen");
  mobileNav.hidden = true;
  document.body.classList.remove("menu-open");
}
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) closeMobileMenu();
  else {
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Menü schließen");
    mobileNav.hidden = false;
    document.body.classList.add("menu-open");
  }
});
mobileNav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMobileMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileNav.hidden) closeMobileMenu();
});

const header = document.querySelector("#site-header");
const hero = document.querySelector(".hero");
const heroObserver = new IntersectionObserver(
  ([entry]) => header.classList.toggle("is-scrolled", !entry.isIntersecting),
  { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
);
heroObserver.observe(hero);

const riceFall = document.querySelector("#rice-fall");
const riceMotionPreference = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);
let riceFallIsVisible = true;

function buildRiceFall() {
  if (!riceFall || riceMotionPreference.matches || riceFall.children.length) return;
  const grainCount = window.innerWidth <= 640 ? 12 : 22;
  const grains = document.createDocumentFragment();

  for (let index = 0; index < grainCount; index += 1) {
    const grain = document.createElement("i");
    const duration = 9 + Math.random() * 7;
    const drift = -70 + Math.random() * 140;
    const turn = -120 + Math.random() * 240;
    const size = 10 + Math.random() * 8;
    grain.className = "rice-grain";
    grain.style.setProperty("--grain-x", `${4 + Math.random() * 92}%`);
    grain.style.setProperty("--grain-size", `${size}px`);
    grain.style.setProperty("--grain-height", `${size * 0.42}px`);
    grain.style.setProperty("--grain-opacity", `${0.38 + Math.random() * 0.38}`);
    grain.style.setProperty("--fall-duration", `${duration}s`);
    grain.style.setProperty("--fall-delay", `${-Math.random() * duration}s`);
    grain.style.setProperty("--drift-mid", `${drift}px`);
    grain.style.setProperty("--drift-end", `${drift * -0.45}px`);
    grain.style.setProperty("--turn-start", `${turn}deg`);
    grain.style.setProperty("--turn-mid", `${turn + 210}deg`);
    grain.style.setProperty("--turn-end", `${turn + 430}deg`);
    grains.append(grain);
  }

  riceFall.append(grains);
}

function updateRiceFallState() {
  riceFall?.classList.toggle(
    "is-paused",
    document.hidden || !riceFallIsVisible || riceMotionPreference.matches,
  );
}

buildRiceFall();
const riceFallObserver = new IntersectionObserver(
  ([entry]) => {
    riceFallIsVisible = entry.isIntersecting;
    updateRiceFallState();
  },
  { threshold: 0 },
);
riceFallObserver.observe(hero);
document.addEventListener("visibilitychange", updateRiceFallState);
const handleRiceMotionPreference = () => {
  riceFall?.replaceChildren();
  buildRiceFall();
  updateRiceFallState();
};
if (typeof riceMotionPreference.addEventListener === "function")
  riceMotionPreference.addEventListener("change", handleRiceMotionPreference);
else riceMotionPreference.addListener(handleRiceMotionPreference);

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
if (reduceMotion)
  document
    .querySelectorAll(".reveal")
    .forEach((element) => element.classList.add("is-visible"));
else {
  const revealObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
    { threshold: 0.1, rootMargin: "0px 0px -8%" },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => revealObserver.observe(element));
}

const lightbox = document.querySelector("#lightbox");
const lightboxImage = new Image();
lightbox.querySelector("figure").prepend(lightboxImage);
const lightboxCaption = lightbox.querySelector("figcaption");
document.querySelectorAll("[data-lightbox]").forEach((button) =>
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.querySelector("img").alt;
    lightboxCaption.textContent = button.dataset.caption;
    lightbox.showModal();
  }),
);
lightbox
  .querySelector(".lightbox-close")
  .addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
