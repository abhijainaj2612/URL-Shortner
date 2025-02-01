const express = require("express");
const router = express.Router();
const {handleNewShortUrl,handleRedirectUrl}= require("../controllers/url");

router.post("/",handleNewShortUrl);
router.get("/:id",handleRedirectUrl);

module.exports = router;