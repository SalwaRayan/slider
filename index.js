$(function(){
  
  var width = 100
  var pause = 5000
  var currentSlide = 1
  var slider = $('.slider')
  var slides = slider.find('.slide')
  var index = 0
  var timer = 2500
  
  $('.point').click(function() {
    index = $(this).index()
    $('.slider').animate({
      left: `-${index * 100}%`
    }, 1000)
    clearInterval(interval)
    setInterval(blipblop,5000)
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
    setInterval(blipblop,5000)
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
    setInterval(blipblop,5000)
  })

  var interval = setInterval(blipblop,5000)

  function blipblop (){
      slider.animate({
        left: `-${index * 100}%`
      }, timer, function(){
        index ++
        
        if (index > 4) {
          index = 0
          slider.animate({
            left: `-${index * 100}%`
          },5000)
        }
      })
    }


  // setInterval(function(){
  //   slider.animate({
  //     left: `-=${+100}%`
  //   }, timer, function(){
  //     currentSlide ++
  //     if (currentSlide === slides.length) {
  //       slider.css("left", 0)
  //       currentSlide = 1
  //     }
  //   })
  // }, pause)

})