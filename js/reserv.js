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
$(function(){
    $(".acco_title").click(function(){
        var header = $(this);
        var content = header.next('ul');
        var siblings = header.parent('.acco_title').siblings("div").children("ul");

    content.slideToggle();
    siblings.removeClass('.active')
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

//성인 요금 증감
let adtPlus = document.getElementById('adt_plus'),
    adtMinus = document.getElementById('adt_minus'),
    adtGplus = document.getElementById('adtg_plus'),
    adtGminus = document.getElementById('adtg_minus'),
    adtNumber = document.getElementById('adt_number'),
    adtGnumber = document.getElementById('adtg_number'),
    adtNum = document.getElementById('adt_num'),
    adtGnum = document.getElementById('adtg_num'),
    totalA = document.getElementById('total'),
    adt_Amount = adtNumber.innerText,
    adt_Amount2 = adtNum.innerText,
    adtg_Amount = adtGnumber.innerText,
    adtg_Amount2 = adtGnum.innerText,
    total = totalA.innerText;


    //성인요금
    adtPlus.addEventListener('click', function(){
        adt_Amount = parseInt(adt_Amount) + 1;
        adt_Amount2 = parseInt(adt_Amount2) + 1;
        total = parseInt(total) + 7000;
        adtNumber.innerText = adt_Amount;
        adtNum.innerText = adt_Amount2;
        totalA.innerText = total;
    })

    adtMinus.addEventListener('click', function(){
        if(adt_Amount > 0){
            adt_Amount = parseInt(adt_Amount) - 1;
            adt_Amount2 = parseInt(adt_Amount2) - 1;
            total = parseInt(total) - 7000;
            adtNumber.innerText = adt_Amount;
            adtNum.innerText = adt_Amount2;
            totalA.innerText = total;
        }
        else{
            adt_Amount = 0;
        }
    })

    //성인 단체 요금
    adtGplus.addEventListener('click', function(){
        adtg_Amount = parseInt(adtg_Amount) + 1;
        adtg_Amount2 = parseInt(adtg_Amount2) + 1;
        total = parseInt(total) + 6000*20;
        adtGnumber.innerText = adtg_Amount;
        adtGnum.innerText = adtg_Amount2;
        totalA.innerText = total;
    })

    adtGminus.addEventListener('click', function(){
        if(adtg_Amount > 0){
            adtg_Amount = parseInt(adtg_Amount) - 1;
            adtg_Amount2 = parseInt(adtg_Amount2) - 1;
            total = parseInt(total) - 6000*20;
            adtGnumber.innerText = adtg_Amount;
            adtGnum.innerText = adtg_Amount2;
            totalA.innerText = total;
        }
        else{
            adtg_Amount = 0;
        }
    })

//어린이 요금 증감
let kidPlus = document.getElementById('kid_plus'),
    kidMinus = document.getElementById('kid_minus'),
    kidGplus = document.getElementById('kidg_plus'),
    kidGminus = document.getElementById('kidg_minus'),
    kidNumber = document.getElementById('kid_number'),
    kidGnumber = document.getElementById('kidg_number'),
    kidNum = document.getElementById('kid_num'),
    kidGnum = document.getElementById('kidg_num'),
    kid_Amount = kidNumber.innerText,
    kid_Amount2 = kidNum.innerText,
    kidg_Amount = kidGnumber.innerText,
    kidg_Amount2 = kidGnum.innerText;


    kidPlus.addEventListener('click', function(){
        kid_Amount = parseInt(kid_Amount) + 1;
        kid_Amount2 = parseInt(kid_Amount2) + 1;
        total = parseInt(total) + 5000;
        kidNumber.innerText = kid_Amount;
        kidNum.innerText = kid_Amount2;
        totalA.innerText = total;
    })

    kidMinus.addEventListener('click', function(){
        if(kid_Amount > 0){
            kid_Amount = parseInt(kid_Amount) - 1;
            kid_Amount2 = parseInt(kid_Amount2) - 1;
            total = parseInt(total) - 5000;
            kidNumber.innerText = kid_Amount;
            kidNum.innerText = kid_Amount2;
            totalA.innerText = total;
        }
        else{
            kid_Amount = 0;
        }
    })

    //어린이 단체 요금
    kidGplus.addEventListener('click', function(){
        kidg_Amount = parseInt(kidg_Amount) + 1;
        kidg_Amount2 = parseInt(kidg_Amount2) + 1;
        total = parseInt(total) + 4000*20;
        kidGnumber.innerText = kidg_Amount;
        kidGnum.innerText = kidg_Amount2;
        totalA.innerText = total;
    })

    kidGminus.addEventListener('click', function(){
        if(kidg_Amount > 0){
            kidg_Amount = parseInt(kidg_Amount) - 1;
            kidg_Amount2 = parseInt(kidg_Amount2) - 1;
            total = parseInt(total) - 4000*20;
            kidGnumber.innerText = kidg_Amount;
            kidGnum.innerText = kidg_Amount2;
            totalA.innerText = total;
        }
        else{
            kidg_Amount = 0;
        }
    })


//청소년 요금 증감
let teenPlus = document.getElementById('teen_plus'),
    teenMinus = document.getElementById('teen_minus'),
    teenGplus = document.getElementById('teeng_plus'),
    teenGminus = document.getElementById('teeng_minus'),
    teenNumber = document.getElementById('teen_number'),
    teenGnumber = document.getElementById('teeng_number'),
    teenNum = document.getElementById('teen_num'),
    teenGnum = document.getElementById('teeng_num'),
    teen_Amount = teenNumber.innerText,
    teen_Amount2 = teenNum.innerText,
    teeng_Amount = teenGnumber.innerText,
    teeng_Amount2 = teenGnum.innerText;


    teenPlus.addEventListener('click', function(){
        teen_Amount = parseInt(teen_Amount) + 1;
        teen_Amount2 = parseInt(teen_Amount2) + 1;
        total = parseInt(total) + 6000;
        teenNumber.innerText = teen_Amount;
        teenNum.innerText = teen_Amount2;
        totalA.innerText = total;
    })

    teenMinus.addEventListener('click', function(){
        if(teen_Amount > 0){
            teen_Amount = parseInt(teen_Amount) - 1;
            teen_Amount2 = parseInt(teen_Amount2) - 1;
            total = parseInt(total) - 6000;
            teenNumber.innerText = teen_Amount;
            teenNum.innerText = teen_Amount2;
            totalA.innerText = total;
        }
        else{
            teen_Amount = 0;
        }
    })

    //청소년 단체 요금
    teenGplus.addEventListener('click', function(){
        teeng_Amount = parseInt(teeng_Amount) + 1;
        teeng_Amount2 = parseInt(teeng_Amount2) + 1;
        total = parseInt(total) + 5000*20;
        teenGnumber.innerText = teeng_Amount;
        teenGnum.innerText = teeng_Amount2;
        totalA.innerText = total;
    })

    teenGminus.addEventListener('click', function(){
        if(teeng_Amount > 0){
            teeng_Amount = parseInt(teeng_Amount) - 1;
            teeng_Amount2 = parseInt(teeng_Amount2) - 1;
            total = parseInt(total) - 5000*20;
            teenGnumber.innerText = teeng_Amount;
            teenGnum.innerText = teeng_Amount2;
            totalA.innerText = total;
        }
        else{
            teeng_Amount = 0;
        }
    })


//보훈(노인, 국가유공자) 요금 증감
let veterPlus = document.getElementById('veter_plus'),
    veterMinus = document.getElementById('veter_minus'),
    veterGplus = document.getElementById('veterg_plus'),
    veterGminus = document.getElementById('veterg_minus'),
    veterNumber = document.getElementById('veter_number'),
    veterGnumber = document.getElementById('veterg_number'),
    veterNum = document.getElementById('veter_num'),
    veterGnum = document.getElementById('veterg_num'),
    veter_Amount = veterNumber.innerText,
    veter_Amount2 = veterNum.innerText,
    veterg_Amount = veterGnumber.innerText,
    veterg_Amount2 = veterGnum.innerText;


    veterPlus.addEventListener('click', function(){
        veter_Amount = parseInt(veter_Amount) + 1;
        veter_Amount2 = parseInt(veter_Amount2) + 1;
        total = parseInt(total) + 3500;
        veterNumber.innerText = veter_Amount;
        veterNum.innerText = veter_Amount2;
        totalA.innerText = total;
    })

    veterMinus.addEventListener('click', function(){
        if(veter_Amount > 0){
            veter_Amount = parseInt(veter_Amount) - 1;
            veter_Amount2 = parseInt(veter_Amount2) - 1;
            total = parseInt(total) - 3500;
            veterNumber.innerText = veter_Amount;
            veterNum.innerText = veter_Amount2;
            totalA.innerText = total;
        }
        else{
            veter_Amount = 0;
        }
    })

    //보훈 단체 요금
    veterGplus.addEventListener('click', function(){
        veterg_Amount = parseInt(veterg_Amount) + 1;
        veterg_Amount2 = parseInt(veterg_Amount2) + 1;
        total = parseInt(total) + 3000*20;
        veterGnumber.innerText = veterg_Amount;
        veterGnum.innerText = veterg_Amount2;
        totalA.innerText = total;
    })

    veterGminus.addEventListener('click', function(){
        if(veterg_Amount > 0){
            veterg_Amount = parseInt(veterg_Amount) - 1;
            veterg_Amount2 = parseInt(veterg_Amount2) - 1;
            total = parseInt(total) - 3000*20;
            veterGnumber.innerText = veterg_Amount;
            veterGnum.innerText = veterg_Amount2;
            totalA.innerText = total;
        }
        else{
            veterg_Amount = 0;
        }
    })





// 캘린더
window.onload = function () { buildCalendar(); }    // 웹 페이지가 로드되면 buildCalendar 실행

        let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
        let today = new Date();     // 페이지를 로드한 날짜를 저장
        today.setHours(0, 0, 0, 0);    // 비교 편의를 위해 today의 시간을 초기화

        // 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
        function buildCalendar() {

            let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
            let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

            let tbody_Calendar = document.querySelector(".Calendar > tbody");
            document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
            document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

            while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
                tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
            }

            let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

            for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
                let nowColumn = nowRow.insertCell();        // 열 추가
            }

            for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

                let nowColumn = nowRow.insertCell();        // 새 열을 추가하고


                let newDIV = document.createElement("p");
                newDIV.innerHTML = leftPad(nowDay.getDate());        // 추가한 열에 날짜 입력
                nowColumn.appendChild(newDIV);

                if (nowDay.getDay() == 6) {                 // 토요일인 경우
                    nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
                }

                if (nowDay < today) {                       // 지난날인 경우
                    newDIV.className = "pastDay";
                }
                else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
                    newDIV.className = "today";
                    newDIV.onclick = function () { choiceDate(this); }
                }
                else {                                      // 미래인 경우
                    newDIV.className = "futureDay";
                    newDIV.onclick = function () { choiceDate(this); }
                }
            }
        }

        // 날짜 선택
        function choiceDate(newDIV) {
            if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
                document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
            }
            newDIV.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가
        }

        // 이전달 버튼 클릭
        function prevCalendar() {
            nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
            buildCalendar();    // 달력 다시 생성
        }
        // 다음달 버튼 클릭
        function nextCalendar() {
            nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
            buildCalendar();    // 달력 다시 생성
        }

        // input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
        function leftPad(value) {
            if (value < 10) {
                value = "0" + value;
                return value;
            }
            return value;
        }