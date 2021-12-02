var express = require('express');
var router = express.Router();
let upload=require('../until/multer')
let config=require('../config');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploads',upload.array('file'),(req,res)=>{
  res.json({
    code:1,
    url:config.baseURL+'/uploads/'+req.files[0].filename
  })
})
module.exports = router;
