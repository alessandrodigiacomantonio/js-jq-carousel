$('.next').on('click', function() {
  if ($('.nav .active').hasClass('last')) {
    $('.nav .last').toggleClass('active');
    $('.nav .first').toggleClass('active');
    $('.images .last').toggleClass('active');
    $('.images .first').toggleClass('active');
  } else {
    $('.nav .active').next().toggleClass('active');
    $('.nav .active').first().toggleClass('active');
    $('.images .active').next().toggleClass('active');
    $('.images .active').first().toggleClass('active');
  }
});
$('.prev').on('click', function() {
  if ($('.nav .active').hasClass('first')) {
    $('.nav .first').toggleClass('active');
    $('.nav .last').toggleClass('active');
    $('.images .first').toggleClass('active');
    $('.images .last').toggleClass('active');
  } else {
    $('.nav .active').prev().toggleClass('active');
    $('.nav .active').last().toggleClass('active');
    $('.images .active').prev().toggleClass('active');
    $('.images .active').last().toggleClass('active');
  }
});
