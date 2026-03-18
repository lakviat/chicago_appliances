const mobileToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const chatToggle = document.querySelector(".chat-toggle");
const chatPanel = document.querySelector(".chat-panel");
const form = document.querySelector("#appointment-form");
const formNote = document.querySelector("#form-note");
const marqueeTrack = document.querySelector(".brand-track");
const prevArrow = document.querySelector(".marquee-prev");
const nextArrow = document.querySelector(".marquee-next");

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.hidden = expanded;
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    });
  });
}

if (chatToggle && chatPanel) {
  chatPanel.hidden = true;
  chatToggle.setAttribute("aria-expanded", "false");

  chatToggle.addEventListener("click", () => {
    const expanded = chatToggle.getAttribute("aria-expanded") === "true";
    chatToggle.setAttribute("aria-expanded", String(!expanded));
    chatPanel.hidden = expanded;
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".chat-widget")) {
      chatToggle.setAttribute("aria-expanded", "false");
      chatPanel.hidden = true;
    }
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    const accessKey = form.querySelector('input[name="access_key"]')?.value.trim();

    if (!accessKey) {
      event.preventDefault();
      formNote.textContent =
        "Add your Web3Forms access key to the hidden access_key field before sending submissions.";
    }
  });
}

function scrollBrands(direction) {
  if (!marqueeTrack) return;
  marqueeTrack.scrollBy({
    left: direction * 320,
    behavior: "smooth",
  });
}

prevArrow?.addEventListener("click", () => scrollBrands(-1));
nextArrow?.addEventListener("click", () => scrollBrands(1));
