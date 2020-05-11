import authConfig from '../config/auth.config';
const jwt = require('jsonwebtoken');


export function validateToken(token) {
    return jwt.verify(token, authConfig.secretKey, function(err, decoded) {
        if(decoded) {
            return { ok: true, body: decoded };
        }else {
            return { ok: false, body: err };
        }
    });
}