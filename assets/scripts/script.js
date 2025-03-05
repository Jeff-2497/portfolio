const arrowImg = document.getElementById('arrow-img');
const bottom = document.querySelector('.bottom');

arrowImg.addEventListener('mouseover', () => {
    bottom.style.marginBottom = '45px';
});

arrowImg.addEventListener('mouseout', () => {
    bottom.style.marginBottom = '30px';
});


window.onscroll = onScroll;

function onScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.remove("scroll-top");
  } else {
    document.body.classList.add("scroll-top");
  }
}

// "to top" button

function upFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//fade in and fade out on scroll

// Set a function onscroll - this will activate if the user scrolls
window.onscroll = function() {
  // Set the height to check for
  let appear = 200
  if (window.scrollY >= appear) {
    // If more show the element
    document.getElementById("buttonUp").style.opacity = '1'
    document.getElementById("buttonUp").style.pointerEvents = 'all'
  } else {
    // Else hide it
    document.getElementById("buttonUp").style.opacity = '0'
    document.getElementById("buttonUp").style.pointerEvents = 'none'
  }
}