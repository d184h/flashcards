const router = require('express').Router();
const { User, cardDec } = require('../db/models');
const Play = require('../components/Play');

router.get('/play', async (req, res) => {
  try {
    const cardDecdb = await cardDec.findAll({ raw: true });
    // console.log(cardDecdb, '------------------')
    const name = res.app.locals.name;
    res.status(200).renderComponent(Play, { title: 'Play FlashCards', cardDecdb, name });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
