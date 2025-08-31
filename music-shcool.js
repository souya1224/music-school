$(function() {
    const $slider = $('.slider');
const $prevBtn = $('.prev');
const $nextBtn = $('.next');
let currentIndex = 0;
const $items = $('.slider li');
const totalItems = $items.length;

let visibleItems;

// 表示数を画面幅で切り替える関数
function updateVisibleItems() {
    if (window.innerWidth <= 980) { // スマホ
        visibleItems = 1;
    } else { // PC
        visibleItems = 3;
    }
}

// スライダーを動かす関数
function updateSlider() {
    const offset = -(100 / visibleItems) * currentIndex;
    $slider.css('transform', `translateX(${offset}%)`);
}

// 初期化
updateVisibleItems();
updateSlider();

// ボタン操作
$nextBtn.on('click', function() {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        updateSlider();
    }
});

$prevBtn.on('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

// 画面サイズ変更時に表示数を更新
$(window).on('resize', function() {
    const prevVisible = visibleItems;
    updateVisibleItems();
    if (currentIndex > totalItems - visibleItems) {
        currentIndex = totalItems - visibleItems;
        if (currentIndex < 0) currentIndex = 0;
    }
    if (prevVisible !== visibleItems) {
        updateSlider();
    }
});


     // アコーディオンメニューのラベルがクリックされた場合
  $("#qa .question").on("click", function() {
    // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
    $(this).next().slideToggle();
    // labelクラスにopenクラスを追加したり削除したりする
    // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
    $(this).toggleClass("open");
  });

  $(window).on('scroll', function() {
  const scrollTop = $(this).scrollTop();
  const windowHeight = $(this).height();
  const documentHeight = $(document).height();

  if (scrollTop > 200 && scrollTop + windowHeight) {
    $('#totop').addClass('show');
  } else {
    $('#totop').removeClass('show');
  }
});

$('#totop').on('click', function() {
  // 'smooth'はjQueryのanimateでは使えないので数値(ミリ秒)で指定
  $('html, body').animate({ scrollTop: 0 }, 500);
});


 $(".home-link").on("click", function(e){
        e.preventDefault(); // 即時遷移を防ぐ
        $("body").addClass("fade-out");

        setTimeout(() => {
            window.location.href = $(this).attr("href");
        }, 300);
    });



  // 現在のURLからページ番号を取得
  const url = window.location.href;
  const match = url.match(/music-shcool-blog(\d+)\.html$/); 
  if (match) {
    const currentPage = match[1];
    $(".pagination a").removeClass("active");
    $(`.pagination a[data-page="${currentPage}"]`).addClass("active");
  }

  // クリック時にアクティブ切替（別ページ遷移後も有効）
  $(".pagination a").on("click", function(){
    $(".pagination a").removeClass("active");
    $(this).addClass("active");
  });



    const current = 2;   // 現在のページ番号
    const total = 9;     // 総ページ数

    // hrefをセット
    $('.pre-article').attr('href', `music-shcool-blog${Math.max(1, current-1)}.html`);
    $('.next-article').attr('href', `music-shcool-blog${Math.min(total, current+1)}.html`);

    // // フェードアウト付きクリック
    // $('.pre-article, .next-article').click(function(e){
    //     e.preventDefault();
    //     $('body').addClass('fade-out');
    //     setTimeout(() => window.location.href = $(this).attr('href'), 300);
    // });


    // contact.js
$(document).ready(function() {
  $("#contactBtn").on("click", function() {
    // body全体をディゾルブ（フェードアウト）
    $("body").css("transition", "opacity 300ms ease-out").css("opacity", "0");

    // 300ms後に contact_send.html に遷移
    setTimeout(function() {
      window.location.href = "contact_send.html";
    }, 300);
  });
});



$("#contactForm").on("submit", function(e) {
    e.preventDefault(); // 本来の送信を止める
    window.location.href = "music-shcool-contact-send.html"; // 完了ページへ
  });




   // 現在のURLからページ番号を取得
  const currentUrl = window.location.href;
  const pageMatch = currentUrl.match(/music-shcool-search(\d+)\.html$/);
  const totalPages = 3; // 総ページ数
  let currentPage = pageMatch ? parseInt(pageMatch[1]) : 1;

  // pagination-searchのリンクにアクティブを付与
  $(".pagination-search a").removeClass("active");
  $(`.pagination-search a[data-page="${currentPage}"]`).addClass("active");

  // クリック時にアクティブ切替
  $(".pagination-search a").on("click", function(){
    $(".pagination-search a").removeClass("active");
    $(this).addClass("active");
  });

  // 前後の記事リンクのhref設定
  $('.pre-article').attr('href', `music-shcool-search${Math.max(1, currentPage-1)}.html`);
  $('.next-article').attr('href', `music-shcool-search${Math.min(totalPages, currentPage+1)}.html`);



  const pageUrl = window.location.href;
  const pageNumberMatch = pageUrl.match(/music-shcool-result-list(\d+)?\.html$/);
  const maxPages = 9; // 総ページ数（必要に応じて調整）
  let activePages = pageNumberMatch && pageNumberMatch[1] ? parseInt(pageNumberMatch[1]) : 1;

  // pagination-result のリンクにアクティブを付与
  $(".pagination-result a").removeClass("active");
  $(`.pagination-result a[data-page="${activePages}"]`).addClass("active");

  // クリック時にアクティブ切替
  $(".pagination-result a").on("click", function () {
    $(".pagination-result a").removeClass("active");
    $(this).addClass("active");
  });

  


  //sp

  $('.hamburger').on('click', function() {
    // ハンバーガーメニューの共通処理を呼び出す
    hamburger();
  });
  function hamburger() {
  // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
  // 存在しない場合を追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')) {
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $('#ham-navi').addClass('active');
  } else {
    // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $('#ham-navi').removeClass('active');
  }
}
});
