const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
var bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true
    },
    author_firstname:{
        type:String
    },
    author_lastname:{
        type:String
    },
    author_middlename:{
        type:String
    },
    categories: {
        type: Array
    },
    volume: {
        type: String
    },
    year: {
        type: String
    },
    edition: {
        type: String
    },
    language: {
        type: String
    },
    extension: {
        type: String
    },
    pages: {
        type: Number
    },
    filesize: {
        type: Number
    },
    series: {
        type: String
    },
    file_extension: {
        type: String
    },
    url: {
        type: String
    },
    description: {
        type: String
    },
    cover: {
        type: String
    },
});

//Export the model
module.exports = mongoose.model('Book', bookSchema);