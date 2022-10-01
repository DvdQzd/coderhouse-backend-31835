// console.log('hola')

// console.log(process.env.USERNAME);

// console.log(process.execPath)

const { exec, spawn } = require('child_process');

// exec('ls -lh', (err, stdout, stderr) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(stdout);
// } )

const child = spawn('find', ['.']);

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

child.on('error', (error) => {
    console.error(`error: ${error.message}`);
});

child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
})