document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // Mouse Gold Glow
  // ===============================

  const glow = document.querySelector(".cursor-glow");

  if (glow) {
    document.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }

  // ===============================
  // Floating Dust Particles
  // ===============================

  const particles = document.querySelector(".particles");

  if (particles && particles.children.length === 0) {

    for (let i = 0; i < 70; i++) {

      const p = document.createElement("span");

      p.className = "particle";

      if (i % 3 === 0) {
        p.classList.add("large");
      }

      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 15 + "s";
      p.style.animationDuration = (12 + Math.random() * 12) + "s";

      particles.appendChild(p);
    }
  }

  // ===============================
  // Hero Parallax + Statue Movement
  // ===============================

  const hero = document.querySelector(".hero");
  const heroBg = document.querySelector(".hero-bg");

  if (hero) {

    document.addEventListener("mousemove", (e) => {

      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;

      hero.style.setProperty("--mx", `${x}px`);
      hero.style.setProperty("--my", `${y}px`);

      if (heroBg) {
        heroBg.style.transform =
          `translate(${x / 5}px, ${y / 5}px) scale(1.08)`;
      }

    });

    window.addEventListener("scroll", () => {

      if (!heroBg) return;

      const offset = window.scrollY * 0.12;

      heroBg.style.transform =
        `translateY(${offset}px) scale(1.08)`;

    });

  }

  // ===============================
  // Auto Play Videos
  // ===============================

  const videoObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      const video = entry.target;

      if (entry.isIntersecting) {

        video.play().catch(() => {});

      } else {

        video.pause();
        video
