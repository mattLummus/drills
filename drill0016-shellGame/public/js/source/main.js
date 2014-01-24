/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#play').click(play);
    $('#container').on('click', '.button', pick);
    $('#container').on('click', '#playAgain', play);
  }

  var wins = 0;
  var losses = 0;

  function play(){
    $('#container').empty();
    for(var i=0; i<3; i++){
      var tempDiv = $('<div>');
      switch(i){
        case 0:
          tempDiv.text('A');
          break;
        case 1:
          tempDiv.text('B');
          break;
        case 2:
          tempDiv.text('C');
          break;
      }
      $(tempDiv).addClass('button');
      $('#container').append(tempDiv);
      $('#play').hide();
    }
  }

  function pick(){
    var num = Math.round(Math.random()*3);
    console.log(num);
    var result = $('<h1>');
    var button = $('<button>');
    if(num===0){
      result.text('You won!');
      $(result).css('color', 'green');
      wins++;
    }
    else{
      result.text('You Lost.');
      $(result).css('color', 'red');
      losses++;
    }
    $('#container').append(result);
    button.text('Play Again');
    button.attr('id', 'playAgain');
    $('#container').append(button);
    $('h2').text('Wins ' +wins+ ' | ' +losses+ ' Losses');
  }

})();
