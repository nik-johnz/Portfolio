var Typed = new Typed(".typing",{
    strings:["","MERN Stack Developer","Full Stack Developer","Web Developer",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
