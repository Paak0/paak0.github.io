$(document).ready(function() {
		window.onscroll = function() {
			if (window.pageYOffset >= 211){
				$('.bar').removeClass('shadow');
				$('.header2').addClass('shadow');
			}else{
				$('.bar').removeClass('shadow');
				$('.header2').removeClass('shadow');
			}
		}
	});