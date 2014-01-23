/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#getWeather').click(getWeather);

  }

  function getWeather(){
    var url = 'http://api.wunderground.com/api/2989db97e3083f17/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
    var windDescription = data.current_observation.wind_string;
    var direction = data.current_observation.wind_dir;
    var degrees = data.current_observation.wind_degrees;
    var speed = data.current_observation.wind_mph;
    var gust = data.current_observation.wind_gust_mph;
    $('#windDescription').text(windDescription);
    $('#direction').text(direction);
    $('#degrees').text(degrees);
    $('#speed').text(speed);
    $('#gust').text(gust);
  }

})();
