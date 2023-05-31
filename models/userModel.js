const mongoose = require("mongoose");

//! Esta es la URI de la base de datos CineBit
const uri = "mongodb+srv://StivenT_Atlas:3tiWzByobI3znDwD@dbusers.akudjqt.mongodb.net/DbUsers?retryWrites=true&w=majority";

mongoose.connect(Uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Conexión exitosa a la Coleccion de Usuarios"))
    .catch(err => console.log("Error al conectar a la base de datos", err));

const userSchema = new mongoose.Schema({

    username: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true}
}, { collection: 'Users' });

//* Exportamos el modelo para ser utilizado en otros módulos
module.exports = mongoose.model('users', userSchema);