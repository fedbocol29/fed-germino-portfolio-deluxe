document.addEventListener("DOMContentLoaded",()=>{

const glow=document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

}

const particles=document.querySelector(".particles");

if(particles){

for(let i=0;i<70;i++){

const p=document.createElement("span");

p.className="particle";

if(i%3===0)p.classList.add("large");

p.style.left=Math.random()*100+"%";

p.style.animationDelay=Math.random()*15+"s";

p.style.animationDuration=(12+Math.random()*12)+"s";

particles.appendChild(p);

}

}

const heroBg=document.querySelector(".hero-bg");

if(heroBg){

window.addEventListener("scroll",()=>{

heroBg.style.transform=
`translateY(${window.scrollY*.12}px) scale(1.06)`;

});

}

// ===============================
// Cinematic Hero Movement
// ===============================

const hero=document.querySelector(".hero");
const heroBg=document.querySelector(".hero-bg");

if(hero){

document.addEventListener("mousemove",e=>{

const x=(e.clientX/window.innerWidth-.5)*10;
const y=(e.clientY/window.innerHeight-.5)*8;

hero.style.setProperty("--mx",`${x}px`);
hero.style.setProperty("--my",`${y}px`);

if(heroBg){

heroBg.style.transform=
`translate(${x/5}px,${y/5}px) scale(1.08)`;

}

});

}

/* Auto Play Videos */

const videoObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

const video=entry.target.querySelector("video");

if(!video)return;

if(entry.isIntersecting){

video.play().catch(()=>{});

}else{

video.pause();
video.currentTime=0;

}

});

},{threshold:.45});

document.querySelectorAll(".card").forEach(card=>{

videoObserver.observe(card);

});

/* Fade In */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".card,.section-title")
.forEach(el=>observer.observe(el));

});
