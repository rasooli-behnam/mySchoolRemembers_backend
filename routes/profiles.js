const Profile = require(__rootdir + "/db_models/Profile");
const router = require("express").Router();
const req_validator_post = require(__rootdir + "/req_validators/profiles_post");
const req_validator_id = require(__rootdir + "/req_validators/profiles");

router.get("/", async (req, res) => {
  const profile = await Profile.findOne(
    { "bio.reg_no": req.query.reg_no, "bio.battalion": req.query.battalion },
    "-__v"
  );

  if (!profile) return res.sendStatus(404);

  res.send(profile);
});

router.get("/:id", req_validator_id, async (req, res) => {
  const profile = await Profile.findById(req.params.id, "-__v");

  if (!profile) return res.sendStatus(404);

  res.send(profile);
});

router.post("/", req_validator_post, async (req, res) => {
  const profile = new Profile({
    available: false,
    bio: {
      reg_no: req.body.reg_no,
      battalion: req.body.battalion,
      name: req.body.name
    }
  });

  const savedProfile = await profile.save();

  if (!savedProfile) return res.sendStatus(500);

  res.send(savedProfile);
});

router.use("/:id/bio", req_validator_id, require("./bio"));
router.use("/:id/events", req_validator_id, require("./events"));
router.use(
  "/:id/external_resources",
  req_validator_id,
  require("./external_resources")
);
router.use("/:id/multimedias", req_validator_id, require("./multimedias"));

module.exports = router;
