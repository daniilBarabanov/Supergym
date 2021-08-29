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
    const slidesToShow = 4; // Количество видимых слайдов
    const slidesToScroll = 4;
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