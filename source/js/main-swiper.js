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