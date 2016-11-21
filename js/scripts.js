if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js');
}

$('#reader').click(function() {
  $('body').toggleClass('reader');
});
