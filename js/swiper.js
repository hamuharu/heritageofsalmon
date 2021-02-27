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


// indexのヘッダー変化
{
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header-main');
  header.classList.toggle('scroll-nav', window.scrollY > 100);
});
}