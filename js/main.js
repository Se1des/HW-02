// ==================== Бургер меню
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const spans = document.querySelectorAll('.menu__btn span');

let isWhite = false;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');

    spans.forEach(span => {
        if (isWhite) {
            span.style.backgroundColor = "#000000";
        } else {
            span.style.backgroundColor = "#FFFFFF";
        }
    });

    isWhite = !isWhite;
});

// ==================== плавність
document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// ==================== swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
    },
});