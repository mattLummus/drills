(function(){

  'use strict';

  $(document).ready(init);

  $('#reset').hide();

  function init(){
    $('#growIt').click(start);
    $('#reset').click(reset);
  }

  var exponent = 0;

  function start(){
    var delay = $('#delay').val()*1000;
    setInterval(generateNumber, delay);
  }

  function generateNumber(){
    var base = $('#base').val()*1;
    var result = Math.pow(base, exponent);
    appendNumber(base, exponent, result);
    exponent++;
  }

  function appendNumber(b, e, r){
    var $bse = $('<span>');
    var $exp = $('<span>');
    var $eql = $('<span>');
    var $res = $('<span>');
    $bse.text(b);
    $exp.text(e);
    $res.text(r);
    $eql.text('=');

    var $li = $('<li>');
    $li.append($bse, $exp, $eql, $res);
    $('#container').prepend($li);
  }

  function reset(){
    $('#base').val('');
    $('#delay').val('');
    $('#seed').focus();
    exponent = 0;

    $('#growIt').show();
    $('#reset').hide();
  }

})();
