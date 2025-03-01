const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click" , () => {
    navMenu.classList.toggle("open");

    const isOpen = navMenu.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class" , 
        isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
    );
});

navMenu.addEventListener("click" , () => {
    navMenu.classList.remove("open");
    menuBtnIcon.setAttribute("class" , "fa-solid fa-bars");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,

};


ScrollReveal().reveal(".header-container h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header-container p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header-buttons", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about-image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".about-content .section-header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about-content > div", {
    ...scrollRevealOption,
    delay: 1000,
});