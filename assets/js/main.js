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
});
