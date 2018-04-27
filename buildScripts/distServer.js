import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// app.get('/users', function(req, res){
//   // Hard coded demo api data
//   res.json([
//     {"id": 1,"firstName":"Adam","lastName":"Farquhar","email":"adam@gmail.com"},
//     {"id": 2,"firstName":"Dave","lastName":"Smith","email":"dave@gmail.com"},
//     {"id": 3,"firstName":"Gabi","lastName":"Brown","email":"gabi@gmail.com"}
//   ]);
// });

app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
