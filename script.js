// Cursor Glow

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// Floating particles

const particles=document.querySelector(".particles");

if(particles){

for(let i=0;i<40;i++){

const p=document.createElement("span");

p.className="particle";

p.style.left=Math.random()*100+"%";

p.style.animationDelay=Math.random()*10+"s";

p.style.animationDuration=(10+Math.random()*12)+"s";

particles.appendChild(p);

}

}

// Reveal animations

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.gallery-card").forEach(el=>observer.observe(el));

// Auto-play preview videos

document.querySelectorAll("video").forEach(video=>{

video.addEventListener("mouseenter",()=>video.play());

video.addEventListener("mouseleave",()=>{

video.pause();

video.currentTime=0;

});

});
