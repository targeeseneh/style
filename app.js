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
      question: 'What is 2 + 2?',
      options: ['4', '2', '6', '8'],
      answer: '4'
    },
    {
      question: 'What is the square root of 144?',
      options: ['12', '16', '8', '10'],
      answer: '12'
    },
      {
      question: 'What is the value of pi (π)?',
      options: ['3.14', '2.71', '1.62', '4.20'],
      answer: '3.14'
    },
    {
      question: 'What is the product of 5 and 7?',
      options: ['25', '30', '35', '40'],
      answer: '35'
    },
    {
      question: 'What is the result of 10 divided by 2?',
      options: ['2', '5', '8', '10'],
      answer: '5'
    },
    {
      question: 'What is the next number in the sequence: 1, 1, 2, 3, 5, ...?',
      options: ['7', '8', '9', '10'],
      answer: '8'
    },
    {
      question: 'What is the area of a square with a side length of 6 units?',
      options: ['12 square units', '18 square units', '24 square units', '36 square units'],
      answer: '36 square units'
    },
    {
      question: 'What is the sum of angles in a triangle?',
      options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
      answer: '180 degrees'
    },
    {
      question: 'If a = 3 and b = 4, what is the value of a^2 + b^2?',
      options: ['5', '12', '16', '25'],
      answer: '25'
    },
    {
      question: 'What is the decimal equivalent of 3/5?',
      options: ['0.3', '0.5', '0.6', '0.8'],
      answer: '0.6'
    },
    {
      question: 'What is the circumference of a circle with a diameter of 8 units?',
      options: ['8 units', '12 units', '16 units', '32 units'],
      answer: '25.12 units'
    },
    {
      question: 'What is the largest prime number less than 20?',
      options: ['15', '17', '19', '21'],
      answer: '19'
    },
    {
      question: 'What is the value of log10(100)?',
      options: ['1', '2', '10', '100'],
      answer: '2'
    },
    {
      question: 'What is the median of the following set of numbers: 5, 2, 8, 3, 9, 1?',
      options: ['2', '4', '5', '8'],
      answer: '5'
    },
    {
      question: 'If x + 4 = 10, what is the value of x?',
      options: ['2', '4', '6', '10'],
      answer: '6'
    },
    {
      question: 'What is the value of sin(90 degrees)?',
      options: ['0', '1', '-1', 'undefined'],
      answer: '1'
    },
    {
      question: 'What is the perimeter of a rectangle with length 5 units and width 7 units?',
      options: ['12 units', '20 units', '24 units', '35 units'],
      answer: '24 units'
    },
    {
      question: 'What is the value of 3 factorial (3!)?',
      options: ['3', '6', '9', '12'],
      answer: '6'
    }
  ],
  SCIENCE: [
    {
      question: 'What is the chemical symbol for water?',
      options: ['O2', 'H2O', 'CO2', 'NaCl'],
      answer: 'H2O'
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
      answer: 'Jupiter'
    },
    {
      question: 'What is the atomic number of carbon?',
      options: ['6', '8', '12', '16'],
      answer: '6'
    },
    {
      question: 'What is the process by which plants convert sunlight into food?',
      options: ['Photosynthesis', 'Respiration', 'Fermentation', 'Combustion'],
      answer: 'Photosynthesis'
    },
    {
      question: 'Which scientist is known for the theory of relativity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      answer: 'Albert Einstein'
    },
    {
      question: 'What is the unit of electric current?',
      options: ['Volt', 'Ampere', 'Watt', 'Ohm'],
      answer: 'Ampere'
    },
    {
      question: 'What is the closest star to Earth?',
      options: ['Alpha Centauri', 'Proxima Centauri', 'Sirius', 'Betelgeuse'],
      answer: 'Proxima Centauri'
    },
    {
      question: 'What is the chemical formula for table salt?',
      options: ['H2O', 'NaCl', 'CO2', 'HCl'],
      answer: 'NaCl'
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Mars', 'Venus', 'Mercury', 'Saturn'],
      answer: 'Mars'
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Brain', 'Heart', 'Liver', 'Skin'],
      answer: 'Skin'
    },
    {
      question: 'What is the study of heredity and variation in organisms called?',
      options: ['Ecology', 'Genetics', 'Zoology', 'Botany'],
      answer: 'Genetics'
    },
    {
      question: 'What is the SI unit of force?',
      options: ['Newton', 'Watt', 'Joule', 'Kilogram'],
      answer: 'Newton'
    },
    {
      question: 'What is the process by which a liquid turns into a gas called?',
      options: ['Condensation', 'Melting', 'Evaporation', 'Sublimation'],
      answer: 'Evaporation'
    },
    {
      question: 'What is the chemical formula for oxygen?',
      options: ['O2', 'H2O', 'CO2', 'NaCl'],
      answer: 'O2'
    },
    {
      question: 'Which gas is responsible for the Earth ozone layer?',
      options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Ozone'],
      answer: 'Ozone'
    },
    {
      question: 'What is the speed of light in a vacuum?',
      options: ['300,000 km/s', '150,000 km/s', '600,000 km/s', '1,000,000 km/s'],
      answer: '300,000 km/s'
    },
    {
      question: 'Which scientist discovered the law of gravity?',
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      answer: 'Isaac Newton'
    },
    {
      question: 'What is the chemical symbol for iron?',
      options: ['I', 'Fe', 'Au', 'Ag'],
      answer: 'Fe'
    },
    {
      question: 'What is the study of the Earth atmosphere called?',
      options: ['Biology', 'Chemistry', 'Geology', 'Meteorology'],
      answer: 'Meteorology'
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Brain', 'Heart', 'Liver', 'Skin'],
      answer: 'Skin'
    } 
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
