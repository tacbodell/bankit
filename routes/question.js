const express = require('express')
const router = express.Router()
const questionController = require('../controllers/question')

router.get('/', questionController.getQuestion) 
router.get('/newquestion', questionController.getNewQuestion)
router.put('/answer', questionController.putAnswer)

module.exports = router