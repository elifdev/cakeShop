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

scrollRevealOption().reveal(".header-container h1", {
    ...scrollRevealOption,
});
scrollRevealOption().reveal(".header-container p", {
    ...scrollRevealOption,
    delay:500,
});
scrollRevealOption().reveal(".header-buttons", {
    ...scrollRevealOption,
    delay: 1000,
});