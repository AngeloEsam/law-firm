function toggleMenu() {
    const menu = document.querySelector('.dropdown-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.getElementById('myCarousel');

    carousel.addEventListener('slide.bs.carousel', function(event) {
        var indicators = document.querySelectorAll('.carousel-indicators button');
        
        // Remove active class from all indicators
        indicators.forEach(function(indicator) {
            indicator.classList.remove('active');
        });

        // Add active class to the current indicator
        var activeIndex = event.to;
        indicators[activeIndex].classList.add('active');
    });
});


//slider
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000, // Change slide every 3 seconds
      autoplayHoverPause: true,
      responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
    });
  });

  //section 13
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 1,
        }
    }
});