/* Demo catalogue for the pitch design.
   Specs/CAS are typical industry values for illustration ONLY — to be replaced/verified with the client's own data. */
window.SH_CATEGORIES = [
  { slug: "pharma-grade", img: "assets/img/photos/evening-primrose-oil.jpg", name: "Pharmaceutical Grade Oils", tint: "#D49A1F", icon: "flask", count: 18 },
  { slug: "essential", img: "assets/img/photos/lavender-oil.jpg", name: "Natural Essential Oils", tint: "#4E8A3E", icon: "leaf", count: 64 },
  { slug: "organic", img: "assets/img/photos/lemongrass-oil.jpg", name: "Organic Essential Oils", tint: "#7DB86A", icon: "sprout", count: 22 },
  { slug: "carrier", img: "assets/img/photos/cat-carrier.jpg", name: "Carrier Oils", tint: "#C9A23A", icon: "drop", count: 26 },
  { slug: "spice", img: "assets/img/photos/cat-spice.jpg", name: "Spice Oils & Oleoresins", tint: "#B5542C", icon: "spice", count: 31 },
  { slug: "mint", img: "assets/img/photos/peppermint-oil.jpg", name: "Mint Oils", tint: "#2E9C7E", icon: "mint", count: 9 },
  { slug: "floral", img: "assets/img/photos/cat-floral.jpg", name: "Floral Absolutes & Waxes", tint: "#B0507A", icon: "flower", count: 14 },
  { slug: "aromatherapy", img: "assets/img/photos/cat-aroma.jpg", name: "Aromatherapy Blends", tint: "#7A5BA6", icon: "spark", count: 12 }
];

window.SH_PRODUCTS = [
  { code: "SH-PG-001", slug: "evening-primrose-oil", name: "Evening Primrose Oil", botanical: "Oenothera biennis L.", cat: "pharma-grade", grades: ["BP", "Cold-pressed"], color: "#E2B93B", photo: "assets/client/Evening Primerose oil.jpg", featured: true,
    specs: [["Botanical name", "Oenothera biennis L."], ["CAS No.", "90028-66-3"], ["Part used", "Seeds"], ["Extraction", "Cold-pressed from seeds/kernels"], ["Appearance", "Clear, pale-yellow oily liquid"], ["Fatty acid type", "Mono-saturated, mono-unsaturated, poly-unsaturated"], ["Gamma-linolenic acid (GLA)", "8% – 10%"], ["Flash point", "100 °C"], ["Storage", "Cool, dry place away from light, tightly closed"]],
    packs: ["10 ml", "100 ml", "5 kg", "25 kg", "190 kg drum"], moq: "5 kg (bulk)", lead: "7–10 days", packing: "Plastic bottle, HDPE barrel",
    about: "A rich source of omega-6 essential fatty acids, including linoleic acid and gamma-linolenic acid (GLA). Supplied for nutraceutical, cosmetic and pharmaceutical formulation." },
  { code: "SH-PG-002", slug: "borage-oil", name: "Borage Oil", botanical: "Borago officinalis", cat: "pharma-grade", grades: ["BP", "Cold-pressed"], color: "#E8C75A", photo: "assets/client/Borage Oil B.P.jpg", featured: true,
    specs: [["Botanical name", "Borago officinalis"], ["CAS No.", "84012-16-8"], ["Part used", "Seeds"], ["Extraction", "Cold-pressed"], ["Appearance", "Pale-yellow oily liquid"], ["GLA content", "18% – 22%"], ["Storage", "Cool, dark place"]],
    packs: ["10 ml", "100 ml", "5 kg", "25 kg", "190 kg drum"], moq: "5 kg (bulk)", lead: "7–10 days", packing: "HDPE bottle, barrel",
    about: "Starflower seed oil with one of the highest natural GLA contents. Used in nutraceutical and skin-care formulations." },
  { code: "SH-PG-003", slug: "saw-palmetto-oil", name: "Saw Palmetto Oil", botanical: "Serenoa repens", cat: "pharma-grade", grades: ["BP"], color: "#C98F2B", photo: "assets/client/Saw Palmetto Oil B.P.jpg", featured: true,
    specs: [["Botanical name", "Serenoa repens"], ["CAS No.", "84604-15-9"], ["Part used", "Berries"], ["Extraction", "Supercritical CO₂ / solvent"], ["Appearance", "Yellow to orange-brown liquid"], ["Total fatty acids", "≥ 85%"], ["Storage", "Cool, dry place"]],
    packs: ["1 kg", "5 kg", "25 kg"], moq: "1 kg", lead: "10–15 days", packing: "Aluminium bottle, HDPE drum",
    about: "Berry extract oil standardised on fatty-acid content for pharmaceutical and nutraceutical use." },
  { code: "SH-PG-004", slug: "wheat-germ-oil", name: "Wheat Germ Oil", botanical: "Triticum vulgare", cat: "carrier", grades: ["BP", "Cold-pressed"], color: "#D9A83A", photo: "assets/client/wheat germ oil b.p.jpg",
    specs: [["Botanical name", "Triticum vulgare"], ["CAS No.", "8006-95-1"], ["Part used", "Germ"], ["Extraction", "Cold-pressed"], ["Appearance", "Golden-yellow oily liquid"], ["Natural vitamin E", "Rich source"], ["Storage", "Cool, dark place"]],
    packs: ["1 kg", "5 kg", "25 kg", "190 kg drum"], moq: "5 kg", lead: "7 days", packing: "HDPE bottle, barrel",
    about: "Naturally rich in vitamin E. Widely used as a carrier and conditioning oil in cosmetics." },
  { code: "SH-PG-005", slug: "linseed-oil", name: "Linseed Oil", botanical: "Linum usitatissimum", cat: "carrier", grades: ["BP", "Virgin"], color: "#E6C24B", photo: "assets/client/Linseed oil B.P.jpg",
    specs: [["Botanical name", "Linum usitatissimum"], ["CAS No.", "8001-26-1"], ["Part used", "Seeds"], ["Extraction", "Cold-pressed (virgin)"], ["Appearance", "Yellow oily liquid"], ["Alpha-linolenic acid", "45% – 60%"], ["Storage", "Cool, dark place, nitrogen flushed"]],
    packs: ["5 kg", "25 kg", "190 kg drum"], moq: "25 kg", lead: "7 days", packing: "HDPE barrel, MS drum",
    about: "Virgin flaxseed oil, high in omega-3 alpha-linolenic acid, for pharmaceutical and nutraceutical use." },
  { code: "SH-EO-011", slug: "clove-oil", name: "Clove Bud Oil", botanical: "Syzygium aromaticum", cat: "spice", grades: ["BP", "Steam-distilled"], color: "#B9762A", photo: "assets/client/Clove Oil B.P.jpg", featured: true,
    specs: [["Botanical name", "Syzygium aromaticum"], ["CAS No.", "8000-34-8"], ["Part used", "Flower buds"], ["Extraction", "Steam distillation"], ["Appearance", "Pale-yellow to golden liquid"], ["Eugenol", "80% – 90%"], ["Storage", "Cool place in tightly closed containers"]],
    packs: ["100 ml", "1 kg", "5 kg", "25 kg", "180 kg drum"], moq: "1 kg", lead: "5–7 days", packing: "Aluminium bottle, HDPE drum",
    about: "High-eugenol clove bud oil for dental, flavour and fragrance applications." },
  { code: "SH-EO-012", slug: "thyme-oil", name: "Thyme Oil", botanical: "Thymus vulgaris", cat: "essential", grades: ["BP", "Steam-distilled"], color: "#C2652B", photo: "assets/client/Thyme oil b.p.jpg",
    specs: [["Botanical name", "Thymus vulgaris"], ["CAS No.", "8007-46-3"], ["Part used", "Leaves and flowering tops"], ["Extraction", "Steam distillation"], ["Appearance", "Red-brown liquid"], ["Thymol", "40% – 55%"], ["Storage", "Cool, dark place"]],
    packs: ["100 ml", "1 kg", "5 kg", "25 kg"], moq: "1 kg", lead: "7 days", packing: "Aluminium bottle",
    about: "Thymol-rich thyme oil for pharmaceutical, oral-care and flavour use." },
  { code: "SH-EO-013", slug: "peppermint-oil", name: "Peppermint Oil", botanical: "Mentha piperita", cat: "mint", grades: ["Organic","IP", "Steam-distilled"], color: "#9CC9A8",
    specs: [["Botanical name", "Mentha piperita"], ["CAS No.", "8006-90-4"], ["Part used", "Leaves"], ["Extraction", "Steam distillation"], ["Appearance", "Colourless to pale-yellow liquid"], ["Menthol", "35% – 45%"], ["Storage", "Cool, dark place"]],
    packs: ["100 ml", "1 kg", "25 kg", "180 kg drum"], moq: "1 kg", lead: "5 days", packing: "Aluminium bottle, HDPE drum",
    about: "Fresh, cooling peppermint oil for flavour, oral-care and pharmaceutical products." },
  { code: "SH-EO-014", slug: "spearmint-oil", name: "Spearmint Oil", botanical: "Mentha spicata", cat: "mint", grades: ["Natural", "Steam-distilled"], color: "#A8D3A0",
    specs: [["Botanical name", "Mentha spicata"], ["CAS No.", "8008-79-5"], ["Part used", "Leaves"], ["Extraction", "Steam distillation"], ["L-Carvone", "55% – 70%"]],
    packs: ["1 kg", "25 kg", "180 kg drum"], moq: "1 kg", lead: "5 days", packing: "HDPE drum", about: "Sweet-minty spearmint oil for chewing gum, toothpaste and flavours." },
  { code: "SH-EO-015", slug: "tea-tree-oil", name: "Tea Tree Oil", botanical: "Melaleuca alternifolia", cat: "essential", grades: ["Organic","Natural", "Steam-distilled"], color: "#CFE0A0",
    specs: [["Botanical name", "Melaleuca alternifolia"], ["CAS No.", "68647-73-4"], ["Part used", "Leaves"], ["Extraction", "Steam distillation"], ["Terpinen-4-ol", "≥ 35%"]],
    packs: ["100 ml", "1 kg", "5 kg", "25 kg"], moq: "1 kg", lead: "7 days", packing: "Aluminium bottle", about: "ISO 4730 type tea tree oil for cosmetic and personal-care use." },
  { code: "SH-EO-016", slug: "lemongrass-oil", name: "Lemongrass Oil", botanical: "Cymbopogon flexuosus", cat: "organic", grades: ["Organic", "Steam-distilled"], color: "#E3D36A", featured: true,
    specs: [["Botanical name", "Cymbopogon flexuosus"], ["CAS No.", "8007-02-1"], ["Part used", "Grass"], ["Extraction", "Steam distillation"], ["Citral", "≥ 75%"]],
    packs: ["1 kg", "5 kg", "25 kg", "180 kg drum"], moq: "5 kg", lead: "5 days", packing: "HDPE drum", about: "Indian lemongrass oil, high in citral, for fragrance and aromatherapy." },
  { code: "SH-EO-017", slug: "cinnamon-bark-oil", name: "Cinnamon Bark Oil", botanical: "Cinnamomum zeylanicum", cat: "spice", grades: ["Natural", "Steam-distilled"], color: "#A9552A",
    specs: [["Botanical name", "Cinnamomum zeylanicum"], ["CAS No.", "8015-91-6"], ["Part used", "Bark"], ["Extraction", "Steam distillation"], ["Cinnamaldehyde", "55% – 75%"]],
    packs: ["100 ml", "1 kg", "5 kg"], moq: "1 kg", lead: "10 days", packing: "Aluminium bottle", about: "Warm, spicy bark oil for flavour and fragrance." },
  { code: "SH-EO-018", slug: "basil-oil", name: "Holy Basil Oil", botanical: "Ocimum tenuiflorum", cat: "aromatherapy", grades: ["Organic","Natural", "Steam-distilled"], color: "#B7C97A",
    specs: [["Botanical name", "Ocimum tenuiflorum"], ["Part used", "Leaves"], ["Extraction", "Steam distillation"], ["Eugenol", "≥ 30%"]],
    packs: ["100 ml", "1 kg", "5 kg"], moq: "1 kg", lead: "7 days", packing: "Aluminium bottle", about: "Tulsi oil from Indian holy basil for aromatherapy and personal care." },
  { code: "SH-EO-019", slug: "mentha-arvensis-oil", name: "Mentha Arvensis Oil", botanical: "Mentha arvensis", cat: "mint", grades: ["Natural"], color: "#B5DDB8",
    specs: [["Botanical name", "Mentha arvensis"], ["CAS No.", "68917-18-0"], ["Extraction", "Steam distillation"], ["Menthol", "≥ 70%"]],
    packs: ["25 kg", "180 kg drum"], moq: "25 kg", lead: "5 days", packing: "HDPE drum", about: "Corn-mint oil, the main natural source of menthol crystals." },
  { code: "SH-AB-021", slug: "rose-absolute", name: "Rose Absolute", botanical: "Rosa damascena", cat: "floral", grades: ["Natural", "Solvent-extracted"], color: "#D98A9A",
    specs: [["Botanical name", "Rosa damascena"], ["Part used", "Flowers"], ["Extraction", "Solvent extraction"], ["Appearance", "Red-orange viscous liquid"]],
    packs: ["10 ml", "100 ml", "1 kg"], moq: "100 ml", lead: "10 days", packing: "Glass / aluminium bottle", about: "Deep, honeyed rose absolute for fine fragrance." },
  { code: "SH-CO-022", slug: "garlic-oil", name: "Garlic Oil", botanical: "Allium sativum", cat: "spice", grades: ["Natural", "Steam-distilled"], color: "#E7D38E",
    specs: [["Botanical name", "Allium sativum"], ["CAS No.", "8000-78-0"], ["Part used", "Bulbs"], ["Extraction", "Steam distillation"]],
    packs: ["1 kg", "5 kg", "25 kg"], moq: "1 kg", lead: "7 days", packing: "Aluminium bottle", about: "Pungent garlic oil for food flavouring and nutraceuticals." },
  {"code":"SH-EO-023","slug":"lavender-oil","name":"Lavender Oil","botanical":"Lavandula angustifolia","cat":"essential","grades":["Organic","Natural","Steam-distilled"],"color":"#B9A6D9","featured":true,"specs":[["Botanical name","Lavandula angustifolia"],["CAS No.","8000-28-0"],["Part used","Flowering tops"],["Extraction","Steam distillation"],["Linalyl acetate","25% – 45%"]],"packs":["10 ml","100 ml","1 kg","25 kg"],"moq":"1 kg","lead":"7 days","packing":"Amber glass, aluminium bottle","about":"Classic floral lavender oil for fine fragrance, aromatherapy and personal care."},
  {"code":"SH-EO-024","slug":"eucalyptus-oil","name":"Eucalyptus Oil","botanical":"Eucalyptus globulus","cat":"essential","grades":["Organic","IP","Steam-distilled"],"color":"#CFE3C8","featured":false,"specs":[["Botanical name","Eucalyptus globulus"],["CAS No.","8000-48-4"],["Part used","Leaves"],["Extraction","Steam distillation"],["1,8-Cineole","≥ 70%"]],"packs":["10 ml","100 ml","1 kg","25 kg","180 kg drum"],"moq":"1 kg","lead":"5 days","packing":"Aluminium bottle, HDPE drum","about":"High-cineole eucalyptus oil for balms, inhalants and oral care."},
  {"code":"SH-EO-025","slug":"lemon-oil","name":"Lemon Oil","botanical":"Citrus limon","cat":"essential","grades":["Natural","Cold-pressed"],"color":"#F2DC5D","featured":true,"specs":[["Botanical name","Citrus limon"],["CAS No.","8008-56-8"],["Part used","Peel"],["Extraction","Cold expression"],["Limonene","60% – 75%"]],"packs":["10 ml","100 ml","1 kg","25 kg"],"moq":"1 kg","lead":"7 days","packing":"Aluminium bottle","about":"Fresh, zesty lemon peel oil for flavours, fragrances and cleaning products."},
  {"code":"SH-OR-026","slug":"ginger-oleoresin","name":"Ginger Oleoresin","botanical":"Zingiber officinale","cat":"spice","grades":["Organic","Natural","Solvent-extracted"],"color":"#C98A3A","featured":true,"specs":[["Botanical name","Zingiber officinale"],["CAS No.","84696-15-1"],["Part used","Rhizome"],["Extraction","Solvent extraction"],["Volatile oil","18% – 35%"]],"packs":["1 kg","5 kg","25 kg"],"moq":"5 kg","lead":"10 days","packing":"HDPE container","about":"Pungent ginger oleoresin standardised for food, beverage and nutraceutical use."},
  {"code":"SH-OR-027","slug":"turmeric-oleoresin","name":"Turmeric Oleoresin","botanical":"Curcuma longa","cat":"spice","grades":["Organic","Natural","Solvent-extracted"],"color":"#E0A21B","featured":false,"specs":[["Botanical name","Curcuma longa"],["CAS No.","8024-37-1"],["Part used","Rhizome"],["Extraction","Solvent extraction"],["Curcuminoids","20% – 40%"]],"packs":["1 kg","5 kg","25 kg"],"moq":"5 kg","lead":"10 days","packing":"HDPE container","about":"Natural colour and flavour from turmeric, standardised on curcuminoids."},
  {"code":"SH-EO-028","slug":"black-pepper-oil","name":"Black Pepper Oil","botanical":"Piper nigrum","cat":"spice","grades":["Natural","Steam-distilled"],"color":"#8E7A55","featured":false,"specs":[["Botanical name","Piper nigrum"],["CAS No.","8006-82-4"],["Part used","Dried fruit"],["Extraction","Steam distillation"],["Caryophyllene","20% – 30%"]],"packs":["10 ml","100 ml","1 kg","5 kg"],"moq":"1 kg","lead":"7 days","packing":"Aluminium bottle","about":"Warm, spicy pepper oil for flavours and fine fragrance."},
  {"code":"SH-EO-029","slug":"sandalwood-oil","name":"Sandalwood Oil","botanical":"Santalum album","cat":"aromatherapy","grades":["Natural","Steam-distilled"],"color":"#D8B27A","featured":false,"specs":[["Botanical name","Santalum album"],["CAS No.","8006-87-9"],["Part used","Heartwood"],["Extraction","Steam distillation"],["Santalols","≥ 90%"]],"packs":["10 ml","100 ml","1 kg"],"moq":"100 ml","lead":"10 days","packing":"Amber glass, aluminium bottle","about":"Precious Indian sandalwood oil for perfumery and attars (legal-source documents on request)."},
  {"code":"SH-CO-030","slug":"castor-oil","name":"Castor Oil","botanical":"Ricinus communis","cat":"carrier","grades":["BP","Cold-pressed"],"color":"#EAD9A0","featured":false,"specs":[["Botanical name","Ricinus communis"],["CAS No.","8001-79-4"],["Part used","Seeds"],["Extraction","Cold-pressed"],["Ricinoleic acid","≥ 85%"]],"packs":["100 ml","1 kg","25 kg","200 kg drum"],"moq":"25 kg","lead":"5 days","packing":"HDPE drum","about":"Gujarat cold-pressed castor oil, BP grade, for pharma and cosmetics."},
  {"code":"SH-EO-031","slug":"vetiver-oil","name":"Vetiver Oil","botanical":"Chrysopogon zizanioides","cat":"aromatherapy","grades":["Natural","Steam-distilled"],"color":"#8C6A3E","featured":false,"specs":[["Botanical name","Chrysopogon zizanioides"],["CAS No.","8016-96-4"],["Part used","Roots"],["Extraction","Steam distillation"]],"packs":["10 ml","100 ml","1 kg"],"moq":"100 ml","lead":"10 days","packing":"Amber glass, aluminium bottle","about":"Deep, earthy khus oil, a base note for perfumery and attars."}
];

/* Photos: Wikimedia Commons, free licences (see img/photos/CREDITS.json). Retail prices: SAMPLE values in INR. */
SH_PRODUCTS.forEach(p => { p.img = 'assets/img/photos/' + p.slug + '.jpg'; });
window.SH_RETAIL = { '10 ml': 1, '100 ml': 7.5, '1 kg': 55 };
window.SH_BASE = { 'evening-primrose-oil': 220, 'borage-oil': 260, 'saw-palmetto-oil': 380, 'wheat-germ-oil': 150, 'linseed-oil': 120, 'clove-oil': 240, 'thyme-oil': 320,
  'peppermint-oil': 210, 'spearmint-oil': 230, 'tea-tree-oil': 280, 'lemongrass-oil': 160, 'cinnamon-bark-oil': 420, 'basil-oil': 250, 'mentha-arvensis-oil': 170,
  'rose-absolute': 1900, 'garlic-oil': 260, 'lavender-oil': 340, 'eucalyptus-oil': 170, 'lemon-oil': 230, 'black-pepper-oil': 390, 'sandalwood-oil': 2400, 'castor-oil': 90, 'vetiver-oil': 980 };
/* price of a pack if sold online, otherwise null = quote only */
window.SH_PRICE = (p, pack) => { const b = SH_BASE[p.slug], m = SH_RETAIL[pack]; return b && m ? Math.round(b * m / 10) * 10 : null; };
window.SH_FROM = p => { const l = p.packs.map(k => SH_PRICE(p, k)).filter(Boolean); return l.length ? Math.min(...l) : null; };

/* DEMO ratings (sample values, clearly marked on the site). Live site: average of admin-approved reviews only. */
window.SH_RATING = { 'evening-primrose-oil': [4.8, 64], 'borage-oil': [4.7, 21], 'saw-palmetto-oil': [4.6, 12], 'wheat-germ-oil': [4.5, 18], 'linseed-oil': [4.4, 9],
  'clove-oil': [4.8, 47], 'thyme-oil': [4.5, 11], 'peppermint-oil': [4.9, 58], 'spearmint-oil': [4.6, 15], 'tea-tree-oil': [4.7, 39], 'lemongrass-oil': [4.6, 33],
  'cinnamon-bark-oil': [4.5, 14], 'basil-oil': [4.7, 19], 'mentha-arvensis-oil': [4.6, 22], 'rose-absolute': [4.9, 27], 'garlic-oil': [4.3, 8], 'lavender-oil': [4.9, 81],
  'eucalyptus-oil': [4.7, 36], 'lemon-oil': [4.6, 24], 'ginger-oleoresin': [4.7, 16], 'turmeric-oleoresin': [4.6, 13], 'black-pepper-oil': [4.5, 10], 'sandalwood-oil': [4.9, 29], 'castor-oil': [4.6, 31], 'vetiver-oil': [4.8, 17] };
window.SH_SOCIAL = { facebook: 'https://www.facebook.com/Sea-horse-natural-oils-100108698415149/', youtube: 'https://www.youtube.com/@DEVKUMAR-hb2mp', instagram: '#', linkedin: '#', whatsapp: 'https://wa.me/919426210669' };
window.SH_VIDEO = { id: 'Pwn7Jj9QIAk', title: 'Seahorse Rosemary Oil Distillation' };
