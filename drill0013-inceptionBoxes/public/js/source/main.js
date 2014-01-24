/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#addBoxes').click(addBoxes);
  }

  function addBoxes(){
    var num = $('#textBox').val();

    for(var i=0; i<=num; i++){
      var tempDiv = $('<div>');
      var boxColor = randomColor();
      tempDiv.attr('margin', 'auto');
      tempDiv.attr('id', 'div' + i);
      $(tempDiv).css('background-color', boxColor);
      $(tempDiv).css('padding', paddingSize(num));

      if(i===0){
        $('#container').append(tempDiv);
      }
      else{
        $('#div' + (i-1)).append(tempDiv);
      }
    }
  }

  function randomColor(){
      var colorR = Math.round(Math.random()*255);
      var colorG = Math.round(Math.random()*255);
      var colorB = Math.round(Math.random()*255);
      var boxColor = ('rgba(' +colorR+ ',' +colorG+ ',' +colorB+ ', .4)');
      return boxColor;
    }

  function paddingSize(num){
    var size = '';
    if(num<30){
      size = '20px';
    }
    else if(num<70){
      size = '10px';
    }
    else if(num<100){
      size = '5px';
    }
    else if(num<350){
      size = '2px';
    }
    else{
      size = '1px';
    }
    return size;
  }

})();

//CHYLD'S CODE
/**
  function inception(){
    var num = $('#number').val()*1;
    var $seed = $('#seed');

    for(var i=0; i<num; i++){
      var $div = createDiv();
      $seed.wrap($div);
      $seed = $('#container > div');
      }
   }

 function createDiv(){
   var $div = $('<div>');
   var border = '1px solid ' +randomColor();
   $div.css('border', border);

   return $div
 }
*/
