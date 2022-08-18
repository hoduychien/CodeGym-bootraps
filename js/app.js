window.addEventListener("scroll", function () {
  var header = document.querySelector(".header-nav");
  header.classList.toggle("header-sticky", window.scrollY > 0);
});

