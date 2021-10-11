$(function(){
    function isMobile() {
        if (navigator.userAgent.indexOf('Mobile') != -1){
            return true;
        }else {
            return false;
        }
    }
    if(!isMobile()){
        var gnbOpen = false;
        $('.gnb > ul > li').mouseenter(function(){
            $('.menu_sec').removeClass('open');
            $(this).find('.menu_sec').addClass('open');
       
        });
        $('.gnb').mouseleave(function(){
            $('.menu_sec').removeClass('open');
        });

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true, 
            autoplay: {
              delay: 4000,
              disableOnInteraction: false,
            },
            breakpoints:{
                1024:{
                  slidesPerView:6,
                  spaceBetween:10
                },
                768:{
                  slidesPerView:3,
                  spaceBetween:10
                },
                480:{
                  slidesPerView:2,
                  spaceBetween:20
                }, 
            }
        });
        
    }else{
        $('.m_btn').on('click', function(){
            $('.m_btn button').toggleClass('cross');
            $('.gnb').toggleClass('open');
            $('.menu_sec').removeClass('open');
        });
        $('.gnb > ul > li').on('click', function(){
            $(this).find('.menu_sec ul').toggleClass('open');
            $('.gnb > ul > li').not(this).find('.menu_sec').removeClass('open');
        })
}); 