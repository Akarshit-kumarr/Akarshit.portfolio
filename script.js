// DARK MODE
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("dark");
};

// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// SKILL BARS
const bars = document.querySelectorAll(".bar span");

window.addEventListener("scroll", () => {
  bars.forEach((bar) => {
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = bar.dataset.width;
    }
  });
});

// MODAL
function openModal(title) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = title;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
