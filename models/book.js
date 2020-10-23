const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
   name: { type: String, required:true}, //Nombre del Libro
   author: { type: String, required:true},// Nombre del autor del Libro 
   pageNumber: { type: Number }, // Numero de pg 
   publisher: { type: String, required:true}, // Editorial
   publicationDate: { type: Date },
   genre:  [{ type: mongoose.Schema.Types.ObjectId, ref:'Genre'}]




})

module.exports = mongoose.model('Book', bookSchema)