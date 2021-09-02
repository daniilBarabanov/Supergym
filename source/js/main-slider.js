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