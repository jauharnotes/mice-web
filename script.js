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

  // Chat widget functionality - Direct to WhatsApp
  const chatWidget = document.querySelector(".chat-widget");

  chatWidget.addEventListener("click", function () {
    // WhatsApp number format: remove +, spaces, and dashes
    const phoneNumber = "6281213733750"; // Format: country code + number without +
    const message = encodeURIComponent(
      "Halo TOARE, saya tertarik untuk konsultasi mengenai MICE."
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");
  });

  // Button click handlers
  const ctaButtons = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .btn-cta"
  );

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      // If it's "Layanan Kami" button, scroll to services section
      if (this.textContent.includes("Layanan")) {
        const servicesSection = document.querySelector("#services");
        if (servicesSection) {
          const headerHeight = document.querySelector(".header").offsetHeight;
          const targetPosition = servicesSection.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
      // If it's a contact/consultation button, open WhatsApp
      else if (
        this.textContent.includes("Konsultasi") ||
        this.textContent.includes("Hubungi")
      ) {
        // WhatsApp configuration
        const phoneNumber = "6281213733750";
        const message = encodeURIComponent(
          "Halo TOARE, saya tertarik untuk konsultasi mengenai MICE."
        );
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, "_blank");
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

  // Hero background rotation
  const heroBackgrounds = [
    "./assets/images/hero-bg-1.jpg",
    "./assets/images/hero-bg-2.jpg",
    "./assets/images/hero-bg-3.jpg",
  ];

  let currentBgIndex = 0;
  const heroBackground = document.getElementById("heroBackground");

  function rotateHeroBackground() {
    currentBgIndex = (currentBgIndex + 1) % heroBackgrounds.length;
    heroBackground.style.backgroundImage = `url('${heroBackgrounds[currentBgIndex]}')`;
    heroBackground.style.backgroundSize = "cover";
    heroBackground.style.backgroundPosition = "center";
    heroBackground.style.transition = "background-image 1s ease-in-out";
  }

  // Rotate background every 5 seconds
  setInterval(rotateHeroBackground, 5000);

  // Set initial background
  if (heroBackground) {
    heroBackground.style.backgroundImage = `url('${heroBackgrounds[0]}')`;
    heroBackground.style.backgroundSize = "cover";
    heroBackground.style.backgroundPosition = "center";
  }

  // Add loading animation
  window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });

  // Lightbox functionality for package cards
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.querySelector(".lightbox-close");

  // Get all package cards
  const packageCards = document.querySelectorAll(".package-card");

  packageCards.forEach((card) => {
    card.addEventListener("click", function () {
      const img = this.querySelector(".package-image img");
      const caption = this.querySelector(".package-info h3");

      if (img && img.style.display !== "none") {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption ? caption.textContent : "";
        document.body.style.overflow = "hidden"; // Prevent scrolling
      }
    });
  });

  // Close lightbox when clicking the close button
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto"; // Re-enable scrolling
    });
  }

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  });

  // Close lightbox with ESC key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      lightbox.classList.remove("active");
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  });
});
