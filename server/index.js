const express = require("express");
const app = express();
const cors = require('cors');

const routes = require("./routes/routes");

app.use(cors())
app.use(express.json());

app.use(routes);

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => console.log("listening " + PORT));