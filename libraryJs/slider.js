
	"use strict";
  var main = document.getElementsByTagName('main')[0];
  
    // Slider Starts -------------------------------------
    var slideIndex = 1;
    var slides = document.getElementsByClassName('slides');
    if (slides.length > 1) {
      showSlides(slideIndex);
    }
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Indicators controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var indicators = document.getElementsByClassName('indic');
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (var i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      indicators[slideIndex - 1].className += ' active';
    }
