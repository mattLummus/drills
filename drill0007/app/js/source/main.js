(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addButton').click(addColors);
  }

  function randomColor(){
    var randomR = Math.round((Math.random()*255));
    var randomG = Math.round((Math.random()*255));
    var randomB = Math.round((Math.random()*255));
    var randomValue = 'rgb(' + randomR + ',' + randomG + ',' + randomB + ')';
    return randomValue;
  }

  function addColors(){
    var boxColorList = $('#textBox').val();
    var list = [];
    list = boxColorList.split(' ');
    var num = list.length;
    console.log(list);

    var totalNum = 1;
    var $totalBox = $('<div>');

    for(var i=0; i<num; i++){
      var $y = $('<div>');
      var boxColor = list[i];
      $y.text(i + 1);
      $y.css('background-color', boxColor);
      $y.addClass('box');
      $('#container').append($y);

      var totalColor = randomColor();
      $totalBox.css('background-color', totalColor);
      $totalBox.addClass('box');
      totalNum += (i + 1);
    }
    totalNum = totalNum - 1;
    $totalBox.text(totalNum);
    $('#container').append($totalBox);
  }

})();
