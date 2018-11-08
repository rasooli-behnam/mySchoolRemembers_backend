const Profile = require(__rootdir + "/db_models/Profile");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const profiles = await Profile.find(
    null,
    "available bio.reg_no bio.name bio.coords -_id"
  );

  res.send(
    profiles.map(p => {
      return {
        available: p.available,
        reg_no: p.bio.reg_no,
        name: p.bio.name,
        coords: p.bio.coords
      };
    })
  );
});

router.get("/:id", async (req, res) => {
  const profile = await Profile.findOne(
    { "bio.reg_no": req.params.id },
    "-_id -__v"
  );

  if (!profile) return res.sendStatus(404);

  res.send(profile);
});

router.post("/", async (req, res) => {
  const profile = new Profile({
    available: false,
    bio: {
      reg_no: req.body.reg_no,
      name: req.body.name
    }
  });

  const savedProfile = await profile.save();

  if (!savedProfile) return res.sendStatus(500);

  res.send(savedProfile);
});

router.use("/:id/bio", require("./bio"));
router.use("/:id/events", require("./events"));
router.use("/:id/external_resources", require("./external_resources"));
router.use("/:id/multimedias", require("./multimedias"));

module.exports = router;
