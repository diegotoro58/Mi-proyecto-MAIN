// import jwt from "jsonwebtoken";
// const checkToken = (req, res, next) => {

//     console.log('Middleware');

//     if (!req.headers['authorization']) {
//         return res.json({
//             error: 'Falta cabecera y token'
//         })
//     }

//     const token = req.headers['authorization']
//     try {
//         const decoded = jwt.verify(token, 'Hola mundo mi primer token');
//         req.user = decoded;
//         next();
//         console.log(decoded);
//     } catch (error) {
//         return res.json({ error: 'Token inválido' });
//     }

// }

// export default checkToken;
import jwt from 'jsonwebtoken';

const checkToken = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({
            error: 'Falta cabecera y token'
        });
    }

    let token = ""
    let authToken = req.headers['authorization']
    if (authToken.includes("Bearer")) {
        token = req.headers['authorization'].split(' ')[1];
    } else {
        token = req.headers['authorization']
    }

    try {
        const decoded = jwt.verify(token, 'Hola mundo mi primer token');
        req.user = decoded;
        next();
    } catch (error) {
        return res.json({ error: 'Token inválido' });
    }
};



export default checkToken;

