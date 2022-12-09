const navbar = document.getElementsByTagName('nav')[0];
const myButton = document.getElementsByClassName('scroll')[0];
const navList = document.getElementsByClassName('item-nav');
const tumbalProyek = document.getElementById('item-nav-1');
const navButton = document.getElementsByClassName('link-nav');

myButton.addEventListener('click', function () {
    for (let index in navList) {
        navList[index].classList.toggle('active');
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
      navbar.classList.replace('nav-transparent', 'nav-bg');      
    } else 
    
    if (this.window.scrollY <= 0) {
      navbar.classList.replace('nav-bg', 'nav-transparent');
    }
});

myButton.addEventListener('click', function () {
  if (tumbalProyek.classList.contains('active')) {
    navbar.classList.replace('nav-transparent', 'nav-bg');
  } else 
  if (window.scrollY <= 1) {
    navbar.classList.replace('nav-bg', 'nav-transparent');
  }
});
