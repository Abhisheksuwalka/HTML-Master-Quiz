document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let score = 0;
    let incorrectAnswers = [];

    // Iterate over each question
    for (let i = 1; i <= 10; i++) {
      const question = form[`q${i}`].value;
      const correctAnswer = getCorrectAnswer(i);

      // Check if the selected answer matches the correct answer
      if (question === correctAnswer) {
        score++;
      } else {
        // Add the question number to the list of incorrect answers
        incorrectAnswers.push(i);
      }
    }

    // Display the score
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Your final score is: ${score}/10`;
    resultContainer.style.display = "block";

    // Highlight incorrect answers and show "Try Again" button
    for (let i = 0; i < incorrectAnswers.length; i++) {
      const questionNumber = incorrectAnswers[i];
      const questionInput = form[`q${questionNumber}`];
      questionInput.classList.add("wrong-answer");

      // Add event listener to remove the wrong-answer class when the input is changed
      questionInput.addEventListener("input", function () {
        questionInput.classList.remove("wrong-answer");
      });
    }

    // Create and append the "Try Again" button
    const tryAgainButton = document.createElement("button");
    tryAgainButton.textContent = "Try Again";
    tryAgainButton.addEventListener("click", function () {
      // Reset the form and result
      form.reset();
      resultContainer.style.display = "none";
      // Remove wrong-answer class from all inputs
      const inputs = form.querySelectorAll('input[type="radio"]');
      inputs.forEach((input) => input.classList.remove("wrong-answer"));
    });
    resultContainer.appendChild(tryAgainButton);

    // Prevent the page from reloading
    return false;
  });
});

// Function to get the correct answer for each question
function getCorrectAnswer(questionNumber) {
  switch (questionNumber) {
    case 1:
      return "D";
    case 2:
      return "D";
    case 3:
      return "C";
    case 4:
      return "A";
    case 5:
      return "C";
    case 6:
      return "C";
    case 7:
      return "A";
    case 8:
      return "C";
    case 9:
      return "A";
    case 10:
      return "A";
    default:
      return "";
  }
}
