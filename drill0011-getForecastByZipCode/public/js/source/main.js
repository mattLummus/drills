/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addOption').click(addOption);
    $('#getForecast').click(getForecast);
  }

  function addOption(){
    var tempOption = $('#textBox').val();
    var tempObj = ('<option value=' +tempOption+  '>' +tempOption+ '</option>');
    $('#dropDown').append(tempObj);
    $('#textBox').val('');
    $('#textBox').focus();
  }

  function getForecast(){
    var zip = $('#dropDown').val();
    var url = 'http://api.wunderground.com/api/2989db97e3083f17/forecast/q/' +zip+ '/query.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
    var tempDiv = $('<div>');
    tempDiv.addClass('box');
    tempDiv.text(data.forecast.simpleforecast.forecastday[0].date.weekday);
    tempDiv.text(data.forecast.simpleforecast.forecastday[0].conditions);
    $('#container').append(tempDiv);
  }

})();
