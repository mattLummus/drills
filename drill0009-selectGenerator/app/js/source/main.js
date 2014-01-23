/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    //var opt = $('#textBox').val();
    //if(opt === $('#dropDown').val
    $('#addOption').click(addOption);

  }

  var count = 0;

  function addOption(){
    count++;
    var tempOption = $('#textBox').val();
    var tempObj = ('<option class="object" value=' +count+ '>' +tempOption+ '</option>');
    $('#dropDown').append(tempObj);
    $('#textBox').val('');
    $('#textBox').focus();
  }

})();
