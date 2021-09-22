//phil welsby - 22 sept 2021 - routes/index.js file

const {Router} = require("express");
const helloRouter = Router();
const {testGet, testPost, testPut, testPatch, testDelete} = require("../controllers")

helloRouter.get("/guitar", testGet);
helloRouter.post("/guitar", testPost);
helloRouter.put("/guitar", testPut);
helloRouter.patch("/guitar", testPatch);
helloRouter.delete("/guitar", testDelete)

module.exports = helloRouter;

