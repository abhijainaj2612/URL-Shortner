const shortid = require("shortid");
const URL = require("../models/url");

async function handleNewShortUrl(req, res) {
    const shortId = shortid.generate();
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });


    return res.render("home", {
        id: shortId,
        originalUrl: body.url
    });
}

async function handleRedirectUrl(req, res) {
    const shortId = req.params.id;
    const result = await URL.findOne({ shortId });
    res.redirect(result.redirectUrl);
}


module.exports = {
    handleNewShortUrl,
    handleRedirectUrl
}