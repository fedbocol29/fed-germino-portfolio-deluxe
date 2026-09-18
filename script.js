
document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // Mouse Gold Glow
  // ===============================
  const glow = document.querySelector(".cursor-glow");

  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });

  // ===============================
  // Floating Dust Particles
  // ===============================
  const particles = document.querySelector(".particles");

  if (particles) {

    for (let i = 0; i < 45; i++) {

      const p = document.createElement("span");

      p.className = "particle";

      p.style.left = Math.random() * 100 + "%";

      p.style.animationDelay = Math.random() * 12 + "s";

      p.style.animationDuration = (10 + Math.random() * 10) + "s";

      particles.appendChild(p);
    }
  }

  // ===============================
  // Cathedral Parallax
  // ===============================
  const heroBg = document.querySelector(".hero-bg");

  window.addEventListener("scroll", () => {

    const offset = window.scrollY * 0.12;

    heroBg.style.transform = `translateY(${offset}px) scale(1.06)`;

  });

  // ===============================
  // Living Statue Effect
  // ===============================
  const hero = document.querySelector(".hero");

  document.addEventListener("mousemove", (e) => {

    if (!hero) return;

    const x = (e.clientX / window.innerWidth - .5) * 10;

    const y = (e.clientY / window.innerHeight - .5) * 6;

    hero.style.setProperty("--mx", x + "px");
    hero.style.setProperty("--my", y + "px");

  });

  // ===============================
  // Video Preview Hover
  // ===============================
  document.querySelectorAll("video").forEach(video => {

    video.addEventListener("mouseenter", () => {

      video.play();

    });

    video.addEventListener("mouseleave", () => {

      video.pause();

      video.currentTime = 0;

    });

  });

  // ===============================
  // 3D Project Cards
  // ===============================
  document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

      const rect = card.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - .5;

      const y = (e.clientY - rect.top) / rect.height - .5;

      card.style.transform =
        `perspective(900px)
         rotateX(${-y * 6}deg)
         rotateY(${x * 8}deg)
         translateY(-12px)`;

    });

    card.addEventListener("mouseleave", () => {

      card.style.transform = "";

    });

  });

  // ===============================
  // Fade-in Sections
  // ===============================
  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

      }

    });

  }, { threshold: .15 });

  document.querySelectorAll(".card,.section-title").forEach(el => {

    observer.observe(el);

  });

});
