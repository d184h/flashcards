
const router = require("express").Router();
const MainRouter = require('./main.routes')

router.use('/', MainRouter)







module.exports = router