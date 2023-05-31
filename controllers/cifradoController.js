const { hash } = require("bcryptjs");

const bcrypt = require (bcryptjs);// cifrado de contraseña

// como vamos a mostrar la informacion

const saltRounds = 20;
const plainPassword = "password123";

bcrypt.hash (plainPassword,saltRounds, function(error, hash) {

    if(err) {
        console.log(error);
    }else{
        console.log("se creo el hash de la contraseña", hash);
    }
})// esta es la logica para poder cifrar contraseñas 

const hashedPassword = "$2b$10$";
const loginPassword = "password123";

bcrypt.compare(loginPassword, hashedPassword, function(error, result) {
    if(error) {
        console.log(error);
    }else if(result){
        console.log("contraseña es valida");
    }
       else{
        console.log("contraseña no es valida");
       }
}
)