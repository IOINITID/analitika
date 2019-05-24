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

$('.notification-info-button-1').click(function () {
  anichange('#notification-text-1');
  return false;
})

$('.notification-info-button-2').click(function () {
  anichange('#notification-text-2');
  return false;
})

$('.notification-info-button-3').click(function () {
  anichange('#notification-text-3');
  return false;
})
