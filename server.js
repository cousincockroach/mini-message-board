const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() }
];


app.get('/', (req, res) => {
  res.render('index', { title: "Mini Message Board", messages: messages });
});
app.get('/new', (req, res) => {
    res.render('form', { title: "New Message" });
});


app.post('/new', (req, res) => {
  const { messageUser, messageText } = req.body;
  

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });


  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
