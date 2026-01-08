// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// const quizQuestions = [
//   {
//     question: "What is the capital of France?",
//     answers: [
//       { text: "London", correct: false },
//       { text: "Berlin", correct: false },
//       { text: "Paris", correct: true },
//       { text: "Madrid", correct: false },
//     ],
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answers: [
//       { text: "Venus", correct: false },
//       { text: "Mars", correct: true },
//       { text: "Jupiter", correct: false },
//       { text: "Saturn", correct: false },
//     ],
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     answers: [
//       { text: "Atlantic Ocean", correct: false },
//       { text: "Indian Ocean", correct: false },
//       { text: "Arctic Ocean", correct: false },
//       { text: "Pacific Ocean", correct: true },
//     ],
//   },
//   {
//     question: "Which of these is NOT a programming language?",
//     answers: [
//       { text: "Java", correct: false },
//       { text: "Python", correct: false },
//       { text: "Banana", correct: true },
//       { text: "JavaScript", correct: false },
//     ],
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     answers: [
//       { text: "Go", correct: false },
//       { text: "Gd", correct: false },
//       { text: "Au", correct: true },
//       { text: "Ag", correct: false },
//     ],
//   },
// ];

const quizQuestions = [
  {
    question: "Как будет 'Привет' по-немецки?",
    answers: [
      { text: "Tschüss", correct: false },
      { text: "Hallo", correct: true },
      { text: "Danke", correct: false },
      { text: "Ja", correct: false },
    ],
    level: "A1",
    category: "Приветствия"
  },
  {
    question: "Что означает 'Guten Morgen'?",
    answers: [
      { text: "Добрый вечер", correct: false },
      { text: "Спокойной ночи", correct: false },
      { text: "Доброе утро", correct: true },
      { text: "Добрый день", correct: false },
    ],
    level: "A1",
    category: "Приветствия"
  },
  {
    question: "Как сказать 'Спасибо' по-немецки?",
    answers: [
      { text: "Bitte", correct: false },
      { text: "Entschuldigung", correct: false },
      { text: "Danke", correct: true },
      { text: "Gern geschehen", correct: false },
    ],
    level: "A1",
    category: "Основные фразы"
  },
  {
    question: "Как будет 'Я' по-немецки?",
    answers: [
      { text: "Du", correct: false },
      { text: "Ich", correct: true },
      { text: "Er", correct: false },
      { text: "Wir", correct: false },
    ],
    level: "A1",
    category: "Местоимения"
  },
  {
    question: "Что означает 'Wie geht es dir?'?",
    answers: [
      { text: "Как тебя зовут?", correct: false },
      { text: "Сколько тебе лет?", correct: false },
      { text: "Как дела?", correct: true },
      { text: "Откуда ты?", correct: false },
    ],
    level: "A1",
    category: "Разговорные фразы"
  },
  {
    question: "Какой артикль у слова 'Haus' (дом)?",
    answers: [
      { text: "der", correct: false },
      { text: "die", correct: false },
      { text: "das", correct: true },
      { text: "kein", correct: false },
    ],
    level: "A2",
    category: "Артикли"
  },
  {
    question: "Что означает 'Ich habe Hunger'?",
    answers: [
      { text: "Я устал", correct: false },
      { text: "Я хочу пить", correct: false },
      { text: "Я голоден", correct: true },
      { text: "Мне холодно", correct: false },
    ],
    level: "A2",
    category: "Повседневные фразы"
  },
  {
    question: "Как спросить 'Сколько это стоит?'?",
    answers: [
      { text: "Wo ist das?", correct: false },
      { text: "Wie viel kostet das?", correct: true },
      { text: "Was ist das?", correct: false },
      { text: "Wann kommst du?", correct: false },
    ],
    level: "A2",
    category: "В магазине"
  },
  {
    question: "Как будет 'вчера' по-немецки?",
    answers: [
      { text: "heute", correct: false },
      { text: "morgen", correct: false },
      { text: "gestern", correct: true },
      { text: "jetzt", correct: false },
    ],
    level: "A2",
    category: "Время"
  },
  {
    question: "Как сказать 'Я не понимаю'?",
    answers: [
      { text: "Ich weiß nicht", correct: false },
      { text: "Ich verstehe nicht", correct: true },
      { text: "Ich kann nicht", correct: false },
      { text: "Ich möchte nicht", correct: false },
    ],
    level: "A2",
    category: "Разговорные фразы"
  },
  {
    question: "Что означает 'Einkaufszentrum'?",
    answers: [
      { text: "Школа", correct: false },
      { text: "Больница", correct: false },
      { text: "Торговый центр", correct: true },
      { text: "Вокзал", correct: false },
    ],
    level: "B1",
    category: "Лексика"
  },
  {
    question: "Как правильно: 'Ich ___ nach Hause gegangen'?",
    answers: [
      { text: "bin", correct: true },
      { text: "habe", correct: false },
      { text: "war", correct: false },
      { text: "werde", correct: false },
    ],
    level: "B1",
    category: "Перфект"
  },
  {
    question: "Что означает 'obwohl'?",
    answers: [
      { text: "потому что", correct: false },
      { text: "когда", correct: false },
      { text: "чтобы", correct: false },
      { text: "хотя", correct: true },
    ],
    level: "B1",
    category: "Союзы"
  },
  {
    question: "Как спросить 'Как долго ты учишь немецкий?'?",
    answers: [
      { text: "Warum lernst du Deutsch?", correct: false },
      { text: "Wie lange lernst du Deutsch?", correct: true },
      { text: "Wo lernst du Deutsch?", correct: false },
      { text: "Wann lernst du Deutsch?", correct: false },
    ],
    level: "B1",
    category: "Вопросы"
  },
  {
    question: "Что означает 'sich freuen auf'?",
    answers: [
      { text: "бояться чего-либо", correct: false },
      { text: "радоваться чему-либо", correct: true },
      { text: "злиться на кого-либо", correct: false },
      { text: "интересоваться чем-либо", correct: false },
    ],
    level: "B1",
    category: "Глаголы с предлогами"
  },
  {
    question: "Как будет 'несмотря на' по-немецки?",
    answers: [
      { text: "wegen", correct: false },
      { text: "trotz", correct: true },
      { text: "während", correct: false },
      { text: "dank", correct: false },
    ],
    level: "B1",
    category: "Предлоги"
  },
  {
    question: "Что означает 'Je älter ich werde, desto...'?",
    answers: [
      { text: "Чем старше я становлюсь, тем...", correct: true },
      { text: "Чем больше я учу, тем...", correct: false },
      { text: "Чем быстрее я бегу, тем...", correct: false },
      { text: "Чем дальше я еду, тем...", correct: false },
    ],
    level: "B1",
    category: "Сравнительные конструкции"
  },
  {
    question: "Как правильно: 'Wenn ich Zeit ___, würde ich reisen'?",
    answers: [
      { text: "habe", correct: false },
      { text: "hätte", correct: true },
      { text: "hatte", correct: false },
      { text: "haben werde", correct: false },
    ],
    level: "B1",
    category: "Конъюнктив"
  },
  {
    question: "Что означает 'sowohl... als auch'?",
    answers: [
      { text: "или... или", correct: false },
      { text: "ни... ни", correct: false },
      { text: "как... так и", correct: true },
      { text: "не только... но и", correct: false },
    ],
    level: "B1",
    category: "Союзы"
  },
  {
    question: "Как будет 'Если бы я знал, я бы пришел'?",
    answers: [
      { text: "Wenn ich weiß, komme ich", correct: false },
      { text: "Wenn ich wusste, kam ich", correct: false },
      { text: "Wenn ich gewusst hätte, wäre ich gekommen", correct: true },
      { text: "Wenn ich wissen würde, komme ich", correct: false },
    ],
    level: "B1",
    category: "Условные предложения"
  }
];
// QUIZ STATE VARS
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  // reset state
  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}