/* Nav scroll */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });

  /* Hamburger / mobile menu */
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
    document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
  });
  document.querySelectorAll(".mnav").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  /* Scroll-reveal */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); revealObs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

  /* Active nav highlight */
  const secs = document.querySelectorAll("section[id]");
  const navAs = document.querySelectorAll(".nav-links a");
  window.addEventListener("scroll", () => {
    let cur = "";
    secs.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    navAs.forEach(a => { a.classList.toggle("active", a.getAttribute("href") === "#" + cur); });
  });

  /* Typing effect */
  const titleEl = document.getElementById("typingTitle");
  const roles = ["Data Scientist", "MLOps Practitioner", "Backend API Developer", "Python Enthusiast"];
  let ri = 0, ci = 0, del = false;
  function type() {
    const r = roles[ri];
    if (!del) {
      titleEl.textContent = r.slice(0, ci + 1); ci++;
      if (ci === r.length) { del = true; setTimeout(type, 1800); return; }
    } else {
      titleEl.textContent = r.slice(0, ci - 1); ci--;
      if (ci === 0) { del = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(type, del ? 42 : 82);
  }
  setTimeout(type, 1000);