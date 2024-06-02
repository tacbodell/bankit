const questionArea = document.querySelector('#question-area')
const newQuestionButton = document.querySelector('#new-question-button')

newQuestionButton.addEventListener('click', getNewQuestion);

async function getNewQuestion() {
    const response = await fetch('/question/newquestion')
    const question = await response.json()

    questionArea.innerText = question.questionText
}