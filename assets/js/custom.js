function openNav() {
  //document.getElementById("mySidenav").style.width = "256px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


$(document).on("click", "#account-menu-open-button", function (e) {
  e.stopPropagation();
  document.getElementById("mySidenav").style.width = "256px";
});

$(document).on("click", "#account-menu-hide-button", function () {
  document.getElementById("mySidenav").style.width = "0";
});

// $(document).on("click", "#main", function () {
//   document.getElementById("mySidenav").style.width = "0";
// });

// $(document).on("click", ".show-ltv", function () {
//   $('#livetv__div').show(500);
//   $('.show-ltv').hide(0);
//   $('.hide-ltv').show(0);
// });

// $(document).on("click", ".hide-ltv", function () {
//   $('#livetv__div').hide(500);
//   $('.show-ltv').show(0);
//   $('.hide-ltv').hide(0);
// });


var swiper = new Swiper(".main-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 0,
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


});

var swiper = new Swiper(".exchange-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




$(document).on('ready', function () {
  // $(".small-slider").slick({
  //   dots: false,
  //   infinite: true,
  //   centerMode: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  //   autoplay: true,
  //   autoplaySpeed: 1000,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         dots: false,
  //         infinite: true,
  //         centerMode: true,
  //         slidesToShow: 5,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         arrows: false,
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       }
  //     }
  //   ]
  // });
});



var swiper = new Swiper(".main-swiper", {
	slidesPerView: 1,
	  speed: 500,
	  loop: true, 
	  autoplay: {
	   delay: 2000,
	   disableOnInteraction: false,
	 },
	 pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	  renderBullet: function (index, className) {
	  return `<span class="outer-dot swiper-pagination-bullet"><span class="inner-dot"></span></span>`;
	},
	},
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 4.5,
	  spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4.5,
	  spaceBetween: 10,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
	  spaceBetween: 0,
    }
  }      
});

  
var swiper = new Swiper(".casino-slider", {
	  slidesPerView: 7,
	  spaceBetween: 5,
	  speed: 500,
	  loop: true, 
	  autoplay: {
	   delay: 2000,
	   disableOnInteraction: false,
	 },
	 pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	  renderBullet: function (index, className) {
	  return `<span class="outer-dot swiper-pagination-bullet"><span class="inner-dot"></span></span>`;
	},
	},      
}); 

var swiper = new Swiper(".casino-live", {
	  slidesPerView: 7,
	  spaceBetween: 5,
	  speed: 600,
	  loop: true, 
	  autoplay: {
	   delay: 1900,
	   disableOnInteraction: false,
	 },
	 pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	  renderBullet: function (index, className) {
	  return `<span class="outer-dot swiper-pagination-bullet"><span class="inner-dot"></span></span>`;
	},
	},      
});   



$("nav.header-nav .nav-item a.v-btn").click(function(){
  $(".modal-backdrop.fade").addClass("in show");
  $(".modal.fade").css({'opacity': '1', 'display': 'block'});
});

$("body button.close").click(function(){
  $(".modal-backdrop.fade").removeClass("in show");
  $(".modal.fade").css({'opacity': '0', 'display': 'none'});
});