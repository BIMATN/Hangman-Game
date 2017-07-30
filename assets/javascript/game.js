//Javascript for Hangman-Game

//Word Objects

var word1 = 
	{
		clue: "'Were the circuits like freeways?'",
		letters: ["T", "R", "O", "N"]
	}

var word2 = 
	{
		clue: "'Oh there you are Peter'" ,
		letters: ["H", "O", "O", "K"]
	}

var word3 = 
	{
		clue: "'No one can be told what the Matrix is'",
		letters: ["M", "O", "R", "P", "H", "E", "U", "S"]
	}

var word4 = 
	{
		clue: "Tell him to stay, Murph. Tell him to stay!",
		letters: ["I", "N", "T", "E", "R", "S", "T", "E", "L", "L", "A", "R"]
	}

var word5 = 
	{
		clue: "They're taking the Hobbits to Isengard!",
		letters: ["L", "E", "G", "O", "L", "A", "S"]
	}

//Random Word Choice for Hangman

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

//