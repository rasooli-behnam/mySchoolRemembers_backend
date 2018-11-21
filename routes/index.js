const express = require("express");
const req_validator = require(__rootdir + "/req_validators/profiles");
const router = express.Router();

router.use("/profiles", req_validator, require("./profiles"));
router.use("/map_profiles", require("./map_profiles"));

module.exports = router;
