/* Seahorse Natural Oils — pitch design shared script (header, footer, RFQ basket, helpers). */
(function () {
  const I = {
    leaf: '<path d="M5 21c0-9 6-15 16-16-1 10-7 16-16 16Z"/><path d="M5 21 14 12"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 18.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3"/><path d="M7 15h10"/>',
    sprout: '<path d="M12 21v-9"/><path d="M12 12C12 7 8 5 4 5c0 5 3 7 8 7Z"/><path d="M12 14c0-4 3-6 8-6 0 4-3 6-8 6Z"/>',
    drop: '<path d="M12 3s7 7.5 7 12a7 7 0 0 1-14 0c0-4.5 7-12 7-12Z"/>',
    spice: '<path d="M4 20c4-1 8-5 9-9l3-3 3 3-3 3c-4 1-8 5-9 9"/><circle cx="18" cy="6" r="2"/>',
    mint: '<path d="M12 21V9"/><path d="M12 9c-4 0-7-2-7-6 4 0 7 2 7 6Z"/><path d="M12 13c4 0 7-2 7-6-4 0-7 2-7 6Z"/>',
    flower: '<circle cx="12" cy="12" r="2.5"/><path d="M12 9.5C12 6 10 4 12 3c2 1 0 3 0 6.5M14.5 12c3.5 0 5.5-2 6.5 0-1 2-3 0-6.5 0M12 14.5c0 3.5 2 5.5 0 6.5-2-1 0-3 0-6.5M9.5 12C6 12 4 14 3 12c1-2 3 0 6.5 0"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    basket: '<path d="M5 9h14l-1.5 10.5a2 2 0 0 1-2 1.5h-7a2 2 0 0 1-2-1.5L5 9Z"/><path d="M9 9V7a3 3 0 0 1 6 0v2"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    home: '<path d="M4 11 12 4l8 7v9H4z"/><path d="M10 20v-6h4v6"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    wa: '<path d="M20 12a8 8 0 0 1-11.8 7L4 20l1.1-4A8 8 0 1 1 20 12Z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.3-2.3l.8-1-1-2L9 9.5Z"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
    tick: '<path d="m5 12 5 5 9-10"/>',
    doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
    shield: '<path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/>',
    box: '<path d="M3 8 12 3l9 5v8l-9 5-9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>',
    factory: '<path d="M3 21V10l6 4v-4l6 4V5h6v16z"/><path d="M7 17h2M12 17h2M17 17h1"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    pin: '<path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
    lab: '<path d="M8 3h8M9 3v5l-5 9a2.5 2.5 0 0 0 2.2 4h11.6A2.5 2.5 0 0 0 20 17l-5-9V3"/>',
    truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14c2 .7 3 2.8 3 6"/>',
    chart: '<path d="M4 20V4M4 20h16"/><path d="M8 16v-5M12 16V8M16 16v-3"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5S14 15 15 15h2a4 4 0 0 0 4-4c0-4.5-4-8-9-8Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    cosmetic: '<path d="M9 3h6v4H9zM8 7h8v14H8z"/><path d="M11 11h2"/>',
    spa: '<path d="M12 20c-4 0-8-3-8-7 3 0 6 1 8 4 2-3 5-4 8-4 0 4-4 7-8 7Z"/><path d="M12 17c-2-3-2-7 0-11 2 4 2 8 0 11Z"/>',
    food: '<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 21V3c-2 1-3 4-3 8h3"/>',
    facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8a0 0 0 0 1 0 0Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.8 7.6-4.6M8.2 13.2l7.6 4.6"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" fill="currentColor" stroke="none"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
    pill: '<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-35 12 12)"/><path d="m10 8 6 8" />'
  };
  const icon = (n, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n] || ''}</svg>`;

  /* Amber bottle illustration tinted with the oil colour (licence-free placeholder art). */
  let bid = 0;
  const bottle = (oil = '#E2B93B') => {
    const id = 'b' + (++bid);
    return `<svg viewBox="0 0 120 200" aria-hidden="true">
      <defs><linearGradient id="${id}g" x1="0" x2="1"><stop offset="0" stop-color="#5a2f0a"/><stop offset=".45" stop-color="#9a5a16"/><stop offset="1" stop-color="#4a2606"/></linearGradient>
      <linearGradient id="${id}o" x1="0" x2="1"><stop offset="0" stop-color="${oil}" stop-opacity=".75"/><stop offset=".5" stop-color="${oil}"/><stop offset="1" stop-color="${oil}" stop-opacity=".7"/></linearGradient></defs>
      <rect x="44" y="6" width="32" height="26" rx="4" fill="#1d2b2a"/><rect x="44" y="26" width="32" height="6" fill="#0F7C7A"/>
      <path d="M48 32h24v14c0 4 18 8 18 26v108a12 12 0 0 1-12 12H42a12 12 0 0 1-12-12V72c0-18 18-22 18-26Z" fill="url(#${id}g)"/>
      <path d="M32 112h56v68a10 10 0 0 1-10 10H42a10 10 0 0 1-10-10Z" fill="url(#${id}o)" opacity=".55"/>
      <rect x="36" y="96" width="48" height="58" rx="4" fill="#FBFAF6"/><rect x="36" y="96" width="48" height="10" rx="2" fill="#0F7C7A"/>
      <path d="M60 113c5 7 8 11 8 15a8 8 0 0 1-16 0c0-4 3-8 8-15Z" fill="${oil}" stroke="#0F7C7A" stroke-width="1.6"/>
      <rect x="44" y="142" width="32" height="3" rx="1.5" fill="#c9d3d1"/>
      <path d="M38 60c2-6 8-9 8-9v120" stroke="#fff" stroke-opacity=".22" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`;
  };

  /* ---------- RFQ basket (browser storage: per-viewer convenience only) ---------- */
  const KEY = 'sh-rfq';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
  const write = (v) => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { } updateCount(); };
  const fmt = n => n.toLocaleString('en-IN');
  const cheapest = p => p.packs.filter(k => SH_PRICE(p, k)).sort((a, b) => SH_PRICE(p, a) - SH_PRICE(p, b))[0];
  const bulkPack = p => p.packs.filter(k => !SH_PRICE(p, k)).pop() || p.packs[p.packs.length - 1];
  const rfq = {
    items: read,
    /* mode: 'buy' = small pack bought online, 'quote' = bulk quote request */
    add(slug, pack, qty, mode) {
      const list = read(); const p = SH_PRODUCTS.find(x => x.slug === slug); if (!p) return;
      mode = mode || 'quote'; pack = pack || (mode === 'buy' ? cheapest(p) : bulkPack(p)); qty = Math.max(1, +qty || 1);
      if (mode === 'buy' && !SH_PRICE(p, pack)) mode = 'quote';
      const ex = list.find(x => x.slug === slug && x.pack === pack && x.mode === mode);
      ex ? ex.qty += qty : list.push({ slug, pack, qty, mode });
      write(list);
      toast(mode === 'buy' ? `<span><b>${p.name}</b> ${pack} × ${qty} added to cart · ₹${fmt(SH_PRICE(p, pack) * qty)}</span><a href="rfq.html">Checkout</a>`
        : `<span><b>${p.name}</b> (${pack}) added to your quote request</span><a href="rfq.html#quote">View</a>`);
    },
    remove(i) { const l = read(); l.splice(i, 1); write(l); },
    clear() { write([]); }
  };
  function updateCount() { const n = read().length; document.querySelectorAll('[data-rfq-count]').forEach(e => { e.textContent = n; e.dataset.n = n; }); }

  let tt;
  function toast(html) {
    let t = document.querySelector('.toast'); if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.innerHTML = html; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 3200);
  }

  const stars = (v, size = 14) => { const pct = Math.max(0, Math.min(100, v / 5 * 100));
    return `<span class="stars" style="--pct:${pct}%;--sz:${size}px" role="img" aria-label="Rated ${v} out of 5"><span>★★★★★</span><span class="on">★★★★★</span></span>`; };
  const rating = p => { const r = (window.SH_RATING || {})[p.slug]; return r ? `<div class="rating">${stars(r[0])}<b>${r[0]}</b><span>(${r[1]})</span></div>` : ''; };
  const gradeCls = g => 'badge b-' + g.toLowerCase().replace(/[^a-z]/g, '');
  const card = p => { const ch = cheapest(p);
    return `<article class="pcard reveal" style="--c:${p.color}">
      <a class="media" href="product.html?p=${p.slug}" aria-label="${p.name}"><img src="${p.img}" alt="${p.name}: ${p.botanical}" loading="lazy">
        <span class="code">${p.code}</span><span class="mini">${bottle(p.color)}</span></a>
      <div class="body"><div class="badges">${p.grades.map(g => `<span class="${gradeCls(g)}">${g}</span>`).join('')}</div>
      <h3><a href="product.html?p=${p.slug}">${p.name}</a></h3><div class="bot">${p.botanical}</div>${rating(p)}
      <div class="price">${ch ? `From <b>₹${fmt(SH_PRICE(p, ch))}</b> <small>/ ${ch}</small>` : `<b>Bulk only</b> <small>· MOQ ${p.moq}</small>`}</div>
      <div class="acts">${ch ? `<button class="btn btn-accent btn-sm" data-buy="${p.slug}">${icon('basket')}Buy</button>` : ''}<button class="btn btn-outline btn-sm" data-add="${p.slug}">Bulk quote</button></div></div></article>`; };

  /* ---------- Header & footer ---------- */
  const page = document.body.dataset.page || '';
  const links = [['index.html', 'Home', 'home'], ['products.html', 'Products', 'products'], ['about.html#industries', 'Industries', 'industries'], ['about.html#quality', 'Quality', 'quality'], ['about.html', 'About', 'about'], ['contact.html', 'Contact', 'contact']];
  const navHtml = links.map(([h, t, k]) => `<a href="${h}" ${k === page ? 'aria-current="page"' : ''}>${t}</a>`).join('');
  const logo = `<a class="brand" href="index.html"><span class="logo"><img src="assets/img/logo-crop.png" alt="Seahorse logo"></span><span><b>Seahorse</b><small>Natural Oils</small></span></a>`;
  const hdr = document.getElementById('site-header');
  if (hdr) hdr.outerHTML = `
    <a class="skip" href="#main">Skip to content</a>
    <div class="demo-note">Design preview by Alliance Infotech: sample content and specs, to be replaced with Seahorse's verified data</div>
    <div class="topbar"><div class="wrap"><span>Free shipping in India above ₹999 · Bulk &amp; export enquiries welcome</span>
      <span class="hide-sm"><a href="tel:+919426210669">${icon('phone', '')}+91 94262 10669</a><a href="contact.html">Export enquiries</a><a href="trade.html">Trade login</a></span></div></div>
    <header class="header"><div class="wrap">${logo}
      <nav class="nav" aria-label="Main">${navHtml}</nav>
      <div class="head-actions">
        <a class="icon-btn" href="products.html#search" aria-label="Search products">${icon('search')}</a>
        <select class="lang" aria-label="Language" data-lang><option>EN</option><option>हिन्दी</option><option>ગુજરાતી</option><option>العربية</option><option>Français</option></select>
        <a class="icon-btn rfq-btn" href="rfq.html" aria-label="Quote request basket">${icon('basket')}<span class="count" data-rfq-count></span></a>
        <a class="btn btn-accent btn-sm head-cta" href="rfq.html">Request a quote</a>
        <button class="icon-btn menu-btn" aria-label="Open menu" data-menu>${icon('menu')}</button>
      </div></div></header>
    <div class="drawer" data-drawer><nav aria-label="Mobile">${navHtml}<a href="trade.html">Trade login</a><a href="rfq.html" class="btn btn-accent" style="margin-top:12px">Request a quote</a></nav></div>`;

  const ftr = document.getElementById('site-footer');
  if (ftr) ftr.outerHTML = `
    <footer class="footer"><div class="wrap"><div class="cols">
      <div>${logo}<p style="margin-top:14px">Manufacturer and merchant exporter of 100% pure essential oils, carrier oils, spice oleoresins, herbal extracts and floral hydrosols.</p><p style="font:italic 600 16px var(--serif);color:#F2C766">Be Global, Remain Local.</p>
        <div class="socials">${[['facebook', 'Facebook'], ['instagram', 'Instagram'], ['youtube', 'YouTube'], ['linkedin', 'LinkedIn'], ['wa', 'WhatsApp']].map(([k, n]) => `<a href="${(window.SH_SOCIAL || {})[k === 'wa' ? 'whatsapp' : k] || '#'}" target="_blank" rel="noopener" aria-label="Seahorse on ${n}">${icon(k)}</a>`).join('')}</div></div>
      <div><h4>Products</h4><ul>${SH_CATEGORIES.slice(0, 6).map(c => `<li><a href="products.html?cat=${c.slug}">${c.name}</a></li>`).join('')}</ul></div>
      <div><h4>Company</h4><ul><li><a href="about.html">About us</a></li><li><a href="about.html#quality">Quality &amp; certifications</a></li><li><a href="about.html#industries">Industries</a></li><li><a href="contact.html">Contact</a></li><li><a href="admin.html">Admin panel (preview)</a></li></ul></div>
      <div><h4>Get in touch</h4><ul>
        <li>${icon('pin')} 22, First Floor, B.H. Complex, Near Utkarsh Petrol Pump, Karelibaugh, Vadodara 390018, India</li>
        <li><a href="tel:+919426210669">+91 94262 10669</a></li><li><a href="mailto:dkumar@seahorsepharma.com">dkumar@seahorsepharma.com</a></li>
        <li>Branch: Jaipur, Rajasthan</li></ul></div></div>
      <div class="legal"><span>© ${new Date().getFullYear()} Seahorse Pharma Pvt. Ltd. All rights reserved.</span><span><a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Disclaimer</a> · <a href="credits.html">Photo credits</a></span></div></div></footer>
    <nav class="bottombar" aria-label="Quick">
      <a href="index.html" class="${page === 'home' ? 'on' : ''}">${icon('home')}Home</a>
      <a href="products.html" class="${page === 'products' ? 'on' : ''}">${icon('grid')}Products</a>
      <a href="products.html#search">${icon('search')}Search</a>
      <a href="rfq.html" class="${page === 'rfq' ? 'on' : ''}">${icon('basket')}<span class="count" data-rfq-count></span>Quote</a>
      <a href="https://wa.me/919426210669" target="_blank" rel="noopener">${icon('wa')}WhatsApp</a></nav>
    <a class="wa-float" href="https://wa.me/919426210669" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon('wa')}</a>`;

  document.addEventListener('click', e => {
    const a = e.target.closest('[data-add]'); if (a) { e.preventDefault(); rfq.add(a.dataset.add, null, 1, 'quote'); }
    const bb = e.target.closest('[data-buy]'); if (bb) { e.preventDefault(); rfq.add(bb.dataset.buy, null, 1, 'buy'); }
    if (e.target.closest('[data-menu]')) document.querySelector('[data-drawer]').classList.add('open');
    const d = e.target.closest('[data-drawer]'); if (d && (e.target === d || e.target.closest('a'))) d.classList.remove('open');
  });
  document.addEventListener('change', e => { if (e.target.matches('[data-lang]') && e.target.selectedIndex) { toast('Languages are switched on and translated from the admin panel (demo shows English).'); e.target.selectedIndex = 0; } });

  const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -40px' }) : null;
  const reveal = (root = document) => root.querySelectorAll('.reveal:not(.in)').forEach(el => io ? io.observe(el) : el.classList.add('in'));

  window.SH = { icon, bottle, card, rfq, toast, reveal, gradeCls, fmt, cheapest, bulkPack, stars, rating };
  document.addEventListener('DOMContentLoaded', () => { updateCount(); reveal(); document.querySelectorAll('[data-i]').forEach(el => el.innerHTML = icon(el.dataset.i)); });
})();
