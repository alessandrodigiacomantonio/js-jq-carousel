$(document).ready(function() {

  //------ ↓ onClick events ↓ ------

  // ↓ slider: freccia destra ↓
  $('.next').on('click', function() {
    activeNext();
  });

  // ↓ slider: freccia sinistra ↓
  $('.prev').on('click', function() {
    activePrev();
  });

  // ↓ slider: cerchi nella navbar ↓
  $('.nav > *').on('click', function() {
    activeSelectedCircle($(this));
  });

  //------ ↑ onClick events ↑ ------

  //------ ↓ scorciatoie da tastiera ↓------
  $('html').on('keydown', function(event) {
    if (event.which == 39) activeNextImg();
    if (event.which == 37) activePrevImg();
  });
  //------ ↑ scorciatoie da tastiera ↑------
});

//------ ↓ funzioni ↓ ------

// ↓ funzione per visualizzare l'immagine successiva dello slider ↓
function activeNextImg() {
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
// ↓ funzione per visualizzare l'immagine precedente dello slider ↓
function activePrevImg() {
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

// ↓ funzione per visualizzare qualsiasi immagine nello slider cliccando sui cerchi della navbar nello slider ↓
function activeSelectedCircle(circleClicked) {
  if (! circleClicked.hasClass('active')) {
    $('.nav > *').removeClass('active');
    circleClicked.addClass('active');
    var i = 0;
    var index = 0;
    while (i < $('.nav > *').length) {
      if ($('.nav > *:nth-of-type('+(i+1)+')').hasClass('active')) index = i+1;
      i++;
    }
    $('.images > *').removeClass('active');
    $('.images > *:nth-of-type('+index+')').addClass('active');
  }
}
//------ ↑ funzioni ↑ ------
