# exec:

- abre una terminal y ejecuta un comando.
- al resultado lo guarda en un buffer, y al terminar lo devuelve entero.

  const { exec } = require('child_process');
exec('cat *.js missing_file | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

## ejemplo con promesas:

const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function lsExample() {
  const { stdout, stderr } = await exec('ls');
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
lsExample();

------------------------------------------------------

# execFile:
- ejecuta un comando ejecutable, opcionalmente con argumentos, sin abrir una terminal.
- al resultado lo guarda en un buffer, y al terminar lo devuelve entero.

## ejemplo:

const { execFile } = require('child_process');
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

## ejemplo con promesas:

const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
async function getVersion() {
  const { stdout } = await execFile('node', ['--version']);
  console.log(stdout);
}
getVersion();

----------------------------------------------------------

# spawn:
- es como exec file, pero en lugar de buffers, devuelve streams para salidas y errores

## ejemplo:

const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

----------------------------------------------------------

# fork:
- es un caso particular de spawn
- levanta una nueva v8 y ejecuta un programa con node


