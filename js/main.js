$(function(){
	function sideshow(){
		$(".mask").fadeIn();
		$(".sidebar").css('transform','translate(0,0)');
		//$(".sidebar").css('right',0);
	}
	
	function sidehidden(){
		$(".mask").fadeOut();
		$(".sidebar").css('transform','translate('+$(".sidebar").width()+'px'+',0)');
		//$(".sidebar").css('right',-$(".sidebar").width());
	}
	
	
	$(".sidetra").on("click",sideshow);
	$(".mask").on("click",sidehidden);
	$(".back-to-top").on("click",function(){
		$('html,body').animate({
			scrollTop: 0
		},800)
	})
	
	$(window).on("scroll",function(){
		if($(window).scrollTop() > $(window).height()){
			$(".back-to-top").fadeIn();
		}else{
			$(".back-to-top").fadeOut();
		}
	})
	
	$(window).trigger("scroll"); 
})
