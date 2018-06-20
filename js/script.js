$(function() {
  initPage();
})

function initPage(){
  initMLH();
  initPrizeSlider();
  initSponsorSlider();
  initFaqSlider();
  initComet();
  initRegister();
  initScroll();
}

function initRegister(){
  $("#registerButton").on("click",function(){
    window.location.href = "https://sbucomputingsociety.typeform.com/to/F0L4TF";
  });
}

function initPrizeSlider(){
  $('#prize-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}

function initSponsorSlider(){
  $('#sponsor-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}

function initFaqSlider(){
  $('#faq-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
}

function initMLH(){
  $('#stage').append('<a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/seasons/na-2018/events?utm_source=na-2018&utm_medium=TrustBadge&utm_campaign=na-2018&utm_content=white" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg" alt="Major League Hacking 2017 Hackathon Season" style="width:100%"></a>');
}

function initComet(){
  $("#comet1").append('<svg version="1.1" id="fullComet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1280 1024" style="enable-background:new 0 0 1280 1024;" xml:space="preserve"> <style type="text/css"> .st0{opacity:0.66;fill:url(#tail4_1_);} .st1{opacity:0.66;fill:url(#tail3_1_);} .st2{opacity:0.5;fill:url(#tail2_1_);enable-background:new ;} .st3{opacity:0.59;fill:url(#tail1_1_);enable-background:new ;} .st4{fill:none;stroke:#000000;stroke-miterlimit:10;} .st5{fill:#B0B0B0;} .st6{fill:none;stroke:#1B1464;stroke-miterlimit:10;} .st7{fill:url(#SVGID_1_);stroke:#FFFFFF;stroke-miterlimit:10;} .st8{fill:#FFFFFF;} </style> <linearGradient id="tail4_1_" gradientUnits="userSpaceOnUse" x1="137.8885" y1="734.2687" x2="1085.8885" y2="368.2687" gradientTransform="matrix(1 0 0 -1 0 1072.5425)"> <stop offset="5.950364e-02" style="stop-color:#524FA1"/> <stop offset="1" style="stop-color:#00ADDC"/> </linearGradient> <polygon id="tail4" class="st0" points="384,653.2 454.7,596.6 188.2,504.1 287.8,465.9 75.8,327.7 256.8,339 188.8,252.2 510.3,395.1 385.3,213.8 1095.7,780.8 "/> <linearGradient id="tail3_1_" gradientUnits="userSpaceOnUse" x1="344.2182" y1="650.6739" x2="828.2182" y2="428.6739" gradientTransform="matrix(1 0 0 -1 0 1072.5425)"> <stop offset="0.3053" style="stop-color:#524FA1"/> <stop offset="0.8545" style="stop-color:#00ADDC"/> </linearGradient> <polygon id="tail3" class="st1" points="582.4,639.2 627.9,616 423,537.7 491.6,527.6 321.5,430.3 455,455.6 395.8,401.4 646.5,512.7 535.2,401.3 1116.5,783.5 "/> <linearGradient id="tail2_1_" gradientUnits="userSpaceOnUse" x1="760.0836" y1="382.3366" x2="938.0836" y2="314.3366" gradientTransform="matrix(1 0 0 -1 0 1072.5425)"> <stop offset="0.3053" style="stop-color:#524FA1"/> <stop offset="0.8545" style="stop-color:#00ADDC"/> </linearGradient> <polygon id="tail2" class="st2" points="717,819 806.6,751.4 660.9,653.4 842.2,676.1 824.3,569.4 1059.4,763.1 "/> <linearGradient id="tail1_1_" gradientUnits="userSpaceOnUse" x1="570.8062" y1="561.2266" x2="574.5823" y2="64.6593" gradientTransform="matrix(-0.4124 0.911 -0.911 -0.4124 1381.6014 193.8024)"> <stop offset="0.1944" style="stop-color:#65C8D0"/> <stop offset="0.2656" style="stop-color:#5AA9C3"/> <stop offset="0.3671" style="stop-color:#4C85B4"/> <stop offset="0.4737" style="stop-color:#4166A8"/> <stop offset="0.5852" style="stop-color:#394F9E"/> <stop offset="0.7038" style="stop-color:#333E97"/> <stop offset="0.8344" style="stop-color:#2F3493"/> <stop offset="1" style="stop-color:#2E3192"/> </linearGradient> <polygon id="tail1" class="st3" points="762.6,618.4 833.9,631.5 700.2,514.3 864.1,587.1 841.9,500.8 1019.6,732.6 "/> <g id="mouse"> <path class="st4" d="M1002.6,733.7"/> <g> <g> <g> <path id="XMLID_1_" class="st5" d="M1187,828.8c33.5-62.3-76.8-122.6-76.8-122.6l-8.9-4.5c0,0-60.7-35.6-97.3,32.6"/> </g> </g> <path class="st5" d="M1187,829c-33.5,62.3-146.5,7.1-146.5,7.1l-8.8-4.6c0,0-64.3-29-27.7-97.2"/> </g> <path class="st6" d="M1038.7,834.9c42.3-48.6,69.4-129.2,69.4-129.2"/> <line class="st6" x1="1004.3" y1="734.6" x2="1079" y2="773.2"/> <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="638.4608" y1="87.2301" x2="655.5903" y2="70.9789" gradientTransform="matrix(-0.4663 0.8846 -0.8846 -0.4663 1415.3508 214.5137)"> <stop offset="0.1847" style="stop-color:#0E052D"/> <stop offset="0.9765" style="stop-color:#2E176D"/> </linearGradient> <path class="st7" d="M1025.5,745.5c2-3.7,12.5-2,23.4,3.6c10.9,5.7,18.2,13.2,16.2,16.9s-12.5,2-23.4-3.6 C1030.8,756.8,1023.5,749.2,1025.5,745.5z"/> <g> <path class="st8" d="M1024.3,714.5c2.8-2.5,5.8-4.7,9.1-6.7c6.5-3.9,13.8-6.7,21.4-7.9c0.9-0.2,1.8-0.3,2.8-0.4s1.9-0.2,2.9-0.3 c1.9-0.1,3.8-0.2,5.7-0.1c1.9,0,3.8,0.2,5.7,0.3c1.9,0.3,3.7,0.5,5.6,0.9c7.4,1.5,14.6,4.1,21,7.9c-7.2-1.8-14.4-3.3-21.6-4 l-1.3-0.1l-1.3-0.1l-2.7-0.2c-1.8,0-3.6-0.1-5.4,0c-3.5,0-7.1,0.4-10.6,1c-7.1,1.1-13.9,3.3-20.4,6.4c-3.2,1.5-6.4,3.2-9.5,5.2 c-3.1,1.9-6,4.1-8.9,6.5C1018.9,719.8,1021.5,717.1,1024.3,714.5z"/> </g> <g> <path class="st8" d="M1037.3,753.7c1.1,0.8,2.2,1.6,3.4,2.3c0.5,0.3,1.1,0.7,1.7,1l1.8,0.9c0.6,0.4,1.2,0.6,1.8,0.9 c0.7,0.3,1.3,0.6,1.9,0.8l1.9,0.8l1.9,0.6c1.2,0.5,2.6,0.8,3.9,1.2c1.3,0.4,2.6,0.6,4,1c-1.4,0.1-2.8,0.1-4.2,0 c-1.4-0.2-2.8-0.2-4.2-0.6c-2.8-0.5-5.4-1.6-8-2.8c-2.5-1.3-4.9-2.9-7-4.8c-2-1.9-3.9-4.1-5.2-6.6 C1032.9,750.4,1035,752.1,1037.3,753.7z"/> </g> </g> </svg>');
}

function initScroll(){
  $("#scrollU").on("click",function(){
    $("#stage").scrollTop(0);
  })

  $("#scrollD").on("click",function(){
    $("#stage").scrollTop($("#stage").outerHeight);
  })

  $(document).ready(function () {
    $('#stage').bind('scroll', chk_scroll);
});

function chk_scroll(e) {
    var elem = $(e.currentTarget);
    if (elem[0].scrollHeight - elem.scrollTop() < elem.outerHeight()+1) {
        $("#scrollD").addClass("hidden");
    }else{
        $("#scrollD").removeClass("hidden");
    }

    if(elem.scrollTop() < 1){
      $("#scrollU").addClass("hidden");
  }else{
      $("#scrollU").removeClass("hidden");
  }
}
}
