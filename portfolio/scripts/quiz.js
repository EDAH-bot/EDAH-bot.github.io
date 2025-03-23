const questions = [
    {
        question: "Quelle est la source d'énergie la plus utilisée dans le monde ?",
        options: ["Charbon", "Solaire", "Éolien"],
        answer: "Charbon"
    },
    {
        question: "Quelle énergie est considérée comme renouvelable ?",
        options: ["Pétrole", "Solaire", "Gaz naturel"],
        answer: "Solaire"
    },
    {
        question: "Quel est le principal avantage des énergies renouvelables ?",
        options: ["Coût faible", "Durabilité", "Disponibilité immédiate"],
        answer: "Durabilité"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(option) {
    const q = questions[currentQuestion];
    if (option === q.answer) {
        resultElement.textContent = "Correct !";
        score++;
    } else {
        resultElement.textContent = 'Incorrect. La bonne réponse est : ${q.answer}.';
    }
    nextBtn.style.display = 'block'; // Afficher le bouton "Question suivante"
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        nextBtn.style.display = 'none'; // Masquer le bouton "Question suivante"
        resultElement.textContent = ''; // Effacer le résultat précédent
    } else {
        questionElement.textContent = 'Quiz terminé ! Votre score est ${score} / ${questions.length}.';
        optionsElement.innerHTML = ''; // Effacer les options
        nextBtn.style.display = 'none'; // Masquer le bouton "Question suivante"
        resultElement.textContent = ''; // Effacer le résultat
    }
});

function showQuiz() {
    document.getElementById('quiz-section').style.display = 'block';
    loadQuestion();
}