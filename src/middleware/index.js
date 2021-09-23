//phil welsby - 23 sept 2021 - middleware/index.js

const bcrypt = require("bcryptjs")

//test function
exports.testMiddle = (req, res, next) => {
    try {
        console.log(req.body)
        req.user = "Phil"
        next();
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.hashPassword = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        req.body.password = hashedPassword
        next()
    } catch (error) {
        res.status(500).send(error);
        
    }
}