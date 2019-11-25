$(function () {
  // 日历
  try {
    if ($('.calendar-box .data-list').length > 0) {
      var firstLi = $('.calendar-box .data-list li').first()
      firstLi.addClass('active')
      $('.calendar-box .data-list li').each(function(index, element) {
        if ($(element).find('.text')[0] && $(element).find('.text')[0].innerHTML) {

        } else {
          $(element).addClass('no-text')
        }
      })
      $('.calendar-box .text-box')[0].innerHTML = firstLi.find('.text')[0].innerHTML
      // 点击选中事件
      $('.calendar-box .data-list li').click(function() {
        $('.calendar-box .data-list li').removeClass("active")
        $(this).addClass('active')
        $('.calendar-box .text-box')[0].innerHTML = $(this).find('.text')[0].innerHTML
      })
    }
  } catch (error) {}

  // 自动轮播
  // 滚动新闻
  try {
    var speed=60;
    var demob=document.getElementById("demob");
    var demo2b=document.getElementById("demo2b");
    var demo1b=document.getElementById("demo1b");
    demo2b.innerHTML=demo1b.innerHTML
    function Marquee(){
      if(demo2b.offsetTop-demob.scrollTop<=0){
        demob.scrollTop=0;
      }
      else{
        demob.scrollTop++;
      }
    }
    var MyMar=setInterval(Marquee,speed);
    demob.onmouseover=function() {clearInterval(MyMar)}
    demob.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
  } catch (error) {
    console.error(error)
  }

  try {
    if ($('.video-box .right').length > 0) {
      // 更换初始视频
      $('.video-box .swiper-wrapper .swiper-slide').first().addClass('is-active')
      $('.video-box .left')[0].innerHTML = $('.video-box .swiper-wrapper .swiper-slide .video')[0].innerHTML

      // 点击切换事件
      $(".fl.up").click(function() {
        // swiper3.swipePrev();
      })
      $(".fl.down").click(function() {
        // swiper3.swipeNext();
      })
    }
  } catch (error) {}

  // 报道焦点轮播图
  try {
    if ($('.swiper-container-2').length > 0) {
      var swiper = new Swiper($('.swiper-container-2')[0], {
        loop: true,
        paginationClickable: true
      });
      // 点击切换事件
      $(".focus-left-button").click(function() {
        swiper.swipePrev();
      })
      $(".focus-right-button").click(function() {
        swiper.swipeNext();
      })
    }
  } catch (error) {}
})
