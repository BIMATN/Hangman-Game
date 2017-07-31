//Javascript for Hangman-Game

//Variables

var currentWord;
var charReplace=[];


//Word Objects

	var word1 = 
		{
			clue: "'Were the circuits like freeways?'",
			letters: ["T", "R", "O", "N"],
			guesses: [],
			wordDisplay: ["_","_","_","_"],
			guessCount: 8

		}

	var word2 = 
		{
			clue: "'Oh there you are Peter.'" ,
			letters: ["H", "O", "O", "K"],
			guesses: [],
			wordDisplay: ["_","_","_","_"],
			guessCount: 6
		}

	var word3 = 
		{
			clue: "'No one can be told what the Matrix is.'",
			letters: ["M", "O", "R", "P", "H", "E", "U", "S"],
			guesses: [],
			wordDisplay: ["_","_","_","_","_","_","_","_"],
			guessCount: 16
		}

	var word4 = 
		{
			clue: "Tell him to stay, Murph. Tell him to stay!",
			letters: ["I", "N", "T", "E", "R", "S", "T", "E", "L", "L", "A", "R"],
			guesses: [],
			wordDisplay: ["_","_","_","_","_","_","_","_","_","_","_","_"],
			guessCount: 16
		}

	var word5 = 
		{
			clue: "They're taking the Hobbits to Isengard!",
			letters: ["L", "E", "G", "O", "L", "A", "S"],
			guesses: [],
			wordDisplay: ["_","_","_","_","_","_","_"],
			guessCount: 12
		}


	currentWord=word5;
	console.log(currentWord);


//Array Printer

	function arrayPrint(dataDump) 
	{
		for(i=0; i<dataDump.length; i++) 
		{
			console.log(dataDump[i]);
		}
	}

	//arrayPrint(currentWord.letters);

//Array Search and Respond
	function arraySearch(guess) //Passing user guess to search function
	{
		for(i=0; i<currentWord.letters.length; i++) //searching through current array one character at a time
		{
			if (currentWord.letters[i] === guess) //comparing guess to current array character
			{
				currentWord.wordDisplay.splice(i,1,guess);	//since it is a match we will replace the correct wordDisplay character with guess
			}
			else 
			{
				//what do I put here?
			}

		}
	}

	arrayPrint(currentWord.wordDisplay)
	arraySearch("L")
	arrayPrint(currentWord.wordDisplay)


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