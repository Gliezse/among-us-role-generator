const Express = require("express");
const app = Express();
const cors = require('cors');

const routes = require("./routes/routes");

app.use(cors())
app.use(Express.json());

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("listening " + PORT));