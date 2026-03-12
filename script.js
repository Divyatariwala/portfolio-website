// Menu toggle for mobile view
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }

});
scrollBtn.addEventListener("click", function () {
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

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        localStorage.setItem("theme", "dark");
    }
    else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        localStorage.setItem("theme", "light");
    }

});

// Load saved theme on page load
window.addEventListener("load", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }

});


// Contact form validation and mailto link
const sendMsg = document.getElementById("sendMsg");
sendMsg.addEventListener("click", function (e) {
    e.preventDefault();
    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Get error spans
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Validation
    if (!name) {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        isValid = false;
    }

    if (!email) {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (!message) {
        messageError.textContent = "Message is required.";
        isValid = false;
    } else if (message.length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        isValid = false;
    }

    // If valid, open mailto
    if (isValid) {
        const mailtoLink = `mailto:tariwaladivya@gmail.com?subject=Portfolio Contact Form from ${encodeURIComponent(name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
        window.location.href = mailtoLink;
    }
});

// Animate sections when they come into view
const sections = document.querySelectorAll("section");

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("in-view");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Typing effect for hero subtitle
const text = "Junior Software Engineer | Full-Stack Web Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typingText").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

window.addEventListener("load", typeEffect);


