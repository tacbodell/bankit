const express = require('express')
const router = express.Router()
const questionController = require('../controllers/question')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, questionController.getQuestion) 
router.get('/newquestion', questionController.getNewQuestion)
router.put('/answer', questionController.putAnswer)

module.exports = router