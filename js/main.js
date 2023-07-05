
const quizData = [
    // 1
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    // 2
    {
        question: "What is the element used to specify the title of the page?",
        a: "head",
        b: "title",
        c: "img",
        d: "header",
        correct: "b",
    },
    // 3
    {
        question: "What is the element used to define a paragraph in HTML?",
        a: "h3",
        b: "b",
        c: "span",
        d: "p",
        correct: "d",
    },
    // 4
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    // 5
    {
        question: "What is the element used to define a paragraph in HTML?",
        a: "h3",
        b: "b",
        c: "span",
        d: "p",
        correct: "d",
    },

    // 6
    {
        question: "What tool is used to style fonts in web design?",
        a: "CSS Grid",
        b: "CSS Flexbox",
        c: "CSS Typography",
        d: "no one",
        correct: "c",
    },
    // 7
    {
        question: "What is the element used to define a images in HTML?",
        a: "h3",
        b: "img",
        c: "span",
        d: "p",
        correct: "b",
    },
    // 8
    {
        question: "What is the element used to define a paragraph in HTML?",
        a: "h3",
        b: "b",
        c: "span",
        d: "p",
        correct: "d",
    },
    // 9
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    // 10
    {
        question: "What is the element used to specify the title of the page?",
        a: "head",
        b: "title",
        c: "img",
        d: "header",
        correct: "b",
    },

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('start');
const nextQuestion = document.querySelector('#next');
const counter = document.getElementById('counter');
const nameInput = document.querySelector('.name-input');
const error = document.getElementById('error-message');
const resultsContainer = document.getElementById('results');
const scoreContainer = document.getElementById('score');
const leaderboardBtn = document.getElementById('leaderboard');
const leaderboardContainer = document.getElementById('leaderboardContainer');
const leaderboardTable = document.getElementById('leaderboardTable');
const leaderboardBody = document.getElementById('leaderboardBody');

let currentQuiz = 0;
let score = 0;
let playerName = '';

function showSecondInterface() {
    if (nameInput.value === '') {
        error.textContent = 'Username is required';
    } else {
        playerName = nameInput.value;
        localStorage.setItem('userName', playerName);
        var container = document.querySelector('.container');
        var quizContainer = document.querySelector('.quizContainer');
        container.style.display = 'none';
        quizContainer.style.display = 'block';
    }
}

function showLeaderboard() {
    const playersData = JSON.parse(localStorage.getItem('playersData')) || [];
    playersData.sort((a, b) => b.score - a.score);

    leaderboardBody.innerHTML = '';

    for (let i = 0; i < playersData.length; i++) {
        const player = playersData[i];
        const row = document.createElement('tr');
        row.innerHTML = `<td>${player.name}</td><td>${player.score}</td>`;
        leaderboardBody.appendChild(row);
    }

    quiz.style.display = 'none';
    resultsContainer.style.display = 'none';
    leaderboardContainer.style.display = 'block';
}

function hideLeaderboard() {
    quiz.style.display = 'block';
    leaderboardContainer.style.display = 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(quizData);

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.textContent = currentQuizData.question;

    a_text.textContent = currentQuizData.a;
    b_text.textContent = currentQuizData.b;
    c_text.textContent = currentQuizData.c;
    d_text.textContent = currentQuizData.d;

    // const choices = [currentQuizData.a, currentQuizData.b, currentQuizData.c, currentQuizData.d];
    // shuffleArray(choices);
    // a_text.textContent = choices[0];
    // b_text.textContent = choices[1];
    // c_text.textContent = choices[2];
    // d_text.textContent = choices[3];
}

function deselectAnswers() {
    answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}


nextQuestion.addEventListener('click', e => {
    e.preventDefault();
    const answer = getSelected();

    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;
    counter.textContent = currentQuiz;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.style.display = 'none';
        resultsContainer.style.display = 'block';
        scoreContainer.textContent = `Your Score: ${score}/${quizData.length}`;

        const playersData = JSON.parse(localStorage.getItem('playersData')) || [];
        playersData.push({ name: playerName, score: score });
        localStorage.setItem('playersData', JSON.stringify(playersData));
    }
});


function restartGame() {
    currentQuiz = 0;
    score = 0;
    playerName = '';
    nameInput.value = ''; 
    error.textContent = ''; 
    loadQuiz();
    var container = document.querySelector('.container');
    var quizContainer = document.querySelector('.quizContainer');
    container.style.display = 'block';
    quizContainer.style.display = 'none';
    leaderboardContainer.style.display = 'none';
    leaderboardTable.style.display = 'none';
    counter.textContent = currentQuiz + 1;
}
