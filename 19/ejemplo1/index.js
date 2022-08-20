import mongoose from "mongoose";
import { Usuario } from "./models/usuario.js";

CRUD();

async function CRUD(){
    try{
        const connection = await mongoose.connect("mongodb://localhost:27017/mibase", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a MongoDB");
        
        console.log("CREATE")
        const usuarioData = {
            nombre: "Hernan",
            apellido: "San Martin",
            email: "rp@g.com",
            password: "123456",
        };

        const usuarioNuevo = new Usuario(usuarioData);
        await usuarioNuevo.save();
        console.log(usuarioNuevo);
        console.log("Usuario creado");

        console.log("READ")
        const usuarios = await Usuario.find();
        console.log({usuarios});


    }catch(error){
        console.log(error);
    }
}