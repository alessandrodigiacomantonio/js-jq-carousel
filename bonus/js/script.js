$(document).ready(function() {
  // ↓ onClick events ↓
  $('.next').on('click', function() {
    activeNext();
  });
  $('.prev').on('click', function() {
    activePrev();
  });

  // ↓ keybindings ↓
  $('html').on('keydown', function(event) {
    if (event.which == 39) activeNext();
    if (event.which == 37) activePrev();
    console.log(event.which);
  });
});

//----- ↓ funzioni ↓ ----

// ↓ script per visualizzare l'immagine successiva dello slider ↓
function activeNext() {
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
}
// ↓ script per visualizzare l'immagine precedente dello slider ↓
function activePrev() {
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
}
