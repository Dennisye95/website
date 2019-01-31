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

  $('.project').hover(function(e) {
    $(this).children('.project-description').toggle();
    $(this).children('.img-thumbnail').toggleClass('image-dim');
  })
});

function scrollToLink(link) {
  var navbarHeight = $(window).scrollTop() > screen.height * 0.75 ? Number($('.navbar').css('height').slice(0,-2)) : 0;
  $('html, body').animate({
    scrollTop: $(link).offset().top - navbarHeight
  }, 500, 'linear');
}
