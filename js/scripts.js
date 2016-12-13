if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js');
}

$('#reader').click(function() {
  $('body').toggleClass('reader');
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var formData = JSON.stringify($("#post").serializeArray());

$.ajax({
  type: "POST",
  url: "quote.html",
  data: formData,
  success: function(){},
  dataType: "json",
  contentType : "application/json"
});
