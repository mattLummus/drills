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
    for(var i=0; i<4; i++){
      var tempDiv = $('<div>');
      var tempResult = $('#result' + i);
      tempResult.text(data.forecast.simpleforecast.forecastday[i].date.weekday);
      tempDiv.text(data.forecast.simpleforecast.forecastday[i].conditions);
      var imgDiv = $('<img>');
      var url = data.forecast.simpleforecast.forecastday[i].icon_url;
      imgDiv.attr('src', url);
      imgDiv.addClass('box');
      tempDiv.addClass('block');
      $(tempResult).append(imgDiv);
      $(tempResult).append(tempDiv);
    }
  }

//CHYLD'S CODE
/**
 * function receive(data){
 * var $box = $('.weather')
 *
 * for(var i=0; i<data.forecast.simpleforecast.forecastday.length; i++){
 *  var day = data.forecast.simpleforecast.forecastday[i].date.weekday;
 *  var conditions = data.forecast.simpleforecast.forecastday[i].conditions;
 *  var icon = data.forecast.simpleforecast.forecastday[i].icon_url;
 *
 *  $($box[i]).find('h1').text(day);
 *  $($box[i]).find('h2').text(condition);
 *  $($box[i]).find('img').attr('src', icon);
 *  }
 *}
*/

})();
