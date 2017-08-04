//HANGMAN GAME CODE BY Ben Rodriguez August 2017

//----------------------VARIABLE SECTION-------------------------------------//

	var currentWord;
	var rightCount;
	var wins=0;
	var losses=0;
	var playAgain;
	var nextWord=0;

//------------------------------------------------SECTION FOR WORDS OBJECTS-------------------------------------------------//


	var gameWords = [
		word1=
			{
				clue: "\"Were the circuits like freeways?\"",
				letters: ["T", "R", "O", "N"],
				guesses: [],
				wordDisplay: ["_","_","_","_"],
				guessCount: 6,
				correctCount: 4
			},

		word2= 
			{
				clue: "\"Oh there you are Peter.\"" ,
				letters: ["H", "O", "O", "K"],
				guesses: [],
				wordDisplay: ["_ ","_ ","_ ","_"],
				guessCount: 6,
				correctCount: 4
			},

		word3= 
			{
				clue: "\"No one can be told what the Matrix is.\"",
				letters: ["M", "O", "R", "P", "H", "E", "U", "S"],
				guesses: [],
				wordDisplay: ["_","_","_","_","_","_","_","_"],
				guessCount: 8,
				correctCount: 8
			},

		word4=
			{
				clue: "\"Tell him to stay, Murph. Tell him to stay!\"",
				letters: ["I", "N", "T", "E", "R", "S", "T", "E", "L", "L", "A", "R"],
				guesses: [],
				wordDisplay: ["_","_","_","_","_","_","_","_","_","_","_","_"],
				guessCount: 8,
				correctCount: 12
			},

		word5=
			{
				clue: "\"They're taking the Hobbits to Isengard!\"",
				letters: ["L", "E", "G", "O", "L", "A", "S"],
				guesses: [],
				wordDisplay: ["_","_","_","_","_","_","_"],
				guessCount: 8,
				correctCount: 7
			}
		]

//---------------------------------------------------------------FUNCTION SECTION----------------------------------------------------------------------------//

//Function to play again or reset

	function playAgainResponse()
	{
		if(playAgain === true)
		{
			nextWord++;
			rightCount=0;
			currentWord=gameWords[nextWord];
			document.getElementById("wordClue").innerHTML = "Word Clue: "+currentWord.clue; //Shows word clue to user
			document.getElementById("wordDisplay").innerHTML = "Word: "+ convertAndReplace(currentWord.wordDisplay); //shows word character spaces to user
			document.getElementById("userGuessDisplay").innerHTML = "Letters Guessed: "+convertAndReplace(currentWord.guesses);
			document.getElementById("guessCount").innerHTML = "Incorrect Guesses Left: "+currentWord.guessCount; // shows remaining guess count to user
		}
		else
		{
			location.reload(); // refreshes page to very beginning
		}
	}

//Function to convert array to string and replace commas of string with spaces and then return the new string
	function convertAndReplace(array) 
	{	
		
		var displayString = array.toString();
		var newDisplayString = displayString.replace(/,/g," ");
		return newDisplayString;
	}

//Function for testing for win state

	function winCheck() 
	{
		if(rightCount===currentWord.correctCount) //test to see if word has been guessed
		{
			wins++; //word has been guessed, increase wins
			document.getElementById("wins").innerHTML = "Wins: "+ wins; // shows win count to user
			if(currentWord!==gameWords[4])
			{
				playAgain = confirm("You have won! Great job! Now go change the world! Or perhaps you'd like to play again?"); //asks user to play again
				playAgainResponse(); //test play again response
			}
			else
			{
				alert("You have won the last challenges! Thanks for Playing!")
				location.reload();
			}		
		}
	}

//Function for testing for loss state

	function lossCheck()
	{
		if(currentWord.guessCount === 0) //test to see if there are more guesses and if not then user loses
		{
			losses++;
			document.getElementById("losses").innerHTML = "Losses: "+ losses; // shows win count to user
			if(currentWord!==gameWords[4])
			{
				playAgain = confirm("You have lost! Go watch more movies! Or if you dare, would you like to play again?"); //asks user to play again
				playAgainResponse(); //test play again response
			}
			else
			{
				alert("You lost the last challenge but thanks for playing!");
				location.reload();
			}
		}
	}

//Function for handling letter value - Meat and Potatoes

	function actionTime(guess)
	{
		if (currentWord.guesses.indexOf(guess) === -1) //comparing guess with previous guesses array
		{
			currentWord.guesses.push(guess); //Add guess to guesses array
			document.getElementById("userGuessDisplay").innerHTML = "Letters Guessed: "+convertAndReplace(currentWord.guesses); //shows array of user guesses
			document.getElementById("guessForm").reset(); //clears form after text entry

			for(i=0; i<currentWord.letters.length; i++) //searching through currentWord array one character at a time
			{
				if(currentWord.letters[i] === guess) //testing for matches
				{
					for(j=i;j<currentWord.letters.length; j++) //since it matches we run test w/o decreasing guess count but still catching all matches
					{
						if(currentWord.letters[j] === guess) //testing for matches
						{
							currentWord.wordDisplay.splice(j,1,guess);	//since it is a match we will replace the correct wordDisplay character with guess
							document.getElementById("wordDisplay").innerHTML = "Word: "+ convertAndReplace(currentWord.wordDisplay); //we then update the wordDisplay
							rightCount++;
							//winCheck();
							setTimeout(function(){ winCheck(); }, 1000); //causes issues
						}
					}
					break; //break out of higher for loop to prevent else if for non match characters and to prevent repeat checks
				}
				else if(i === (currentWord.letters.length-1)) //if it is not a match I want to take away a guess, but only one per wrong guess not per character
				{
					currentWord.guessCount--; //decreases guess count
					document.getElementById("guessCount").innerHTML = "Guesses Left: "+currentWord.guessCount; //updates guess count display
					//lossCheck();
					setTimeout(function(){ lossCheck(); }, 200); //causes issues
				}
			}
		}
		else //Runs if you have already guessed that letter
		{
			document.getElementById("guessForm").reset();//clears form after text entry
			alert("You have already guessed this letter. Pay attention!"); //Tell user to try again
		}
	}

//----MASTER FUNCTION----Function for converting key entry to uppercase letter and running other functions
	function analyze(event) //Passing user guess to function
	{
		var guess=event.which || event.keyCode; //to account for browswer cross compatibility and assign character code to variable
		var guess = String.fromCharCode(guess); //to convert character code to letter and assign to variable
		guess=guess.toUpperCase(); //change guess to uppercase
		actionTime(guess);	//process guess to either be good, bad, win, or lose
	}


//----STARTING FUNCTION----Function for starting and playing game - relies on the start button press
//Prepare yourselves, for glory!

	function hangmanPlay()
	{	
		document.getElementById("startButton").innerHTML = "Enjoy Your Game";
		document.getElementById("start").style.display = "none";
		currentWord=gameWords[0]; //set game word
		rightCount=0; //set right count to 0					
		document.getElementById("wordClue").innerHTML = "Word Clue: "+currentWord.clue; //Shows word clue to user
		document.getElementById("wordDisplay").innerHTML = "Word: "+ convertAndReplace(currentWord.wordDisplay); //shows word character spaces to user
		document.getElementById("userGuessDisplay").innerHTML = "Letters Guessed: "+convertAndReplace(currentWord.guesses);
		document.getElementById("guessCount").innerHTML = "Incorrect Guesses Left: "+currentWord.guessCount; // shows remaining guess count to user
		document.getElementById("wins").innerHTML = "Wins: "+ wins; // shows win count to user
		document.getElementById("losses").innerHTML = "Losses: "+ wins; // shows loss count to user
		document.getElementById("userGuess").addEventListener("keyup", function(){ analyze(event);}); // processes user guess
	}

//Function for Game reset - relies on the reset button press
	function hangmanReset() 
	{
		location.reload(); //refreshes page - still wondering if I can use partial cached data or not
	}