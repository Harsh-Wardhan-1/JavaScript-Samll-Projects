const quizBody = document.getElementById('quiz-body');
const quesEl = document.getElementById('ques');
const aEl = document.getElementById('a-text');
const bEl = document.getElementById('b-text');
const cEl = document.getElementById('c-text');
const dEl = document.getElementById('d-text');
const resultEl = document.getElementById('result');
const submitBtn = document.getElementById("submit");
const answersEl = document.querySelectorAll(".answer");


let currentQuestion = 0;
let result = 0;

const questions = [
    {
        question: "How old are you?",
        a: '10',
        b: '17',
        c: '23',
        d: '32',
        correct: 'b'
    }, {
        question: "What is your favourite language?",
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: '32',
        correct: 'b'
    }, {
        question: "Who is the Prime Minister of India?",
        a: 'Rahul Gandhi',
        b: 'Arvind Kejriwal',
        c: 'Narendra Modi',
        d: 'Mamta Baneerji',
        correct: 'c'
    }, {
        question: "Who is your most favourite food?",
        a: 'Pizza',
        b: 'Pancake',
        c: 'Kebab',
        d: 'Pav Bhaji',
        correct: 'c'
    }
]

function loadQuiz() {
    quesEl.textContent = questions[currentQuestion].question;
    aEl.textContent = questions[currentQuestion].a;
    bEl.textContent = questions[currentQuestion].b;
    cEl.textContent = questions[currentQuestion].c;
    dEl.textContent = questions[currentQuestion].d;
}
loadQuiz();

function getSelected() {
    let answer = undefined;
    answersEl.forEach((answersEl) => {
        if (answersEl.checked) {
            answer = answersEl.id;
        }
    });
    return answer;
}

function deselect() {
    answersEl.forEach((answersEl) => {
        if (answersEl.checked) {
            answersEl.checked = false;
        }
    });
}

submitBtn.addEventListener("click", () => {
    let answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === questions[currentQuestion].correct) {
            result++;
        }
        currentQuestion++;
        deselect();
        if (currentQuestion === questions.length) {
            quizBody.innerHTML = `<h2>You have answered ${result}/4 questions correctly.</h2>
            <button onclick="location.reload()">Reload</button>`
        } else {
            loadQuiz();
        }
    }
    else {
        alert("Select an answer!!!");
    }

});