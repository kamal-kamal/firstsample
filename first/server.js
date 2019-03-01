const express = require('express');

const app = express();

app.use('/api', (request, response, next) => {
  response.json('this is first response');
});

app.listen(2100, ()=> {
  console.log('I am ready....');
})