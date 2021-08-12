/*eslint-disable*/

(function() {
  $('.questions-form__mask').mask('+7(999)999-99-99');
  $('.form__popup__mask').mask('+7(999)999-99-99');
})();

/*eslint-disable*/

(function() {
  function resizeBlock(){
    if(window.matchMedia("screen and (max-width: 1023px)").matches) {
       $('.footer-top__left').append($('#1999'));
     }
     else if (window.matchMedia("screen and (min-width: 1023px)").matches){
       $('#1999').appendTo($('#copy'));
     }
   }
   
   $(window).resize(function() {
        resizeBlock();
   });
   
   $(document).ready(function(){
       resizeBlock();
    });
})();