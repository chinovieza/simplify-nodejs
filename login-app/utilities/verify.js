const jwt = require('jsonwebtoken');
const verifyToken = req => {
    try {
        const token = req.get("cookie").split("token=")[1].trim();
        jwt.verify(token, "SECRETKEY");
        return true;
    } catch (err) {
        return false;
    }
}
module.exports = verifyToken;