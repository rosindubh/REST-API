//phil welsby - 22 sept 2021 - routes/index.js file

const {Router} = require("express");
const helloRouter = Router();
const {listGuitars, addGuitar, testPut, testPatch, deleteGuitar} = require("../controllers")

helloRouter.get("/guitar", listGuitars);
helloRouter.post("/guitar", addGuitar);
helloRouter.put("/guitar", testPut);
helloRouter.patch("/guitar", testPatch);
helloRouter.delete("/guitar/:name", deleteGuitar)

module.exports = helloRouter;

