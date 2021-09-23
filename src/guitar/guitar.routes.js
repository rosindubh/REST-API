//phil welsby - 22 sept 2021 - guitar.routes.js

const {Router} = require("express");
const helloRouter = Router();
const {listGuitars, addGuitar, testPatch, deleteGuitar, updateGuitar} = require("../guitar/guitar.controllers")
const {testMiddle} = require("../middleware")

helloRouter.get("/guitar", listGuitars);
helloRouter.post("/guitar", testMiddle, addGuitar);
helloRouter.put("/guitar", updateGuitar);
helloRouter.patch("/guitar", updateGuitar);
helloRouter.delete("/guitar/:name", deleteGuitar)

module.exports = helloRouter;

