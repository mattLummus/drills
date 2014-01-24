/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addImage').click(addImage);
  }

  function addImage(){
    var zip = $('#textBox').val();
    var url = 'http://api.wunderground.com/api/2989db97e3083f17/satellite/q/' +zip+ '.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    for(var i=0; i<3; i++){
      var tempImg = $('<img>');
      var imgURL;
      switch(i){
        case 0:
          imgURL= data.satellite.image_url;
          break;
        case 1:
          imgURL= data.satellite.image_url_ir4;
          break;
        case 2:
          imgURL= data.satellite.image_url_vis;
          break;
        default:
      }
      $(tempImg).attr('src', imgURL);
      $('#container').append(tempImg);
    }
  }

})();
