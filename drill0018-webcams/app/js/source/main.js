(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addZip').click(addZip);
    $('#getWebcams').click(getWebcams);
    $('#clear').click(clear);
  }

  function addZip(){
    var zip = $('#zipText').val();
    var option = ('<option value=' +zip+ '>' +zip+ '</option>');
    $('#dropDown').append(option);
    $('#zipText').val('');
    $('#zipText').focus();
  }

  function getWebcams(){
    var zip = $('#dropDown').val();
    var url = 'http://api.wunderground.com/api/2989db97e3083f17/webcams/q/' +zip+ '.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    for(var i=0; i<100; i++){
      var $tempDiv = $('<div>');
      var $tempImg = $('<img>');
      var url = data.webcams[i].WIDGETCURRENTIMAGEURL;
      var hood = data.webcams[i].neighborhood;
      $tempDiv.text(hood);
      $tempImg.attr('src', url);
      $tempImg.addClass('img');
      console.log(data.webcams);
      $('#container').prepend($tempDiv);
      $('#container').prepend($tempImg);
    }
  }

  function clear(){
    $('#container').empty();
  }

})();
