const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
    default: "xxxxxxxx"
  },
  author: {
    type: String,
    required: true,
    default: "Anonymous User"
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now
  },
  tags: {
    type: Array,
    required: true,
    default: "unspecified"
  }
})

module.exports = mongoose.model('Question', QuestionSchema, 'questions-official')
