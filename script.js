const reveals = document.querySelectorAll(".reveal");
const backToTop = document.getElementById("backToTop");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("visible");
    }
  });
}

function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

window.addEventListener("scroll", () => {
  revealOnScroll();
  toggleBackToTop();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

revealOnScroll();
toggleBackToTop();
