module.exports = (req, res, next) => {
    //check that we remember the client,
    //that the client logged in already - visualize it as a table
    console.log('session', req.session)
    if(req.session && req.session.user){
        next()
    } else {
        res.status(401).json({ you: "shall not pass!"})
    }
    next()
}