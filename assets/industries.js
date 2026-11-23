/* Interactive "Industries we serve" explorer. Usage: <div data-industries></div> + this script after app.js. */
(function () {
  const IND = [
    { key: 'pharma', name: 'Pharmaceutical', line: 'BP · USP · IP grade oils', icon: 'pill', img: 'assets/img/photos/lab.jpg',
      text: 'Pharmacopoeia-grade oils for softgels, syrups and topical formulations, made under an ISO 9001 system with full batch traceability.',
      needs: ['BP / USP / IP grades', 'Batch COA + GC report', 'Retained samples', 'Change-control notices'], products: ['evening-primrose-oil', 'borage-oil', 'castor-oil', 'clove-oil'] },
    { key: 'ff', name: 'Flavour & fragrance', line: 'Oils, absolutes, isolates', icon: 'flower', img: 'assets/img/photos/rose-absolute.jpg',
      text: 'Consistent, true-to-nature profiles for perfumers and flavourists, from top notes to precious base notes and traditional attars.',
      needs: ['Odour-matched lots', 'IFRA documents', 'Allergen statements', 'Custom blends'], products: ['rose-absolute', 'lavender-oil', 'sandalwood-oil', 'vetiver-oil'] },
    { key: 'cosmetic', name: 'Cosmetics & personal care', line: 'Carrier oils, hydrosols, actives', icon: 'cosmetic', img: 'assets/img/photos/hero-bottles.jpg',
      text: 'Cold-pressed carrier oils and skin-friendly essential oils for creams, serums, soaps and hair care, ready for your label.',
      needs: ['Cold-pressed & virgin', 'INCI names', 'Private label from 10 ml', 'MSDS for every product'], products: ['wheat-germ-oil', 'castor-oil', 'tea-tree-oil', 'lavender-oil'] },
    { key: 'aroma', name: 'Aromatherapy & spa', line: 'Therapeutic-grade oils & blends', icon: 'spa', img: 'assets/img/photos/cat-aroma.jpg',
      text: '100% pure single oils and signature blends for spas, wellness brands and diffuser ranges, in retail-ready small packs.',
      needs: ['100% pure, undiluted', 'Small packs online', 'Signature blends', 'GC-verified purity'], products: ['lavender-oil', 'eucalyptus-oil', 'lemongrass-oil', 'sandalwood-oil'] },
    { key: 'food', name: 'Food & beverage', line: 'Spice oils & oleoresins', icon: 'food', img: 'assets/img/photos/cat-spice.jpg',
      text: 'Standardised spice oleoresins and oils that give the same colour, heat and aroma in every batch of your seasoning or beverage.',
      needs: ['Standardised strength', 'Food-grade documents', 'Solvent-residue tested', 'Bulk drums'], products: ['ginger-oleoresin', 'turmeric-oleoresin', 'black-pepper-oil', 'cinnamon-bark-oil'] },
    { key: 'mint', name: 'Tobacco & pan masala', line: 'Mint oils & flavour bases', icon: 'leaf', img: 'assets/img/photos/peppermint-oil.jpg',
      text: 'High-menthol mint oils and cooling flavour bases from India’s mint belt, supplied in 180 kg drums with steady year-round availability.',
      needs: ['High-menthol mint', 'Year-round supply', '180 kg drums', 'Contract pricing'], products: ['mentha-arvensis-oil', 'peppermint-oil', 'spearmint-oil', 'clove-oil'] }
  ];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-industries]').forEach(root => {
    root.classList.add('indx');
    root.innerHTML = `<div class="indx-tabs" role="tablist" aria-label="Industries">${IND.map((d, i) => `
        <button role="tab" aria-selected="${i === 0}" aria-controls="indx-panel" data-k="${i}"><span class="ii">${SH.icon(d.icon)}</span><span><b>${d.name}</b><small>${d.line}</small></span><i class="bar"></i></button>`).join('')}</div>
      <div class="indx-panel" id="indx-panel" role="tabpanel" aria-live="polite"></div>`;
    const panel = root.querySelector('.indx-panel'), tabs = [...root.querySelectorAll('[data-k]')];
    let cur = 0, timer = null;
    function show(i) {
      cur = i; const d = IND[i];
      tabs.forEach((t, j) => t.setAttribute('aria-selected', j === i));
      const ps = d.products.map(s => SH_PRODUCTS.find(p => p.slug === s)).filter(Boolean);
      panel.innerHTML = `<img class="bgi" src="${d.img}" alt="">
        <div class="pin">
          <span class="eyebrow">${String(i + 1).padStart(2, '0')} / ${String(IND.length).padStart(2, '0')} · Industry</span>
          <h3>${d.name}</h3><p>${d.text}</p>
          <ul class="needs">${d.needs.map(n => `<li>${SH.icon('tick')}${n}</li>`).join('')}</ul>
          <p class="label" style="color:#cfe6e4">Popular with ${d.name.toLowerCase()} buyers</p>
          <div class="minis">${ps.map(p => `<a href="product.html?p=${p.slug}"><img src="${p.img}" alt=""><span><b>${p.name}</b><small>${p.grades[0]}</small></span></a>`).join('')}</div>
          <div class="row"><a class="btn btn-accent" href="rfq.html#quote">Get a quote for ${d.name.split(' ')[0].toLowerCase()} use</a><a class="btn btn-ghost" href="products.html">All products</a></div>
        </div>`;
      panel.classList.remove('swap'); void panel.offsetWidth; panel.classList.add('swap');
      root.style.setProperty('--dur', reduce ? '0s' : '7s');
      tabs[i].querySelector('.bar').style.animation = 'none'; void tabs[i].offsetWidth; tabs[i].querySelector('.bar').style.animation = '';
    }
    const auto = () => { if (reduce) return; clearInterval(timer); timer = setInterval(() => show((cur + 1) % IND.length), 7000); };
    root.addEventListener('click', e => { const t = e.target.closest('[data-k]'); if (!t) return; show(+t.dataset.k); clearInterval(timer); root.classList.add('manual'); t.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' }); });
    root.addEventListener('keydown', e => { if (!['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'].includes(e.key) || !e.target.closest('[data-k]')) return; e.preventDefault();
      const n = (cur + (e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : IND.length - 1)) % IND.length; show(n); tabs[n].focus(); clearInterval(timer); root.classList.add('manual'); });
    root.addEventListener('mouseenter', () => clearInterval(timer)); root.addEventListener('mouseleave', () => { if (!root.classList.contains('manual')) auto(); });
    show(0);
    if ('IntersectionObserver' in window) new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting && !root.classList.contains('manual')) auto(); else clearInterval(timer); })).observe(root); else auto();
  });
})();
