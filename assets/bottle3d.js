/* 3D amber bottle (three.js r128 from cdnjs, loaded on demand).
   SH3D.mount(el, { oils:[{name, botanical, color}], interval, drag, drops })  -> returns {destroy} or null when WebGL is unavailable. */
(function () {
  const SRC = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  let loading;
  const loadThree = () => loading || (loading = new Promise((res, rej) => {
    if (window.THREE) return res(window.THREE);
    const s = document.createElement('script'); s.src = SRC; s.async = true; s.crossOrigin = 'anonymous';
    s.onload = () => res(window.THREE); s.onerror = rej; document.head.appendChild(s);
  }));
  const webgl = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl') || c.getContext('experimental-webgl')); } catch { return false; } };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function labelTexture(THREE, oil) {
    const c = document.createElement('canvas'); c.width = 1024; c.height = 512; const g = c.getContext('2d');
    g.fillStyle = '#FBFAF6'; g.fillRect(0, 0, 1024, 512);
    g.fillStyle = '#0F7C7A'; g.fillRect(0, 0, 1024, 92); g.fillRect(0, 470, 1024, 42);
    g.fillStyle = '#F2C766'; g.font = '600 40px Inter, Arial'; g.textAlign = 'center'; g.fillText('SEAHORSE · NATURAL OILS', 512, 62);
    g.fillStyle = oil.color; g.beginPath(); g.moveTo(512, 130); g.bezierCurveTo(560, 200, 572, 230, 572, 252); g.arc(512, 252, 60, 0, Math.PI); g.bezierCurveTo(452, 230, 464, 200, 512, 130); g.fill();
    g.strokeStyle = '#0F7C7A'; g.lineWidth = 5; g.stroke();
    g.fillStyle = '#1C2626'; g.font = '700 62px Fraunces, Georgia, serif'; g.fillText(oil.name, 512, 380);
    g.fillStyle = '#5B6B6A'; g.font = 'italic 38px Fraunces, Georgia, serif'; g.fillText(oil.botanical, 512, 432);
    const t = new THREE.CanvasTexture(c); t.anisotropy = 4; return t;
  }

  async function mount(el, opt = {}) {
    if (!webgl()) return null;
    let THREE; try { THREE = await loadThree(); } catch { return null; }
    const oils = opt.oils || [{ name: 'Evening Primrose Oil', botanical: 'Oenothera biennis', color: '#E2B93B' }];
    const oilC = hex => { const c = new THREE.Color(hex); c.offsetHSL(0, .3, -.2); return c; };
    const W = () => el.clientWidth || 400, H = () => el.clientHeight || 400;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2)); renderer.setSize(W(), H());
    renderer.outputEncoding = THREE.sRGBEncoding; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .95;
    el.appendChild(renderer.domElement); renderer.domElement.setAttribute('aria-hidden', 'true');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, W() / H(), 0.1, 100); camera.position.set(0, 1.7, 9.2); camera.lookAt(0, 1.55, 0);

    scene.add(new THREE.HemisphereLight(0xfff1d6, 0x062a29, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(4, 6, 5); scene.add(key);
    const rim = new THREE.PointLight(0xF2C766, 2.2, 20); rim.position.set(-3.5, 2.5, -2.5); scene.add(rim);
    const rim2 = new THREE.PointLight(0x7fd1c8, 1.4, 20); rim2.position.set(3.5, 1, -3); scene.add(rim2);

    // simple gradient environment for glass reflections
    const envC = document.createElement('canvas'); envC.width = 16; envC.height = 256; const eg = envC.getContext('2d');
    const gr = eg.createLinearGradient(0, 0, 0, 256); gr.addColorStop(0, '#fff4dc'); gr.addColorStop(.45, '#c99a45'); gr.addColorStop(.55, '#0c4f4d'); gr.addColorStop(1, '#03201f');
    eg.fillStyle = gr; eg.fillRect(0, 0, 16, 256);
    const envTex = new THREE.CanvasTexture(envC); envTex.mapping = THREE.EquirectangularReflectionMapping; envTex.encoding = THREE.sRGBEncoding;
    const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromEquirectangular(envTex).texture;

    // smooth bottle silhouette (spline through control points)
    const ctrl = [[.001, 0], [.8, 0], [.95, .08], [.98, .3], [.98, 1.9], [.9, 2.25], [.6, 2.52], [.36, 2.7], [.32, 2.85], [.32, 3.02]].map(([x, y]) => new THREE.Vector2(x, y));
    const prof = new THREE.SplineCurve(ctrl).getPoints(90).concat([new THREE.Vector2(.36, 3.05), new THREE.Vector2(.36, 3.12), new THREE.Vector2(.001, 3.12)]);
    const bottle = new THREE.Group(); scene.add(bottle);
    // clear glass so the living, moving oil inside is visible
    const glass = new THREE.Mesh(new THREE.LatheGeometry(prof, 96), new THREE.MeshPhysicalMaterial({ color: 0xe6f4f1, metalness: 0, roughness: .04, transparent: true, opacity: .26, clearcoat: 1, clearcoatRoughness: .02, envMapIntensity: 1.1, side: THREE.DoubleSide, depthWrite: false }));
    glass.renderOrder = 3;
    const LIQ = 1.78;
    const liqProf = [[.001, .07], [.84, .07], [.92, .2], [.93, LIQ], [.001, LIQ]].map(([x, y]) => new THREE.Vector2(x, y));
    const liqMat = new THREE.MeshPhysicalMaterial({ color: oilC(oils[0].color), roughness: .12, metalness: 0, transparent: true, opacity: .93, emissive: oilC(oils[0].color), emissiveIntensity: .1, clearcoat: .8, envMapIntensity: .4 });
    const liquid = new THREE.Mesh(new THREE.LatheGeometry(liqProf, 64), liqMat); liquid.renderOrder = 1;
    // liquid surface that stays level and sloshes when the bottle moves
    const surfG = new THREE.Group(); surfG.position.y = LIQ;
    const surfMat = new THREE.MeshPhysicalMaterial({ color: oilC(oils[0].color), roughness: .05, transparent: true, opacity: .95, clearcoat: 1, emissive: oilC(oils[0].color), emissiveIntensity: .2, side: THREE.DoubleSide });
    const surf = new THREE.Mesh(new THREE.CircleGeometry(.925, 64), surfMat); surf.rotation.x = -Math.PI / 2; surfG.add(surf); surf.renderOrder = 2;
    // tiny bubbles rising inside the oil
    const bubbles = [], bubMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .55 }), bubGeo = new THREE.SphereGeometry(1, 10, 10);
    for (let i = 0; i < 16; i++) { const b = new THREE.Mesh(bubGeo, bubMat); const s = .015 + Math.random() * .03; b.scale.setScalar(s);
      b.userData = { a: Math.random() * 6.28, r: Math.random() * .7, y: .1 + Math.random() * 1.6, v: .003 + Math.random() * .006 }; bubbles.push(b); }
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(.42, .42, .55, 48), new THREE.MeshStandardMaterial({ color: 0x0b2b2a, roughness: .35, metalness: .55, envMapIntensity: .6 })); cap.position.y = 3.38;
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(.44, .44, .09, 48), new THREE.MeshStandardMaterial({ color: 0xD49A1F, roughness: .25, metalness: .9 })); ring.position.y = 3.13;
    const labelMat = new THREE.MeshStandardMaterial({ map: labelTexture(THREE, oils[0]), roughness: .75, envMapIntensity: .2 });
    const label = new THREE.Mesh(new THREE.CylinderGeometry(.995, .995, 1.0, 96, 1, true, -Math.PI * .55, Math.PI * 1.1), labelMat); label.position.y = .78; label.renderOrder = 4;
    bottle.add(liquid, surfG, ...bubbles, glass, label, ring, cap);
    let wx = 0, wz = 0, vx = 0, vz = 0;

    // shadow disc
    const sh = new THREE.Mesh(new THREE.CircleGeometry(1.5, 48), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: .28 }));
    sh.rotation.x = -Math.PI / 2; sh.position.y = -.02; scene.add(sh);

    // floating oil drops
    const drops = [], dropGeo = new THREE.SphereGeometry(1, 20, 20);
    const dropMat = new THREE.MeshPhysicalMaterial({ color: 0xE8A92A, roughness: .08, transparent: true, opacity: .9, clearcoat: 1, emissive: 0xB07800, emissiveIntensity: .55, envMapIntensity: .25 });
    for (let i = 0; i < (opt.drops ?? 22); i++) {
      const m = new THREE.Mesh(dropGeo, dropMat); const s = .04 + Math.random() * .09; m.scale.set(s, s * 1.25, s);
      m.userData = { a: Math.random() * Math.PI * 2, r: 1.6 + Math.random() * 1.6, y: Math.random() * 4, v: .004 + Math.random() * .008 };
      scene.add(m); drops.push(m);
    }

    // interaction
    let tx = 0, ty = 0, dragging = false, lx = 0, spin = 0;
    const onMove = e => { const r = el.getBoundingClientRect(); const p = e.touches ? e.touches[0] : e;
      if (dragging) { spin += (p.clientX - lx) * .012; lx = p.clientX; }
      tx = ((p.clientY - r.top) / r.height - .5) * .35; ty = ((p.clientX - r.left) / r.width - .5) * .6; };
    (opt.drag ? el : window).addEventListener('pointermove', onMove, { passive: true });
    if (opt.drag) {
      el.style.cursor = 'grab'; el.style.touchAction = 'pan-y';
      el.addEventListener('pointerdown', e => { dragging = true; lx = e.clientX; el.style.cursor = 'grabbing'; });
      window.addEventListener('pointerup', () => { dragging = false; el.style.cursor = 'grab'; });
    }

    // oil cycling
    let idx = 0, target = oilC(oils[0].color), cycleT;
    const setOil = i => { idx = i; const o = oils[i]; labelMat.map.dispose(); labelMat.map = labelTexture(THREE, o); labelMat.needsUpdate = true; target = oilC(o.color); opt.onChange && opt.onChange(o, i); };
    if (oils.length > 1 && !reduce) cycleT = setInterval(() => setOil((idx + 1) % oils.length), opt.interval || 5000);
    opt.onChange && opt.onChange(oils[0], 0);

    let visible = true, raf, t0 = performance.now();
    const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) loop(); }); io.observe(el);
    const ro = new ResizeObserver(() => { renderer.setSize(W(), H()); camera.aspect = W() / H(); camera.updateProjectionMatrix(); }); ro.observe(el);
    function loop() {
      cancelAnimationFrame(raf); if (!visible || document.hidden) return;
      const t = (performance.now() - t0) / 1000;
      const px = bottle.rotation.x, pz = bottle.rotation.z;
      bottle.rotation.y += reduce ? 0 : .006; bottle.rotation.y += spin * .1; spin *= .9;
      bottle.rotation.x += (tx - bottle.rotation.x) * .05; bottle.rotation.z += (-ty * .25 - bottle.rotation.z) * .05;
      bottle.position.y = reduce ? 0 : Math.sin(t * 1.2) * .08;
      // slosh: spring keeps the oil surface level, movement makes it wave
      if (!reduce) {
        vx += (-bottle.rotation.x - wx) * .09 - (bottle.rotation.x - px) * 6 + Math.sin(t * 2.3) * .0015; vx *= .88; wx += vx;
        vz += (-bottle.rotation.z - wz) * .09 - (bottle.rotation.z - pz) * 6 + spin * .02 + Math.cos(t * 1.9) * .0012; vz *= .88; wz += vz;
        wx = Math.max(-.35, Math.min(.35, wx)); wz = Math.max(-.35, Math.min(.35, wz));
        surfG.rotation.set(wx, 0, wz);
        bubbles.forEach(b => { const u = b.userData; u.y += u.v; if (u.y > LIQ - .05) { u.y = .1; u.r = Math.random() * .7; }
          b.position.set(Math.cos(u.a + t * .3) * u.r, u.y, Math.sin(u.a + t * .3) * u.r); });
      }
      liqMat.color.lerp(target, .06); liqMat.emissive.lerp(target, .06); surfMat.color.lerp(target, .06); surfMat.emissive.lerp(target, .06);
      drops.forEach(d => { const u = d.userData; u.y += reduce ? 0 : u.v; u.a += reduce ? 0 : .003; if (u.y > 4.2) u.y = -.2;
        d.position.set(Math.cos(u.a) * u.r, u.y, Math.sin(u.a) * u.r - .4); });
      renderer.render(scene, camera); raf = requestAnimationFrame(loop);
    }
    document.addEventListener('visibilitychange', loop);
    loop();
    el.classList.add('has3d');
    return { destroy() { cancelAnimationFrame(raf); clearInterval(cycleT); io.disconnect(); ro.disconnect(); renderer.dispose(); renderer.domElement.remove(); el.classList.remove('has3d'); }, setOil };
  }

  /* 3D tilt for cards on mouse devices */
  function tilt() {
    if (reduce || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    document.addEventListener('pointermove', e => {
      const c = e.target.closest('.pcard,.tile,.way,.pstep,.cat'); document.querySelectorAll('.tilting').forEach(x => { if (x !== c) { x.classList.remove('tilting'); x.style.transform = ''; } });
      if (!c) return; const r = c.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.classList.add('tilting'); c.style.transform = `perspective(900px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 9).toFixed(2)}deg) translateZ(6px)`;
      c.style.setProperty('--gx', (x + .5) * 100 + '%'); c.style.setProperty('--gy', (y + .5) * 100 + '%');
    }, { passive: true });
  }
  window.SH3D = { mount, tilt };
  tilt();
})();
