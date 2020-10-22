const GenreModel = require ('../models/genre');
/**
 * Metodo para Crear un Genero 
 * @param {*} req => Todo lo que estamos enviando
 * @param {*} res => Respusta que devolvera 
 */
exports.create = (req, res ) =>{

    if( Object.entries(req.body).length == 0){
        return res.status(400).send({
            message: 'Todos los campos son obligatorios'
        })
    }
    const genre = new GenreModel({
        name: req.body.name,
        name: req.body.status,
        
    
    })
    genre.save()
    .then(
        (dataGenre) =>{
            res.send(dataGenre)

        }
    ).catch(
        (error) => {
            return res.status(500).send({
                message: error.message
            })
        }
    )

}

