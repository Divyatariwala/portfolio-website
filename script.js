// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});


// DARK MODE TOGGLE

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}
else{

toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

}

});



const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});