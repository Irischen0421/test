$(function(){


	var $b01_lb_div=$('#black_01 .lb .add_text');
	var $b01_lb=$('#black_01 .lb');
	var $b01=$('#black_01');



    var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    






	
	//open alert
	$('body').on('click','.alert',function(){
		var which=$(this).attr('id').substr(-1,1);
     	var WW=$(window).innerWidth();

		$body.addClass('hh');
		// $('#black_01').show();
		// $('#black_01 .lb').load("rule.html #alert01").show();
		// alert(which);
		
		$b01.show();
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     		if(WW<1099){
     			$b01_lb.delay('50').animate({top:'0'});
     			
     		}else{
     			$b01_lb.delay('50').animate({bottom:'0'});
     		}
		}
		else {$b01_lb.delay('50').animate({bottom:'0'}); }
		
	});


	$('body').on('click','.close_lb.close_black01',function(){
     	var HH=$(window).innerHeight();
     	var WW=$(window).innerWidth();
		$body.removeClass('hh');
		$b01.fadeOut();
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     		if(WW<1099){
     			$b01_lb.css({top:'150%'});
     		}else{
     			
     			$b01_lb.css({bottom:'-800px'});
     		}
		}
		else {$b01_lb.css({bottom:'-800px'}); }
		
		$b01_lb_div.html('');
	});



	





 
      
	
});	
