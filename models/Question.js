const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  answers: {
    type: Array
  },
  author: {
    type: String
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  },
  tags: {
    type: Array,
  }
})

module.exports = mongoose.model('Question', QuestionSchema, 'questions')
