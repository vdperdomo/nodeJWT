const jwt = require('jsonwebtoken');
const secretKey="workingWithJWT"

const generateToken = (userData) => {
    const timeExpired = 1800;
    const expire = Math.floor(Date.now() / 1000) + timeExpired;
    return jwt.sign({ ...userData, iat: expire }, secretKey);
}

// TODO: Save the secret word in environment file.
const verifyAuthentication = (req, res) => {
    const resToken = req.get('Authorization');
    if(resToken){
        const token = resToken.split(' ')[1];
        jwt.verify(token, secretKey, (err, decode) => {
            if (err) {
                res.status(401).send("Not authenticated");
            }
            generateToken(decode.data);
            res.set({ 'Authorization': `Bearer ${token}` });
            res.send({isValid: true});
        })
    } else {
        res.status(401).send("Not authenticated");
    }
}

export { generateToken, verifyAuthentication }