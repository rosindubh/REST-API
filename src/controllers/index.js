//phil welsby - 22 sept 2021 - controllers/index.js file

const Guitar = require("../models");

const obj = [
    {
        name: "response from GET function"
    }
];

exports.listGuitars = async (req, res) => {
    try {
        const list = await Guitar.find({});
        res.status(200).send({allGuitars: list});
    } catch (error) {
        res.status(500).send({ err: error})
    }
}

exports.addGuitar = async (req, res) => {
    try {
        const guitar = new Guitar(req.body);
        await guitar.save();
        res.status(200).send({ guitar: guitar, message: "Successfully added guitar"});
    } catch (error) {
        res.status(500).send({ err: error})
    }
}

exports.updateGuitar = async (req, res) => {
    try {
      await Guitar.updateOne(
        { name: req.body.filter },
        { $set: { year: req.body.update } }
      );
      res.status(200).send({ message: "Successfully updated" });
    } catch (error) {
      res.status(500).send(error);
    }
  };

exports.testPatch = (req, res) => {
    res.send("response from PATCH")
}

exports.deleteGuitar = async (req, res) => {
    try {
      const name = req.params.name.replaceAll("_", " ")
      console.log(name)
      await Guitar.deleteOne({ name: name });
      res.status(200).send({ message: `successfully deleted ${name}` });
    } catch (error) {
      res.status(500).send(error);
    }
  };