window.addEventListener('load', function () {
    //Question bank
    var questionBank = [{
            question: 'How much time do you usually spend at the store?',
            option: ["Less than 30 minutes", "30 minutes to 45 minutes", "45 minutes to 1 hour", "More than 1 hour"],
            optionPoints: [5, 3, 2, 1],
        },
        {
            question: 'How often do you visit the grocery store? ',
            option: ['Once a week', 'Every 2 or 3 days', 'Every 4 or 5 days', 'Everyday'],
            optionPoints: [5, 4, 2, 1],
        },
        {
            question: 'Have you ever shopped for groceries online?',
            option: ['Yes, I shop all my groceries online', 'Yes, but only a couple of times', 'No, but I want to try', 'No, and I think it is not for me'],
            optionPoints: [5, 3, 2, 1],
        },
        {
            question: 'Do you plan your meals in advance?',
            option: ['I have a monthly or weekly meal plan', 'I plan only for weekdays', 'I plan my meals at the grocery store', 'I improvise my meals when I get hungry'],
            optionPoints: [5, 3, 1, 1],
        },
        {
            question: 'How loyal are you to your favorite brands?',
            option: ['Very much. I always buy my favorites', 'I prefer my favorites but I am open to new brands', 'I pay attention to the quality not the brand', 'I buy whatever brand is cheaper'],
            optionPoints: [3, 4, 5, 2],
        }
    ];

    var question = document.getElementById('question');
    var quizContainer = document.getElementById('quiz-container');
    var scoreBox = document.getElementById('score-box');
    var points = document.getElementById('score');
    const progress = document.getElementById('progress');
    var startBox = document.getElementById('container');
    var startBtn = document.getElementById('start');
    var questionIndex = 0;
    var score = 0;


    //function to start the quiz
    function startQuiz() {
        quizContainer.style.display = 'none';
        startBtn.addEventListener("click", displayQuestion);
    }


    //function to display questions
    function displayQuestion() {
        quizContainer.style.display = 'flex';
        startBox.style.display = 'none';

        question.innerHTML = `${questionBank[questionIndex].question}`;

        const option = document.getElementsByClassName("option");
        for (let i = 0; i < option.length; i++) {
            option[i].addEventListener("click", calcScore);
            option[i].innerHTML = `${questionBank[questionIndex].option[i]}`;
        }

        progress.innerHTML = "Question" + ' ' + (questionIndex + 1) + ' ' + 'of' + ' ' + questionBank.length;
    }

    //function to calculate scores
    function calcScore(event) {

        const index = event.target.getAttribute('data-index');
        score = score + questionBank[questionIndex].optionPoints[index];

        setTimeout(nextQuestion, 300);
    }

    //function to display next question
    function nextQuestion() {
        if (questionIndex < questionBank.length - 1) {
            questionIndex = questionIndex + 1;
            displayQuestion();
        } else if (score >= 17) {
            points.innerHTML = `<i class="fa-solid fa-trophy"></i> Your score is ${score} out of 25 <br>You shop grocery smartly! <br> Do you wanna shop even smarter? Then check out <a href="https://mjrosi.github.io/my-first-portfolio/">SHOOD</a> `;
            quizContainer.style.display = 'none';
            scoreBox.style.display = 'flex';
        } else {
            points.innerHTML = `<i class="fa-solid fa-trophy"></i> Your score is ${score} out of 25 <br>It looks like you could up your shopping game! <br> <p> Lucky for you there is <a href="https://mjrosi.github.io/my-first-portfolio/">SHOOD</a></p>`;
            quizContainer.style.display = 'none';
            scoreBox.style.display = 'flex';
        }
    }


    //start over button event
    // location.reload() is taken from here: https://www.freecodecamp.org/news/refresh-the-page-in-javascript-js-reload-window-tutorial/
    var startOverBtn = document.getElementById("start-over-btn");
    startOverBtn.addEventListener("click", startOver);

    function startOver() {
        location.reload();
    }


    startQuiz();

});