// Typing animation: "Vibe Coder" ↔ "Front‑End Developer"
    const typingElement = document.getElementById("typing-text");
    const typingPhrases = ["Vibe Coder", "Front‑End Developer"];
    const typingSpeed = 110;
    const eraseSpeed = 70;
    const pauseBetween = 1300;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeLoop() {
      const currentPhrase = typingPhrases[phraseIndex];

      if (!isDeleting) {
        typingElement.textContent = currentPhrase.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
          setTimeout(() => {
            isDeleting = true;
            typeLoop();
          }, pauseBetween);
        } else {
          setTimeout(typeLoop, typingSpeed);
        }
      } else {
        typingElement.textContent = currentPhrase.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % typingPhrases.length;
          setTimeout(typeLoop, typingSpeed);
        } else {
          setTimeout(typeLoop, eraseSpeed);
        }
      }
    }

    window.addEventListener("DOMContentLoaded", () => {
      typeLoop();
    });

    // Hamburger toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    // Close menu on navlink click
    const navItems = document.querySelectorAll(".nav-link");
    navItems.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });

    // Scroll-based navlink highlighting
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navItems.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(
              `.nav-link[href="#${entry.target.id}"]`
            );
            if (activeLink) activeLink.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));

    // Contact hover logic (Instagram default)
    const contactButtons = document.querySelectorAll(".contact-button");
    const instagramButton = contactButtons[0];

    contactButtons.forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        instagramButton.classList.remove("contact-button-primary");
        btn.classList.add("contact-button-primary");
      });

      btn.addEventListener("mouseleave", () => {
        contactButtons.forEach(b => b.classList.remove("contact-button-primary"));
        instagramButton.classList.add("contact-button-primary");
      });
    });