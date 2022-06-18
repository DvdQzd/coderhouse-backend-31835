const ejecutar = (unaFuncion) => {
  console.log("Ejecutamos la funcion");
  unaFuncion();
};

const saludo = () => console.log("Hola!");
const despedida = () => console.log("Adios!");

ejecutar(saludo);
ejecutar(despedida);
ejecutar(() => console.log("Esta es una arrow function"));

function escribirYLoguear(texto, callbackParaLoguear) {
  // simulamos que escribimos en un archivo!
  console.log(texto);
  // al finalizar, ejecutamos el callback
  callbackParaLoguear("archivo escrito con éxito");
}

escribirYLoguear("hola mundo de los callbacks!", (mensajeParaLoguear) => {
  const fecha = new Date().toLocaleDateString();
  console.log(`${fecha}: ${mensajeParaLoguear}`);
});

