const router = require("express").Router()
const pickRoutes = require("./picks");

// Routes
router.use("/picks", pickRoutes);

module.exports = router;