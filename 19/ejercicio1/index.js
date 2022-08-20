import mongoose from "mongoose";
import { Estudiante } from "./models/estudiante.js";

CRUD();

async function CRUD(){
    mongoose.connect("mongodb+srv://david:BCaUWgWN4CD7ZCIA@cluster0.giykqux.mongodb.net/miNuevaDB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Conectado a MongoDB");

    console.log("DELETE")
    await Estudiante.deleteMany({});
    console.log("Estudiantes eliminados");


    /* -------------------------------------------------------*/
    /* ------------------------- CREATE ----------------------*/
    /* -------------------------------------------------------*/

    console.log("CREATE")
    const estudianteData = [
        { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
        { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
        { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
        { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
        { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
        { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
        { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
        { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
        { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
        { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
    ];

    // estudianteData.forEach(async (estudiante) => {
    //         const estudianteNuevo = new Estudiante(estudiante);
    //         await estudianteNuevo.save();
    //         console.log(estudianteNuevo);
    //         console.log("Estudiante creado");
    //     });

    await Estudiante.insertMany(estudianteData);
    console.log("Estudiantes creados");

    // Los estudiantes ordenados por orden alfabético según sus nombres.
    const estudiantesPorOrdenAlfabetico = await Estudiante.find({}, null, {sort: {nombre: 1}});
    console.log({estudiantesPorOrdenAlfabetico});

    // El estudiante más joven.
    const estudianteMasJoven = await Estudiante.find({}, null, {sort: {edad: 1}}).limit(1);
    console.log({estudianteMasJoven});

    // Los estudiantes que pertenezcan al curso '2A'.
    const estudiantesCurso2A = await Estudiante.find({curso: '2A'});
    console.log({estudiantesCurso2A});

    // El segundo estudiante más joven.
    const segundoEstudianteMasJoven = await Estudiante.find({}, null, {sort: {edad: 1}}).skip(1).limit(1);
    console.log({segundoEstudianteMasJoven});

    // Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a).
    const nombresYApellidosEstudiantes = await Estudiante.find({}, {nombre: 1, apellido: 1, curso: 1}, {sort: {apellido: -1}});
    console.log({nombresYApellidosEstudiantes});

    // Los estudiantes que sacaron 10.
    const estudiantes10 = await Estudiante.find({nota: 10});
    console.log({estudiantes10});

    // El promedio de notas del total de alumnos.
    const promedioNotas = [...await Estudiante.find({})]
                            .reduce((acc, curr) => {
                                return acc + curr.nota;
                            } , 0) / await Estudiante.find({}).countDocuments();
    console.log({promedioNotas});

    // El promedio de notas del curso '1A'.
    const promedioNotas1A = [...await Estudiante.find({curso: '1A'})].reduce((acc, curr) => {
        return acc + curr.nota;
    } , 0) / await Estudiante.find({curso: '1A'}).countDocuments();
    console.log({promedioNotas1A});

    // Actualizar el dni del estudiante Lucas Blanco a 20355875
    await Estudiante.updateOne({dni: '30355874'}, {dni: '20355875'});
    console.log("Dni actualizado");

    // Agregar un campo 'ingreso' a todos los documentos con el valor false
    await Estudiante.updateMany({}, {ingreso: false});
    console.log("Ingreso actualizado");

    // Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A
    await Estudiante.updateMany({curso: '1A'}, {ingreso: true});
    console.log("Ingreso actualizado");

    // Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de _id y __v
    const estudiantesAprobados = await Estudiante.find({nota: {$gte: 4}}, {_id: 0, __v: 0});
    console.log({estudiantesAprobados});

    // Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v
    const estudiantesIngresoTrue = await Estudiante.find({ingreso: true}, {_id: 0, __v: 0});
    console.log({estudiantesIngresoTrue});

    // Borrar de la colección de estudiantes los documentos cuyo campo 'ingreso' esté en true
    await Estudiante.deleteMany({ingreso: true});
    console.log("Estudiantes borrados");

    // Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo __v) junto a su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS.
    const estudiantes = await Estudiante.find({}, {_id: 0, __v: 0});
    console.log({estudiantes});

}