function crearGritarNombre(nombre) { 
    const signosDeExclamacion = '!!!'
    return function () { // Funcion anonima, la cual hace uso de la variable nombre y de signosDeExclamacion.
        console.log(`${nombre}${signosDeExclamacion}`)
    }
 }

 const gritarCH = crearGritarNombre('coderhouse') // tanto nombre como signosDeExclamacion se guardan en la variable gritarCH junto con la funcion anonima
 
 gritarCH() // muestra por pantalla: coderhouse!!!
 


 function saludo (saludo){
    return function (nombre){
      console.log(`${saludo} ${nombre}!!!`)
    }
  }
  
  const saludoHola = saludo('Hola') 
  const saludoChao = saludo('Chao') 
  
  saludoHola('Rodolfo')
  saludoChao('Rodolfo')
  