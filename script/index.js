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
    centeredSlides:true,
    slidesPerview:3,
    loop:true,
    autoplay:{delay:4000},
    speed:800,
    navigation: {
        nextEl: '#event_bnr .swiper-button-next',
        prevEl: '#event_bnr .swiper-button-prev',} 
})
/* 베스트 셀러 */
const best_seller = new Swiper('#best_seller',{
    centeredSlides:true,
    slidesPerview:4,
    loop:true,
    autoplay:{delay:4000},
    speed:800,
    navigation: {
        nextEl: '#best_seller .swiper-button-next',
        prevEl: '#best_seller .swiper-button-prev',} 
})
/*  신상품 */
const new_product = new Swiper('#new_product',{
    centeredSlides:true,
    slidesPerview:4,
    loop:true,
    autoplay:{delay:4000},
    speed:800,
    navigation: {
        nextEl: '#new_product .swiper-button-next',
        prevEl: '#new_product .swiper-button-prev',} 
})