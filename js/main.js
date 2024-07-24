

//검색창 input
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
    searchInput.value = '';
});



//header 벳지 모바일 닫기
const badge = document.querySelector('header .badges');
const badgeX = document.querySelector('header .badges .material-icons');

badgeX.addEventListener('click',()=>{
    badge.style.display = 'none';
})





//main 음료 시간순 나타나기
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




//notice
new Swiper('.notice-line .swiper-container', {
    direction: "vertical",
    autoplay: true,
    loop: true
});


//notice promotion
if(innerWidth >= 640){
    new Swiper('.promotion .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000
        },
    
        pagination: {
            el: '.promotion .swiper-pagination',
            clickable: true
        },
        navigation: {
            prevEl: '.promotion .swiper-prev',
            nextEl: '.promotion .swiper-next'
        },
    })
}else if(innerWidth < 640){
    new Swiper('.promotion .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.promotion .swiper-pagination',
            clickable: true
        }
    })
}




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


//footer 모바일 메뉴 닫고열기
const footerMenuTitle = document.querySelectorAll('.footer_menu .menu_title');

footerMenuTitle.forEach((title,idx)=>{
    title.addEventListener('click',()=>{
        let menuList = title.nextElementSibling;    //title의 다음형제요소
        let menuIcon = title.querySelector('.material-icons');

        if(menuList){
            const isOpen = menuList.style.display ==='block';
            menuList.style.display = isOpen ? 'none':'block';
            menuIcon.classList.toggle('active');
        }
    })
})



// section scroll시 순서대로 나타나기 (pc)
const spyEls = document.querySelectorAll('section.scroll-spy');
const backPoisEls = document.querySelectorAll('section .back-position');

if(window.innerWidth >= 1024){
    spyEls.forEach((spyEl) => {
        new ScrollMagic.Scene({ //감시할 장면
            triggerElement: spyEl,  //보여짐 감시요소
            triggerHook: .8 //요소를 언제 보여줄건지 뷰포트0~1 감시요소가 0.8에 닿았을때 보여짐
        })
            .setClassToggle(spyEl, 'show') 
            .addTo(new ScrollMagic.Controller()) //장면 할당
    });
    
}else if(window.innerWidth <= 1024){
    
    backPoisEls.forEach((backPoisEl) => {
        backPoisEl.classList.remove('back-position');
    });

}


//버거메뉴 모바일 열고닫기
const berger = document.querySelector('header .mob_menu .bergerIcon');
const bergerX = document.querySelector('header .main_menu .close');
const bergerMenu = document.querySelector('header .main_menu');


berger.addEventListener('click',()=>{
    bergerMenu.style.display = 'block';
})

bergerX.addEventListener('click',()=>{
    bergerMenu.style.display = 'none';
})


//버거메뉴 모바일 타이틀 열고접기
const menuTitle = document.querySelectorAll('header .main_menu .item h4');

menuTitle.forEach((title,idx)=>{
    title.addEventListener('click',()=>{
        let titleList = title.nextElementSibling;
        
        if(titleList){
            let isOpen = titleList.style.display === 'block';
            titleList.style.display = isOpen ?'none':'block';
        }
    })
})



//back-position 클래스만 지워도 고정되어있는거 확인!!
//그러면.. classList.remove('back-position')시도..!!

    
//     그여기서 지금 back-position에 있는거
//     opacity : 1주고
//     트랜스폼으로 저멀리 가버린거 다 0으로 바꾸면 되지않을까여?!?!?!?!?!?!?
//     그 아마 트랜스폼으로 저멀리 가있어서 투명도만 가져와도 안보일꺼에여
//     트랜스폼으로 좌우로 가있고 , 투명도 0에서
//     트랜스폼 0 으로 가져오면서 투명도 1로가는 애니인거같아여 ㅇㅇㅇㅇ 그래서 이 이프문 안에 트랜스폼도 0 투명도도1 로 해야
//     원래 그냥 있는 모션이 될거같아요
//     그럼 우리가 할것

//     to-right랑 to-left 클래스 이름을 없애버리자 classList.remove() <<이거써서 없애면 트랜스폼 없어지는거니까 
//     oapcity만 수정해도될거같아여 
//     이방법이맞을거같당




// } else if(window.innerWidth >= 1024){
//     spyEls.forEach((spyEl) => {
//         new ScrollMagic.Scene({ //감시할 장면
//             triggerElement: spyEl,  //보여짐 감시요소
//             triggerHook: .8 //요소를 언제 보여줄건지 뷰포트0~1 감시요소가 0.8에 닿았을때 보여짐
//         })
//             .setClassToggle(spyEl, 'show')    => 요자식이 show 추가되면 보이고 아니면 안보이는느낌인데?
//             .addTo(new ScrollMagic.Controller()) //장면 할당
//     });
// }

