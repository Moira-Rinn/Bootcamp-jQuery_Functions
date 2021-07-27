$('#hide').click(function(){
  $('#hideShow').hide()});

$('#show').click(function(){
  $('#hideShow').show()});

$('#hideDuration').click(function(){
  $('#click').hide(800)});

$('#showDuration').click(function(){
  $('#click').show(800)});

$('#toggleBtn').click(function(){
  $('#toggleP').toggle()});

$('#slideDownP').hide();
$('#slideDownBtn').click(function(){
  $('#slideDownP').slideDown('slow', function(){
    $('#slideDownP').show();
  })});

$('#slideUpBtn').click(function(){
  $('#slideUpP').slideUp('slow', function(){
    $('#slideUpP').hide();
  })});

$('#slideToggleBtn').click(function(){
  $('#slideToggleP').slideToggle('slow')});