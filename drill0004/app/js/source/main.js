(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#add2').click(add2);
    $('#buttonA').click(buttonA);
    $('#buttonB').click(buttonB);
  }

  function add2(){
    $('#buttonA').show();
    $('#buttonB').show();
  }

  function buttonA(){
    $('#add2').hide();
  }

  function buttonB(){
    $('#buttonA').hide();
  }

})();
