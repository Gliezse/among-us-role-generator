const express = require("express");
const app = express();
const cors = require('cors');

const routes = require("./routes/routes");
const { util } = require("./game");
const path = require('path');
const accepts = require("accepts");


const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
    const { code: uncheckedCode } = req.body;
    const code = util.validateAndFormatCode(uncheckedCode);

    if (code) {
        req.body.code = code;
        next();
    } else {
        res.status(202).json({ error: "Invalid code" })
    }
});

app.use(routes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log("Listening to port: " + PORT));