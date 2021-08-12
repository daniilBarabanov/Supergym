/*eslint-disable*/

'use strict';

(function () {
  var acc = document.getElementsByClassName('accordion');
  var i;
  var allo = document.getElementsByClassName('allo');
  var a;

  for(a = 0; a < allo.length; a++) {
    allo[a].classList.add('nonactive');
    allo[a].style.display = 'none';
    console.log('olo123');
  }

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
      for (let j = 0; j < acc.length; j++) {
        if(j !== i) {
          acc[j].nextElementSibling.style.display === 'none';
          acc[j].nextElementSibling.style.maxHeight === '0';
        }
      }
    });
  }
})();
