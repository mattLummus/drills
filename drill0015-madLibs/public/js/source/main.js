/* jshint camelcase:false */

(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#makeSquares').click(makeSquares);
    $('#clear').click(clear);
    $('#container').on('click', '.button', toSent);
  }

  function makeSquares(){
    var textBox = $('#textBox').val();
    var textArray = textBox.split(' ');
    var num = textArray.length;
    for(var i=0; i<num; i++){
      var word = textArray[i];
      var wordBox = $('<div>');
      $(wordBox).text(word);
      $(wordBox).addClass('button');
      $(wordBox).attr('id', 'word-' +word);
      $('#container').append(wordBox);
    }
  }

  var sentence = '';

  function toSent(){
    var word = $(this).text();
    sentence = sentence + ' ' + word;
    $('#sentence').text(sentence);
  }

  function clear(){
    $('#textBox').val('');
    $('#textBox').focus();
    $('#container').empty();
    $('#sentence').empty();
  }

})();

//CHYLD'S CODE
/**
 *  function init()
 *    $('#add-libs').click(addLibs);
 *    $('#mad-libs').on('click, word, makeSentence);
 *
 *  function addLibs()
 *    var sentence = $('#words').val();
 *    var words = sentence.split(' ');
 *    for(var i = 0; i<words.length; i++)
 *      var $button = $('<button>');
 *      $button.addClass('word');
 *      $('button').text(words[i]);
 *      $('#mad-libs').append($button);
 *
 *  function makeSentence()
 *    var word = this.textContent;
 *    var sentence = $('#sentence').text() + ' ' + word;
 *    $('#sentence').text(sentence);
 */

