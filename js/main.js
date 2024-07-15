//search input
const search = document.querySelector('.search');
const searchInput = search.querySelector('input');

search.addEventListener('click', function () {
    searchInput.focus();
});

searchInput.addEventListener('focus', () => {
    search.classList.add('active');
    searchInput.setAttribute('placeholder', '통합검색');
});

searchInput.addEventListener('blur', () => {
    search.classList.remove('active');
    searchInput.setAttribute('placeholder', '');
});




//main visual음료 나타나기

const fadeInEls = document.querySelectorAll('.visual .fade-in');

fadeInEls.forEach((fadeInEl, idx) => {
    setTimeout(() => {
        fadeInEl.style.opacity = 1;
    }, idx * 300)
})




//scroll top
const topBtn = document.querySelector('#to-top');

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

window.addEventListener('scroll', () => {
    if (scrollY > 200) {
        topBtn.classList.add('active')
    } else {
        topBtn.classList.remove('active')
    }
})




//notice swiper
new Swiper('.notice-line .swiper-container', {
    direction: "vertical",
    autoplay: true,
    loop: true
});

new Swiper('.promotion .swiper-container', {

    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 3000
    // },


    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    },


})




//promorion 닫고열기
const promotion = document.querySelector('.promotion');
const promotionToggle = document.querySelector('.toggle-promotion');
const promotionToggleIcon = document.querySelector('.toggle-promotion .material-icons');
let isHidePromotion = false;

promotionToggle.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotion.classList.add('hide')
        promotionToggleIcon.classList.add('active')
    } else {
        promotion.classList.remove('hide')
        promotionToggleIcon.classList.remove('active')

    }
});



//section scroll
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach((spyEl) => {
    new ScrollMagic.Scene({ //감시할 장면
        triggerElement: spyEl,  //보여짐 감시요소
        triggerHook: .8 //요소를 언제 보여줄건지 뷰포트0~1 감시요소가 0.8에 닿았을때 보여짐
    })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller()) //장면 할당
});




