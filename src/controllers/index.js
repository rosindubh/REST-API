//phil welsby - 22 sept 2021 - controllers/index.js file

const obj = [
    {
        name: "response from GET function"
    }
];

exports.testGet = (req, res) => {
    res.send(obj);
}

exports.testPost = (req, res) => {
    const name = req.body.name;
    const model = req.body.model;
    const year = req.body.year
    res.send({message: `${name} ${model} ${year}`})
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