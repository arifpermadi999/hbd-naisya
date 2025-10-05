$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});
	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	async function run(){
		$(".love-btn").hide();
		$("#start-section").fadeOut('fast');
		await delay(1000);
		turnOnBulb();
		playMusic();
		await delay(2000);
		bannerComing();
		await delay(2000);
		balloonsFlying();
		await delay(10000);
		wishMessage();	
		cakeFadein();
		await delay(1500);
		lightCandle();	
	}
	function setStory(){
		setTimeout(function() {
			$('.balloons').fadeOut('fast').delay(1000);
			$('.message-cake').fadeOut('fast').delay(1000);
			$('.bannar').fadeOut('fast').delay(1000);
			story();
		}, 2000); // 2000 ms = 2 seconds
	}
	$('#btn-start').click(function(){
		run();
	});
	$('.candle').click(function(){
		$('.fuego').fadeOut('slow').delay(2000).promise().done(function(){
			setStory();
		});
	});
	

	function turnOnBulb(){
		
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		
		
	};
	function playMusic(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		
	}

	function bannerComing(){
		$('.bannar').addClass('bannar-come');
		
	};

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	function balloonsFlying(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
	};	

	function cakeFadein(){
		$('.cake').fadeIn('slow');
		$('.message-cake').fadeIn('slow');
		
	};

	function lightCandle(){
		$('.fuego').fadeIn('slow');
	};

	async function blinkAnimation(){
		await delay(2000);
		$("#wrap-text-firework").fadeIn('fast');
		
		const text = document.getElementById("blinkText");
		
		// Add blinking class
		text.classList.add("blinking");

		// Wait until animation (3 blinks) is done, then keep glowing
		text.addEventListener("animationend", () => {
		text.classList.remove("blinking");
		text.classList.add("glow");
		});
		
		blinkImage();
		
	}
	function blinkImage(){
		let blinkCount = 0;
		const maxBlinks = 3;
		const blinkInterval = 400; // milliseconds

		function blink() {
			$('.blink-img').fadeOut(blinkInterval / 2).fadeIn(blinkInterval / 2, function() {
				blinkCount++;
				if (blinkCount < maxBlinks) {
					blink();
				}
			});
		}
		blink();
	}
	function wishMessage(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-180},500);
		$('#b22').animate({top:240, left: vw-130},500);
		$('#b33').animate({top:240, left: vw-80},500);
		$('#b44').animate({top:240, left: vw-30},500);
		$('#b55').animate({top:240, left: vw+20},500);
		$('#b66').animate({top:240, left: vw+70},500);
		$('#b77').animate({top:240, left: vw+120},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		
	};
	
	function story(){
		$('.cake').fadeOut('fast').delay(1000).promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;
		var end = 10;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(1000).promise().done(function(){
				i=i+1;
				
				$("#photo-"+i).fadeIn('slow').delay(4000);
				$("p:nth-child("+i+")").fadeIn('slow').delay(4000);
				$("#photo-"+i).fadeOut('slow').delay(4000);
				
				if(i==end){
					$(`p:nth-child(${end})`).fadeOut('slow').promise().done(function () {
						//$('.cake').fadeIn('fast');
						$('#firework').fadeIn('fast');
						blinkAnimation();
						startSoundWithUserGesture();		
					});
				}
				else{
					msgLoop(i);
				}			

			});
			// body...
		}
		
		msgLoop(0);
		
	};
});




//alert('hello');