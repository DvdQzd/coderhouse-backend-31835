import fetch from "node-fetch";

async function obtenerPokemon(nombre) {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    // const response = await fetch(url);
    // const datos = await response.json();
    // return datos;

    return await (await fetch(url)).json();
}

console.log(await obtenerPokemon('bulbasaur'));


// ejemplo post

// const data = { username: 'example' };

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });