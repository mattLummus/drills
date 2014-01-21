(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addButton').click(addImg);
  }

  function addImg(){
    var imgURL = $('#textBox').val();
    imgURL = 'url(' + imgURL + ')';

    var $y = $('<div>');
    $y.css('background-image', imgURL);
    $y.css('height', '200px');
    $y.css('width', '200px');
    $y.css('background-size', 'cover');
    $y.css('float' ,'left');
    $y.css('border-radius' ,'50%');
    $y.css('box-shadow', 'inset 0 0 10px 10px black');
    $y.css('box-shadow', '0 0 10px 10px black');

    $('#container').append($y);
  }
})();
