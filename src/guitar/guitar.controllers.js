//phil welsby - 22 sept 2021 - guitar.controllers.js

const {Guitar, User} = require("../guitar/guitar.models");



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
        console.log(`${guitar} added by user ${req.user}`) //NOTE: req.user comes from middleware/index.js [testMiddle function]
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
      res.status(200).send({ message: `Successfully updated ${req.body.filter} to year ${req.body.update}` });
    } catch (error) {
      res.status(500).send(error);
    }
  };

exports.deleteGuitar = async (req, res) => {
    try {
      const name = req.params.name.replaceAll("_", " ")//replace all underscores in address bar with a space
      await Guitar.deleteOne({ name: name });
      res.status(200).send({ message: `successfully deleted ${name}` });
    } catch (error) {
      res.status(500).send(error);
    }
  };

  exports.addUser = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(200).send(user)
    } catch (error) {
      res.status(500).send(error);
    }
  }