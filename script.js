function checkAnswer() {
    var userAnswer = document.getElementById("answerInput").value.toLowerCase();
    var correctAnswer = "1 2 3";

    if (userAnswer === correctAnswer) {
        alert("Congratulations! You got it right! Your next hint is at: ");
        
    } else {
        alert("Sorry, that's not correct. Try again!");
    }
}

