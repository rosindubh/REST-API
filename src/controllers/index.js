//phil welsby - 22 sept 2021 - controllers/index.js file

const obj = [
    {
        id: 0,
        name: 'phil',
        age: 61,

    }
];

exports.testObj = (req, res) => {
    res.send(obj);
}

