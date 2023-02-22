const Jwt = require('jsonwebtoken');
require('dotenv').config();

const Tokenverify = (req, res, next) => {
    Token = req.headers['Token']
    if (Token) {
        Jwt.verify(Token, process.env.serect_key, { algorithms: process.env.algo }, (err, user) => {
            if (!err) req.user = user, next();
            else res.status(403).send('Invalid token'), next();
        })
    } else {
        res.status(401).send('forbidden access');
    }
}

module.exports = { Tokenverify };