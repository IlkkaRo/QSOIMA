const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-quiz');
const resultContainer = document.getElementById('results');

const myQuestions = [
  {
    question: "The ultimate answer to life, The Universe and everything is?",
  answers: {
    A: "Making monies!",
    B: "Having a good time.",
    C: "42.",
    D: "Hell if I know..."
  },
  correctAnswer: "C"
  },
  {
    question: "How do you avoid nasty surprises?",
  answers: {
    A: "Smell it before you eat it.",
    B: "Check your shoes before you put them on.",
    C: "By putting commas etc in the right place!",
    D: "All of the above."
  },
  correctAnswer: "D"
  },
  {
    question: "How do we know she's a witch?",
  answers: {
    A: "She has black cats.",
    B: "She weighs the same as a duck.",
    C: "She has lots of brooms.",
    D: "She identifies with the Wiccan faith."
  },
  correctAnswer: "B"
  },
  {
    question: "What is the correct quote?",
  answers: {
    A: "No, I am your father!",
    B: "Luke, I am your father!",
    C: "Han shot first!",
    D: "Han did NOT shoot first!",
  },
  correctAnswer: "A"
  },
]

function startQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, index) => {

    const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<input type="radio" value="${letter}" name="${index}">
          <label>
              ${letter}:
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

    output.push(`<h3 class="question">${currentQuestion.question}</h3>
                  <div class="answers">${answers.join('')}</div>`);
  });
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const resultsContainer = document.getElementById('results');
  let correctAnswers = 0;

  myQuestions.forEach(currentQuestion => {
    const userAnswer
  });

  resultsContainer.innerHTML = `You got ${correctAnswers} correct.`
}

submitButton.addEventListener('click', showResults);
startQuiz();
