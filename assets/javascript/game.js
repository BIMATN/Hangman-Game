//Javascript for Hangman-Game

//Variables

var currentWord;


//Word Objects

	var word1 = 
		{
			clue: "'Were the circuits like freeways?'",
			letters: ["T", "R", "O", "N"],
			guesses: [],
			wordDisplay: ["_ ","_ ","_ ","_"],
			guessCount: 8

		}

	var word2 = 
		{
			clue: "'Oh there you are Peter.'" ,
			letters: ["H", "O", "O", "K"],
			guesses: [],
			wordDisplay: ["_ ","_ ","_ ","_"],
			guessCount: 6
		}

	var word3 = 
		{
			clue: "'No one can be told what the Matrix is.'",
			letters: ["M", "O", "R", "P", "H", "E", "U", "S"],
			guesses: [],
			wordDisplay: ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_"],
			guessCount: 16
		}

	var word4 = 
		{
			clue: "Tell him to stay, Murph. Tell him to stay!",
			letters: ["I", "N", "T", "E", "R", "S", "T", "E", "L", "L", "A", "R"],
			guesses: [],
			wordDisplay: ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_"],
			guessCount: 16
		}

	var word5 = 
		{
			clue: "They're taking the Hobbits to Isengard!",
			letters: ["L", "E", "G", "O", "L", "A", "S"],
			guesses: [],
			wordDisplay: ["_ ","_ ","_ ","_ ","_ ","_ ","_ "],
			guessCount: 12
		}


	currentWord=word5;
	console.log("This should be word5: ")
	console.log(currentWord);


//Function for printing out array contents

	function arrayPrint(dataDump) 
	{
		for(i=0; i<dataDump.length; i++) 
		{
			console.log(dataDump[i]);
		}
	}


//Function for responding to user guess

	function analyze(guess) //Passing user guess to search function
	{	
		guess=guess.toUpperCase(); //change guess to uppercase

		if (currentWord.guesses.indexOf(guess) === -1) //comparing guess with previous guesses
		{
			currentWord.guesses.push(guess); //Add guess to guess array

			for(i=0; i<currentWord.letters.length; i++) //searching through currentWord array one character at a time
			{
				if(currentWord.letters[i] === guess) //testing for matches
				{
					currentWord.wordDisplay.splice(i,1,guess);	//since it is a match we will replace the correct wordDisplay character with guess
				}
				else if(i === (currentWord.letters.length-1))
				{
					currentWord.guessCount--;
				}
			}
		}
		else
		{
			alert("You have already guessed this letter. Pay attention!"); //Tell user to try again
		}
	}

	//Testing Things
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




/*

Random Word Choice for Hangman - Might Not Use since it doesn't add anything to experience

var wordChoice;
ranSel=Math.floor(Math.random()*100);

if(ranSel <= 20) 
{
	wordChoice=word1;
}

else if (ranSel <= 40) 
{
	wordChoice=word2;
}

else if (ranSel <= 60) 
{
	wordChoice=word3;
}

else if (ranSel <= 80) 
{
	wordChoice=word4;
}

else
{
	wordChoice=word5;
}

console.log(wordChoice);

*/