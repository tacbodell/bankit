const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  questionId: {
    type: Number,
    unique: true,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  answer: {
    type: String
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
