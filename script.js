// Menu toggle for mobile view
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }

});
scrollBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Change navbar style on scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme","dark");
    } 
    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme","light");
    }

});

// Load saved theme on page load
window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

});