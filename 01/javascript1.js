// primitivos de javascript
// string, number, boolean, null, undefined

let texto = 'abc';
let copia = texto;

console.log({texto});
console.log({copia});

texto = 'xyz';

console.log({texto});
console.log({copia});


// tipo objeto
// object, array, function, date, regexp

let lista = [1, 2, 3, 4];
let copiaLista = lista;

console.log({lista});
console.log({copiaLista});

lista[0] = 5;

console.log({lista});
console.log({copiaLista});



let text = 'abc';
let textArray = text.split('');
textArray[0] = 'x';
text = textArray.join('');

console.log({text})
