var express = require('express');
var router = express.Router();
const chats = require('../data/data.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/chat', function(req, res, next) {
  res.send(chats);
}); 

router.get('/api/chat/:id', function(req, res, next) {
  // console.log(req.params.id);

  const peerToPeerChat = chats.find((c) => c._id === req.params.id);
  res.send(peerToPeerChat);
});
 
module.exports = router;
