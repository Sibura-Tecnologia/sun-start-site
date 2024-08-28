const swiperContainers = document.querySelectorAll('.swiper-container');

swiperContainers.forEach(container => {
    new Swiper(container, {
        slidesPerView: 4, // Mostra até 4 fornecedores por vez
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 30000, // Muda a cada 30 segundos
            disableOnInteraction: false, // Continua o autoplay mesmo após interação
        },
        loop: true, // Faz o loop dos slides para um efeito contínuo
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
});
