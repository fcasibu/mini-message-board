var express = require('express');
var router = express.Router();
var moment = require('moment');

const messages = [
  {
    text: 'Hello',
    user: 'John',
    added: moment(new Date('2019')).fromNow()
  },
  {
    text: 'Hello world',
    user: 'Alex',
    added: moment(new Date('2021')).fromNow()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.title = 'Mini Messageboard';
  res.locals.messages = messages;
  res.render('index')
});

router.get('/new', (req, res) => {
  res.locals.title = "New Message";
  res.render('form')
})

router.post('/new', function(req, res) {
  const { messageText, name} = req.body;

  messages.push({text: messageText, user: name, added: moment(new Date()).fromNow()});
  res.redirect('/');
})

module.exports = router;
