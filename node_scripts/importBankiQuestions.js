// Accepts a json bank of questions, and writes to mongodb database using Question mongoose schema

const json = require("./questionBank.json");
const connectDB = require('../config/database')
const Question = require('../models/Question')

require('dotenv').config({path: './config/.env'})

connectDB();

// handle behaviorals
json.category.behavioral.forEach((q) => {
  pushNewEntry(q.htmlContent, [], "Leon", ["behavioral"]);
})

// handle technicals
for (const subcat in json.category.technical.subcategory) {

  json.category.technical.subcategory[subcat].forEach((q) => {
    pushNewEntry(q.htmlContent, [], "Leon", ["technical", subcat]);
  })

}

console.log("Database updated successfully");

// creates and returns a new object matching Question schema
async function pushNewEntry(q, an, au, t) {
    await Question.create({
      questionText: q,
      answers: an,
      author: au,
      tags: t
    })
}
