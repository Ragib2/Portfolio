// Toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// ********************************************************** using DOM Event Listener properties ********************************************
//**************************************************************** */ menuIcon.addEventListener("click" ,  ()=>{**************************************** *
// **************************************************************** *    menuIcon.classList.toggle('fa-xmar******************************************* *
//**************************************************************** *     navbar.classList.toggle('active'********************************************** *
//**************************************************************** * }) ;

// Scroll Headlink Change

let section = document.querySelectorAll("section");
let headlink = document.querySelectorAll("header nav a");
let heading = document.querySelector('header');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            headlink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        }
    });
    /************************************************************ Sticky navbar *********************************/
    heading.classList.toggle('sticky', window.scrollY > 100);

     /************************************************************ remove toggle icon and show menuicon when click *********************************/

     menuIcon.classList.remove('fa-xmark');
     navbar.classList.remove('active');
}

 /************************************************************ Scroll reveal *********************************/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.skill-heading', { origin: 'top'});