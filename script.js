// =========================
// Typing Text Effect
// =========================

const typingText = document.querySelector(".typing-text");

const roles = [
    "Gameplay Programmer",
    "Unity Developer",
    "Systems Designer",
    "Narrative Game Designer"
];

let roleIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, letterIndex + 1);
        letterIndex++;
    }

    let speed = isDeleting ? 55 : 95;

    if (!isDeleting && letterIndex === currentRole.length) {
        speed = 1200;
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 350;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// Scroll Reveal
// =========================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 110) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// =========================
// Mobile Navigation
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// =========================
// Back To Top
// =========================

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 450) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// =========================
// Active Nav Link
// =========================

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const allNavLinks = document.querySelectorAll(".nav-links a");

allNavLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});
