window.onscroll = function() {
  var a = document.documentElement.scrollTop || document.body.scrollTop
  if (a > (document.body.offsetWidth * 0.6)) {
    $('.title-bar').addClass('active')
  } else {
    $('.title-bar').removeClass('active')
  }
}


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
      var lenAll = $('.video-box .swiper-wrapper .swiper-slide .video').length
      var activeIndex = 0
      console.log(lenAll)
      function changeActive (index) {
        showPlayer({
          id: $('.video-box .swiper-wrapper .swiper-slide .video')[index].innerHTML,
          box: $('.video-box .left')[0]
        })
      }

      setTimeout(() => {
        changeActive(activeIndex)
      }, 100)
      // 点击切换事件
      $(".fl.up").click(function() {
        activeIndex++
        if (activeIndex >= lenAll) activeIndex = 0
        changeActive(activeIndex)
        // swiper3.swipePrev();
      })
      $(".fl.down").click(function() {
        
        activeIndex--
        if (activeIndex <= 0) activeIndex = lenAll - 1
        console.log(activeIndex)
        changeActive(activeIndex)
      })
    }
  } catch (error) {}

  // 报道焦点轮播图
  try {
    if ($('.swiper-container-2').length > 0) {
      var swiperfocus = new Swiper($('.swiper-container-2')[0], {
        loop: true,
        paginationClickable: true,
        navigation: {
          nextEl: $(".focus-right-button")[0],
          prevEl: $(".focus-left-button")[0],
        }
      })
    }
  } catch (error) {}

  try {
    var slideListLength = $('.main-box .swiper-wrapper .swiper-slide').length
    $('.main-box .index')[0].innerText = '1/' + slideListLength
    // 轮播图展示区域swiper
    setTimeout(() => {
      var swiperMain = new Swiper($('.main-box .swiper-container')[0], {
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: $('.main-box .pagination')[0]
        },
        navigation: {
          nextEl: '.main-box .next',
          prevEl: '.main-box .previou',
        },
        loop: true,
        on: {
          slideChange: function () {
            if (!swiperMain) return
            // console.log(swiperMain)
            let index = null
            if (swiperMain.activeIndex <= slideListLength) index = swiperMain.activeIndex
            else index = 1
            $('.main-box .index')[0].innerText = index + '/' + slideListLength
          }
        }
      })
      setTimeout(() => {
        var switchList = $('.main-box .swiper-pagination-bullet')
        for (let ind = 0; ind < switchList.length; ind++) {
          switchList[ind].style.width = (100 / slideListLength) + '%'
        }
      }, 100)
    }, 0)
  } catch (error) {}

  try {
    var slideListLength = $('.jingcaitupian .swiper-wrapper .swiper-slide').length
    $('.jingcaitupian .index')[0].innerText = '1/' + slideListLength
    // 轮播图展示区域swiper
    setTimeout(() => {
      var swiperTu = new Swiper($('.jingcaitupian .swiper-container')[0], {
        autoplay: {
          delay: 3000,
        },
        navigation: {
          nextEl: '.jingcaitupian .next',
          prevEl: '.jingcaitupian .previou',
        },
        pagination: {
          el: $('.jingcaitupian .pagination')[0]
        },
        loop: true,
        on: {
          slideChange: function () {
            if (!swiperTu) return
            // console.log(swiperTu)
            let index = null
            if (swiperTu.activeIndex <= slideListLength) index = swiperTu.activeIndex
            else index = 1
            $('.jingcaitupian .index')[0].innerText = index + '/' + slideListLength
          }
        }
      })
      setTimeout(() => {
        var switchList = $('.jingcaitupian .pagination .swiper-pagination-bullet')
        for (let ind = 0; ind < switchList.length; ind++) {
          switchList[ind].style.width = (100 / slideListLength) + '%'
        }
      }, 100)
    }, 0)
  } catch (error) {}
  
  // 人物报导
  try {
    new Swiper($('.swiper-container-4')[0], {
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: '.people-right-button',
        prevEl: '.people-left-button',
      },
      loop: true,
    })
  } catch (error) {}
})
