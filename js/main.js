// floatした画像と文字の高さを合わせるために設置
$(function () {
  var heightBox = 0;

  // floatした画像のそれぞれの要素の高さを調べる
  $('.img-sm').each(function(){
    if($(this).height() > heightBox){
      heightBox = $(this).height();
    }
  });

  // 要素の高さを変数hの値に統一する
  $('.content__description-float').css('height', heightBox + 'px');
});


// アンカーリンク
$(function () {
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


//　表示位置に到達したら画像をフェードインさせる
{
  function showElementAnimationLeft() {

    var element = document.getElementsByClassName('fadein-left');
    if (!element) return; // 要素がなかったら処理をキャンセル

    var showTiming = window.innerHeight > 768 ? 200 : 80;
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for (var i = 0; i < element.length; i++) {
      var elemClientRect = element[i].getBoundingClientRect();
      var elemY = scrollY + elemClientRect.top;
      if (scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if (scrollY + windowH < elemY) {
        element[i].classList.remove('is-show');
      }
    }
  }
  showElementAnimationLeft();
  window.addEventListener('scroll', showElementAnimationLeft);
}


{
  function showElementAnimationRight() {

    var element = document.getElementsByClassName('fadein-right');
    if (!element) return; // 要素がなかったら処理をキャンセル

    var showTiming = window.innerHeight > 768 ? 200 : 80;
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for (var i = 0; i < element.length; i++) {
      var elemClientRect = element[i].getBoundingClientRect();
      var elemY = scrollY + elemClientRect.top;
      if (scrollY + windowH - showTiming > elemY) {
        element[i].classList.add('is-show');
      } else if (scrollY + windowH < elemY) {
        element[i].classList.remove('is-show');
      }
    }
  }
  showElementAnimationRight();
  window.addEventListener('scroll', showElementAnimationRight);
}
