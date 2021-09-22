//phil welsby - 22 sept 2021 - routes/index.js file

const {Router} = require("express");
const helloRouter = Router();
const {testObj} = require("../controllers")

helloRouter.get("/testObj", testObj);

module.exports = helloRouter;

