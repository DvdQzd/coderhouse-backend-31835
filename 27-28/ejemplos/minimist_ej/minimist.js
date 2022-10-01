const parseArgs = require('minimist');

const options = { alias: { u: 'user', p: 'password', } }

const args = parseArgs(process.argv.slice(2), options);

console.log(args);

const { user, password } = args;

console.log(user, password);

// auth if authMode is true

// if (authMode) {
//     console.log('authenticating...');
// }

