"use strict";

// // brings in the assert module for unit testing
// const assert = require("assert");
// // brings in the readline module to access the command line
// const readline = require("readline");
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

const pigLatin = (word) => {
	// debugger;
	if (word == "") {
		window.location.reload();
		alert("enter word or phrase to be translated");
		return null;
	}
	const firstLetter = word.charAt(0);
	console.log(firstLetter);
	const removeNonAlpha = word.replace(/[&\/\\#,+()$~%.!'":*?<>{}]/g, "");
	const stringWord = removeNonAlpha.split("");
	// string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
	let vowel = ["a", "e", "i", "o", "u"];
	// for words starting with a vowel
	if (vowel.indexOf(firstLetter) >= 0) {
		const newWord = word + "yay";
		return newWord;
	}

	// loop to test for words with y as a vowel
	vowel.push("y");
	console.log(vowel);
	let vowelIndex = [];
	for (let i = 0; i < stringWord.length; i++) {
		if (vowel.includes(stringWord[i])) {
			vowelIndex.push(i); //pushes Y into the vowel array
		}
	}
	// loop to test for first vowel.  tests the 0 index of the string word.  If not a vowel it is shifted to the end of the array and the loop continues.
	if (vowelIndex[0] === 0) {
		stringWord.push(stringWord.shift());
		console.log(stringWord.push(stringWord.shift()));
	} else {
		for (let i = 0; i < vowelIndex[0]; i++) {
			stringWord.push(stringWord.shift());
		}
	}

	stringWord.push("ay"); //this adds the ay to the end of the array example grapes would look like ["a", "p", "e", "s", "g", "r", "ay"]
	const translatedWord = stringWord.join(""); //joins the string word and ay
	return translatedWord;
};

const sentance = () => {
	// debugger;
	let sentance = document.getElementById("userEntry").value;
	let wordArray = sentance.split(" ");
	let translatedArray = [];
	for (let wordIndex = 0; wordIndex < wordArray.length; wordIndex++) {
		translatedArray[wordIndex] = pigLatin(wordArray[wordIndex]);
	}
	const newSentance = translatedArray.join(" ");
	const cleanedSentance = newSentance.trim().toLowerCase();
	document.getElementById("translation").innerHTML = cleanedSentance;
};

const reload = () => {
	window.location.reload();
};
{
	/* <button onClick="window.location.reload();">Refresh Page</button> */
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// // to close it ctrl + C
// const getPrompt = () => {
// 	rl.question("word ", (answer) => {
// 		console.log(pigLatin(answer));
// 		getPrompt();
// 	});
// };

// // Unit Tests
// // You use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === "function") {
// 	describe("#pigLatin()", () => {
// 		it("should translate a simple word", () => {
// 			assert.equal(pigLatin("car"), "arcay");
// 			assert.equal(pigLatin("dog"), "ogday");
// 		});
// 		it("should translate a complex word", () => {
// 			assert.equal(pigLatin("create"), "eatecray");
// 			assert.equal(pigLatin("valley"), "alleyvay");
// 		});
// 		it('should attach "yay" if word begins with vowel', () => {
// 			assert.equal(pigLatin("egg"), "eggyay");
// 			assert.equal(pigLatin("emission"), "emissionyay");
// 		});
// 		it("should lowercase and trim word before translation", () => {
// 			assert.equal(pigLatin("HeLlO "), "ellohay");
// 			assert.equal(pigLatin(" RoCkEt"), "ocketray");
// 		});
// 	});
// } else {
// 	getPrompt();
// }

// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
