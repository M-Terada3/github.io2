//hamburger
$(function () {
  $(".hamBtn").on("click", function () {
    $(".hamBtn").toggleClass("close");
    $("nav").fadeToggle(500);
  });
});

$(function () {
  $(".ham_fixBtn").on("click", function () {
    $(".ham_fixBtn").toggleClass("close");
    $("nav").fadeToggle(500);
  });
});


//img next
const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;
function updateListBackground() {
  for (let i = 0; i < lists.length; i++) {
    lists[i].style.backgroundColor = i === count % totalSlides ? '#704639' : 'transparent';;
  }
}
function nextClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count++;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
function prevClick() {
  slide.classList.remove(`slide${count % totalSlides + 1}`);
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add(`slide${count % totalSlides + 1}`);
  updateListBackground();
}
next.addEventListener('click', () => {
  nextClick();
});
prev.addEventListener('click', () => {
  prevClick();
});
indicator.addEventListener('click', (event) => {
  if (event.target.classList.contains('list')) {
    const index = Array.from(lists).indexOf(event.target);
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count = index;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
  }
});

//ふわっと表示
$(function(){
  $(window).scroll(function (){
      $('.p-about,.p-goods,.p-store').each(function(){
          var position = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > position - windowHeight + 200){
            $(this).addClass('active');
          }
      });
  });
});

//footer list
$(function(){
  $('.button').on('click', function(){
      $(this).parents('.accordion').find('.content').slideToggle(200);
      $(this).toggleClass('open');
  });
});



//Logo固定
$(function(){
  var scrollStart = $('.p-logo').offset().top; //ページ上部からの距離を取得
  var scrollEnd = $('.p-keyVisual__bottom').offset().top; //ページ上部からの距離を取得
  var distance = 0;

  $(document).scroll(function(){
    distance = $(this).scrollTop(); //スクロールした距離を取得

    if (scrollStart <= distance) { //スクロール距離が『.sikaku_box』の位置を超えたら
      $('.p-logo').addClass('fixed'); //class『fixed』を追加
    } else if (scrollStart >= distance) { //スクロールがページ上部まで戻ったら
      $('.p-logo').removeClass('fixed'); //class『fixed』を削除
    }

    if (scrollEnd <= distance) { //スクロール距離が『.end_box』の位置を超えたら
      $('.p-logo').addClass('none'); //class『none』を追加
    } else{
      $('.p-logo').removeClass('none'); //『.end_box』より上部に戻ったらclass『none』を削除
    }
  });
});


//mail
const $submitBtn = $('#formBtn'); //変数にボタン要素をセット
$submitBtn.prop('disabled', true); //ボタンは最初はdisabledでクリックできない状態に
var form = document.querySelector("#form"); //それぞれの入力フォームを変数化

//「もし各入力欄が空だったら」という内容を関数としてセット
function judge() {
  if (
    $(form).val() !== ""
  ) {
    $submitBtn.prop('disabled', false); //空じゃなかったらボタンを活性化し、activeクラスをつける
    $submitBtn.addClass('active');
  } else {
    $submitBtn.prop('disabled', true);
    $submitBtn.removeClass('active');
  }
}
