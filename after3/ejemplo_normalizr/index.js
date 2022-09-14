// import schema from normalizr
import { schema, normalize } from 'normalizr';
import { faker } from '@faker-js/faker';
import util from 'util';

const messageQty = 5;

const messages = [];

for (let i = 0; i < messageQty; i++) {
    const message = {
        _id: faker.datatype.uuid(),
        author: {
            email: faker.internet.email(),
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            edad: faker.datatype.number(),
            alias: faker.internet.userName(),
            avatar: faker.image.avatar()
        },
        text: faker.lorem.sentence()
    };
    messages.push(message);
};

console.log(messages);



const authorSchema = new schema.Entity('authors', {}, { idAttribute: 'email' });

const messageSchema = new schema.Entity('messages', {
    author: authorSchema
}, { idAttribute: '_id' });

const normalizedMessages = normalize(messages, [messageSchema]);


function print(objeto) {
    console.log(util.inspect(objeto,false,12,true))
}




console.log("objeto original");
// print(messages);
console.log(JSON.stringify(messages).length);

console.log("objeto normalizado");
print(normalizedMessages);
console.log(JSON.stringify(normalizedMessages).length);

const porcentajeDeCompresion = (100 - ((JSON.stringify(messages).length / JSON.stringify(normalizedMessages).length) * 100)).toFixed(2);

console.log(`El porcentaje de compresión es del ${porcentajeDeCompresion}%`);

const output = {
    messages,
    porcentajeDeCompresion
}


import express from 'express';

const app = express();

app.listen(8080, () => {
    console.log('Servidor inicializado en el puerto 8080');
});

// add public folder
app.use(express.static('public'));




