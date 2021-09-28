//phil welsby - 23 sept 2021 - middleware/index.js

const bcrypt = require("bcryptjs")
const {User} = require("../guitar/guitar.models")

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

//function to encrypt a users password and retun a respomse
exports.hashPassword = async (req, res, next) => {
    try {
        if(req.body.key && req.body.key === 'password') {
            const password = req.body.update;
            const hashedPassword = await bcrypt.hash(password, 8);
            req.body.update = hashedPassword;
            next();
        } else if (req.body.password) {
            const hashedPassword = await bcrypt.hash(req.body.password, 8);
            req.body.password = hashedPassword
            next()
        }
            next();
    } catch (error) {
        res.status(501).send(error);
        
    }
}


//function to de-crypt a users password and return a reponse
exports.decryptPassword = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        const passwordsMatch = await bcrypt.compare(
          req.body.password, 
          user.password
        );
        if (passwordsMatch) {
          req.user = user; //NOTE: THIS req.user IS USED IN THE findUser FUNCTION
          next()
        } else {
          throw new Error
        }
    } catch (error) {
        res.status(400).send(`password or email does not match, user may not exist ${error}`);
    }
}
