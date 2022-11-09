
$('.owl-carousel1').owlCarousel({
  loop:true,
  margin:16,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          loop:false
      },
      768:{
          items:3,
          loop:false
      },
      992:{
          items:4,
          loop:false
      }
  }
})

$('.owl-carousel2').owlCarousel({
  loop:true,
  dots:false,
  margin:16,
  nav:true,
  navText:['<i class="bi bi-chevron-double-left"></i>','<i class="bi bi-chevron-double-right"></i>'],
  navContainerClass:"owl-nav chevron_button",
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false,
          loop:false
      },
      768:{
        items:2,
        loop:false
      },
      992:{
          items:3,
          loop:false
      },
      1200:{
        items:4,
        loop:false
    }
  }
  
})

$('.owl-carousel3').owlCarousel({
  loop:true,
  margin:16,
  responsiveClass:true,
  dots: false,
  responsive:{
      0:{
          items:2,
          nav:false,
          loop:false
      },
      992:{
          items:6,
          nav:false,
          loop:false
      }
  }
  
})
$('.owl-carousel4').owlCarousel({
  loop:true,
  margin:16,
  responsiveClass:true,
  nav:true,
  navText:['<i class="bi bi-chevron-double-left"></i>','<i class="bi bi-chevron-double-right"></i>'],
  navContainerClass:"owl-nav chevron_button",
  dots: false,
  responsive:{
      0:{
          items:1,
          nav:false,
          loop:false
      },
      992:{
          items:3,
          loop:false
      }
  }
  
})
$('.owl-carousel5').owlCarousel({
  loop:true,
  margin:16,
  responsiveClass:true,
  nav:true,
  navText:['<i class="bi bi-chevron-double-left"></i>','<i class="bi bi-chevron-double-right"></i>'],
  navContainerClass:"owl-nav chevron_button",
  dots: false,
  responsive:{
      0:{
          items:1,
          nav:false,
          loop:false
      },
      768:{
        items:3,
        loop:false
      },
      992:{
          items:5,
          loop:false
      }
  }
  
})


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
        .text('шт на сумму ' + (value * price) + ' ₽');

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
        .text('шт на сумму ' + (value * price) + ' ₽');

      input.val(value);  
    });
  });
