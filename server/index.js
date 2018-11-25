const express = require('express');
const app = express();
const path = require('path');


// app.get('/hi', (req, res) => {
//   res.send('Hello World!');
// });
app.use(express.static(path.join(__dirname, '../dist/Portfolio')));

//heroku
const server = app.listen(process.env.PORT, () => {
  // const host = server.address().address;
  // const port = server.address().port;

  // console.log(`Example app listening at http://${host}:${port}`);
});



//google
// const server = app.listen(8080, () => {
//   const host = server.address().address;
//   const port = server.address().port;

//   console.log(`Example app listening at http://${host}:${port}`);
// });