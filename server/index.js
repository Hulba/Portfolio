const express = require('express');
const app = express();
const path = require('path');


// app.get('/hi', (req, res) => {
//   res.send('Hello World!');
// });
app.use(express.static(path.join(__dirname, '../dist/Portfolio/')));

//heroku

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/Portfolio/index.html'));
});
var PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
  console.log('server running on port:', PORT);
});



//google
// const server = app.listen(8080, () => {
//   const host = server.address().address;
//   const port = server.address().port;

//   console.log(`Example app listening at http://${host}:${port}`);
// });
