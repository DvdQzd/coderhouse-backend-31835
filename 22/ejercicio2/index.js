import { schema, normalize, denormalize } from "normalizr";
import util from "util";
import fs from "fs";

// Dado el objeto en formato JSON holding.json (disponible en la carpeta de la clase) que representa la información correspondiente a un grupo de empresas:

// Definir el esquema de normalización.
// Obtener el objeto normalizado e imprimirlo por consola.
// Desnormalizar el objeto obtenido en el punto anterior.
// Imprimir la longitud del objeto original, del normalizado y del desnormalizado
// Imprimir el porcentaje de compresión del proceso de normalización.

// Comparar y analizar los resultados.

const holding = JSON.parse(fs.readFileSync("./holding.json", "utf8"));

const empleadoSchema = new schema.Entity("empleados");

const empresaSchema = new schema.Entity("empresas", {
    empleados: [empleadoSchema],
    gerente: empleadoSchema,
    encargado: empleadoSchema,
});

const holdingSchema = new schema.Entity("holding", {
    empresas: [empresaSchema],
});

const normalizedHolding = normalize(holding, holdingSchema);

const denormalizedHolding = denormalize(
    normalizedHolding.result,
    holdingSchema,
    normalizedHolding.entities
);

function print(objeto) {
    console.log(util.inspect(objeto, false, 12, true), {
        length: JSON.stringify(objeto).length,
    });
}

console.log("objeto original");
// print(holding);
console.log(JSON.stringify(holding).length);

console.log("objeto normalizado");
// print(normalizedHolding);
console.log(JSON.stringify(normalizedHolding).length);

console.log("objeto desnormalizado");
// print(denormalizedHolding);
console.log(JSON.stringify(denormalizedHolding).length);


// Imprimir el porcentaje de compresión del proceso de normalización.

const porcentajeDeCompresion = (100 * JSON.stringify(normalizedHolding).length / JSON.stringify(holding).length).toFixed(2);

console.log({porcentajeDeCompresion});