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

  // $('#fadeP').hide();
$('#fadeInBtn').click(function(){
  $('#fadeP').fadeIn('15000', function(){
    $('#fadeP').show();
  })});

$('#fadeOutBtn').click(function(){
  $('#fadeP').fadeOut('15000', function(){
    $('#fadeP').hide();
  })});

  $('#addClassBtn').click(function(){
    $('#addClassP').addClass('classAdded');
  });

  $('#beforeBtn').click(function(){
    $('#beforeP').before("<p class='classAdded'>This is a paragraph added before the original paragraph...</p>");
  });

  $('#afterBtn').click(function(){
    $('#afterP').after("<p class='classAdded'>This is a paragraph added after the original paragraph...</p>");
  });

  $('#appendBtn').click(function(){
    $('#appendP').append('This sentence has been appended to the original paragraph...');
  });

  $('#htmlBtn').click(function(){
    $('#htmlP').html('<ul><li>This</li><li>Is</li><li>No</li><li>Longer</li><li>A</li><li>P tag</li>');
  });

  $('#attrBtn').click(function(){
    $('#attr p').attr('id', 'idAdded');
  });

  $('#valBtn').click(function(){
    let para = $('#valP').val();
    console.log(para);
    $('#addValP').text(para);
  });

  $('#textBtn').click(function(){
    $('#textP').text('This is new text within the paragraph <p></p> element...');
  });
