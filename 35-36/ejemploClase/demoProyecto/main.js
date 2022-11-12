import { clienteSms } from './smsSender/index.js'

await clienteSms.enviar({ numero: '+xxxxxxxxxx', texto: 'chau' })

console.log('envío ok')