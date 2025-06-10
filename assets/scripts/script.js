// on the intial page, this is more the arrow animation when hovered
const arrowImg = document.getElementById('arrow-img');
const bottom = document.querySelector('.bottom');

if(arrowImg) {
  arrowImg.addEventListener('mouseover', () => {
    bottom.style.marginBottom = '30px';
  });

  arrowImg.addEventListener('mouseout', () => {
    bottom.style.marginBottom = '10px';
  });
}

// "to top" button
function upFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//fade in and fade out on scroll
// Set a function onscroll - this will activate if the user scrolls
window.onscroll = function() {
  let appear = 200

  if (window.scrollY >= appear) {
    document.getElementById("buttonUp").style.opacity = '1'
    document.getElementById("buttonUp").style.pointerEvents = 'all'
  } else {
    document.getElementById("buttonUp").style.opacity = '0'
    document.getElementById("buttonUp").style.pointerEvents = 'none'
  }
}

// navbar fade in and out when scroll gets to #main-target i.e. first section
const nav = document.getElementById("nav");
const mainTarget = document.getElementById("main-target");

if (mainTarget) {
  window.addEventListener("scroll", () => {
    const targetPosition = mainTarget.getBoundingClientRect().top;

    if (targetPosition <= 0) {
      nav.classList.remove("hidden");
    } else {
      nav.classList.add("hidden");
    }
  }); 
}


// circle following cursor
const circle = document.querySelector('.cursor-circle');
let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
const speed = 0.2; 

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
function animate() {
  circleX += (mouseX - circleX) * speed;
  circleY += (mouseY - circleY) * speed;
  circle.style.left = `${circleX}px`;
  circle.style.top = `${circleY}px`;
  requestAnimationFrame(animate);
}

animate();

// when scrolling up navabr appears otherwise its invisible
let lastScrollY = window.scrollY;
const nav2 = document.querySelector("nav");
let threshold = 10;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (!nav2) return;

  if (currentScroll - lastScrollY > threshold) {
    nav2.classList.add("hidden");
  } else if (lastScrollY - currentScroll > threshold) {
    nav2.classList.remove("hidden");
  }

  lastScrollY = currentScroll;
});