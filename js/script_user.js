
$(document).ready(function () {
    if(window.innerWidth <=  992) {

        $('.carouselExampleIndicators').addClass('carousel')
        $('.carouselExampleIndicators .carousel-inner .klass').addClass('carousel-item')
        const carousel = new bootstrap.Carousel('.carouselExampleIndicators')
    }
 });

 $(document).ready(function(){
    $('.counter_block .minus').on('click', function(){
    
    let input = $(this).closest('div').find('input'),
      value = parseInt(input.val()) - 1;
      value = value < 1 ? 1 : value;

    console.log(value, input);

    let price = parseInt($(input).closest('.product_prise').find('.product_prise-in').text());
    
    $(input)
        .closest('.product_prise')
        .find('.product_prise-iner')
        .text((value * price) + ' ₽');

    input.val(value);  
  });
});

$(document).ready(function(){
      $('.counter_block .plus').on('click', function(){
      
      let input = $(this).closest('div').find('input'),
        value = parseInt(input.val()) + 1;
      
      console.log(value, input);

      let price = parseInt($(input).closest('.product_prise').find('.product_prise-in').text());
    
    $(input)
        .closest('.product_prise')
        .find('.product_prise-iner')
        .text((value * price) + ' ₽');

      input.val(value);  
    });

    $(".carousel").swipe( {
      swipeLeft: function() {
        $(this).carousel("next");
      },
      swipeRight: function() {
        $(this).carousel("prev");
      },
      allowPageScroll: "vertical"
    });
  });

