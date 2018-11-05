const express = require("express");
const debug = require("debug")("app_db");
const Profile = require(__rootdir + "/dbModels/Profile");
const router = express.Router();

router.get("/", async (req, res) => {
  const profiles = await Profile.find(
    null,
    "bio.reg_no bio.name bio.coords -_id"
  );

  res.send(
    profiles.map(p => {
      return { reg_no: p.bio.reg_no, name: p.bio.name, coords: p.bio.coords };
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
    bio: {
      reg_no: req.body.reg_no,
      name: req.body.name
    }
  });

  const savedProfile = await profile.save();

  if (!savedProfile) res.sendStatus(500);

  res.send(savedProfile);
});

router.put("/:id/bio", async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  const profile = await Profile.findOneAndUpdate(
    {
      "bio.reg_no": id,
      "bio.name": body.name
    },
    {
      bio: { ...body, reg_no: id }
    },
    {
      new: true,
      runValidators: true,
      fields: "-_id -__v"
    }
  );

  if (!profile) return res.sendStatus(404);

  res.send(profile);
});

module.exports = router;
