/* 

Given a string return the first unique character in JavaScript (this is a Google interview question)

google -> l 

JavaScript objects do not return arrays in order

*/

var word = "google";
var word = "g boobgle";
// var word = "goog*le";
// var word = "goog112le";
// var word = "googllee";

document.write(word[1]);

for (var i=0, counter = word.length; i<counter; i++)
{
	document.write(word[i] + " ");
	if (word[i] == " "){

	} else {
		for (var j=0, letter_count=0; j<counter; j++)
			{
				if (word[i] == word[j]){
					letter_count++;
				}
			}
	document.write(letter_count + "<br>");
		if (letter_count == 1) {
			document.write("Unique character is: " + word[i]);
			break;
		}

		if (i == counter - 1) {
			document.write("There is no unique character.");
		}
	}
}