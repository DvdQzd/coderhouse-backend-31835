import axios from 'axios'
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

async function traerDatos(url) {
  try {
    const { status, data } = await axios.get(url)
    return { status, data }
  } catch (error) {
    throw new Error('http get error')
  }
}

async function enviarDatos(url, datos) {
  try {
    const { status, data } = await axios.post(url, datos)
    return { status, data }
  } catch (error) {
    throw new Error('http post error')
  }
}

console.log(await traerDatos('/posts/1'))
console.log(await enviarDatos('/posts', { nombre: 'marian' }))