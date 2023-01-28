import axios from 'axios'

const datosUsuario = {
  username: 'root',
  password: 'root',
}

const datosIncorrectos = {
  username: 'pepe',
  password: 'saraza',
}

export default async function runAuthTests(baseURL) {
  axios.defaults.baseURL = baseURL

  let authTests = 0

  // registro exitoso
  const { status } = await axios.post('/auth/register', datosUsuario)
  if (status === 201) {
    authTests++
  } else {
    throw new Error('falló el registro')
  }

  // logueo con datos incorrectos: tiene que fallar con codigo 401
  try {
    await axios.post('/auth/login', datosIncorrectos)
    throw new Error('error en el proceso, falló validacion')
  } catch (error) {
    const status = error.response.status
    if (status === 401) {
      authTests++
    } else {
      throw new Error(
        `error en el proceso, codigo de error inesperado: ${status}`
      )
    }
  }

  // logueo exitoso
  try {
    await axios.post('/auth/login', datosUsuario)
    authTests++
  } catch (error) {
    throw new Error('error en el proceso, falló validacion')
  }

  // deslogueo exitoso
  try {
    await axios.get('/auth/login')
    authTests++
  } catch (error) {
    throw new Error('error en el proceso, falló deslogueo')
  }

  // deslogueo fallido: ya no estoy logueado! debe fallar con 401
  try {
    await axios.get('/auth/logout')
    throw new Error('error, debería haber fallado el deslogueo')
  } catch (error) {
    const status = error.response.status
    if (status === 401) {
      authTests++
    } else {
      throw new Error(
        `error en el deslogueo, codigo de error inesperado: ${status}`
      )
    }
  }

  console.log(`${authTests} Auth tests ok`)
}
