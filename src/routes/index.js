//phil welsby - 22 sept 2021 - routes/index.js file

const {Router} = require("express");
const helloRouter = Router();
const {testGet, testPost} = require("../controllers")

helloRouter.get("/guitar", testGet);
helloRouter.post("/guitar", testPost)

module.exports = helloRouter;

