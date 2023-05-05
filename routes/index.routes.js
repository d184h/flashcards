
const router = require("express").Router();
const MainRouter = require('./main.routes')
const PlayRouter = require('./play.routes')

router.use('/', MainRouter)


router.use('/', PlayRouter)




module.exports = router