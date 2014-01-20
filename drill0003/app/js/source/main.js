(function(){
  'use strict';

  function initialize(){
    $('#addColor').click(addColor);


  }
  $(document).ready(initialize);

  function addColor(){
    var color = $('#color').val();
    $('#color').val('');
    $('#color').focus();

    var $colorBox = $('<div>');
    $colorBox.addClass('color');
    $colorBox.css('background-color', color);

    $('#colors').prepend($colorBox);

  }

})();
