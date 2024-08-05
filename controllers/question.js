const Question = require('../models/Question')
const Answer = require('../models/Answer')

module.exports = {
    getQuestion: async (req,res)=>{
        try {
            const randomQuestion = await getRandomQuestion()
            const answers = await getQuestionAnswers(randomQuestion._id)
            console.log(answers)
            res.render('question.ejs', { question: randomQuestion, answers: answers })    
        } catch (err) {
            console.error(err);
            res.render('/errors/error.ejs')
        }
    },
    getNewQuestion: async (req,res) => {
        try {
            const randomQuestion = await getRandomQuestion()
            res.send(randomQuestion);
        } catch (err) {
            console.error(err);
            res.render('/errors/error.ejs')
        }
    },
    putAnswer: async (req,res) => {
        console.log(req.body)
        try {
            await Answer.create({
                "answerText": req.body.answer.answerText,
                "author": req.body.answer.author,
                "questionId": req.body.id
            })
            console.log(Answer)
        } catch (error) {
            console.error(error)
            res.render('error/500')
        }
    }
}

async function getRandomQuestion() {
    const randomQuestion =  await Question.aggregate(
        [ { $sample: { size: 1 } } ]
    )
    return randomQuestion[0]
}

async function getQuestionAnswers(id) {
    const answers =  await Answer.find( { questionId: id } ).exec()
    return answers
}