window.addEventListener("scroll", function () {
  var header = document.querySelector(".header-nav");
  header.classList.toggle("header-sticky", window.scrollY > 0);
});

let nCount = (selector) => {
  $(selector).each(function () {
    $(this).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function (value) {
        $(this).text(Math.ceil(value))
      }
    })
  });
};

let position = 0;
$(window).scroll(function () {
  let oTop = $('.feature-item').offset().top - window.innerHeight;
  if (position == 0 && $(window).scrollTop() >= oTop) {
    position++;
    nCount(".number")
  }
})