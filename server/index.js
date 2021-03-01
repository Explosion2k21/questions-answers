const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios')


const app = express();
const port = process.env.PORT || 3001;
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
require('dotenv').config();
app.get("/questions", (req, res) =>{
  axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11005&page=1&count=5", {
      headers: {
        Authorization: process.env.TOKEN,
      }
    }).then((result) => {
      console.log('aaa', result.data)
       res.send(result.data)
    }).catch((err) => {
      console.log(err)
    })
})
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

