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
     {
       question : 'Solve for x: 3x + 7 = 22.',
       options: ['x = 5', 'x = 6', 'x = 7', 'x = 8'],
       answer: 'x = 5'
     },
     {
       question: 'Simplify the expression: 4(2x + 3) - 2(x - 5).',
       options: ['6x + 14', '8x - 8', '6x + 8', '8x - 14'],
       answer: '6x + 14'
     },
     {
       question: 'Find the value of x: 2(x - 3) = 5x - 6.',
       options: ['x = -2', 'x = 1', 'x = 2', 'x = 3'],
       answer: 'x = 3'
     },
     {
       question : 'Solve the equation: 2x - 5 = 7.',
       options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
       answer: 'x = 6'
     },
     {
       question : 'Evaluate the expression: 3^4.',
       options: ['81', '27', '12', '64'],
       answer: '81'
     },
     {
       question : 'Calculate the square root of 144.',
       options: ['12', '10', '14', '16'],
       answer: '12'
     },
     {
       question : 'Solve for x: 2x + 5 = 13.',
       options: ['x = 3', 'x = 4', 'x = 6', 'x = 9'],
       answer: 'x = 4'
     },
     {
       question: 'Find the solution to the equation: 4x - 8 = 12.',
       options: ['x = 5', 'x = 6', 'x = 7', 'x = 8'],
       answer: 'x = 5'
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
      question: 'Which continent is known as the "Land Down Under"?',
      options: ['North America', 'South America', 'Europe', 'Australia'],
      answer: 'Australia'
    },
      
    {
      question: 'What is the capital city of Japan?',
      options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
      answer: 'Tokyo'
    },
      
    {
      question: 'What is the longest river in the world?',
      options: ['Amazon River', 'Nile River', 'Mississippi River', 'Yangtze River'],
      answer: 'Nile River'
    },
      
    {
      question: 'Which country is both an island and a continent?',
      options: ['Japan', 'United Kingdom', 'Madagascar', 'Australia'],
      answer: 'Australia'
    },
      
    {
      question: 'Which country is famous for the ancient ruins of Machu Picchu?',
      options: ['Mexico', 'Peru', 'Egypt', 'Greece'],
      answer: 'Peru'
    },
      
    {
      question: 'What is the largest desert in the world?',
      options: ['Gobi Desert', 'Sahara Desert', 'Atacama Desert', 'Antarctic Desert'],
      answer: 'Sahara Desert'
    },
      
    {
      question: 'What is the highest mountain in the world?',
      options: ['Mount Kilimanjaro', 'Mount Everest', 'Mount McKinley', 'Mount Fuji'],
      answer: 'Mount Everest'
    },
      
    {
      question: 'Which country is known as the "Land of the Rising Sun"?',
      options: ['China', 'Japan', 'South Korea', 'India'],
      answer: 'Japan'
    },
      
    {
      question: 'Which city is the capital of France?',
      options: ['Paris', 'London', 'Rome', 'Berlin'],
      answer: 'Paris'
    },
      
    {
      question: 'What is the largest ocean in the world?',
      options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
      answer: 'Pacific Ocean'
    },
      
    {
      question: 'Which country is the largest producer of coffee in the world?',
      options: ['Brazil', 'Colombia', 'Ethiopia', 'Vietnam'],
      answer: 'Brazil'
    },
      
    {
      question: 'What is the official language of Brazil?',
      options: ['Spanish', 'Portuguese', 'English', 'French'],
      answer: 'Portuguese'
    },
      
    {
      question: 'Which city is located on two continents?',
      options: ['Istanbul', 'Rome', 'Athens', 'Cairo'],
      answer: 'Istanbul'
    },
      
    {
      question: 'What is the capital city of Canada?',
      options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
      answer: 'Ottawa'
    },
      
    {
      question: 'Which country is the largest in terms of land area?',
      options: ['China', 'Russia', 'United States', 'Canada'],
      answer: 'Russia'
    },
      
    {
      question: 'What is the largest island in the world?',
      options: ['Greenland', 'Madagascar', 'Borneo', 'Cuba'],
      answer: 'Greenland'
    },
      
    {
      question: 'Which country is known as "The Land of the Rising Sun"?',
      options: ['China', 'Japan', 'South Korea', 'India'],
      answer: 'Japan'
    },
      
    {
      question: 'What is the capital city of Australia?',
      options: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
      answer: 'Canberra'
    },
      
    {
      question: 'Which country is famous for the pyramids of Giza?',
      options: ['Mexico', 'Peru', 'Egypt', 'Greece'],
      answer: 'Egypt'
    },
      
    {
      question: 'Which country is known as the "Land of the Midnight Sun"?',
      options: ['Norway', 'Sweden', 'Finland', 'Iceland'],
      answer: 'Norway'
    }
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
