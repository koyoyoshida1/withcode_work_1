"use strict";

const loadAnime = $('#load-animation');
$(window).on('load', function () {
  loadAnime.delay(250).fadeOut(125);
});

function stopload(){
  loadAnime.delay(1000).fadeOut(700);
}
setTimeout('stopload()', 10000);

$('#js-nav a').on('click', function () {
  let hrefElement = $(this).attr('href');
  let headerHeight = $('#header').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});

// href属性を取得
 
// outerHeight→高さを取得するメソッド
// offset→href属性のxy座標を取得 
// 高さを含まないxy座標をpositionに代入
// animate()→ページ内遷移する
// $('動かす要素名').animate({
  //   CSSプロパティ: プロパティ値
//     }, 第二引数);

$('.slideShow').slick({
  autoplaySpeed: 2500, // 自動再生の速度
  speed: 1200, // スライド自体の速度
  autoplay: true, // 自動再生の設定
  infinite: true, // 永続化
  slideToShow: 1, // スライド数
  slideToScroll: 1, // スライドのスクロール数
  arrows: true, // 矢印の表示
  prevArrow: '<div class="slick_prev"></div>', // 矢印部分のHTML変更
  nextArrow: '<div class="slick_next"></div>', // 矢印部分のHTML変更
  dots: true, // 下部ドットナビゲーションの表示
  pauseOnFocus: false, // フォーカス時の一時停止の設定
  pauseOnHover: false, // マウスホバー時の一時停止の設定
  pauseOnDotsHover: false, // ドットマウスホバー時の一時停止の設定
});

function fadeIn() {
  $('.fadeUpTrigger').each(function () {
    // スクロール位置を取得する。
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    // ウィンドウの高さを取得
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight) {
      $(this).addClass('fadeUp');
    }
    else {
      $(this).removeClass('fadeUp');
    }
  });
  
  $('.fadeLeftTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeLeft');
    }
    else {
      $(this).removeClass('fadeLeft');
    }
  });
  
  $('.fadeRightTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let triTop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= triTop - winHeight){
      $(this).addClass('fadeRight');
    }else{
      $(this).removeClass('fadeRight');
    }
  });
}

$(window).scroll(function () {
  fadeIn();
});

$('.service_left').addClass('fadeRightTrigger');
$('.service_right').addClass('fadeLeftTrigger');
$('.price_wrap').addClass('fadeUpTrigger');

// 本来はリファクタリングを使用すべき