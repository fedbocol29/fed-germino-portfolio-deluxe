
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

const hero=document.querySelector(".hero");

if(hero){

document.addEventListener("mousemove",e=>{

const x=(e.clientX/window.innerWidth-.5)*8;

const y=(e.clientY/window.innerHeight-.5)*6;

hero.style.setProperty("--mx",`${x}px`);

hero.style.setProperty("--my",`${y}px`);

});

}

document.querySelectorAll("video").forEach(video=>{

video.addEventListener("mouseenter",()=>{

video.play().catch(()=>{});

});

video.addEventListener("mouseleave",()=>{

video.pause();

video.currentTime=0;

});

});

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=(e.clientX-rect.left)/rect.width-.5;

const y=(e.clientY-rect.top)/rect.height-.5;

card.style.transform=`
perspective(900px)
rotateX(${-y*6}deg)
rotateY(${x*8}deg)
translateY(-12px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

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
