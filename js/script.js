
$(document).ready(function(){

    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function(){
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    $('.dot1').click(function(){
        $('.vid1').css('display','block');
        $('.vid2').css('display','none');
        $('.vid3').css('display','none');
    });

    $('.dot2').click(function(){
        $('.vid2').css('display','block');
        $('.vid1').css('display','none');
        $('.vid3').css('display','none');
    });

    $('.dot3').click(function(){
        $('.vid3').css('display','block');
        $('.vid1').css('display','none');
        $('.vid2').css('display','none');
    });

    $(window).on('scroll load',function(){
        if($(window).scrollTop() > 10){
            $('#header').addClass('header-active');
        }else{
            $('#header').removeClass('header-active');
        }
    });

});


// To the top Function Starts ------------------------
var toTop = document.getElementById('to-top');
toTop.onclick = goToTop;

function goToTop() {
  document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

window.onscroll = function () {
  toggleToTop();
};

// Hides and Displays button according to some specified pixel
function toggleToTop() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementsByClassName('to-the-top')[0].style.display = 'block';
  } else {
    document.getElementsByClassName('to-the-top')[0].style.display = 'none';
  }
}