$('.header__burger').on('click', function () {
    $(this).toggleClass('header__burger--active').
        next().
        toggleClass('header__menu--active');
});

let $slideItems = $('.carousel-slide__item');
let $nextBtn = $('.carousel__control.next');
let $prevBtn = $('.carousel__control.prev');
let currentSlide = 0;

let gotoSlide = (n) => {
    $slideItems[currentSlide].classList.toggle('active');
    currentSlide = (n + $slideItems.length) % $slideItems.length;
    $slideItems[currentSlide].classList.toggle('active');
};

let nextSlide = () => {
    gotoSlide(currentSlide + 1);
};

let prevSlide = () => {
    gotoSlide(currentSlide - 1);
};

let slideInterval = setInterval(nextSlide, 5000);

let nextClickHandler = () => {
    nextSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
};

let prevClickHandler = () => {
    prevSlide();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
};

$nextBtn.on('click', nextClickHandler);
$prevBtn.on('click', prevClickHandler);