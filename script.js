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
  // Floating Dust
  // ===============================
  const particles = document.querySelector(".particles");

  if (particles) {
    for (let i = 0; i < 70; i++) {
      const p = document.createElement("span");
      p.className = "particle";

      if (i % 3 === 0) p.classList.add("large");

      p.style.left = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 15 + "s";
      p.style.animationDuration = (12 + Math.random() * 12) + "s";

      particles.appendChild(p);
    }
  }

  // ===============================
  // Cathedral Parallax
  // ===============================
  const heroBg = document.querySelector(".hero-bg");

  if (heroBg) {
    window.addEventListener("scroll", () => {
      heroBg.style.transform =
        `translateY(${window.scrollY * .12}px) scale(1.06)`;
    });
  }

  // ===============================
  // Living Statue
  // ===============================
  const hero = document.querySelector(".hero");

  if (hero) {
    document.addEventListener("mousemove", (e) => {

      const x = (e.clientX / window.innerWidth - .5) * 8;
      const y = (e.clientY / window.innerHeight - .5) * 6;

      hero.style.setProperty("--mx", `${x}px`);
      hero.style.setProperty("--my", `${y}px`);

    });
  }

  // ===============================
  // Video Preview
  // ===============================
  document.querySelectorAll("video").forEach(video => {

    video.addEventListener("mouseenter", () => {
      video.play().catch(() => {});
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

  });

  // ===============================
  // 3D Cards
  // ===============================
  document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

      const rect = card.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - .5;
      const y = (e.clientY - rect.top) / rect.height - .5;

      card.style.transform = `
        perspective(900px)
        rotateX(${-y * 6}deg)
        rotateY(${x * 8}deg)
        translateY(-12px)
      `;

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

  document.querySelectorAll(".card,.section-title")
    .forEach(el => observer.observe(el));

  // ===============================
// Cathedral Camera Navigation
// ===============================

const pages = ["index.html","projects.html","about.html"];
const current = location.pathname.split("/").pop() || "index.html";
const index = pages.indexOf(current);

let navigating = false;

window.addEventListener("wheel",(e)=>{

  if(navigating) return;

  const atTop = window.scrollY <= 5;
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 5;

  let target = null;

  if(e.deltaY > 0 && atBottom && index < pages.length-1){
    target = pages[index+1];
  }

  if(e.deltaY < 0 && atTop && index > 0){
    target = pages[index-1];
  }

  if(!target) return;

  navigating = true;

  document.body.classList.add("page-leaving");

  setTimeout(()=>{
    window.location.href = target;
  },650);

},{passive:true});
