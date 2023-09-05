const swiper = new Swiper('.charge_inner', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    touchRatio: 0,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: false,
    }
});

const swiper2 = new Swiper('.media_container', {
    breakpoints: {
        400: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grabCursor: true,
            touchRatio: 1,
            loop: false,
            
            pagination: {
                el: ".swiper-pagination",
                clickable: false,
            }
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            touchRatio: 0,
            // Navigation arrows
            navigation: {
                nextEl: '#media_next',
                prevEl: '#media_prev',
            },
        
            pagination: {
                el: ".swiper-pagination",
                clickable: false,
            }
        }
    }
})


//2번째 헤더 로고가 없다가 sticky로 붙을때 로고 생기게 하기
let logo = document.getElementsByClassName('sticky_logo')[0],
    inner = document.getElementsByClassName('sticky_gnb')[0],
    ul = document.getElementsByClassName('sticky_ul')[0],
    docElem = document.documentElement,
    scrollAmount;

/*
스크롤 범위 받아오기
docElem = document.documentElement,
scrollAmount = docElem.scrollTop
*/

window.addEventListener('scroll', function () {
    scrollAmount = docElem.scrollTop;
    if (scrollAmount > 2920) {
        logo.classList.add('on');
        ul.classList.add('on');
    }

    else {
        logo.classList.remove('on');
        ul.classList.remove('on');
    }
})


//서브메뉴 내리기
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
        siblings.removeClass('.active')
        });
    });


// $(function () {
//     $('.gnb_mo').click(function (e) {
//         e.preventDefault();
//         $('.acco').stop().slideToggle();
//         $('.acco').toggleClass('active');
//     })

//     $('.close_item').click(function () {
//         $('.acco').removeClass('active');
//         $('.acco').stop().slideToggle();
//     })
// })

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

//인포 탭 메뉴
const tabList = document.querySelectorAll('.observ_wrap .observ li');
const contents = document.querySelectorAll('.info_items')
let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList.length; i++){
  tabList[i].querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    for(var j = 0; j < tabList.length; j++){
        tabList[j].classList.remove('active');
        // 나머지 컨텐츠 display:none 처리
        contents[j].style.display = 'none';
      }

    // 버튼 클릭시 컨텐츠 전환
    this.parentNode.classList.add('active');

    activeCont = this.getAttribute('href');
    document.querySelector(activeCont).style.display = 'flex';
  });
}

const tabList2 = document.querySelectorAll('.observ_wrap .observ_mo li');
const contents2 = document.querySelectorAll('.info_list')
let activeCont2 = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)

for(var i = 0; i < tabList2.length; i++){
  tabList2[i].querySelector('.btn').addEventListener('click', function(s){
    s.preventDefault();
    for(var j = 0; j < tabList2.length; j++){
        tabList2[j].classList.remove('active');
        // 나머지 컨텐츠 display:none 처리
        contents2[j].style.display = 'none';
      }
      this.parentNode.classList.add('active');
    // 버튼 클릭시 컨텐츠 전환
    activeCont2 = this.getAttribute('href');
    document.querySelector(activeCont2).style.display = 'flex';
  });
}