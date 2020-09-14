const { Router } = require("express");
const router = Router();

const apiRoutes = require("./apiRoutes");
router.use("/api/", apiRoutes);

module.exports = router;