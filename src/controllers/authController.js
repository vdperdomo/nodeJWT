/* import conn from '../lib/dbConnection';
 */
import { generateToken, verifyAuthentication } from '../utils/jwt.utils';


const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // TODO: Get the user from the database
    if (username === 'admin' && password ==='admin') {
            const token = generateToken({ username: username });
            res.set({ 'Authorization': `Bearer ${token}` });
            res.send({ username: username });
    } else {
        res.status(401).send("Invalid username o password");
    }
}

const validateToken = (req, res) => {
    verifyAuthentication(req, res);
}


export { login, validateToken };