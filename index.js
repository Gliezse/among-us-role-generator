const Express = require("express");
const app = Express();
const cors = require('cors');

const routes = require("./routes");

app.use(cors())

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("listening " + PORT));