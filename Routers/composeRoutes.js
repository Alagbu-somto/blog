const express = require("express");
const router = express.Router();
const controllers = require("../controllers/blogControlleres");

router.get("/compose", controllers.composeController_get);

router.post("/compose", controllers.composeController_post);
module.exports = router;
