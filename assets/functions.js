var imageUrls = [
  "assets/images/ewha.jpg",
  "assets/images/nara.jpg",
  "assets/images/osaka.jpg",
  "assets/images/kyoto.jpg",
  "assets/images/fuji.jpg"
]

$(document).ready(function() {
  if ($(window).scrollTop() > screen.height) {
    $('.navbar').css('display', 'flex');
  }

  $(window).scroll(function() {
    if ($(this).scrollTop() > screen.height * 0.75) {
      $('.navbar').fadeIn(500).css('display', 'flex');
    } else {
      $('.navbar').fadeOut(500);
    }
  });
  
  $('.nav, .intro-section').find('a').click(function(e) {
    e.preventDefault();
    scrollToLink($(this).attr('href'))
  });

  var imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  var background = 'url("' + imageUrl + '") no-repeat center center/cover fixed';
  $('.background-image').css('background', background);
});

function scrollToLink(link) {
  var navbarHeight = $(window).scrollTop() > screen.height * 0.75 ? Number($('.navbar').css('height').slice(0,-2)) : 0;
  $('html, body').animate({
    scrollTop: $(link).offset().top - navbarHeight
  }, 500, 'linear');
}
