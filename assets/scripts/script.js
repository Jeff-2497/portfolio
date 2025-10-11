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



// navbar fade in and out when scroll gets to #main-target i.e. first section
// also sade in and out for other pages
let lastScrollY = window.scrollY;
const nav = document.querySelector("nav"); // Works on all pages
const mainTarget = document.getElementById("main-target"); // May be null
const threshold = 10;

window.addEventListener("scroll", () => {
  if (!nav) return;

  const currentScroll = window.scrollY;

  // Determine if we're past mainTarget (homepage only)
  const pastTarget = mainTarget ? mainTarget.getBoundingClientRect().top <= 0 : true;

  if (!pastTarget) {
    // Before mainTarget → hide navbar
    nav.classList.add("hidden");
  } else {
    // After mainTarget OR on other pages → use scroll direction logic
    if (currentScroll - lastScrollY > threshold) {
      nav.classList.add("hidden"); // scrolling down
    } else if (lastScrollY - currentScroll > threshold) {
      nav.classList.remove("hidden"); // scrolling up
    }
  }

  lastScrollY = currentScroll;
});




// Design work Slideshow 
document.querySelectorAll('.slideshow').forEach(slideshow => {
  const slides = slideshow.querySelectorAll('.slides img');
  const dotsContainer = slideshow.querySelector('.dots');

  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
  });

  let currentIndex = 0;
  const dots = dotsContainer.querySelectorAll('.dot');

  function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
  }

  // Initialize first slide
  slides[0].classList.add('active');
  dots[0].classList.add('active');

  // Arrow functionality
  const prev = slideshow.querySelector('.prev');
  const next = slideshow.querySelector('.next');

  prev.addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    showSlide(newIndex);
  });

  next.addEventListener('click', () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
  });
});