const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.user.role != "teacher") return res.status(401).send("You do not have teacher permission")
    next()
}