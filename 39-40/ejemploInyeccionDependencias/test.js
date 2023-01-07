import { getTiempo } from './tiempo/index.js'

const tiempo = getTiempo()

import assert from 'assert'
import { setTimeout } from 'timers/promises';

const result = tiempo.getFormattedNow()

await setTimeout(1)

const expected = `el instante preciso es: ${tiempo.getNow()}`

assert.strictEqual(result, expected)