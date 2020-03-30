const jwt = require('jsonwebtoken');
const keys = require('../keys');

function auth(req, res, next) {
    const jsonToken = req.header('x-auth-token');

    if(!jsonToken) res.status(400).json('Authorization needed.')

    try{
        const decoded = jwt.verify(jsonToken, keys.secret);
        req.user = deconded;
        next();
    }
    catch(e) {
        res.status(400).json('Authorization denied.')
    }
}

module.exports = auth;
