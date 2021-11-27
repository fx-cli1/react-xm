var express = require('express');
var router = express.Router();
let userService = require('../connector/userService')
/* GET users listing. */
router.get('/loginstart',async (req, res, next) => {
  let { tel } = req.query;
  let list=await userService.query({tel});
  if(list.length){
    res.json({
      code:1,
      list
    })
  }else{
    res.json({
      code:0
    })
  }
});

router.post('/add', async (req, res, next) => {
  let { tel } = req.body
  let list = await userService.add([{ tel }])
  res.json({ list })
})

module.exports = router;
