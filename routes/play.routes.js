const router = require('express').Router();
const { User, cardDec, card } = require('../db/models');
const Play = require('../components/Play');
const Qcard = require('../components/Qcard');

router.get('/play', async (req, res) => {
  try {
    const cardDecdb = await cardDec.findAll({ raw: true });
    // console.log(cardDecdb, '------------------')
    const name = res.app.locals.name;
    res
      .status(200)
      .renderComponent(Play, { title: 'Play FlashCards', cardDecdb, name });
  } catch (error) {
    console.log(error.message);
  }
});

var i = 0;

router.get('/play/:id/:qId', async (req, res) => {
  try {
    const getCards = await card.findAll({
      raw: true,
      where: { decId: req.params.id },
    });

    // console.log(getCards, '---------23------------')

    if (getCards) {
      // console.log(getCards[i])
      // console.log(req.body);
      res.status(200).json({
        message: 'ok',
        cards: getCards[req.params.qId],
        html: res.renderComponent(
          Qcard,
          { card: getCards[req.params.qId] },
          { htmlOnly: true }
        ),
      });

      // res.status(200).json({message:'ok', cards:getCards,html: res.renderComponent(Qcard,{card: getCards[0]},{ htmlOnly: true }) })

      // html: res.renderComponent(Qcard,{card: getCards[0]},{ htmlOnly: true })
      // const html = getCards.map(el=>{
      //   return res.status(200).renderComponent(Qcard,{card:el},{ htmlOnly: true })
      // })
      // console.log (html,'------------ooo----')
    }
  } catch (error) {
    console.log(error.message);
  }
});

// router.get('/play/:id/:', async (req, res)=>{

// })

// router.get('/play/:cardDecid', async (req, res)=>{
//   try {

//       //  const cards = await card.findAll({where:{
//       //   decId: {cardDecid}

//       // }})

//       console.log()

//     console.log(cards, '---------------------')

//       } catch (error) {
//         console.log(error.message);
//       }
// })

// router.get('/play', async (req, res) => {
//   try {
//    const cards = await Card.findAll({where:{
//   decId:
// }})

//   } catch (error) {
//     console.log(error.message);
//   }
// });

module.exports = router;
