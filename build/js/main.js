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

var slideIndex = 1;

function showImage(n) {

    'use strcit';

    var slide = document.getElementsByClassName('feedback-item');
    var i;

    if (n > slide.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slide.length;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'flex';
    console.log('123');
}
showImage(slideIndex);

function plusIndex(n) {
    showImage(slideIndex += n);
}
var subIndex = 1;

function showBlock(a) {

    'use strict'

    var sub = document.getElementsByClassName('subscription-cards');
    var g;

    if (a > sub.length) {
        subIndex = 1;
    }

    if(a < 1) {
        subIndex = sub.length;
    }

    for (g = 0; g < sub.length; g++) {

        sub[g].style.display = 'none';
        sub[g].classList.remove('is-active');

    }
    sub[subIndex - 1].style.display = 'flex';
    sub[subIndex - 1].classList.add('is-active');
    console.log('321');
}

showBlock(subIndex);

function plusSub(a) {
    showBlock(subIndex += a);
}

function currentSlide(a) {
    'use strict' 
    
    showBlock(subIndex = a);
}
/*
const tabItems = document.querySelectorAll('.months-item__link');
const contentItems = document.querySelectorAll('.subscription-cards');

const findClearActiveClass = (elements, className = 'is-active')  => {
    Array.from(elements).find(item =>
        item.classList.remove(`${className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${ className}`)
}

const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('is-active')) return

        const currentItem = index
        
        findClearActiveClass(tabItems)
        findClearActiveClass(contentItems)

        setActiveClass(tabItems, currentItem)
        setActiveClass(contentItems, currentItem)
    })
}
tabItems.forEach(checkoutTabs)
*/
/*
import Swiper from "swiper";

window.addEventListener(`load`, () => {
  const sliderBlock = document.querySelector(`.slider__wrapper`);
  if (sliderBlock) {
    const mainSlider = new Swiper(`.slider__wrapper`, {
      loop: true,
      navigation: {
        nextEl: `.slider__btn--next`,
        prevEl: `.slider__btn--prev`
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        }
      }
    });
  }
});
console.log('kkk')
*/
'use strict';
$(document).ready(function() {
    let position = 0;
    const slidesToShow = 6; // Количество видимых слайдов
    const slidesToScroll = 2;
    const container = $('.coaches__slider '); // Находим общий контейнер карусели
    const track = $('.slider__list'); // Находим сам трек карусели, который будем двигать
    const item = $('.slider__item'); // Находим элементы карусели
    const btnPrev = $('slider__btn--prev'); // Кнопка прев
    const btnNext = $('slider__btn--next'); // Кнопка некст
    const itemsCount = item.length; // Суммарное кол-во элементов
    const itemWidth = container.width() / slidesToShow; // Ширина каждого элемента в карусели
    const movePosition = slidesToScroll * itemWidth; // Определяем дистанцию, на которую нам надо проскроллить, то есть умножаем кол-во элементов, которые надо проскроллить на их ширину

    
    item.each(function(index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnNext.click(function(){
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
        console.log('next');
    });
    btnPrev.click(function(){
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
        console.log('prev');
    });
    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };

    const checkBtns = () => {
        btnPrev.prop('disabled',position >= 0);
        btnNext.prop(
            'disabled',
            position <= -(itemsCount - slidesToShow) * itemWidth,
         );
    };
    checkBtns();
});
checkBtns();