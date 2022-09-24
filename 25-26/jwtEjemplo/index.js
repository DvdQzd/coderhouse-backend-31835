const jwt = require("jsonwebtoken");
const PRIVATE_KEY = "coderhouse";

function generateToken(user) {
    const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: '24h' });
    return token;
}

console.log(generateToken({ id: 1, username: "pepe" }));


