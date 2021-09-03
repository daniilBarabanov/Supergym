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

/*
document.querySelectorAll('.months-item__link').forEach((element) => {
    element.addEventListener('click',
    function currentSlide(a) {
        'use strict'

        showBlock(subIndex = a);
    });
});
*/

let link = document.querySelectorAll('.months-item__link');
link[0].addEventListener('click', function currentSlide(a) {
    'use strict'

    showBlock(subIndex = 1);
});

link[1].addEventListener('click', function currentSlide(a) {
    'use strict'

    showBlock(subIndex = 2);
});
link[2].addEventListener('click', function currentSlide(a) {
    'use strict'

    showBlock(subIndex = 3);
});


function currentSlide(a) {
        'use strict'

        showBlock(subIndex = a);
    }
