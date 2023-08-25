/* 메인 배너 */
const main_bnr = new Swiper('#main_bnr',{
    loop:true,
    autoplay:{delay:3000, disableOnInteraction:false},
    direction:'horizontal',
    navigation: {
        nextEl: '#main_bnr .swiper-button-next',
        prevEl: '#main_bnr .swiper-button-prev',
    }
})
/* 이벤트 배너 */
const event_bnr = new Swiper('#event_bnr',{
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    slidesPerView:3,
    autoplay:{delay:50000},
    speed:800,
    navigation: {
        nextEl: '#event_bnr .swiper-button-next',
        prevEl: '#event_bnr .swiper-button-prev',} 
})
/* 베스트 셀러 */
const best_seller = new Swiper('#best_seller',{
    loop:true,
    disableOnInteraction:false,
    slidesPerView:4,
    autoplay:{delay:2000},
    speed:500,
    navigation: {
        nextEl: '#best_seller .swiper-button-next',
        prevEl: '#best_seller .swiper-button-prev',} 
})
/*  신상품 */
const new_product = new Swiper('.new_product_slide #new_product',{
    loop:true,
    disableOnInteraction:false,
    slidesPerView:4,
    spaceBetween:30,
    autoplay:{delay:2000},
    speed:500,
    navigation: {
        nextEl: '#new_product .swiper-button-next',
        prevEl: '#new_product .swiper-button-prev',},
})
/* 퀵 버튼 - top 버튼 */
const topBtn = document.querySelector('.quick_btn .top_btn')
topBtn.addEventListener('click',function(){
    window.scrollTo({left:0, top:0})
})
console.log(topBtn)
const mainHeader = document.querySelector('.main_header')
const scrollHeader = document.querySelector('.scroll_header')

/* 검색영역 클릭 시 동작 */
const searchIcon = document.querySelector('nav .search_icon')
const searchWrap = document.querySelector('.search_wrap')
console.log(mainHeader,scrollHeader, searchIcon, searchWrap)
searchWrap.classList.toggle('showHide')
searchIcon.addEventListener('click',function(e){
    e.preventDefault()
    searchWrap.classList.toggle('showHide')
})
/* 검색영역 클릭 시 동작 스크롤 시 header부분    */
const ScrollSearchIcon = document.querySelector('.scroll_header nav .search_icon')
const ScrollSearchWrap = document.querySelector('.scroll_header .search_wrap')
console.log(ScrollSearchIcon, ScrollSearchWrap)
ScrollSearchWrap.classList.toggle('showHide')
ScrollSearchIcon.addEventListener('click',function(e){
    e.preventDefault()
    ScrollSearchWrap.classList.toggle('showHide')
})
/* swiper-slide header 광고영역 */
const header_adver = new Swiper('#header_adver',{
    autoplay:{delay:3000},
    loop:true,
    direction:'vertical',
})
/* 스크롤 시 header 변경 */

scrollHeader.style.transform = 'translateY(-60px)';
scrollHeader.style.transform = 'opacity(0)'
window.addEventListener('scroll',function(){
    if(window.scrollY > 100){
        scrollHeader.style.transform = 'translateY(0)';
        mainHeader.style.transform = 'translateY(-230px)';
        mainHeader.style.filter = 'opacity(0)'
        scrollHeader.style.filter = 'opacity(100%)'
    }else{
        scrollHeader.style.transform = 'translateY(-60px)'
        mainHeader.style.transform = 'translateY(0)'
        mainHeader.style.filter = 'opacity(100%)'
        scrollHeader.style.filter = 'opacity(0)'
    }
})
