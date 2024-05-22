const question = require('../models/Question')

module.exports = {
    getQuestion: async (req,res)=>{
        try {
            const randomQuestion = await getRandomQuestion()
            res.render('question.ejs', { question: randomQuestion })    
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
    }
}

async function getRandomQuestion() {
    const randomQuestion =  await question.aggregate(
        [ { $sample: { size: 1 } } ]
    )
    return randomQuestion[0]
}