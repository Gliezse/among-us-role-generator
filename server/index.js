const express = require("express");
const app = express();
const cors = require('cors');

const routes = require("./routes/routes");
const { util } = require("./game");

const accepts = require("accepts");

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

app.use((req, res, next) => {
    const langArr = accepts(req).language();
    const containsEs = langArr.some(l => l === "es");
    req.lang = containsEs ? "es" : "en";

    next();
})
app.use(routes);

const PORT = process.env.PORT || 6969;

app.listen(PORT, () => console.log("listening " + PORT));