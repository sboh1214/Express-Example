const password = "qwer1234"

function auth(req, res, next){
    if (req.query.password === password){
        next()
    }
    else res.send("Access denied")
}

module.exports = auth
