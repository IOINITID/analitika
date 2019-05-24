function anichange(objName) {
  if ($(objName).css('display') == 'none') {
    $(objName).animate({
      height: 'show'
    }, 400);
  } else {
    $(objName).animate({
      height: 'hide'
    }, 200);
  }
}

$('.question-and-answer-1').click(function () {
  anichange('#question-and-answer-text-1');
  return false;
})

$('.question-and-answer-2').click(function () {
  anichange('#question-and-answer-text-2');
  return false;
})

$('.question-and-answer-3').click(function () {
  anichange('#question-and-answer-text-3');
  return false;
})
