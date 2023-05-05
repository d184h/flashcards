const Main = require('../components/Main');
const router = require('express').Router();
const { User } = require('../db/models');



router.get('/', async (req, res) => {
  try {
    res.status(200).renderComponent(Main, { title: 'Flash Cards' });
  } catch (error) {
    console.log(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { PlayerName } = req.body;


    const user = await User.create({
      name: PlayerName,
     
      // score: 0,
      
    });
    res.app.locals.name =PlayerName

    res.redirect('/play')
    // console.log(router.locals,'------------')
  } catch (error) {}
});

module.exports = router;
