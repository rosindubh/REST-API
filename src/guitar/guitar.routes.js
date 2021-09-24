//phil welsby - 22 sept 2021 - guitar.routes.js

const {Router} = require("express");
const helloRouter = Router();
const {listGuitars, addGuitar, deleteGuitar, updateGuitar, listUsers, findUser, addUser} = require("../guitar/guitar.controllers")
const {testMiddle, hashPassword, decryptPassword} = require("../middleware")

helloRouter.get("/guitar", listGuitars);
helloRouter.post("/guitar", testMiddle, addGuitar);//Note: testMiddle is middleware
helloRouter.put("/guitar", updateGuitar);
helloRouter.patch("/guitar", updateGuitar);
helloRouter.delete("/guitar/:name", deleteGuitar)

helloRouter.get("/user", listUsers)
helloRouter.post("/user", hashPassword, addUser);
helloRouter.post("/user/login", decryptPassword, findUser);

module.exports = helloRouter;

