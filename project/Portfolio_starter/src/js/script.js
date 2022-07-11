const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

// скрипт , который берет число в % и растяшивает полоску на это количесто %

const counters = document.querySelectorAll('.skillsjob__progress_items_head-procent'),
    lines = document.querySelectorAll('.skillsjob__progress_items_band-orange');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});