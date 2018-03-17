function submit() {
  var name = document.getElementById("nameInput").value;
  var  email = document.getElementById("emailInput").value;
  var  comment = document.getElementById("commentInput").value;
  
    alert("Please fill in all required fields.");

  return true;
}

$(document).ready(function(){

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    var newScroll = $('.about').offset().top;

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.aboutLogo').css({
      'transform' : 'translate(0px, '+ wScroll*0.225 +'%)'
    });

    $('.proLogo').css({
      'transform' : 'translate(0px, '+ (+(wScroll*0.06)) +'%)'
    });

    $('.conLogo').css({
      'transform' : 'translate(0px, '+ (+(wScroll*0.06)) +'%)'
    });

  });

  $(".web").click(function () {
    $(".websiteOptions").slideToggle();
  });

  $(".games").click(function () {
    $(".gameOptions").slideToggle();
  });

  $(".productivity").click(function () {
    $(".productivityOptions").slideToggle();
  });

});