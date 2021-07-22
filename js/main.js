// quiz function

const quiz = function aboutMeQuiz() {
  let name = prompt("Welcome to the quiz about me! First, what is your name?");

  // while loop to guarantee name isn't null, undefined, or an empty string
  while(name == null || name === '') {
    name = prompt("Invalid input. Please enter your name correctly.");
  }

  alert("Please answer the following questions with a simple 'yes' or 'no'. Entering 'y' or 'n' suffices as well.");

  // counter for how many questions the user answered correctly
  let correctGuesses = 0;

  // stored questions inside of an array to keep code DRY
  const questions = [ 'Was I born in Memphis?', 'Am I 22 years old?', 'Did I graduate from Central High School?', 'Is my favorite video game SSX3?', 'Is my favorite sport soccer?', 'Guess a number between 1 & 20.', 'Please name one of my friends.' ];

  // simple for loop
  for (let i = 0; i < questions.length; i++) {
    // normalize answers to easily verify input
    let guess = prompt(questions[i]).toLowerCase();
    if (i === 6) {
      const friends = ['Javion', 'Cameron', 'Brandon', 'Samira', 'Naomi', 'Peyton'];
      let attempts = 6;
      while (attempts !== 0) {
        // check if input matches any name in friends array
        if (friends.includes(guess)) {
          alert(`Correct!\nYou could've entered any name in this list:\n${friends}`);
          correctGuesses++;
          attempts = 0;
        } else {
          attempts--;
          if (attempts === 0) {
            alert(`Sorry! You're out of attempts.\nAny name from this list would have been correct: ${friends}`);
          } else {
            guess = prompt(`Incorrect guess. Try again.\n${questions[i]}\nAttempts left: ${attempts}`);
          }
        }
      }
    }
    else if (i === 5) {
      // Guess random number from 1-20
      let randNum = Math.floor(Math.random() * 20 + 1);
      console.log(randNum);
      let attempts = 4;
      while(attempts !== 0) {
        if (parseInt(guess) === randNum) {
          alert("Correct!");
          correctGuesses++;
          attempts = 0;
        } else {
          attempts--;
          if (attempts === 0) {
            alert(`Sorry! You're out of attempts. The correct answer is ${randNum}.`);
          } else if (parseInt(guess) > randNum) {
            guess = prompt(`Incorrect guess. Too high. Try again.\n${questions[i]}\nAttempts left: ${attempts}`);
          } else {
            guess = prompt(`Incorrect guess. Too low. Try again.\n${questions[i]}\nAttempts left: ${attempts}`);
          }
        }
      }
    }
    // for questions 3 & 5, the correct answer is no. compare to user input. if correct, increment correctGuesses by 1.
    else if (i === 2 || i === 4) {
      if (guess === 'n' || guess === 'no') {
        alert("Correct!");
        correctGuesses++;
      } else {
        alert("Incorrect!");
      }
    } else {
      // for all other questions, the proper response is yes. compare to user input. if correct, increment correctGuesses by 1.
      if (guess === 'y' || guess === 'yes') {
        alert("Correct!");
        correctGuesses++;
      } else {
        alert("Incorrect!");
      }
    }
  }

  // Thank user for participation & tell user how many questions they answered correctly
  alert(`Thank you for taking this quiz ${name[0].toUpperCase() + name.substring(1).toLowerCase()}! You guessed ${correctGuesses} out of 7 questions correctly.`);

}

// call quiz function when button is clicked
let button = document.querySelector('button');
button.addEventListener('click', quiz);
