// メイン画像
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 5800,//次のスライドに切り替わる待ち時間
  speed: 720,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  pauseOnFocus: false,//フォーカスで一時停止を無効
  pauseOnHover: false,//マウスホバーで一時停止を無効
  pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
  });


  // ハンバーガーメニュー
    $(function(){
      $('.hamburger').click(function(){
        $('.hamburger, .slide-menu').toggleClass('active');
      });
    });


    // 表示・非表示
    // お知らせ
    document.addEventListener('DOMContentLoaded', function () {
      const more = document.querySelector(".c-plus");
      const list = document.querySelector(".js-list");
      const el = list.nextElementSibling;
    
      more.addEventListener("click", function () {
    
        if (list.classList.contains("is-open")) {
          list.classList.remove('is-open');
          el.querySelector('.c-plus__text').textContent = '︾';
          el.classList.remove('is-close');
    
        } else {
          list.classList.add('is-open');
          el.querySelector('.c-plus__text').textContent = '︽';
          el.classList.add('is-close');
        }
      });
    });

    // 店舗からのお知らせ
    document.addEventListener('DOMContentLoaded', function () {
      const more = document.querySelector(".c-pluse2");
      const list = document.querySelector(".js-lists");
      const el = list.nextElementSibling;
    
      more.addEventListener("click", function () {

        if (list.classList.contains("is-open")) {
          list.classList.remove('is-open');
          el.querySelector('.c-plus__text2').textContent = '︾';
          el.classList.remove('is-close');
    
        } else {
          list.classList.add('is-open');
          el.querySelector('.c-plus__text2').textContent = '︽';
          el.classList.add('is-close');
        }
      });
    });

    // 更新情報
    document.addEventListener('DOMContentLoaded', function () {
      const more = document.querySelector(".c-pluse3");
      const list = document.querySelector(".js-lists");
      const el = list.nextElementSibling;
    
      more.addEventListener("click", function () {

        if (list.classList.contains("is-open")) {
          list.classList.remove('is-open');
          el.querySelector('.c-plus__text3').textContent = '︾';
          el.classList.remove('is-close');
    
        } else {
          list.classList.add('is-open');
          el.querySelector('.c-plus__text3').textContent = '︽';
          el.classList.add('is-close');
        }
      });
    });


    // 矢印動く
    $(".move_arrow").on("click", function () {
      $(this).toggleClass("rotate");
    });


  //アコーディオンパネル
  $('.title').on('click', function() {
    //タイトル要素をクリックしたら
    var findElm = $(this).next(".box");
    //直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){
      //タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });

  //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
  $(window).on('load', function(){
    $('.accordion-area li:first-of-type section').addClass("open"); 

    $(".open").each(function(index, element){ //openクラスを取得
      var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
      $(Title).addClass('close');//タイトルにクラス名closeを付与し
      var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
      $(Box).slideDown(500);          //アコーディオンを開く
    });
  });


// メガメニュー
$(function(){
  $('.mega_btn1').click(function(){
    $('.mega_btn1, .mega_menu1').toggleClass('mega_active');
  });

  $('.mega_btn2').click(function(){
    $('.mega_btn2, .mega_menu2').toggleClass('mega_active');
  });

  $('.mega_btn3').click(function(){
    $('.mega_btn3, .mega_menu3').toggleClass('mega_active');
  });

  $('.mega_btn4').click(function(){
    $('.mega_btn4, .mega_menu4').toggleClass('mega_active');
  });
});


// スクロールしたら表示
$(function () {
  const header = $('.sp_item');
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 15) {
      header.addClass('sp_scroll');
    } else {
      header.removeClass('sp_scroll');
    }
  });
});