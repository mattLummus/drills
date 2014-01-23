/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addOption').click(addOption);
    $('#dropDown').change(changeColor);
  }

  function addOption(){
    var tempOption = $('#textBox').val();
    var upOption =tempOption.toUpperCase();
    var tempObj = ('<option value=' +tempOption+  '>' +upOption+ '</option>');
    $('#dropDown').append(tempObj);
    $('#textBox').val('');
    $('#textBox').focus();

    var color = tempOption;
    $('#paint').css('background-color', color);
  }

  function changeColor(){
    var color = $('#dropDown').val();
    $('#paint').css('background-color', color);
  }

})();
