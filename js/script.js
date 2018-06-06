$(function() {
  initPage();
})

function initPage(){
  initMLH();
  initPrizeSlider();
  initSponsorSlider();
  initFaqSlider();
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

