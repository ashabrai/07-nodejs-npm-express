'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }),
  express.static('./public')
);

app.get('public/new.html',(req, res)=>{
  res.send();//this is to make sure new.html shows up. 
});

app.post('/articles', (req, res) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log('hello');
  console.log(req.body);
  res.status(201).json(req.body);
});
app.get('*', function(request,response){
  response.send('Nothing to see here',404);
});
app.listen(PORT, function(){
  console.log('listening for port: ',PORT);
});
// // 172.16.14.236