const express = require("express");
const router = express.Router();

router.use("/profiles", require("./profiles"));
router.use("/map_profiles", require("./map_profiles"));

module.exports = router;
