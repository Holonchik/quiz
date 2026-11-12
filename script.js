const questions = [
    {
        question: "Если бы ты могла выбрать суперспособность, что бы это было?",
        options: [
            "Телепортация — мгновенно оказываться в любом месте",
            "Чтение мыслей — знать, о чём думают другие",
            "Управление временем — останавливать или ускорять его",
            "Невидимость — быть незаметной когда захочу"
        ]
    },
    {
        question: "Какой момент дня тебе нравится больше всего?",
        options: [
            "Утро — новый день, новые возможности",
            "День — время активности и общения",
            "Вечер — спокойствие и отдых",
            "Ночь — тишина и уединение"
        ]
    },
    {
        question: "Представь: ты попала в параллельную вселенную. Что бы ты хотела там увидеть?",
        options: [
            "Версию себя, которая выбрала другой путь",
            "Мир, где всё наоборот",
            "Место, где сбылись все мечты",
            "Людей, которых давно не видела"
        ]
    },
    {
        question: "Если бы можно было путешествовать во времени, куда бы ты отправилась?",
        options: [
            "В будущее — посмотреть, что будет через 50 лет",
            "В прошлое — увидеть динозавров",
            "В эпоху Возрождения — увидеть расцвет искусства",
            "В 80-е — застать эпоху крутой музыки"
        ]
    },
    {
        question: "Что для тебя важнее всего в отношениях с людьми?",
        options: [
            "Честность — всегда говорить правду",
            "Поддержка — быть рядом в трудную минуту",
            "Весёлые моменты — смеяться вместе",
            "Понимание — чувствовать друг друга без слов"
        ]
    },
    {
        question: "Если бы ты нашла волшебную лампу, какое желание загадала бы первым?",
        options: [
            "Бесконечное счастье для близких",
            "Возможность исполнять мечты",
            "Узнать ответ на один важный вопрос",
            "Чтобы один человек узнал о чьих-то чувствах"
        ]
    },
    {
        question: "Как ты относишься к неожиданным сюрпризам?",
        options: [
            "Обожаю! Это так волнительно",
            "Нормально, если они приятные",
            "Немного нервничаю, но это интересно",
            "Предпочитаю знать заранее"
        ]
    },
    {
        question: "Что тебя больше всего вдохновляет?",
        options: [
            "Красота природы и окружающего мира",
            "Истории успеха других людей",
            "Музыка и искусство",
            "Мечты о будущем"
        ]
    },
    {
        question: "Если бы ты могла прочитать одну книгу, которая ответит на любой твой вопрос, о чём бы ты спросила?",
        options: [
            "Какой путь приведёт к счастью?",
            "Что обо мне думают другие?",
            "Какие решения мне стоит принять?",
            "Кто тот человек, с которым я буду счастлива?"
        ]
    },
    {
        question: "Последний вопрос: веришь ли ты в судьбу и знаки?",
        options: [
            "Да, всё происходит не просто так",
            "Иногда думаю об этом",
            "Скорее нет, мы сами создаём свою жизнь",
            "Не знаю, но хочется верить в чудо"
        ]
    }
];

let currentQuestion = 0;
let answers = [];

const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const resultTitle = document.getElementById('result-title');
const resultText = document.getElementById('result-text');
const finalMessage = document.getElementById('final-message');

function loadQuestion() {
    const question = questions[currentQuestion];

    // Анимация исчезновения старого вопроса
    questionText.style.opacity = '0';
    optionsContainer.style.opacity = '0';

    setTimeout(() => {
        questionNumber.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
        questionText.textContent = question.question;
        optionsContainer.innerHTML = '';
        nextBtn.style.display = 'none';

        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectOption(index, optionDiv);
            optionDiv.style.animationDelay = `${index * 0.1}s`;
            optionsContainer.appendChild(optionDiv);
        });

        // Анимация появления нового вопроса
        questionText.style.opacity = '1';
        optionsContainer.style.opacity = '1';

        updateProgress();
    }, 300);
}

function selectOption(index, element) {
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });

    element.classList.add('selected');
    answers[currentQuestion] = index;
    nextBtn.style.display = 'block';
}

function updateProgress() {
    const progressPercent = ((currentQuestion) / questions.length) * 100;
    progress.style.width = progressPercent + '%';
}

function showResult() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    setTimeout(() => {
        resultTitle.textContent = 'Спасибо за ответы!';
        resultText.innerHTML = 'Даша, в общем это всё не просто так, я бы хотел сказать тебе, что ты мне очень нравишься.';
    }, 300);

    setTimeout(() => {
        resultText.innerHTML += '<br><br><strong style="font-size: 22px; color: #c85a3f;">Не знаю, чувствую какую-то привязанность к тебе, твоя улыбка заставляет меня забыть обо всём на мгновение, также с тобой очень интересно общаться на различные темы. Ты мне понравилась ещё когда я только перевёлся к вам в школу.</strong><br><br>Кажется, для меня очень важно писать этот текст, потому что меня уже пару месяцев меня раздражает мысль о том, что я не могу написать тебе и признаться.';
        finalMessage.style.display = 'block';
        createHearts();
    }, 3000);
}

function createHearts() {
    const heartsContainer = document.querySelector('.heart-container');
    heartsContainer.innerHTML = `
        <svg style="position: absolute; width: 0; height: 0;">
            <defs>
                <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f093fb;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#f5576c;stop-opacity:1" />
                </linearGradient>
            </defs>
        </svg>
        <div class="hearts-row">
            <div class="heart">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
            </div>
            <div class="heart">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
            </div>
            <div class="heart">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
                <div class="sparkle"></div>
            </div>
        </div>
    `;
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        updateProgress();
        progress.style.width = '100%';
        setTimeout(showResult, 500);
    }
});

loadQuestion();