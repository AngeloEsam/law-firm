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
    slidesPerView: 'auto',
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
        },
        320: {
            slidesPerView: 1,
        }
    }
});

//contact us

    document.getElementById("submitButton").addEventListener("click", function() {
          var companyName = document.getElementById("companyName").value;
          var fullName = document.getElementById("fullName").value;
          var email = document.getElementById("email").value;
          var phone = document.getElementById("phone").value;
          
          var whatsappLink = "https://wa.me/966500518950?text=اسم الشركة: " + companyName + "%0D%0Aالاسم الكامل: " + fullName + "%0D%0Aعنوان البريد الإلكتروني: " + email + "%0D%0Aرقم الهاتف: " + phone;
    
          window.open(whatsappLink);
      });
