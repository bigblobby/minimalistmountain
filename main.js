const container = document.getElementById('container');
const menu = document.getElementById('menu');
const mainNav = document.getElementById('main-nav');
const innerBox = document.getElementById('inner-box');
const seeMore = document.getElementById('see-more');
const mainImage = document.getElementById('main-image');
const mountains = document.getElementById('mountains');
const mountainsArrow = document.getElementById('mountains-arrow');
const contact = document.getElementById('contact');
const contactMe = document.getElementById('contact-me');
const contactCross = document.getElementById('contact-cross');
const aboutUs = document.getElementById('about-us');
const aboutUsCross = document.getElementById('about-us-cross');

setTimeout( () => innerBox.style.animationFillMode = 'none', 2100);
setTimeout( () => innerBox.style.opacity = 1, 2000);

seeMore.addEventListener('click', showMountainContent);

mainNav.addEventListener('click', (e) => {
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
    contact.style.visibility = 'visible'
    contact.style.height = '100vh';
    contact.style.zIndex = '150';
    contactMe.style.opacity = 1;
    contactMe.style.transition = 'opacity 1s';
    contactMe.style.transitionDelay = '1s';
    contactCross.style.display = 'block';
    menu.checked = false;
  }
});

contactCross.addEventListener('click', (e) => {
  contact.style.height = '0';
  setTimeout( ()=> contact.style.zIndex = '-1', 1000);
  setTimeout( ()=> contact.style.visibility = 'hidden', 1000);
  contactMe.style.opacity = 0;
  contactMe.style.transitionDelay = '';
  contactCross.style.display = 'none';
})

mountainsArrow.addEventListener('click', (e) => {
  aboutUs.style.display = 'block';
  setTimeout(()=> aboutUs.style.transform = 'translateY(-100%)', 1);
  aboutUsCross.style.opacity = 1;
  setTimeout(()=> container.style.transform = 'translateY(-100%)', 1);
});

aboutUsCross.addEventListener('click', (e) => {
  aboutUs.style.transform = 'translateY(0%)';
  container.style.transform = 'translateY(0)';
  setTimeout(()=> aboutUs.style.display = 'none', 1000);
  aboutUsCross.style.opacity = 0;
});



function showMountainContent(e) {
  mountains.style.opacity = 1;
  mountains.style.transition = 'opacity 1s';
  mountains.style.transitionDelay = '1.2s';
  innerBox.style.transition = 'opacity 0.5s';
  innerBox.style.opacity = 0;
  mainImage.style.transform = 'translateX(-100%)';
  mainImage.style.transition = 'transform 1s';
}










































