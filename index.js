const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>In GIT_COMMIT  $$$ App</h1> <h4>Message: Success Done Updating</h4> <p>Version 6.0.0</p>');
 })


app.listen(port, ()=> {
  console.log(`Victor app is up and listening to port: ${port}`);
})
 
