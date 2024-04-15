document.querySelectorAll(".exercises-item").forEach((item) => {
  item.setAttribute("data-aos", "fade-right");
});

document.querySelectorAll(".anim-exercises").forEach((item) => {
  item.setAttribute("data-aos", "fade-down");
});

function togglemenu() {
  var nav = document.querySelector(".nav-menu");
  var option = document.querySelector(".option-navbar");
  var button = document.getElementById("btn-menu");

  nav.classList.toggle("open-menu");
  button.classList.toggle("color-menu");
  option.classList.toggle("open-menu");
}

const item = document.querySelectorAll(".titulo-item");
const container = document.querySelectorAll(".exercises-item");
const chev = document.querySelector(".chevron_titulo");

item.forEach((element, index) => {
  element.addEventListener("click", function () {
    container[index].classList.toggle("toggle_item");
    const chev = element.querySelector(".chevron_titulo");
    if (chev.innerHTML === "expand_less") {
      chev.innerHTML = "expand_more";
    } else {
      chev.innerHTML = "expand_less";
    }
  });
});

function changeColorOnScroll() {
  const sections = document.querySelectorAll(".exercises");

  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const fortyPercentHeight = windowHeight * 0.4;

    if (
      sectionRect.top <= fortyPercentHeight &&
      sectionRect.bottom >= fortyPercentHeight
    ) {
      const sectionId = section.id;
      const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

      if (navLink) {
        navLink.classList.add("color-a");
      }
    } else {
      const sectionId = section.id;
      const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

      if (navLink) {
        navLink.classList.remove("color-a");
      }
    }
  });
}

window.addEventListener("scroll", changeColorOnScroll);

