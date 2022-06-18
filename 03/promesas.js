function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor == 0) {
      reject("no se puede dividir por cero");
    } else {
      resolve(dividendo / divisor);
    }
  });
}

dividir(10, 0)
    .then(resultado => console.log({ resultado }))
    .catch(error => console.log('Hubo un error: ', error))
    