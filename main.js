
      // Typewriter effect with rotating text (moved to top level)
      const texts = [
        "Studying to become a Fullstack Developer",
        "Studying to become a Better Person",
        "Studying to become a Better Professional",
      ];
      const typedTextElement = document.getElementById("typedText");
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typeWriter() {
        const currentText = texts[textIndex];

        if (!isDeleting && charIndex < currentText.length) {
          // Typing
          typedTextElement.textContent += currentText.charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 100);
        } else if (!isDeleting && charIndex === currentText.length) {
          // Pause at end before deleting
          isDeleting = true;
          setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex > 0) {
          // Deleting
          typedTextElement.textContent = currentText.substring(
            0,
            charIndex - 1
          );
          charIndex--;
          setTimeout(typeWriter, 50);
        } else if (isDeleting && charIndex === 0) {
          // Move to next text
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(typeWriter, 500);
        }
      }

      // Start typing after page loads
      setTimeout(typeWriter, 1000);

      // Animated code background
      const codeBg = document.getElementById("codeBg");
      const codeLines = [
        "function createWebsite() {",
        "  const experience = years++;",
        "  return awesome.project();",
        "}",
        'const skills = ["HTML", "CSS", "JS"];',
        "while(learning) { improve(); }",
        "if(passionate) { buildAmazing(); }",
        "// Coffee + Code = Magic ☕",
      ];

      function generateCodeBg() {
        let html = "";
        for (let i = 0; i < 30; i++) {
          html +=
            codeLines[Math.floor(Math.random() * codeLines.length)] + "<br>";
        }
        codeBg.innerHTML = html;
      }
      generateCodeBg();

      // Animate skill bars on scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll(".skill-progress");
            progressBars.forEach((bar) => {
              const percent = bar.getAttribute("data-percent");
              bar.style.width = percent + "%";
            });
            observer.disconnect();
          }
        });
      });

      const skillsSection = document.querySelector(".skills");
      if (skillsSection) {
        observer.observe(skillsSection);
      }
      const navbar = document.getElementById("navbar");
      const burger = document.getElementById("burger");
      const fullscreenMenu = document.getElementById("fullscreenMenu");
      const menuLinks = fullscreenMenu.querySelectorAll("a");

      // Scroll effect
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Burger menu toggle
      burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        fullscreenMenu.classList.toggle("active");
        document.body.style.overflow = fullscreenMenu.classList.contains(
          "active"
        )
          ? "hidden"
          : "auto";
      });

      // Close menu when clicking a link
      menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          burger.classList.remove("active");
          fullscreenMenu.classList.remove("active");
          document.body.style.overflow = "auto";
        });
      });