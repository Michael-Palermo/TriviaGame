//function to start the game
$("#start").on("click", function(){
	game.start();
})



//Questions, answers, and correct answer array
var questions = [{
	question:"Tom Brady's spirit animal is a...",
	answers:["Lion", "Goat", "Macaw", "All of the above"],
	correctAnswer:"Goat"
}, {
	question:"How many wives has Tom Brady had?",
	answers:["One", "Four", "Two", "Three"],
	correctAnswer:"Two"
}, {
	question:"Where did Tom Brady go to college?",
	answers:["Alabama", "Michigan", "Clemson", "Michigan State"],
	correctAnswer:"Michigan"
}, {
	question:"What pick was Tom Brady drafted in the 2000 NFL Draft?",
	answers:["199", "1", "7" , "134"],
	correctAnswer:"199"
}, {
	question:"How many Super Bowls has Tom Brady won?",
	answers:["1", "3", "4", "5"],
	correctAnswer:"5"
}, {
	question:"Who is the greatest Quarterback of all time?",
	answers:["Tom Brady", "Tom Brady", "Tom Brady", "Tom Brady"],
	correctAnswer:"Tom Brady"
}];
//array to keep track of correct, incorrect and counter 
var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	//function to add the game counter to the html. console log when counter reaches 0 game is up
	countdown: function(){
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter==0){
			game.done();
		}
	},
	//function that runs when start button is clicked
	start: function(){
		//set timer to countdown from 60 seconds by a second at a time. 
		timer = setInterval(game.countdown,1000);
		$("#bodyContent").prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>');
		$("#start").remove();
		$("#gif").remove();
			//change the html on the body content to list the questions and answers. make answers a clickable event
			for(var i = 0; i < questions.length; i++){
			$("#bodyContent").append("<h2>" + questions[i].question + "</h2>");
			for(var j = 0; j < questions[i].answers.length; j++){
				$("#bodyContent").append("<input type='radio' name= 'question- "+i+"' value='" +questions[i].answers[j]+"'>"+questions[i].answers[j]);
			}
		}
	},
	//function to verify the checked slection against the correct answer and either increase correct or incorrect for each question on the page
	done: function(){
		$.each($('input[name=question0]:checked'),function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
			});

		$.each($('input[name=question1]:checked'),function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name=question2]:checked'),function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name=question3]:checked'),function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name=question4]:checked'),function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		$.each($('input[name=question5]:checked'),function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		game.result();
		},

		//print the results of the game
		result: function(){
		clearInterval(timer);
		$("#bodyContent h2").remove();

		$("#bodyContent").html("<h2>You have finished!</h2>");
		$("#bodyContent").append("<h3>Correct Answers: " +game.correct+ "</h3>"); 
		$("#bodyContent").append("<h3>Incorrect Answers: " +game.incorrect+ "</h3>");
		//takes the correct and incorrect and subtracts that from the total number of questions. If any remaining add to unanswered
		$("#bodyContent").append("<h3>Unanswered: " +(questions.length-(game.incorrect+game.correct))+"</h3>");

	}
}