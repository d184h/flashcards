const Main = require("../components/Main");
const router = require("express").Router();


router.get('/', async (req, res) => {
  try {
   
    res.status(200).renderComponent(Main, { title: 'Flash Cards' });
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router