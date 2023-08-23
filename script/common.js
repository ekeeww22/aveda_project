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

scrollHeader.style.display = 'none'

window.addEventListener('scroll',function(){
    if(window.scrollY > 100){
        scrollHeader.style.display = 'flex';
        mainHeader.style.display = 'none';
        
    }else{
        scrollHeader.style.display = 'none'
        mainHeader.style.display = 'flex'
    }
    
})
