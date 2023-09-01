const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.user.role != "admin") return res.status(401).send("You do not have admin permission")
    next()
}