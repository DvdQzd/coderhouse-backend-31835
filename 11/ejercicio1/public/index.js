const socket = io();

const inputText = document.getElementById('inputText')

// const realTimeText = document.getElementById('realTimeText')

const btnSend = document.getElementById('btnSend')

// inputText.addEventListener('keyup', e => {
//     socket.emit('inputText', e.target.value)
// })


btnSend.addEventListener('click', () => {
    socket.emit('saveMessage', {
        socketId: socket.id, mensaje: inputText.value
    })
    inputText.value = ''
})

// socket.on('newText', text => {
//     realTimeText.innerText = text
// })

socket.on('currentChat', messages => {
    realTimeText.innerText = ''
    messages.forEach(message => {
        realTimeText.innerHTML += `<p>SocketId: ${message.socketId} - Mensaje: ${message.mensaje}</p>`
    })
})