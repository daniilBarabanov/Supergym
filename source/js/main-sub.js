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