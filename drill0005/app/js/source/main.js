(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addButton').click(addLi);
  }

  function addLi(){
    var num = $('#textBox').val();

    for(var i=1; i <= num; i++){
      var $y = $('<li>');
      $y.text(i);
      if(i%2 === 0){
        $y.addClass('evenColor');
      }
      else{
        $y.addClass('oddColor');
      }

      $('#container').append($y);
    }
  }
})();
