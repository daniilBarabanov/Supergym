var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://code.jquery.com/jquery-3.4.1.slim.min.js');
document.head.appendChild(jQueryScript);
/*eslint-disable*/

(function() {
  $('.form__phone-input').mask('+7(999)999-99-99');
})();
