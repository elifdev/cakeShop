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