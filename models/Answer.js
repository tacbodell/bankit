const mongoose = require('mongoose')

const AnswerSchema = new mongoose.Schema({
  answerText: {
    type: String,
    required: true,
  },
  author: {
    type: String
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  questionId: {
    type: String,
  }
})

module.exports = mongoose.model('Answer', AnswerSchema, 'answers')
