//Javascript for Hangman-Game

//Variables

	var currentWord; //Need a way to dynamically assign a word object to this
	var wins=0;
	var losses=0;

//Array of Word Objects


	var gameWords = [
		word1=
			{
				clue: "\"Were the circuits like freeways?\"",
				letters: ["T", "R", "O", "N"],
				guesses: [],
				wordDisplay: ["_","_","_","_"],
				guessCount: 6

			},

		word2= 
			{
				clue: "\"Oh there you are Peter.\"" ,
				letters: ["H", "O", "O", "K"],
				guesses: [],
				wordDisplay: ["_ ","_ ","_ ","_"],
				guessCount: 6
			},

		word3= 
			{
				clue: "\"No one can be told what the Matrix is.\"",
				letters: ["M", "O", "R", "P", "H", "E", "U", "S"],
				guesses: [],
				wordDisplay: ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_"],
				guessCount: 8
			},

		word4=
			{
				clue: "\"Tell him to stay, Murph. Tell him to stay!\"",
				letters: ["I", "N", "T", "E", "R", "S", "T", "E", "L", "L", "A", "R"],
				guesses: [],
				wordDisplay: ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_"],
				guessCount: 8
			},

		word5=
			{
				clue: "\"They're taking the Hobbits to Isengard!\"",
				letters: ["L", "E", "G", "O", "L", "A", "S"],
				guesses: [],
				wordDisplay: ["_ ","_ ","_ ","_ ","_ ","_ ","_ "],
				guessCount: 8
			}
		]


//Function to convert array to string and replace commas of string with spaces and then return the new string
	function convertAndReplace(array) 
	{	
		
		var displayString = array.toString();
		console.log(displayString);
		var newDisplayString = displayString.replace(/,/g," ");
		console.log(newDisplayString);
		return newDisplayString;
	}

//Function for printing out array contents

	function arrayPrint(dataDump) 
	{
		for(i=0; i<dataDump.length; i++) 
		{
			console.log(dataDump[i]);

		}
	}


//Function for responding to user guess
	function analyze(event) //Passing user guess to search and respond function
	{
		var guess=event.which || event.keyCode; //to account for browswer cross compatibility and assign character code to variable
		var guess = String.fromCharCode(guess); //to convert character code to letter and assign to variable
		//document.getElementById("userGuessDisplay").innerHTML = "Letters Guessed: "+guess; //printing to div
		
		guess=guess.toUpperCase(); //change guess to uppercase

		if (currentWord.guesses.indexOf(guess) === -1) //comparing guess with previous guesses array
		{
			currentWord.guesses.push(guess); //Add guess to guesses array
			document.getElementById("userGuessDisplay").innerHTML = "Letters Guessed: "+convertAndReplace(currentWord.guesses);//shows array of user guesses
			document.getElementById("guessForm").reset();//clears form after text entry

			for(i=0; i<currentWord.letters.length; i++) //searching through currentWord array one character at a time
			{
				if(currentWord.letters[i] === guess) //testing for matches
				{
					for(j=i;j<currentWord.letters.length; j++) //since it matches we run test w/o decreasing guess count but still catching all matches
					{
						if(currentWord.letters[j] === guess) //testing for matches
						{
							currentWord.wordDisplay.splice(j,1,guess);	//since it is a match we will replace the correct wordDisplay character with guess
							document.getElementById("wordDisplay").innerHTML = "Word: "+ convertAndReplace(currentWord.wordDisplay);//we then update the wordDisplay
						}
					}
					break; //break out of higher for loop to prevent else if for non match characters
				}
				else if(i === (currentWord.letters.length-1)) //if it is not a match I want to take away a guess, but only one per wrong guess not per character
				{
					currentWord.guessCount--; //decreases guess count
					document.getElementById("guessCount").innerHTML = "Guesses Left: "+currentWord.guessCount; //updates guess count display
				}
			}
		}
		else //Runs if you have already guessed that letter
		{
			document.getElementById("guessForm").reset();//clears form after text entry
			alert("You have already guessed this letter. Pay attention!"); //Tell user to try again
		}
	}

//Game startup - relies on the start button press

	function hangmanPlay() //Prepare yourselves, for glory!
	{						
		//Random Word Choice for Hangman

		ranSel=Math.floor(Math.random()*100);

		if(ranSel <= 20) 
		{
			currentWord=word1;
		}

		else if (ranSel <= 40) 
		{
			currentWord=word2;
		}

		else if (ranSel <= 60) 
		{
			currentWord=word3;
		}

		else if (ranSel <= 80) 
		{
			currentWord=word4;
		}

		else
		{
			currentWord=word5;
		}

		document.getElementById("wordClue").innerHTML = "Word Clue: "+currentWord.clue; //Shows word clue to user
		document.getElementById("wordDisplay").innerHTML = "Word: "+ convertAndReplace(currentWord.wordDisplay); //shows word character spaces to user
		document.getElementById("guessCount").innerHTML = "Incorrect Guesses Left: "+currentWord.guessCount; // shows guess count to user
		document.getElementById("wins").innerHTML = "Wins: "+ wins; // shows win count to user
		document.getElementById("losses").innerHTML = "Losses: "+ wins; // shows loss count to user
		document.getElementById("userGuess").addEventListener("keyup", function(){ analyze(event);}); // processes user guess
	}

//Game reset - relies on the reset button press
	function hangmanReset() 
	{
		location.reload(); //refreshes page - still wondering if I can use partial cached data or not
	}




	//Testing Things
	/*
	currentWord=word2
	console.log("This should be undefined or 0 or empty:");
	arrayPrint(currentWord.guesses);
	console.log("This should be a bunch of underscores: ");
	arrayPrint(currentWord.wordDisplay);
	console.log("This should be 12: ");
	console.log(currentWord.guessCount);
	analyze("t");
	console.log("This should be T: ")
	arrayPrint(currentWord.guesses);
	console.log("This should be a bunch of underscores: ")
	arrayPrint(currentWord.wordDisplay);
	console.log("This should be 11: ")
	console.log(currentWord.guessCount);
	analyze("l")
	console.log("This should be T & L: ")
	arrayPrint(currentWord.guesses);
	console.log("This should be L and a bunch of underscores: ")
	arrayPrint(currentWord.wordDisplay);
	console.log("This should be 10: ")
	console.log(currentWord.guessCount);
	analyze("l")
	console.log("should have an alert")
	console.log("This should be T & L: ")
	arrayPrint(currentWord.guesses);
	console.log("This should be L and a bunch of underscores: ")
	arrayPrint(currentWord.wordDisplay);
	console.log("This should be 10: ")
	console.log(currentWord.guessCount);
	*/