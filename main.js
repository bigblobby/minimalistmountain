const container = document.getElementById('mt-container');
const menu = document.getElementById('mt-menu');
const mainNav = document.getElementById('mt-main-nav');
const innerBox = document.getElementById('mt-inner-box');
const seeMore = document.getElementById('mt-see-more');
const mainImage = document.getElementById('mt-main-image');
const mountains = document.getElementById('mt-mountains');
const mountainsArrow = document.getElementById('mt-mountains-arrow');
const contact = document.getElementById('mt-contact');
const contactText = document.getElementById('mt-contact-me');
const contactCross = document.getElementById('mt-contact-cross');
const slideUp = document.getElementById('mt-slide-up');
const slideUpArrow = document.getElementById('mt-slide-up-arrow');

const width = window.matchMedia("(max-width: 1000px)")

if(width.matches) {
  seeMore.style.display = 'none';
  slideUpArrow.classList.remove('fa-arrow-up');
  slideUpArrow.classList.add('fa-times');
}

//Window resize styles
window.addEventListener("resize", function(){
   if(window.innerWidth < 1001){
     mainImage.style.transform = 'translateX(0)';
     innerBox.style.opacity = 1;
     mountains.style.opacity = 1;
     seeMore.style.display = 'none';
   }
   else{
     seeMore.style.display = 'initial';
   }
});

setTimeout( () => innerBox.style.animationFillMode = 'none', 2100);
setTimeout( () => innerBox.style.opacity = 1, 2000);//InnerBox Text stays visible

seeMore.addEventListener('click', showMountainContent);

mainNav.addEventListener('click', (e) => {
  if(!width.matches) {
    if(e.target.textContent === 'Home') {
      mainImage.style.transitionDelay = '0.5s';
      mainImage.style.transform = 'translateX(0)';
      innerBox.style.opacity = 1;
      innerBox.style.transitionDelay = '1.2s';
      menu.checked = false;
      mountains.style.opacity = 0;
      mountains.style.transitionDelay = '';
    } else if(e.target.textContent === 'Mountains') {
      showMountainContent();
      mainImage.style.transitionDelay = '0.5s';
      menu.checked = false;
    } else if(e.target.textContent === 'Contact') {
      showContact();
    }
  } else {
    if(e.target.textContent === 'Home') {
      e.target.href = '#container';
      menu.checked = false;
    } else if(e.target.textContent === 'Mountains') {
      e.target.href = '#mountains';
      menu.checked = false;
    } else if(e.target.textContent === 'Contact'){
      showContact();
      menu.checked = false;
    }
  }
});

function showMountainContent() {
  innerBox.style.opacity = 0;
  innerBox.style.transition = 'opacity 0.5s';
  mainImage.style.transform = 'translateX(-100%)';
  mainImage.style.transition = 'transform 1s';
  mountains.style.opacity = 1;
  mountains.style.transition = 'opacity 1s';
  mountains.style.transitionDelay = '1.2s';
}

function showContact(){
  contact.style.visibility = 'visible'
  contact.style.height = '100vh';
  contact.style.zIndex = '150';
  contactText.style.opacity = 1;
  contactText.style.transition = 'opacity 1s';
  contactText.style.transitionDelay = '1s';
  contactCross.style.display = 'block';
  menu.checked = false;
}

contactCross.addEventListener('click', (e) => {
  contact.style.height = '0';
  setTimeout( ()=> contact.style.zIndex = '-1', 1000);
  setTimeout( ()=> contact.style.visibility = 'hidden', 1000);
  contactText.style.opacity = 0;
  contactText.style.transitionDelay = '';
  contactCross.style.display = 'none';
})

mountainsArrow.addEventListener('click', (e) => {
  slideUp.style.display = 'block';
  setTimeout(()=> slideUp.style.transform = 'translateY(-100%)', 1);
  slideUpArrow.style.opacity = 1;
  if(window.innerWidth > 1001){
    setTimeout(()=> container.style.transform = 'translateY(-100%)', 1);
  }
});

slideUpArrow.addEventListener('click', (e) => {
  slideUp.style.transform = 'translateY(0%)';
  container.style.transform = 'translateY(0)';
  setTimeout(()=> slideUp.style.display = 'none', 1000);
  slideUpArrow.style.opacity = 0;
});














































