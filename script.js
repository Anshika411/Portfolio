// Smooth fade-in animation for sections

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});


// Contact Form Alert

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("uname").value;

  if (name.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  alert(`Thank you ${name}! Your message has been received.`);

  form.reset();
});


// Dynamic Current Year in Footer

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML = `© ${currentYear} Anshika's Portfolio`;


// Navbar Active Link Highlight

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


// Typing Effect for Header

const text = "IGDTUW ECE-AI Student | Full Stack Developer | AI & DSA Enthusiast";
let index = 0;

const typingElement = document.querySelector("header p");

typingElement.innerHTML = "";

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

window.onload = typeEffect;