$('#hideBtn').click(function(){
  $('.hideShowP').hide()});

$('#showBtn').click(function(){
  $('.hideShowP').show()});

$('#hideDurationBtn').click(function(){
  $('.hideShowToggleP').hide(800)});

$('#showDurationBtn').click(function(){
  $('.hideShowToggleP').show(800)});

$('#toggleBtn').click(function(){
  $('.hideShowToggleP').toggle(800)});

$('#slideUpBtn').click(function(){
  $('#slideP').slideUp('slow', function(){
    $('#slideP').hide();
  })});

$('#slideDownBtn').click(function(){
  $('#slideP').slideDown('slow', function(){
    $('#slideP').show();
  })});

$('#slideToggleBtn').click(function(){
  $('#slideP').slideToggle('slow')});

$('#fadeOutBtn').click(function(){
  $('#fadeP').fadeOut('slow', function(){
    $('#fadeP').hide();
  })});

$('#fadeInBtn').click(function(){
  $('#fadeP').fadeIn('slow', function(){
    $('#fadeP').show();
  })});

  $('#addClassBtn').click(function(){
    $('#addClassP').addClass('classAdded');
  });

  $('#rmClassBtn').click(function(){
    $('#addClassP').removeClass('classAdded');
  });

  $('#beforeBtn').click(function(){
    $('#beforeAfterP').before("<p class='classAdded'>This is a paragraph added before the original paragraph...</p>");
  });

  $('#afterBtn').click(function(){
    $('#beforeAfterP').after("<p class='classAdded'>This is a paragraph added after the original paragraph...</p>");
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
    let color = $('#favColor').val();
    $('#valP').html(`<span>Your Favorit Color is: </span>${color}`);
  });

  $('#textBtn').click(function(){
    $('#textP').text('This is new text within the paragraph <p></p> element...');
  });
