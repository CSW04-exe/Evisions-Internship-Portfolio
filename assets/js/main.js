// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Site help modal
  var helpBtn = document.querySelector(".help-btn");
  var modal = document.querySelector(".modal-backdrop");

  if (helpBtn && modal) {
    var closeBtn = modal.querySelector(".modal-close");

    function openModal() {
      modal.hidden = false;
      helpBtn.setAttribute("aria-expanded", "true");
      closeBtn.focus();
      document.addEventListener("keydown", onKeydown);
    }

    function closeModal() {
      modal.hidden = true;
      helpBtn.setAttribute("aria-expanded", "false");
      helpBtn.focus();
      document.removeEventListener("keydown", onKeydown);
    }

    function onKeydown(event) {
      if (event.key === "Escape") {
        closeModal();
        return;
      }
      if (event.key !== "Tab") return;
      var focusable = modal.querySelectorAll("button");
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    helpBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (event) {
      if (event.target === modal) closeModal();
    });
  }

  // Back to top button
  var backToTop = document.createElement("button");
  backToTop.type = "button";
  backToTop.className = "back-to-top";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
  document.body.appendChild(backToTop);

  window.addEventListener("scroll", function () {
    backToTop.classList.toggle("visible", window.scrollY > 480);
  });
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll reveal
  var revealTargets = document.querySelectorAll(
    ".section, .card, .detail-block, .doc-card, .flow-step, .navguide-item, .feature-card"
  );
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  // Copy email address on click
  var toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  document.body.appendChild(toast);
  var toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("visible");
    }, 1800);
  }

  document.querySelectorAll('a[href^="mailto:"]').forEach(function (link) {
    link.addEventListener("click", function () {
      var email = link.getAttribute("href").replace("mailto:", "").split("?")[0];
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(function () {
          showToast("Email copied to clipboard");
        });
      }
    });
  });
});
