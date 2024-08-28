document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

// const swiperContainers = document.querySelectorAll('.swiper-container');

// swiperContainers.forEach(container => {
//     new Swiper(container, {
//         slidesPerView: 4,
//         spaceBetween: 20,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         breakpoints: {
//             768: {
//                 slidesPerView: 2,
//             },
//             1024: {
//                 slidesPerView: 3,
//             },
//             1200: {
//                 slidesPerView: 4,
//             },
//         },
//     });
// });
