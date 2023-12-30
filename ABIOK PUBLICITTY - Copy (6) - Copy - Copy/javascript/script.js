(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  

	window.addEventListener('DOMContentLoaded', (event) => {
		const parentContainer = document.querySelector('.section .container .row');
		const btnBox = document.querySelector('.btn-box');
		const homeSci = document.querySelector('.home-sci');
	  
		parentContainer.insertBefore(homeSci, btnBox.nextSibling);
	  });
	
  })(jQuery);

//fade on scroll//

const fadeContainer = document.getElementById('fadeContainer');

function fadeInOnScroll() {
  const containerTop = fadeContainer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (containerTop < windowHeight) {
	fadeContainer.classList.add('fade-in');
  } else {
	fadeContainer.classList.remove('fade-in');
  }
}

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Call it initially in case the element is already in view

//preloader for animation//
$(document).ready(preloderFunction());
    
    
    
function preloderFunction() {
  
    setTimeout(function() {
        
        // Force Main page to show from the Start(Top) even if user scroll down on preloader - Primary (Before showing content)
       
        // Model 1 - Fast            
        document.getElementById("page-top").scrollIntoView();
        
        // Model 2 - Smooth             
        // document.getElementById("page-top").scrollIntoView({behavior: 'smooth'});
                
        
    
        
        // Removing Preloader:
        
        $('#ctn-preloader').addClass('loaded');  
        // Once the preloader has finished, the scroll appears 
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
            // It is so that once the preloader is gone, the entire preloader section will removed
            $('#preloader').delay(1000).queue(function() {
                $(this).remove();
                
                // If you want to do something after removing preloader:
                afterLoad();
                
            });
        }
    }, 3000);
}



function afterLoad() {
    // After Load function body!
}


//scrolling down to the mission section//

$(document).ready(function() {
	// Smooth scrolling to the "Hero" section when clicking the "Find Out" link
	$("#scroll-findout").click(function(event) {
		event.preventDefault(); // Prevent default anchor behavior
		var targetId = "#hero"; // ID of the target section
		var targetPosition = $(targetId).offset().top; // Get the target's position from the top of the page
		$("html, body").animate({
			scrollTop: targetPosition
		}, 1000); // Scroll smoothly to the target over 1000 milliseconds (1 second)
	});
});
