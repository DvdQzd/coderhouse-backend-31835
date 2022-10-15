import axios from 'axios'

async function consulta1() {
    try {
        const response1 = await axios('http://localhost:8080/')
        console.log(response1.data)
    } catch (error) {
        console.log(error.response)
    }
}

async function consulta2() {
    try {
        const response2 = await axios('http://localhost:8080/abc')
        console.log(response2.data)
    } catch (error) {
        console.log(error.response)
    }
}

async function consulta2x3() {
    await consulta2()
    await consulta2()
    await consulta2()
}

await consulta1()
consulta1()
consulta2x3()
