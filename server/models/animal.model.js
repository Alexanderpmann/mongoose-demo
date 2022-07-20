// bring in mongoose so we can properly create a schema (database)
const mongoose = require('mongoose');

// We make our model
const AnimalSchema = new mongoose.Schema({
    name: String,
    fact: String
});

// Finzalize setting up the model
const Animal = mongoose.model("Animal", AnimalSchema);
// We need to export the table (collection) to the other areas of my project 
module.exports = Animal;