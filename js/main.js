
function showSecondInterface() {
    var container = document.querySelector('.container');
    var quizContainer = document.querySelector('.quizContainer');

    container.style.display = 'none';
    quizContainer.style.display = 'block';
}

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
    // 5
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
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
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})