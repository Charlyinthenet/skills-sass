$( document ).ready(function() {
   		$(".circle").click(function(e){
    	//$(".circle").removeClass("visited");   			
    	$(this).addClass("visited");
    	//e.preventDefault();
    	$('html, body').animate({
        scrollTop: $("#first-scroll").offset().top
    }, 1000);
	});
   		$(".arrow").click(function(e){
        e.preventDefault();
		$('html, body').animate({
        scrollTop: $("#second-scroll").offset().top
    }, 1000);
	});
});