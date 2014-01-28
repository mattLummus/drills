/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#play').click(play);
    $('#container').on('click', '.button', pick);
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
          tempDiv.css('background-color', '#4585C5');
          break;
        case 1:
          tempDiv.text('B');
          tempDiv.css('background-color', '#B23636');
          break;
        case 2:
          tempDiv.text('C');
          tempDiv.css('background-color', '#E6CA61');
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
    var result = $('h1');
    if(num===0){
      result.text('You won!');
      $(result).css('color', '#4A8E4A');
      $(result).css('text-shadow', '2px 2px white');
      wins++;
    }
    else{
      result.text('You Lost.');
      $(result).css('color', '#B23636');
      $(result).css('text-shadow', '2px 2px white');
      losses++;
    }
    $('h2').text('Wins ' +wins+ ' | ' +losses+ ' Losses');
  }

})();

//CHYLD'S CODE
/*
 *  var random;
 *  var stats = {wins: 0, total: 0};
 *
 *  function init()
 *    $('#play').click(play);
 *    $('.cup').click(guess);
 *
 *  function play()
 *    random = Math.floor(Math.random() * 3);
 *    $('#container').show();
 *
 *  function guess()
 *    var pick = $(this).index();
 *    stats.total++;
 *
 *    if(pick === random)
 *      stats.wins++;
 *
 *    var score = (stats.wins/stats.total) *100;
 *    score = score.toFixed(2);
 *    $('#score').text(score + '%');
 *    random = Math.floor(Math.random()*3);
 */

