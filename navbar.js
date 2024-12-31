function onDOMLoaded() {
 
 window.onscroll = function() { stickyNavbar() };

 var navbar = document.getElementById("navbar");
 
 var sticky = navbar.offsetTop;
 
 function stickyNavbar() {
   if (window.pageYOffset > sticky) {
     navbar.classList.add("sticky");
   } else {
     navbar.classList.remove("sticky");
   }
 }

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function updateNavbarActiveLink() {
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('nav ul li a'); 

    sections.forEach((section, index) => {
        if (isElementInViewport(section)) {
            navLinks.forEach(link => link.classList.remove('active'));

            navLinks[index].classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateNavbarActiveLink);

document.addEventListener('DOMContentLoaded', updateNavbarActiveLink);

}

document.addEventListener('DOMContentLoaded', onDOMLoaded);