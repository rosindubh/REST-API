//phil welsby - 22 sept 2021 - controllers/index.js file

const Guitar = require("../models");

const obj = [
    {
        name: "response from GET function"
    }
];

exports.testGet = (req, res) => {
    res.send(obj);
}

exports.testPost = async (req, res) => {
    try {
        const guitar = new Guitar(req.body);
        await guitar.save();
        res.status(200).send({ guitar: guitar, message: "Successfully added guitar"});
    } catch (error) {
        res.status(500).send({ err: error})
    }
}


exports.testPut = (req, res) => {
    res.send("response from PUT")
}

exports.testPatch = (req, res) => {
    res.send("response from PATCH")
}

exports.testDelete = (req, res) => {
    res.send("response from DELETE")
}