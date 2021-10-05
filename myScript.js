function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function shuffle (input) {

	 for (var i = input.length-1; i >=5 ; i--) {
	    var randomIndex = getRandomInt(5, 10); 
	    var itemAtIndex = input[randomIndex]; 
	     
	    input[randomIndex] = input[i]; 
	    input[i] = itemAtIndex;
		}
		return input;
}

function sounds(){
	$(".helper > #dialog").easyAudioEffects({
		ogg : "sounds/ff8Sound.ogg",
		mp3 : "sounds/ff8Sound.mp3",
		eventType : "click"
	});

	$(".helper > #continue").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "hover"
	});

	$(".helper > #continue").easyAudioEffects({
		ogg : "sounds/save.ogg",
		mp3 : "sounds/save.mp3",
		eventType : "click"
	});

	$(".helper > #reset").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "hover"
	});

	$(".helper > #reset").easyAudioEffects({
		ogg : "sounds/back.ogg",
		mp3 : "sounds/back.mp3",
		eventType : "click"
	});


	$(".card1> #1").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".card2> #2").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});
	
	$(".card3> #3").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".card4> #4").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".card5> #5").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".card6> #6").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".card7> #7").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".card8> #8").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".card9> #9").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".card10> #10").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "click"
	});

	$(".messages > #attack").easyAudioEffects({
		ogg : "sounds/ff8Sound.ogg",
		mp3 : "sounds/ff8Sound.mp3",
		eventType : "hover"
	});

	$(".messages > #defense").easyAudioEffects({
		ogg : "sounds/ff8Sound.ogg",
		mp3 : "sounds/ff8Sound.mp3",
		eventType : "hover"
	});

	$(".messages > #resetGame").easyAudioEffects({
		ogg : "sounds/ff8Sound.ogg",
		mp3 : "sounds/ff8Sound.mp3",
		eventType : "hover"
	});

	$(".messages > #attack").easyAudioEffects({
		ogg : "sounds/ff8Sound.ogg",
		mp3 : "sounds/ff8Sound.mp3",
		eventType : "click"
	});

	$(".messages > #defense").easyAudioEffects({
		ogg : "sounds/ff8Sound.ogg",
		mp3 : "sounds/ff8Sound.mp3",
		eventType : "click"
	});

	$(".messages > #resetGame").easyAudioEffects({
		ogg : "sounds/ff8Sound.ogg",
		mp3 : "sounds/ff8Sound.mp3",
		eventType : "click"
	});

	$(".arena > #start").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "hover"
	});

	$(".arena > #start").easyAudioEffects({
		ogg : "sounds/save.ogg",
		mp3 : "sounds/save.mp3",
		eventType : "click"
	});

	$(".arena > #round").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "hover"
	});

	$(".arena > #round").easyAudioEffects({
		ogg : "sounds/next.ogg",
		mp3 : "sounds/next.mp3",
		eventType : "click"
	});

	$("#again").easyAudioEffects({
		ogg : "sounds/ff8sound.ogg",
		mp3 : "sounds/ff8sound.mp3",
		eventType : "hover"
	});
}



function please() {

	sounds();

	$(document).ready(function(){

			
		$(function() {
		  var song = document.getElementById("intro");
		  song.volume = 0.1;
		});
			

		//alert("working");

		$("#kupo").fadeIn(4000);
		$("#dialog").fadeIn(4000);

		var counter=0;
		var click1=false;
		var click2=false;
		var click3=false;
		var click4=false;
		var click5=false;
		var click6=false;
		var click7=false;
		var click8=false;
		var click9=false;
		var click10=false;

		var clickOrder = new Array(10);
		var k=0;

		//Generate 10 random attacks and defenses
		var computerTurn = Math.floor((Math.random() * 2) + 1); 

		var AP1 = Math.floor((Math.random() * 50) + 1);
		var DP1 = Math.floor((Math.random() * 50) + 1);
		
		var AP2 = Math.floor((Math.random() * 50) + 1);
		var DP2 = Math.floor((Math.random() * 50) + 1);

		var AP3 = Math.floor((Math.random() * 50) + 1);
		var DP3 = Math.floor((Math.random() * 50) + 1);

		var AP4 = Math.floor((Math.random() * 50) + 1);
		var DP4 = Math.floor((Math.random() * 50) + 1);

		var AP5 = Math.floor((Math.random() * 50) + 1);
		var DP5 = Math.floor((Math.random() * 50) + 1);

		var AP6 = Math.floor((Math.random() * 50) + 1);
		var DP6 = Math.floor((Math.random() * 50) + 1);

		var AP7 = Math.floor((Math.random() * 50) + 1);
		var DP7 = Math.floor((Math.random() * 50) + 1);

		var AP8 = Math.floor((Math.random() * 50) + 1);
		var DP8 = Math.floor((Math.random() * 50) + 1);

		var AP9 = Math.floor((Math.random() * 50) + 1);
		var DP9 = Math.floor((Math.random() * 50) + 1);

		var AP10 = Math.floor((Math.random() * 50) + 1);
		var DP10 = Math.floor((Math.random() * 50) + 1);

		var userClicked=false;
		var choseAttack = false;
		var choseDefense = false;


		$("#attack").hover(function() {
			// mouseover
			$(this).css("font-style", "italic");
		}, function() {
			// mouseout
			$(this).css("font-style", "normal");
		});

		$("#defense").hover(function() {
			// mouseover
			$(this).css("font-style", "italic");
		}, function() {
			// mouseout
			$(this).css("font-style", "normal");
		});

		$("#resetGame").hover(function() {
			// mouseover
			$(this).css("font-style", "italic");
		}, function() {
			// mouseout
			$(this).css("font-style", "normal");
		});

		$("#next").hover(function() {
			// mouseover
			$(this).css("font-style", "italic");
		}, function() {
			// mouseout
			$(this).css("font-style", "normal");
		});

		$("#continue").hover(function() {
			// mouseover
			$(this).css("font-style", "italic");
		}, function() {
			// mouseout
			$(this).css("font-style", "normal");
		});

		$("#reset").hover(function() {
			// mouseover
			$(this).css("font-style", "italic");
		}, function() {
			// mouseout
			$(this).css("font-style", "normal");
		});


		$("#dialog").click(function(){
			$("#kupo").attr("src", "img/ezgif.com-rotate.gif");
			$(this).html("Let's begin our game, kupo!");
			$(this).click(function(){
				$(this).html("Select up to five cards, kupo! <br> Click here when you're ready.");
				$(".deck").fadeIn(1000);
				$("#dialog").click(function(){
					if (counter==5){
						$(this).html("Great! Are these the cards you want, kupo?");
						$("#continue").fadeIn(1000);
						$("#reset").fadeIn(1000);
					}
					else{
						$(this).html("You need more cards, kupo.");
					}
				});
			});
		});


		//Από εδώ και κάτω μέχρι και το επόμενο σχόλιο, είναι η διαδικασία που δεν θα αφήνει 
		//πάνω από 5 κάρτες να επιλεχθούν
						
		$('#1').click(function(){
			if (click1==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click1=true;
					clickOrder[k] = 1;
					++k;
				}
			}
		});

		$('#2').click(function(){
			if (click2==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click2=true;
					clickOrder[k] = 2;
					++k;
				}
			}
		});
					
		$('#3').click(function(){
			if (click3==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click3=true;
					clickOrder[k] = 3;
					++k;
				}
			}
		});

		$('#4').click(function(){
			if (click4==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click4=true;
					clickOrder[k] = 4;
					++k;
				}
			}
		});

		$('#5').click(function(){
			if (click5==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click5=true;
					clickOrder[k] = 5;
					++k;
				}
			}
		});

		$('#6').click(function(){
			if (click6==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click6=true;
					clickOrder[k] = 6;
					++k;
				}
			}
		});

		$('#7').click(function(){
			if (click7==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click7=true;
					clickOrder[k] = 7;
					++k;
				}
			}
		});

		$('#8').click(function(){
			if (click8==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click8=true;
					clickOrder[k] = 8;
					++k;
				}
			}
		});

		$('#9').click(function(){
			if (click9==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click9=true;
					clickOrder[k] = 9;
					++k;
				}
			}
		});

		$('#10').click(function(){
			if (click10==false) {
				if (counter<5) {
					$(this).addClass('selected');
					++counter;
					click10=true;
					clickOrder[k] = 10;
					++k;
				}
			}
		});				

		$("#reset").click(function(){

			counter=0;
			k=0;
			for (j = 0; j < 10; j++) {			
				clickOrder[j]=null;					
			}
			//alert(JSON.stringify(clickOrder));
			$("#continue").fadeOut(400);
			$("#reset").fadeOut(400);
			$("#dialog").delay(100).html("Select up to five cards, kupo! <br> Click here when you're ready.");



			if (click1==true) {
				$("#1").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click1=false;
			}

			if (click2==true) {
				$("#2").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click2=false;
			}

			if (click3==true) {
				$("#3").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click3=false;
			}

			if (click4==true) {
				$("#4").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click4=false;
			}

			if (click5==true) {
				$("#5").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click5=false;
			}

			if (click6==true) {
				$("#6").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click6=false;
			}

			if (click7==true) {
				$("#7").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click7=false;
			}

			if (click8==true) {
				$("#8").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click8=false;
			}

			if (click9==true) {
				$("#9").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click9=false;
			}

			if (click10==true) {
				$("#10").attr("src", "img/cards/cardBG.jpg").removeClass('selected');
				click10=false;
			}

		});				

		//Με το continue πάει παρακάτω στην πλατφόρμα του παιχνιδιού
		$("#continue").click(function(){
			$("#dialog").html("Woo-hoo! Let the game begin, kupo!");
			$(".deck").fadeOut(1000);
			$("#continue").fadeOut(1000);
			$("#reset").fadeOut(1000);
			setTimeout(function() {
		        $("#kupo").fadeOut(900);
		        $("#dialog").fadeOut(900);
		        setTimeout(function() {
					$(".arena").fadeIn(1000);
				}, 1000);
			    var j=1;
				var n=5;
				if (!(counter<5)) {
					for (j = 1; j < 11; j++) {
						if (!(clickOrder.includes(j))) {	
							clickOrder[n]=j;
						n++;
					}
				}
				//alert(JSON.stringify(clickOrder));

				setTimeout(function() {
					$("#start").fadeIn(1000);

					$("#start").click(function(){
						$(".results").fadeIn(1000);
						$(".messages").fadeIn(1000);
						shuffle(clickOrder);

						$("#start").fadeOut(1000, function(){

							//ROUND 1

							//USER
							if (clickOrder[0]===1){
								$("#user").attr("src", "img/cards/card1.jpg");
								$("#HAP").html(AP1);
								$("#HDP").html(DP1);
							}
							else if (clickOrder[0]===2) {
								$("#user").attr("src", "img/cards/card2.jpg");
								$("#HAP").html(AP2);
								$("#HDP").html(DP2);
							}
							else if (clickOrder[0]===3) {
								$("#user").attr("src", "img/cards/card3.jpg");
								$("#HAP").html(AP3);
								$("#HDP").html(DP3);
							}
							else if (clickOrder[0]===4) {
								$("#user").attr("src", "img/cards/card4.jpg");
								$("#HAP").html(AP4);
								$("#HDP").html(DP4);
							}
							else if (clickOrder[0]===5) {
								$("#user").attr("src", "img/cards/card5.jpg");
								$("#HAP").html(AP5);
								$("#HDP").html(DP5);
							}
							else if (clickOrder[0]===6) {
								$("#user").attr("src", "img/cards/card6.jpg");
								$("#HAP").html(AP6);
								$("#HDP").html(DP6);
							}
							else if (clickOrder[0]===7) {
								$("#user").attr("src", "img/cards/card7.jpg");
								$("#HAP").html(AP7);
								$("#HDP").html(DP7);
							}
							else if (clickOrder[0]===8) {
								$("#user").attr("src", "img/cards/card8.jpg");
								$("#HAP").html(AP8);
								$("#HDP").html(DP8);
							}
							else if (clickOrder[0]===9) {
								$("#user").attr("src", "img/cards/card9.jpg");
								$("#HAP").html(AP9);
								$("#HDP").html(DP9);
							}
							else  {
								$("#user").attr("src", "img/cards/card10.jpg");
								$("#HAP").html(AP10);
								$("#HDP").html(DP10);
							}

							//COMPUTER
							if (clickOrder[5]===1){
								$("#computer").attr("src", "img/cards/card1.jpg");
								$("#EAP").html(AP1);
								$("#EDP").html(DP1);
							}
							else if (clickOrder[5]===2){
								$("#computer").attr("src", "img/cards/card2.jpg");
								$("#EAP").html(AP2);
								$("#EDP").html(DP2);
							}
							else if (clickOrder[5]===3){
								$("#computer").attr("src", "img/cards/card3.jpg");
								$("#EAP").html(AP3);
								$("#EDP").html(DP3);
							}
							else if (clickOrder[5]===4){
								$("#computer").attr("src", "img/cards/card4.jpg");
								$("#EAP").html(AP4);
								$("#EDP").html(DP4);
							}
							else if (clickOrder[5]===5){
								$("#computer").attr("src", "img/cards/card5.jpg");
								$("#EAP").html(AP5);
								$("#EDP").html(DP5);
							}
							else if (clickOrder[5]===6){
								$("#computer").attr("src", "img/cards/card6.jpg");
								$("#EAP").html(AP6);
								$("#EDP").html(DP6);
							}
							else if (clickOrder[5]===7){
								$("#computer").attr("src", "img/cards/card7.jpg");
								$("#EAP").html(AP7);
								$("#EDP").html(DP7);
							}
							else if (clickOrder[5]===8){
								$("#computer").attr("src", "img/cards/card8.jpg");
								$("#EAP").html(AP8);
								$("#EDP").html(DP8);
							}
							else if (clickOrder[5]===9){
								$("#computer").attr("src", "img/cards/card9.jpg");
								$("#EAP").html(AP9);
								$("#EDP").html(DP9);
							}
							else  if (clickOrder[5]===10){
								$("#computer").attr("src", "img/cards/card10.jpg");
								$("#EAP").html(AP10);
								$("#EDP").html(DP10);
							}

							$("#heroAP").fadeIn(1000);
							$("#heroDP").fadeIn(1000);
							$("#enemyAP").fadeIn(1000);
							$("#enemyDP").fadeIn(1000);

							var r=1;
							var r2=6;
							var userAP = parseInt($("#HAP").html());
							var userDP = parseInt($("#HDP").html());
							var computerAP = parseInt($("#EAP").html());
							var computerDP = parseInt($("#EDP").html());
															
							$("#round").click(function(){
								$("#round").fadeOut(1000);
																
									if (userClicked) {
										userClicked=false;
										choseAttack=false;
										choseDefense=false;
										//Αφού γίνουν και οι πέντε γύροι, να μην μπορεί να ξανά πατήσει το attack και το defense
										//Αναδεικνύεται επίσης ο νικητής εδώ πέρα.	
										if (rounds==5) {
											choseAttack=true;
											choseDefense=true;
											if (winUser>winComputer) {
												$("#round").hide();
												$("#round").html("Congratulations! <br>You beat the bot!");
												$("#round").fadeIn(1000);
												$("#round").css({
													"right": "19%",
													"margin-top": "7%",
													"text-align": "center",
													"line-height": "100%",
													"width": "59%"
												});
											}
											if (winUser==winComputer) {
												$("#round").hide();
												$("#round").html("Oh! It's a draw!");
												$("#round").fadeIn(1000);
												$("#round").css({
													"right": "19%",
													"margin-top": "7%",
													"text-align": "center",
													"line-height": "100%",
													"width": "59%"
												});
											}
											else if (winUser<winComputer) {
												$("#round").hide();
												$("#round").html("Oops... <br>The bot won.");
												$("#round").fadeIn(1000);
												$("#round").css({
													"right": "18%" ,
													"text-align": "center" ,
													"margin-top": "7%" ,
													"width": "59%" ,
													"line-height": "97%"
												});
											}
											$("#round").click(function(){
												$(".messages").fadeOut(5000);
												$(".arena").fadeOut(5000);
												$("#again").delay(5500).fadeIn(1000);
												$("#again").click(function(){
													window.location = "home.html";
												});
											});
										}

										computerTurn = Math.floor((Math.random() * 2) + 1);

										if (r>0 && r<5) {
											if (clickOrder[r]===1){
												$("#user").attr("src", "img/cards/card1.jpg");
												$("#HAP").html(AP1);
												$("#HDP").html(DP1);

											}
											else if (clickOrder[r]===2) {
												$("#user").attr("src", "img/cards/card2.jpg");
												$("#HAP").html(AP2);
												$("#HDP").html(DP2);
											}
											else if (clickOrder[r]===3) {
												$("#user").attr("src", "img/cards/card3.jpg");
												$("#HAP").html(AP3);
												$("#HDP").html(DP3);
											}
											else if (clickOrder[r]===4) {
												$("#user").attr("src", "img/cards/card4.jpg");
												$("#HAP").html(AP4);
												$("#HDP").html(DP4);
											}
											else if (clickOrder[r]===5) {
												$("#user").attr("src", "img/cards/card5.jpg");
												$("#HAP").html(AP5);
												$("#HDP").html(DP5);
											}
											else if (clickOrder[r]===6) {
												$("#user").attr("src", "img/cards/card6.jpg");
												$("#HAP").html(AP6);
												$("#HDP").html(DP6);
											}
											else if (clickOrder[r]===7) {
												$("#user").attr("src", "img/cards/card7.jpg");
												$("#HAP").html(AP7);
												$("#HDP").html(DP7);
											}
											else if (clickOrder[r]===8) {
												$("#user").attr("src", "img/cards/card8.jpg");
												$("#HAP").html(AP8);
												$("#HDP").html(DP8);
											}
											else if (clickOrder[r]===9) {
												$("#user").attr("src", "img/cards/card9.jpg");
												$("#HAP").html(AP9);
												$("#HDP").html(DP9);
											}
											else  if (clickOrder[r]===10) {
												$("#user").attr("src", "img/cards/card10.jpg");
												$("#HAP").html(AP10);
												$("#HDP").html(DP10);
											}
											++r;
										}

										if (r2>5) {

											//COMPUTER
											if (clickOrder[r2]===1){
												$("#computer").attr("src", "img/cards/card1.jpg");
												$("#EAP").html(AP1);
												$("#EDP").html(DP1);
											}
											else if (clickOrder[r2]===2){
												$("#computer").attr("src", "img/cards/card2.jpg");
												$("#EAP").html(AP2);
												$("#EDP").html(DP2);
											}
											else if (clickOrder[r2]===3){
												$("#computer").attr("src", "img/cards/card3.jpg");
												$("#EAP").html(AP3);
												$("#EDP").html(DP3);
											}
											else if (clickOrder[r2]===4){
												$("#computer").attr("src", "img/cards/card4.jpg");
												$("#EAP").html(AP4);
												$("#EDP").html(DP4);
											}
											else if (clickOrder[r2]===5){
												$("#computer").attr("src", "img/cards/card5.jpg");
												$("#EAP").html(AP5);
												$("#EDP").html(DP5);
											}
											else if (clickOrder[r2]===6){
												$("#computer").attr("src", "img/cards/card6.jpg");
												$("#EAP").html(AP6);
												$("#EDP").html(DP6);
											}
											else if (clickOrder[r2]===7){
												$("#computer").attr("src", "img/cards/card7.jpg");
												$("#EAP").html(AP7);
												$("#EDP").html(DP7);
											}
											else if (clickOrder[r2]===8){
												$("#computer").attr("src", "img/cards/card8.jpg");
												$("#EAP").html(AP8);
												$("#EDP").html(DP8);
											}
											else if (clickOrder[r2]===9){
												$("#computer").attr("src", "img/cards/card9.jpg");
												$("#EAP").html(AP9);
												$("#EDP").html(DP9);
											}
											else if (clickOrder[r2]===10) {
												$("#computer").attr("src", "img/cards/card10.jpg");
												$("#EAP").html(AP10);
												$("#EDP").html(DP10);
											}
												++r2;
										}

										userAP = parseInt($("#HAP").html());
										userDP = parseInt($("#HDP").html());
										computerAP = parseInt($("#EAP").html());
										computerDP = parseInt($("#EDP").html());							
									}
								});
															
														
								var index=0;
								var index2=5;
								var winUser=0;
								var winComputer=0;
								var rounds=0;
															

								$("#attack").click(function(){

															
									if (!choseDefense) {
										if (!choseAttack) {
											++rounds;
											userClicked=true;
											choseAttack = true;

											if (index>=0 && index<5) {
												//User
																			
												if (clickOrder[index]===1){
													$("#imgAttackUser").attr("src", "img/attack/attack1.gif");
													$("#imgAttackUser").css({
														"left": "19%",
														"margin-top": "8%",
														"width": "85%"
													});
												}
												else if (clickOrder[index]===2){
													$("#imgAttackUser").attr("src", "img/attack/attack2.gif");
													$("#imgAttackUser").css({
														"left": "22%",
														"margin-top": "0%",
														"width": "43%"
													});
												}
												else if (clickOrder[index]===3){
													$("#imgAttackUser").attr("src", "img/attack/attack3.gif");
													$("#imgAttackUser").css({
														"left": "16%",
														"margin-top": "4%",
														"width": "65%"
													});
												}
												else if (clickOrder[index]===4){
													$("#imgAttackUser").attr("src", "img/attack/attack4.gif");
													$("#imgAttackUser").css({
														"left": "20%",
														"margin-top": "15%",
														"width": "59%"
													});
												}
												else if (clickOrder[index]===5){
													$("#imgAttackUser").attr("src", "img/attack/attack5.gif");
													$("#imgAttackUser").css({
														"left": "21%",
														"margin-top": "16%",
														"width": "55%"
													});
												}
												else if (clickOrder[index]===6){
													$("#imgAttackUser").attr("src", "img/attack/attack6.gif");
													$("#imgAttackUser").css({
														"left": "22%",
														"margin-top": "12%",
														"width": "45%"
													});
												}
												else if (clickOrder[index]===7){
													$("#imgAttackUser").attr("src", "img/attack/attack7.gif");
													$("#imgAttackUser").css({
														"left": "26%",
														"margin-top": "-5%",
														"width": "61%"
													});
												}
												else if (clickOrder[index]===8){
													$("#imgAttackUser").attr("src", "img/attack/attack8.gif");
													$("#imgAttackUser").css({
														"left": "20%",
														"margin-top": "18%",
														"width": "65%"
													});
												}
												else if (clickOrder[index]===9){
													$("#imgAttackUser").attr("src", "img/attack/attack9.gif");
													$("#imgAttackUser").css({
														"left": "27%",
														"margin-top": "20%",
														"width": "65%"
													});
												}
												else if (clickOrder[index]===10) {
													$("#imgAttackUser").attr("src", "img/attack/attack10.gif");
													$("#imgAttackUser").css({
														"left": "25%",
														"margin-top": "15%",
														"width": "51%"
													});
												}
												++index;
											}	

											if (computerTurn === 1) {
												if (index2>4) {
													//COMPUTER
													if (clickOrder[index2]===1){
														$("#imgAttackComputer").attr("src", "img/attack/reverse1.gif");
														$("#imgAttackComputer").css({
															"left": "1%",
															"margin-top": "8%",
															"width": "85%"
														});
													}
													else if (clickOrder[index2]===2){
														$("#imgAttackComputer").attr("src", "img/attack/reverse2.gif");
														$("#imgAttackComputer").css({
															"left": "31%",
															"margin-top": "0%",
															"width": "43%"
														});
													}
													else if (clickOrder[index2]===3){
														$("#imgAttackComputer").attr("src", "img/attack/reverse3.gif");
														$("#imgAttackComputer").css({
															"left": "23%",
															"margin-top": "4%",
															"width": "65%"
														});
													}
													else if (clickOrder[index2]===4){
														$("#imgAttackComputer").attr("src", "img/attack/reverse4.gif");
														$("#imgAttackComputer").css({
															"left": "26%",
															"margin-top": "15%",
															"width": "59%"
														});
													}
													else if (clickOrder[index2]===5){
														$("#imgAttackComputer").attr("src", "img/attack/reverse5.gif");
														$("#imgAttackComputer").css({
															"left": "28%",
															"margin-top": "16%",
															"width": "55%"
														});
													}
													else if (clickOrder[index2]===6){
														$("#imgAttackComputer").attr("src", "img/attack/reverse6.gif");
														$("#imgAttackComputer").css({
															"left": "37%",
															"margin-top": "12%",
															"width": "45%"
														});
													}
													else if (clickOrder[index2]===7){
														$("#imgAttackComputer").attr("src", "img/attack/reverse7.gif");
														$("#imgAttackComputer").css({
															"left": "18%",
															"margin-top": "-5%",
															"width": "61%"
														});
													}
													else if (clickOrder[index2]===8){
														$("#imgAttackComputer").attr("src", "img/attack/reverse8.gif");
														$("#imgAttackComputer").css({
															"left": "19%",
															"margin-top": "18%",
															"width": "65%"
														});
													}
													else if (clickOrder[index2]===9){
														$("#imgAttackComputer").attr("src", "img/attack/reverse9.gif");
														$("#imgAttackComputer").css({
															"left": "13%",
															"margin-top": "20%",
															"width": "65%"
														});
													}
													else if (clickOrder[index2]===10) {
														$("#imgAttackComputer").attr("src", "img/attack/reverse10.gif");
														$("#imgAttackComputer").css({
															"left": "28%",
															"margin-top": "15%",
															"width": "51%"
														});
													}
													++index2;
													
												}
												$("#imgAttackUser").fadeIn(1000);
												$("#imgAttackComputer").fadeIn(1000);
												
												setTimeout(function() {
													$("#imgAttackUser").fadeOut(600);
													$("#imgAttackComputer").fadeOut(600);
												}, 4000);


												if (userAP > computerAP) {
													$("#round").html("You Win!");
													$("#round").delay(4500).fadeIn(1000);
													++winUser;
												}
												else if ( userAP < computerAP ) {
													$("#round").html("You Lose...");
													$("#round").delay(4500).fadeIn(1000);
													++winComputer;
												}
												else if ( userAP === computerAP ) {
													$("#round").html("You Win!");
													$("#round").delay(4500).fadeIn(1000);
													++winUser;
												}
											}
											else if (computerTurn === 2) {

												if (index2>4) {

													//COMPUTER
													
													if (clickOrder[index2]===1){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===2){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===3){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===4){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===5){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===6){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===7){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===8){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===9){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===10) {
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													++index2;
												}	

												$("#imgAttackUser").fadeIn(1000);
												$("#imgDefenseComputer").fadeIn(1000);
													
												setTimeout(function() {
													$("#imgAttackUser").fadeOut(600);
													$("#imgDefenseComputer").fadeOut(600);
												}, 4000);

												if (userAP > computerDP) {
													$("#round").html("You Win!");
													$("#round").delay(4500).fadeIn(1000);
													++winUser;
												}
												else if ( userAP < computerDP ) {
													$("#round").html("You Lose...");
													$("#round").delay(4500).fadeIn(1000);
													++winComputer;
												}
												else if ( userAP === computerDP ) {
													$("#round").html("You Win!");
													$("#round").delay(4500).fadeIn(1000);
													++winUser;
												}
											}
										}														
									}
								});
														

														

								$("#defense").click(function(){
									if (!choseAttack) {
										if (!choseDefense) {

											++rounds;
											userClicked=true;
											choseDefense=true;

											if (index>=0 && index<5) {

												//USER
												
												if (clickOrder[index]===1){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===2){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===3){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===4){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===5){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===6){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===7){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===8){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===9){
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												else if (clickOrder[index]===10) {
													$("#imgDefenseUser").attr("src", "img/re-defense.gif");
												}
												++index;
											}	
											if (computerTurn == 1) {

												if (index2>4) {

													//COMPUTER
													if (clickOrder[index2]===1){
														$("#imgAttackComputer").attr("src", "img/attack/reverse1.gif");
														$("#imgAttackComputer").css({
															"left": "1%",
															"margin-top": "8%",
															"width": "85%"
														});
													}
													else if (clickOrder[index2]===2){
														$("#imgAttackComputer").attr("src", "img/attack/reverse2.gif");
														$("#imgAttackComputer").css({
															"left": "31%",
															"margin-top": "0%",
															"width": "43%"
														});
													}
													else if (clickOrder[index2]===3){
														$("#imgAttackComputer").attr("src", "img/attack/reverse3.gif");
														$("#imgAttackComputer").css({
															"left": "23%",
															"margin-top": "4%",
															"width": "65%"
														});
													}
													else if (clickOrder[index2]===4){
														$("#imgAttackComputer").attr("src", "img/attack/reverse4.gif");
														$("#imgAttackComputer").css({
															"left": "26%",
															"margin-top": "15%",
															"width": "59%"
														});
													}
													else if (clickOrder[index2]===5){
														$("#imgAttackComputer").attr("src", "img/attack/reverse5.gif");
														$("#imgAttackComputer").css({
															"left": "28%",
															"margin-top": "16%",
															"width": "55%"
														});
													}
													else if (clickOrder[index2]===6){
														$("#imgAttackComputer").attr("src", "img/attack/reverse6.gif");
														$("#imgAttackComputer").css({
															"left": "37%",
															"margin-top": "12%",
															"width": "45%"
														});
													}
													else if (clickOrder[index2]===7){
														$("#imgAttackComputer").attr("src", "img/attack/reverse7.gif");
														$("#imgAttackComputer").css({
															"left": "18%",
															"margin-top": "-5%",
															"width": "61%"
														});
													}
													else if (clickOrder[index2]===8){
														$("#imgAttackComputer").attr("src", "img/attack/reverse8.gif");
														$("#imgAttackComputer").css({
															"left": "19%",
															"margin-top": "18%",
															"width": "65%"
														});
													}
													else if (clickOrder[index2]===9){
														$("#imgAttackComputer").attr("src", "img/attack/reverse9.gif");
														$("#imgAttackComputer").css({
															"left": "13%",
															"margin-top": "20%",
															"width": "65%"
														});
													}
													else if (clickOrder[index2]===10) {
														$("#imgAttackComputer").attr("src", "img/attack/reverse10.gif");
														$("#imgAttackComputer").css({
															"left": "28%",
															"margin-top": "15%",
															"width": "51%"
														});
													}
													++index2;
												}
												$("#imgDefenseUser").fadeIn(1000);
												$("#imgAttackComputer").fadeIn(1000);
												
												setTimeout(function() {
													$("#imgDefenseUser").fadeOut(600);
													$("#imgAttackComputer").fadeOut(600);
												}, 4000);

												if (userDP > computerAP) {
													$("#round").html("You Win!");
													$("#round").delay(4500).fadeIn(1000);
													++winUser;
												}
												else if ( userDP < computerAP ) {
													$("#round").html("You Lose...");
													$("#round").delay(4500).fadeIn(1000);
													++winComputer;
												}
												else if ( userDP == computerAP ) {
													$("#round").html("You Win!");
													$("#round").delay(4500).fadeIn(1000);
													++winUser;
												}
											}
											else if (computerTurn == 2){

												if (index2>4) {

													//COMPUTER
													
													if (clickOrder[index2]===1){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===2){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===3){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===4){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===5){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===6){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===7){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===8){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===9){
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													else if (clickOrder[index2]===10) {
														$("#imgDefenseComputer").attr("src", "img/defense.gif");
													}
													++index2;
												}
																				
												$("#imgDefenseUser").fadeIn(1000);
												$("#imgDefenseComputer").fadeIn(1000);
													
												setTimeout(function() {
													$("#imgDefenseUser").fadeOut(600);
													$("#imgDefenseComputer").fadeOut(600);
												}, 4000);

												if (userDP > computerDP) {
													$("#round").html("You Win!");
													$("#round").delay(4500).fadeIn(1000);
													++winUser;
												}
												else if ( userDP < computerDP ) {
													$("#round").html("You Lose...");
													$("#round").delay(4500).fadeIn(1000);
													++winComputer;
												}
												else if ( userDP == computerDP ) {
													$("#round").html("You Win!");
													$("#round").delay(4500).fadeIn(1000);
													++winUser;
												}
											}
												
										}
								}
							});


							$("#resetGame").click(function(){
								window.location = "game.html";
							});
														
													
													

							});	
						});
													

					}, 2000);
				}
			}, 1000);
		});			
	});	
}
