document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
  });

  const heroCards = document.querySelector(".hero-cards");

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  heroCards.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - heroCards.offsetLeft;
    scrollLeft = heroCards.scrollLeft;
    heroCards.style.cursor = "grabbing"; // Change cursor while dragging
  });

  heroCards.addEventListener("mouseleave", () => {
    isDragging = false;
    heroCards.style.cursor = "grab"; // Restore default cursor
  });

  heroCards.addEventListener("mouseup", () => {
    isDragging = false;
    heroCards.style.cursor = "grab"; // Restore default cursor
  });

  heroCards.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - heroCards.offsetLeft;
    const walk = (x - startX) * 1; // Scroll speed adjustment
    heroCards.scrollLeft = scrollLeft - walk;
  });

  heroCards.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    heroCards.scrollLeft += evt.deltaY;
  });
});
