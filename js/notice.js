$(document).ready(function () {
    $('.gnb li').hover(function () {
        $('.sub_menu', this).stop().slideToggle();
    })

    $('.sticky_ul li').hover(function () {
        $('.sub_menu', this).stop().slideToggle();
    })
})

//모바일 메뉴
const accoTitle = document.getElementsByClassName("acco_title"),
    accoItems = document.getElementsByClassName("items"),
    icons = document.getElementsByClassName("icon");

$(function(){
        $(".acco_title").click(function(){
            var header = $(this);
            var content = header.next('ul');
            var siblings = header.parent('.acco_title').siblings("div").children("ul");

        content.slideToggle();
        content.toggleClass('active')
        siblings.slideUp();
        siblings.removeClass('active');
        });
    });

    var sw=0;
    $('.gnb_mo').click(function(){
      if(sw==0){
        $('.acco').css('right','0');
        $(this).addClass('active');
        sw=1;
        console.log(sw);
      }
      $('.close_item').click(function() {
        $('.acco').css('right','-769px');
        $(this).removeClass('active');
        console.log(sw);
        sw=0;
      })
    });