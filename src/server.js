//phil welsby - 22 sept 2021 - server.js file

const express = require("express");
const app = express();
const helloRouter = require("./routes")
app.use(express.json());

app.use(helloRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

