const router = require("express").Router();
const AuthorModel = require("../models/Author.model")

router.get( "/", (req, res, next) =>{
    AuthorModel.find()
    .then( (allAuthors) => {
        res.render("authors/author-list.hbs", {allAuthors})
    })
    .catch((err) => {
        next(err)
    })
})


module.exports = router;