/* ---------------------------------------------------------------------------------------------- */
// Pop up

var modal = $('#modalSlider');
function modalOpen(projectNumber){
    modal.fadeIn("slow");
    ProjetsSection.slides(projectNumber);
    // showDivs(1);
    window.swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoHeight: true,

    });  
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.fadeOut("slow");
    swiper.destroy();

}

// Slider

// var slideIndex = 1;


// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function currentDiv(n) {
//   showDivs(slideIndex = n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dots");
//   if (n > x.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//      dots[i].className = dots[i].className.replace(" w3-white", "");
//   }
//   x[slideIndex-1].style.display = "block";
// }