//phil welsby - 23 sept 2021 - middleware/index.js

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