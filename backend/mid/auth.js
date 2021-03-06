const jwt = require('jsonwebtoken');
const keys = require('../keys');

function auth(req, res, next) {
    const jsonToken = req.header('x-auth-token');

    if(!jsonToken) res.status(400).json('Token needed. Authorization denied.')

    try{
        const decoded = jwt.verify(jsonToken, keys.secret);
        req.user = decoded;
        next();
    }
    catch(e) {
        res.status(400).json('Authorization denied.')
    }
}

module.exports = auth;
