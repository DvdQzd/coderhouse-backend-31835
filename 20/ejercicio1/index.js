import mongoose from "mongoose";
import { Usuario } from "./models/usuario.js";

CRUD();

async function CRUD(){
    mongoose.connect(
        "mongodb+srv://david:BCaUWgWN4CD7ZCIA@cluster0.giykqux.mongodb.net/ecommerce?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log("Conectado a MongoDB");

    console.log("LISTAR")
    const usuarios = await Usuario.find();
    console.log({usuarios});

//     Con el mismo proyecto, incorporar un usuario más: 
//  nombre: 'Federico', apellido: 'Perez', dni: '320118321' }

    console.log("CREATE")
    const usuarioData = {
        nombre: "Federico",
        apellido: "Perez",
        dni: "320118321",
    };

    const usuarioNuevo = new Usuario(usuarioData);
    await usuarioNuevo.save();
    console.log(usuarioNuevo);

}


