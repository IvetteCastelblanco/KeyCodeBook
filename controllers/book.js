const book = require('../models/book');
const BookModel = require ('../models/book');

/**
 * Metodo para registrar un nuevo libro
 * @param {*} req => Toda lo que recibe 
 * @param {*} res => Respuesta que se devuelve
 */
exports.create = (req, res) =>{
    if( Object.entries(req.body).length == 0){
        return res.status(400).send({
            message: 'Todos los datos deben estar llenos'
        })

     }
     const book = new BookModel({
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
        
    })
    book.save()
    .then(
        (dataBook) =>{
            res.send(dataBook)

        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )



}

/**
 * Metodo para Modificar la informacion
 * @param {*} req 
 * @param {*} res 
 */

exports.update = (req, res) =>{
    if( Object.entries(req.body).length == 0){
        return res.status(400).send({
            message: 'Todos los datos deben estar llenos'
        })

     }

     const book = {
        name: req.body.name,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
     }
     BookModel.findByIdAndUpdate(req.params.id, book, {new:true} )
     .then(
        (bookUpdated) =>{
            res.send(bookUpdated)
        }
      ).catch(
        (error) =>{
            return res.status(500).send({
                message: error.message
            })
        }
    )


}