$(function(){
  
  var width = 100
  var pause = 5000
  var currentSlide = 1
  var slider = $('.slider')
  var slides = slider.find('.slide')
  var index = 0
  
  $('.point').click(function() {
    index = $(this).index()
    $('.slider').animate({
      left: `-${index * 100}%`
    }, 1000)
  })

  $(".right-arrow").click(function() {
    if (index < 4){
      index ++
      $('.slider').animate({
        left: `-${index * 100}%`
      }, 1000)
    }
  })

  $(".left-arrow").click(function() {
    if (index > 0){
      index --
      $('.slider').animate({
        left: `-${index * 100}%`
      }, 1000)
    }
  })

  // setInterval(function(){
  //   slider.animate({
  //     left: `-=${+100}%`
  //   }, 2500, function(){
  //     currentSlide ++
  //     if (currentSlide === slides.length) {
  //       slider.css("left", 0)
  //       currentSlide = 1
  //     }
  //   })
  // }, pause)




})

// var slides = $(".slide")
// var dots = $(".point")

// console.log(slides)
// console.log(dots)