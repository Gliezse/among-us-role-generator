const express = require("express");
const app = express();
const cors = require('cors');

const routes = require("./routes/routes");
const { util } = require("./game");

app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
    const { code: uncheckedCode } = req.body;
    const code = util.validateAndFormatCode(uncheckedCode);

    console.log(code)

    if (code) {
        req.body.code = code;
        next();
    } else {
        res.status(202).json({ error: "Invalid code" })
    }
})
app.use(routes);

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => console.log("listening " + PORT));