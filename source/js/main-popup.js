'use strict';

(function () {
  var link = document.querySelector('.contacts-item__button');
  var popup = document.querySelector('.popup');
  var popup2 = popup.querySelector('.popup__form');
  var close = popup2.querySelector('.close');
  var form = popup2.querySelector('.form__popup');
  var names = popup2.querySelector('[name=yourname]');
  var phones = popup2.querySelector('[name=yourphone]');
  var questions = popup2.querySelector('[name=yourquestion]');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }


  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    document.body.style.overflow = 'hidden';

    if (storage) {
      names.value = storage;
      phones.focus();
    }
    names.focus();
  });

  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
    document.body.style.overflow = 'visible';
  });

  form.addEventListener('submit', function (evt) {
    if (!names.value || !phones.value) {
      evt.preventDefault();
      popup.classList.remove('modal-error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('names', names.value);
      }
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
        popup.classList.remove('modal-error');
        document.body.style.overflow = 'visible';
      }
    }
    if (evt.keyCode === 88) {
      evt.preventDefault();
      if (popup.classList.contains('modal-show')) {
        popup.classList.remove('modal-show');
        popup.classList.remove('modal-error');
        document.body.style.overflow = 'visible';
      }
    }
  });
})();
