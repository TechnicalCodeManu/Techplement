
 
    var swiper = new Swiper(".sideContainer", {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup:4,
      loop: true,
      centerSlide: "true",
      grabCursor:"true",
      fade : "true",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets : true,

      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

       breakpoints : { 
        0:{
            slidesPerView: 1 ,
        },
        520:{
            slidesPerView: 2 ,
        },
        768:{
            slidesPerView: 3 ,
        },
        1000:{
            slidesPerView: 4 ,
        },
       },




    });



           /* Image Slider*/

    var responsiveSlider = function() {

      var slider = document.getElementById("slider");
      var sliderWidth = slider.offsetWidth;
      var slideList = document.getElementById("sliderWrap");
      var count = 1;
      var items = slideList.querySelectorAll("li").length;
      var prev = document.getElementById("prev");
      var next = document.getElementById("next");

      
    
      window.addEventListener('resize',function() {
            sliderWidth = slider.offsetWidth;
      });

      var prevSlide = function() {
        if(count > 1 ){
          count = count - 2;
          slideList.style.left =  "-"+ count * sliderWidth + "px";
          count++;
        }
        else if(count = 1){
        
          count = items - 1;
          slideList.style.left =  "-"  + count *  sliderWidth + "px";
          count++;
          
              
        };

      }
      var nextSlide = function (){
        if(count < items ) { 
          slideList.style.left =  "-"  + count * sliderWidth + "px";
          count++;
        }
        else if(count = items){
          slideList.style.left =  "0px";
          count = 1;
        }
              
        };

        next.addEventListener("click", function() {
          nextSlide();
        });
        prev.addEventListener("click" , function() {
          prevSlide();
        });

        setInterval(function() {
          nextSlide()
        }, 5000);

      
      };

      window.onload = function(){
        responsiveSlider();
      };
