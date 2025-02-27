/*import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js';


export const authRequired = (req, res, next)=> {
    const { token } = req.cookies;
    if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });
    
    jwt. verify(token, TOKEN_SECRET, )
    
    next();
}; */

import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token, authorization denied" });
        }

        // Si es necesario, puedes almacenar información del usuario decodificada en req.user para su posterior uso
        req.user = decoded;

        // Llama a next() para pasar al siguiente middleware o ruta
        next();
    });
};



 