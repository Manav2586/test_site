// sticky header start 
window.onscroll = function () {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
};
// sticky header end

// wow js scroll animation activate
new WOW().init();
// wow js scroll animation activate

// owl crousal start

$('.banner-slide').owlCarousel({
    loop: false,
    items: 1, // Fixed typo from "item" to "items"
    margin: 0,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    dots: false, // Ensure dots are enabled
    autoWidth: false, // Set to false if not required
});

$('.google-review-slide').owlCarousel({
    loop:true,
    item: 5,
    margin: 15,
    nav:false,
    dots: false,
    // autoWidth: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        // 581:{
        //   items:2,
        // },
        // 610:{
        //   items: 2,
        // },
        767:{
          items: 3,
        },
        // 991:{
        //     items:4,
        // },
        1000:{
            items:5
        }
    }
  });

  $('.testimonial-slide').owlCarousel({
    loop: false,
    items: 1,
    margin: 30,
    nav: false,
    dots: true, // Ensure dots are enabled
    autoWidth: false, // Set to false if not required
    responsive:{
        0:{
            items: 1
        },
        767: { 
            items: 1
        },
        991:{
            items: 1
        },
        1920:{
            items: 1
        }
    }
});


// owl crousal end


