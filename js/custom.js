 jQuery(document).ready(function() {

   //Menu active class script
   var url = window.location.pathname;
   if (url == "/") {
     url = "/index.php";
     url = "https://adtv.dotcomlb.com/";
   }

   var urlRegExp = new RegExp(url.replace(/\/$/, '') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there

   // now grab every link from the navigation
   $('.nav ul li a').each(function() {
     // and test its normalized href against the url pathname regexp
     if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
       $(this).parent('li').addClass('active');
     }
   });

   // menu toggle
   
   // jQuery('.togglebtn').click(function() {
   //  jQuery("body").toggleClass('menu_open');
   // });


   // jQuery(document).on('click', function() {
     // if (jQuery('body').hasClass("menu_open")) {
        // jQuery('body').removeClass("menu_open");
     // }
     // else{
     //    jQuery("body").addClass('menu_open');
     // }
     
   // });

   jQuery(".togglebtn").click(function(e) {
     e.stopPropagation();
     if (jQuery('body').hasClass("menu_open")) {
       jQuery('body').removeClass("menu_open");
     } else {
       jQuery('body').addClass("menu_open");
     }
   });
   jQuery('.menu-block').click(function(e) {
    e.stopPropagation();
   });
   jQuery(document).on('click', function(e) {
     e.stopPropagation();
     jQuery('body').removeClass("menu_open");
   });

   //header fixed 
   jQuery(window).scroll(function() {
     var sticky = jQuery('.header'),
       scroll = jQuery(window).scrollTop();

     if (scroll >= 70) sticky.addClass('fixed');
     else sticky.removeClass('fixed');
   });

   // Bottom to top scroll
   jQuery("#myBtn").hide();
   jQuery(function() {
     jQuery(window).scroll(function() {
       if (jQuery(this).scrollTop() > 100) {
         jQuery('#myBtn').fadeIn();
       } else {
         jQuery('#myBtn').fadeOut();
       }
     });

     // scroll body to 0px on click
     jQuery('#myBtn').click(function() {
       jQuery('body,html').animate({
         scrollTop: 0
       }, 1000);
       return false;
     });
   });


   // Fancybox
   jQuery(".fancybox").fancybox({

   });

   // 
   // Small Product
   $('.pharmaceutical-product-slider').owlCarousel({
       loop:true,
       margin:0,
       nav:true,
       items: 4,
       dots: false,
       autoplay:false,
       autoplayTimeout:5000,
       autoplayHoverPause:false,
       smartSpeed:450,
       lazyLoad: true,
       margin: 20,
       navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
       responsive:{
           0:{
             items:1
           },
           767:{
               items:3
           },
           1000:{
               items:4
           }
       }
   });

   // Small Product
   $('.small-product-slider').owlCarousel({
       loop:true,
       margin:0,
       nav:true,
       items: 3,
       dots: false,
       autoplay:false,
       autoplayTimeout:5000,
       autoplayHoverPause:false,
       smartSpeed:450,
       lazyLoad: true,
       center: true,
       navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
   });

   // Banner Slider
   $('.banner-slider').owlCarousel({
       loop:true,
       margin:0,
       nav:false,
       items: 1,
       dots: false,
       autoplay:false,
       autoplayTimeout:5000,
       autoplayHoverPause:false,
       smartSpeed:450,
       lazyLoad: true
   });

   // Product Slider
   $('.product-slider').owlCarousel({
       loop:true,
       margin:15,
       nav:true,
       navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
       dots: true,
       responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:3
           }
       }
   })

   //owl carousel
   jQuery('.owl-carousel').owlCarousel({
     loop: true,
     margin: 10,
     responsiveClass: true,
     responsive: {
       0: {
         items: 1,
         nav: true
       },
       500: {
         items: 2,
         nav: false
       },
       1000: {
         items: 5,
         nav: true,
         loop: false
       }
     }
   })

   // Counter
   $('.count').each(function () {
       $(this).prop('Counter',0).animate({
           Counter: $(this).text()
       }, {
           duration: 4000,
           easing: 'swing',
           step: function (now) {
               $(this).text(Math.ceil(now));
           }
       });
   });
 });