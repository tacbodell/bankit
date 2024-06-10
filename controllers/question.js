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
    },
    putAnswer: async (req,res) => {
        try {
            let answer = req.body.answer
            await question.findOneAndUpdate(
                { _id: req.body.id }, 
                { $push: { answers: answer  } },
            );
        } catch (error) {
            console.error(error)
            res.render('error/500')
        }
    }
}

async function getRandomQuestion() {
    const randomQuestion =  await question.aggregate(
        [ { $sample: { size: 1 } } ]
    )
    return randomQuestion[0]
}