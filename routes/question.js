const express = require('express')
const router = express.Router()
const questionController = require('../controllers/question')

router.get('/', questionController.getQuestion) 
router.get('/newquestion', questionController.getNewQuestion)

module.exports = router