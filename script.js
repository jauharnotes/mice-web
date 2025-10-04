// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Header background on scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".benefit-card, .advantage-card, .service-card, .portfolio-item"
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

  // Chat widget functionality
  const chatWidget = document.querySelector(".chat-widget");

  chatWidget.addEventListener("click", function () {
    // You can implement actual chat functionality here
    alert(
      "Hubungi kami di +62 811 1887 071 atau toare.expeditions@gmail.com untuk konsultasi gratis!"
    );
  });

  // Button click handlers
  const ctaButtons = document.querySelectorAll(".btn-primary, .btn-secondary");

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      // If it's a contact button, scroll to contact section
      if (
        this.textContent.includes("Konsultasi") ||
        this.textContent.includes("Hubungi")
      ) {
        e.preventDefault();
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const targetPosition = contactSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll(
    ".benefit-card, .advantage-card, .service-card"
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    const rate = scrolled * -0.5;

    if (hero) {
      hero.style.transform = `translateY(${rate}px)`;
    }
  });

  // Add loading animation
  window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });
});
