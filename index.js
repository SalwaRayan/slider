$(function(){
  
  var pause = 5000
  var slider = $('.slider')
  var index = 0
  var timer = 2500
  var interval = setInterval(blipblop, pause)

  $(".slide").each(function(){
    $(this).css("background-image", `url("https://picsum.photos/1600/900?t=${Math.random()}")`)
  })

  function blipblop (){
    slider.animate({
      left: `-${index * 100}%`
    }, timer, function(){
      index ++
      
      if (index > 4) {
        index = 0
        slider.animate({
          left: `-${index * 100}%`
        }, pause)
      }
    })
  }

  $('.point').click(function() {
    index = $(this).index()

    $('.slider').animate({
      left: `-${index * 100}%`
    }, 1000)

    clearInterval(interval)
    setInterval(blipblop, pause)
  })

  $(".right-arrow").click(function() {
    if (index < 4){
      index ++

      $('.slider').animate({
        left: `-${index * 100}%`
      }, 1000)
    } else {
      index = -1

      $('.slider').animate({
        left: `-${index * 100}%`
      }, 1000)
    }

    clearInterval(interval)
    setInterval(blipblop, pause)
  })

  $(".left-arrow").click(function() {
    if (index > 0){
      index --

      $('.slider').animate({
        left: `-${index * 100}%`
      }, 1000)
    } else {
      index = 4

      $('.slider').animate({
        left: `-${index * 100}%`
      }, 1000)
    }

    clearInterval(interval)
    setInterval(blipblop, pause)
  })

})