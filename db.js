const mongoose = require ('mongoose')

const conectDB =() =>{


    mongoose.connect('mongodb+srv://Ivette:ivette@ivette.3w3x7.mongodb.net/KeyCodeBook?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: 
        true}, (error) => {
            if(error){
                console.log('Error:', error)
            }else{
                console.log('Nos conectamos a la BD.')
            }
        })
}

module.exports = { conectDB }