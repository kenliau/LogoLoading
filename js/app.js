$(function() {
  $('.button').on('click', function(e){
    e.preventDefault();
    var imgLink = $(this).attr('href');
    $('div.bouncing-icon div img').each(function( i, val ) {
      $(this).attr('src', imgLink);
    });

  });

});
