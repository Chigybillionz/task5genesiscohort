const questions = [
  {
    prompt:
      "What keyword is used to declare a variable that cannot be reassigned?",
    answer: "const",
  },
  {
    prompt: "What is the result of: 5 + 3 * 2?",
    answer: "11",
  },
  {
    prompt: "Which loop executes at least once before checking the condition?",
    answer: "do-while",
  },
  {
    prompt: "What method converts a string to lowercase?",
    answer: "toLowerCase()",
  },
  {
    prompt: "In a switch statement, what keyword is used to exit a case?",
    answer: "break",
  },
  {
    prompt:
      "What operator checks if two values are equal in both value and type?",
    answer: "===",
  },
  {
    prompt: "What is the index of the first element in an array?",
    answer: "0",
  },
];

let score = 0;
let incorrectQuestions = [];
let playAgain = true;

// My Main quiz function
function runQuiz() {
  score = 0;
  incorrectQuestions = [];

  console.log("My JavaScript Fundamentals Quiz for cohort 2 is live here");
  console.log("Answer the following questions correctly:\n");

  //this is my Loop function that will run through all questions
  for (let i = 0; i < questions.length; i++) {
    console.log(`Question ${i + 1}: ${questions[i].prompt}`);

    //my browser will diplay this  on load
    prompt(questions[i].prompt);

    // For demo purposes, i'll simulate different answers
    if (i === 0) userAnswer = "const";
    else if (i === 1) userAnswer = "11";
    else if (i === 2) userAnswer = "do-while";
    else if (i === 3) userAnswer = "tolowercase()";
    else if (i === 4) userAnswer = "BREAK";
    else if (i === 5) userAnswer = "6";
    else if (i === 6) userAnswer = "1";

    // Convert both to lowercase for case-insensitive comparison whenever
    if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
      console.log("✓ Correct!\n");
      score++;
    } else {
      console.log(`✗ Incorrect. The answer is "${questions[i].answer}".\n`);
      // Track incorrect questions
      incorrectQuestions.push({
        number: i + 1,
        question: questions[i].prompt,
        correctAnswer: questions[i].answer,
        userAnswer: userAnswer,
      });
    }
  }

  // Display final results on my console after all the queestion have been answered
  console.log("🤗Quiz Completed🤗");
  console.log(`Your score✅: ${score}/${questions.length}`);
  console.log(`you failed❌: ${incorrectQuestions.length}`);

  // Calculate percentage
  let percentage = (score / questions.length) * 100;

  // Use switch for grading using the switch case method
  switch (true) {
    case percentage >= 90:
      console.log("Grade: A+ Excellent! 🌟");
      break;
    case percentage >= 80:
      console.log("Grade: A Good job! 👍");
      break;
    case percentage >= 70:
      console.log("Grade: B Nice work! ✓");
      break;
    case percentage >= 60:
      console.log("Grade: C Keep practicing!");
      break;
    default:
      console.log("Grade: F Need more practice.");
  }

  // this i do to display all incorrect questions if any after maybe a failure occured!
  if (incorrectQuestions.length > 0) {
    console.log("\n⛔these are the below Questions You Missed out on");
    for (let j = 0; j < incorrectQuestions.length; j++) {
      console.log(
        `\nQuestion ${incorrectQuestions[j].number}: ${incorrectQuestions[j].question}`
      );
      console.log(`Your answer: ${incorrectQuestions[j].userAnswer}`);
      console.log(`Correct answer: ${incorrectQuestions[j].correctAnswer}`);
    }
  } else {
    console.log("\n🎉 Perfect score! You got all questions correct!");
  }
}

// Run quiz with do-while for replay option
do {
  runQuiz();

  console.log("\n Would you like to play again? ===");
  let replay = prompt("Play again? (yes/no)");

  if (replay.toLowerCase() === "yes" || replay.toLowerCase() === "y") {
    playAgain = true;
    console.log("\n--- Starting new quiz ---\n");
  } else {
    playAgain = false;
    console.log("\nThank you for playing! Goodbye! 👋");
  }
} while (playAgain);
