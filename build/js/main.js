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


document.getElementById('next').onclick = function plusIndex(n) {
    showImage(slideIndex -= 1);
}
document.getElementById('prev').onclick = function plusIndex(n) {
    showImage(slideIndex += 1);
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
        console.log('chert');
    }
if (jQuery(window).width() < 768) {
  'use strict';
$(document).ready(function() {
    let position = 0;
    const slidesToShow = 1; // Количество видимых слайдов
    const slidesToScroll = 1;
    const container = $('.slider-container'); // Находим общий контейнер карусели
    const track = $('.slider-track'); // Находим сам трек карусели, который будем двигать
    const item = $('.slider-item'); // Находим элементы карусели
    const btnPrev = $('.btn-prev'); // Кнопка прев
    const btnNext = $('.btn-next'); // Кнопка некст
    const itemsCount = item.length; // Суммарное кол-во элементов
    const itemWidth = (container.width() / slidesToShow); // Ширина каждого элемента в карусели
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
    });
    btnPrev.click(function(){
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
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
}


if (jQuery(window).width() < 1199 && jQuery(window).width() >= 768) {
  'use strict';
$(document).ready(function() {
    let position = 0;
    const slidesToShow = 2; // Количество видимых слайдов
    const slidesToScroll = 2;
    const container = $('.slider-container'); // Находим общий контейнер карусели
    const track = $('.slider-track'); // Находим сам трек карусели, который будем двигать
    const item = $('.slider-item'); // Находим элементы карусели
    const btnPrev = $('.btn-prev'); // Кнопка прев
    const btnNext = $('.btn-next'); // Кнопка некст
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
    });
    btnPrev.click(function(){
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
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
}

if (jQuery(window).width() > 1199) {
  'use strict';
$(document).ready(function() {
    let position = 0;
    const slidesToShow = 4; // Количество видимых слайдов
    const slidesToScroll = 4;
    const container = $('.slider-container'); // Находим общий контейнер карусели
    const track = $('.slider-track'); // Находим сам трек карусели, который будем двигать
    const item = $('.slider-item'); // Находим элементы карусели
    const btnPrev = $('.btn-prev'); // Кнопка прев
    const btnNext = $('.btn-next'); // Кнопка некст
    const itemsCount = item.length; // Суммарное кол-во элементов
    const itemWidth = (container.width() / slidesToShow); // Ширина каждого элемента в карусели
    const movePosition = (slidesToScroll * itemWidth); // Определяем дистанцию, на которую нам надо проскроллить, то есть умножаем кол-во элементов, которые надо проскроллить на их ширину

    
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
    });
    btnPrev.click(function(){
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
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
}