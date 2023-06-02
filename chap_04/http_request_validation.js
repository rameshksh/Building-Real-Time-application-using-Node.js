const express = require('express');
const bodyParser = require('body-parser');
const { registrationValidation } = require('./validation.js');
 
const app = express();
 
app.use(express.json()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.post('/register', registrationValidation, (req, res, next) => {
   // your registration code
   console.log('User registration is done');
   res.send("User registration successfull");
});
  
app.listen(3000,() => console.log('Server is running on port 3000'));

