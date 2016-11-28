(function() {
  function removeLightbox() {
    $('.overlay').remove();
    $('.lightbox-content').remove();
  };
  function close() {
    $('.lightbox-content p').click(function () {
      removeLightbox();
      });
  };
  $('.lightbox').click(function () {
    var imgSrc = $(this).attr('src');
    var fileName = imgSrc.split('/').pop();
    $('body').append('<div class="overlay"></div><div class="lightbox-content"><img src="img/full-size/' + fileName + '"><p>Close or Esc key</p></div>');
    close();
  });
  $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        removeLightbox();
      }
    });
}());
