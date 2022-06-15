var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hello',
    user: 'John',
    added: new Date()
  },
  {
    text: 'Hello world',
    user: 'Alex',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.title = 'Mini Messageboard';
  res.locals.messages = messages;
  res.render('index')
});

router.get('/new', (req, res) => {
  res.render('form')
})

router.post('/new', function(req, res) {
  const { messageText, name} = req.body;

  messages.push({text: messageText, user: name, added: new Date()});
  res.redirect('/');
})

module.exports = router;
