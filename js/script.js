//$('.video').fitVids();

$('.imagine').show();
$('.filter').hide();
$('.moment').hide();

$('.panel-imagine').on('click', function(){

  $('.filter').hide();
  $('.moment').hide();
  $('.imagine').show();
});

$('.panel-filter').on('click', function(){

  $('.moment').hide();
  $('.imagine').hide();
  $('.filter').show();
});

$('.panel-moment').on('click', function(){

  $('.filter').hide();
  $('.imagine').hide();
  $('.moment').show();
});
