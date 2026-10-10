/**
 * ============================================================================
 * PORTFOLIO JAVASCRIPT LOGIC
 * Author: Muhammed Faizal (Flutter Developer)
 * Features: Typewriter effect, scroll-aware navbar, mobile nav auto-close,
 *           contact form validation, back-to-top button, dynamic year.
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // --------------------------------------------------------------------------
  // 1. DYNAMIC COPYRIGHT YEAR
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. HERO SECTION TYPEWRITER EFFECT
  // --------------------------------------------------------------------------
  const typingRoleElement = document.getElementById("typingRole");
  const roles = [
    "DATA ANALYST",
    "PYTHON & SQL ENTHUSIAST",
    "POWER BI & DASHBOARD BUILDER",
    "EDA & STATISTICAL MODELER"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 1800;

  function typeRoleEffect() {
    if (!typingRoleElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingRoleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingRoleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let nextTickDelay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      // Finished typing current word, pause before erasing
      nextTickDelay = pauseBetweenWords;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Finished erasing, move to next role
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      nextTickDelay = 400;
    }

    setTimeout(typeRoleEffect, nextTickDelay);
  }

  typeRoleEffect();

  // --------------------------------------------------------------------------
  // 3. NAVBAR SCROLL EFFECT & BACK TO TOP BUTTON
  // --------------------------------------------------------------------------
  const mainNavbar = document.getElementById("mainNavbar");
  const backToTopBtn = document.getElementById("backToTopBtn");

  function handleScroll() {
    const scrollPosition = window.scrollY;

    // Navbar background blur & shadow on scroll
    if (mainNavbar) {
      if (scrollPosition > 60) {
        mainNavbar.classList.add("scrolled");
      } else {
        mainNavbar.classList.remove("scrolled");
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPosition > 350) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Trigger initial check

  // Back to top button click event
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION: AUTO COLLAPSE ON LINK CLICK
  // --------------------------------------------------------------------------
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.getElementById("navbarContent");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Check if mobile collapse is currently shown
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. ANIMATE PROGRESS BARS ON SCROLL INTO VIEW
  // --------------------------------------------------------------------------
  const skillSection = document.getElementById("skills");
  const progressFills = document.querySelectorAll(".progress-bar-fill");

  if ("IntersectionObserver" in window && skillSection) {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            progressFills.forEach((bar) => {
              const currentWidth = bar.style.width;
              bar.style.width = "0%";
              // Trigger smooth transition
              setTimeout(() => {
                bar.style.width = currentWidth;
              }, 100);
            });
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    skillObserver.observe(skillSection);
  }

  // --------------------------------------------------------------------------
  // 6. CONTACT FORM VALIDATION & INTERACTIVE FEEDBACK
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById("portfolioContactForm");
  const formAlert = document.getElementById("contactFormAlert");
  const submitBtn = document.getElementById("submitFormBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      // Check HTML5 validity
      if (!contactForm.checkValidity()) {
        contactForm.classList.add("was-validated");

        if (formAlert) {
          formAlert.className = "alert alert-danger d-block";
          formAlert.innerHTML = `
            <i class="fa-solid fa-triangle-exclamation me-2"></i>
            Please fill in all required fields marked with an asterisk (*).
          `;
        }
        return;
      }

      // If valid, simulate submission feedback
      contactForm.classList.add("was-validated");

      // Temporarily disable submit button to indicate progress
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        Sending message...
      `;

      setTimeout(() => {
        // Display success alert
        if (formAlert) {
          formAlert.className = "alert alert-success d-block";
          formAlert.innerHTML = `
            <i class="fa-solid fa-circle-check me-2"></i>
            <strong>Thank you, ${document.getElementById("senderName").value}!</strong>
            Your message has been received. (Demo submission completed).
          `;
        }

        // Reset form fields
        contactForm.reset();
        contactForm.classList.remove("was-validated");

        // Restore submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<i class="fa-solid fa-check me-2"></i> Message Sent!`;

        setTimeout(() => {
          submitBtn.innerHTML = originalBtnHtml;
        }, 3500);
      }, 1000);
    });
  }

  // --------------------------------------------------------------------------
  // 7. SMOOTH LINK SCROLLING ADJUSTMENT
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#" || targetId === "") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
