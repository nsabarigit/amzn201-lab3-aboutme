// Guessing Game about me
// Questions based on information available in my web page 

"use-strict";

var userName = prompt('Thank you for visiting my Blog. \n\n Please enter your name to start the game');
console.log('Username: ', userName);

alert('Hello ' + userName + '! \n\n Let\'s see how well you know me now!');

var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;

var workResponse = prompt('I work in Amazon. Yes or No? ');
console.log('Work in Amazon ?' , workResponse);

    if(workResponse.toUpperCase() === 'Y' || workResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(workResponse.toUpperCase() === 'N' || workResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I work in Amazon");
    }

var residenceResponse = prompt('I live in Bellevue. Yes or No? ');
console.log('Live in Bellevue ?' , residenceResponse);
    
    if(residenceResponse.toUpperCase() === 'Y' || residenceResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(residenceResponse.toUpperCase() === 'N' || residenceResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I live in Bellevue");
    }

var programmingLanguageResponse = prompt('I\'m proficient in HTML. Yes or No? ');
console.log('proficient in HTML ?' , programmingLanguageResponse);
    
    if(programmingLanguageResponse.toUpperCase() === 'Y' || programmingLanguageResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(programmingLanguageResponse.toUpperCase() === 'N' || programmingLanguageResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I\'m proficient in HTML");
    }

var loveSnowResponse = prompt('I love snow. Yes or No? ');
console.log('Love snow ?' , loveSnowResponse);
    
    if(loveSnowResponse.toUpperCase() === 'Y' || loveSnowResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(loveSnowResponse.toUpperCase() === 'N' || loveSnowResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I love snow... You missed noticing my picture");
    }

var databaseResponse = prompt('I know DynamoDB. Yes or No? ');
console.log('Love snow ?' , databaseResponse);
    
    if(databaseResponse.toUpperCase() === 'Y' || databaseResponse.toUpperCase() === 'YES') {
        correctAnswersCounter++;       
        alert("Awesome! You got it right");
    }
    else if(databaseResponse.toUpperCase() === 'N' || databaseResponse.toUpperCase() === 'NO') {
        incorrectAnswersCounter++;
        alert("NNNaaahhh...I know DynamoDB");
    }

console.log("correctAnswersCounter:", correctAnswersCounter);
console.log("incorrectAnswersCounter:", incorrectAnswersCounter);

alert('You have answered  ' + correctAnswersCounter + ' questions correctly and ' + incorrectAnswersCounter +' questions incorrectly.');
alert('Once again Thank you for visiting my page!!! Have a great day!');
