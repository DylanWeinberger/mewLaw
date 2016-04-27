$(document).ready(function(){
	// navigation and hamburger animation
	$(".hamburger").click(function(){
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
     $(".hamburger").click(function(){
     	if (!$(".navigation").hasClass("active")){ 
     		
     		$(".navigation").addClass("active");
     		$(".navList").addClass("active");
     	
	    } else {

	    	$(".navigation").removeClass("active")
	    	$(".navList").removeClass("active");
	    }
     });


    $(".arrow-next").click(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        clearInterval(automatic);


        if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(1000).removeClass("active-slide");
        nextSlide.fadeIn(1000).addClass("active-slide");
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });

    $(".arrow-prev").click(function(){
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        var currentDot = $('.active-dot');
        clearInterval(automatic);
        

        if(prevSlide.length === 0) {
            var prevSlide = $('.slide').last();
            var prevDot = $('.dot').last();
        } else {
            var prevSlide = currentSlide.prev();
            var prevDot = currentDot.prev();
        }

        currentSlide.fadeOut(1000).removeClass("active-slide");
        prevSlide.fadeIn(1000).addClass("active-slide");
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });

    function autoSlide() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }

        currentSlide.fadeOut(1000).removeClass("active-slide");
        nextSlide.fadeIn(1000).addClass("active-slide");
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    };

    var automatic = setInterval(autoSlide, 4000);






});