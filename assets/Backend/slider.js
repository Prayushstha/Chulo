    var FoodSlider = new Swiper('.food-slider-swiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            loop: true,
            slidesPerView: 3.8,
            spaceBetween: 0,
            coverflowEffect: {
                rotate: 10,
                stretch: 50,
                depth: 150,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                // 320: {
                //     slidesPerView: 1,
                //     spaceBetween: 10
                // },
                // 768: {
                //     slidesPerView: 2,
                //     spaceBetween: 20
                // },
                // 1024: {
                //     slidesPerView: 3,
                //     spaceBetween: 30
                // }
            }
        });

