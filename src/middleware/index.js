//phil welsby - 23 sept 2021 - middleware/index.js

const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const {User} = require("../guitar/guitar.models");

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

//function to encrypt a users password and retun a respomse/this edit was done by Andy CodeNation
exports.hashPassword = async (req, res, next) => {
    try {
      if (req.body.key) {
        if (req.body.key === "password") {
          req.body.update = await bcrypt.hash(req.body.update, 8);
        }
      } else {
        if (req.body.password) {
          req.body.password = await bcrypt.hash(req.body.password, 8);
        }
      }
      next();
    } catch (error) {
      res.status(501).send(error);
    }
  };
// exports.hashPassword = async (req, res, next) => {
//     try {
//         if(req.body.key && req.body.key === 'password') {
//             const password = req.body.update;
//             const hashedPassword = await bcrypt.hash(password, 8);
//             req.body.update = hashedPassword;
//             next();
//         } else if (req.body.password) {
//             const hashedPassword = await bcrypt.hash(req.body.password, 8);
//             req.body.password = hashedPassword
//             next()
//         }
//             next();
//     } catch (error) {
//         res.status(501).send(error);
        
//     }
// }


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

exports.createToken = (req, res, next) => {
    try {
        const token = jwt.sign({email: req.body.email}, process.env.SECRET);
        req.token = token
        next();
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.decodeToken = async (req, res, next) => {
  if(req.header("Authorization")) {
    try {
      const token = req.header("Authorization").replace("Bearer ", "")
      const decodeToken = jwt.verify(token, process.env.SECRET)
      const user = await User.findOne({email: decodeToken.email});
      req.user = user;
      next();
  } catch (error) {
      res.status(500).send(error);
  }
  } else {
    next()
  }
}