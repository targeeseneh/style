// Get the subject from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const subject = urlParams.get('subject');

// test questions for each subject
const questions = {
  MATHEMATICS: [
    {
      question: 'What is 2 + 2?',
      options: ['4', '2', '6', '8'],
      answer: '4'
    },
    {
      question: 'What is the square root of 64?',
      options: ['8', '6', '4', '10'],
      answer: '8'
    },
    // Add more math questions here...
  ],
  SCIENCE: [
    {
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'H2O', 'CO2', 'NaCl'],
      answer: 'H2O'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
      answer: 'Jupiter'
    },
    // Add more science questions here...
  ],
  GEOGRAPHY: [
    {
      question: 'Who was the first President of the United States?',
      options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
      answer: 'George Washington'
    },
    {
      question: 'In what year did World War II end?',
      options: ['1939', '1945', '1951', '1941'],
      answer: '1945'
    },
    // Add more history questions here...
  ],
};

// Function to generate random questions
function getRandomQuestions(subject, count) {
  const subjectQuestions = questions[subject];
  if (!subjectQuestions) {
    return [];
  }

  const shuffledQuestions = subjectQuestions.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, count);
}

// Function to display questions and calculate the score
function displayQuestions(questions) {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';

  let currentQuestionIndex = 0;
  let questionsRemaining = questions.length;

  while (questionsRemaining > 0) {
    const questionsBatch = questions.slice(currentQuestionIndex, currentQuestionIndex + 5);

    const batchContainer = document.createElement('div');
    batchContainer.className = 'question-batch';

    questionsBatch.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.className = 'question';
      questionElement.innerHTML = `
        <h2>Question ${currentQuestionIndex + index + 1}:</h2>
        <p>${question.question}</p>
        <ul class="options">
          ${question.options
            .map(
              option => `<li><input type="radio" name="q${currentQuestionIndex + index}" value="${option}">${option}</li>`
            )
            .join('')}
        </ul>
      `;
      batchContainer.appendChild(questionElement);
    });

    quizContainer.appendChild(batchContainer);

    currentQuestionIndex += 5;
    questionsRemaining -= 5;
  }

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', handleSubmission);
  quizContainer.appendChild(submitButton);
}

// Function to handle quiz submission
function handleSubmission() {
  const answeredQuestions = document.querySelectorAll('.question input:checked');

  if (answeredQuestions.length === 20) {
    calculateScore();
    return;
  }

  const questionBatches = document.querySelectorAll('.question-batch');

  questionBatches.forEach((batch, index) => {
    const batchQuestions = batch.querySelectorAll('.question');

    if (index === questionBatches.length - 1) {
      batch.style.display = 'none';
    } else {
      batch.style.display = 'block';
    }

    batchQuestions.forEach(question => {
      question.style.display = 'none';
    });
  });

  const nextBatch = questionBatches[questionBatches.length - 1];
  const nextBatchQuestions = nextBatch.querySelectorAll('.question');

  nextBatchQuestions.forEach(question => {
    question.style.display = 'block';
  });

  window.scrollTo({
    top: nextBatch.offsetTop,
    behavior: 'smooth'
  });
}

// Function to calculate the score
function calculateScore() {
  const questions = document.querySelectorAll('.question');
  let score = 0;

  questions.forEach((question, index) => {
    const selectedOption = question.querySelector(`input[name=q${index}]:checked`);
    if (selectedOption && selectedOption.value === questions[index].answer) {
      score++;
      question.style.color = 'green';
    } else if (selectedOption) {
      question.style.color = 'red';
    } else {
      question.style.color = 'black'; // added line to reset color to black for unanswered questions
    }
  });

  const scoreElement = document.createElement('p');
  scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
  quizContainer.appendChild(scoreElement);

  // Disable submit button after scoring
  const submitButton = document.querySelector('button');
  submitButton.disabled = true;
}

// Set the number of questions and duration for the quiz
const numberOfQuestions = 20;
const quizDurationInSeconds = 300;

// Get the container element for quiz and display the questions
const quizContainer = document.getElementById('quiz-container');
if (quizContainer) {
  const questions = getRandomQuestions(subject, numberOfQuestions);
  displayQuestions(questions);

  const timerDisplay = document.getElementById('timer');
  startTimer(quizDurationInSeconds, timerDisplay);
}
