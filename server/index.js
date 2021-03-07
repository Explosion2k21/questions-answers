const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios')
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json())

// this is a get request to fetch the questions data of the product selected
app.get("/questions", (req, res) =>{
  axios.get("https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11056&page=1&count=5", {
      headers: {
        Authorization: process.env.TOKEN,
      }
    }).then((result) => {
       res.send(result.data)
    }).catch((err) => {
      console.log(err)
    })
})
// this is a put request to update the count of helpfulness for each question
app.put("/update/:id", (req, res) => {
  console.log('tttt', req.params)
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${req.params.id}/helpful`,{},{
    headers: {
      Authorization: process.env.TOKEN,
    }
  }).then(({result})=>{
    res.send(result)
  })
})
//this is a put request to update the count of helpfulness for each answer

app.put("/updateAnswer/:id", (req, res) => {
  console.log('tttt', req.params)
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/answers/${req.params.id}/helpful`,{},{
    headers: {
      Authorization: process.env.TOKEN,
    }
  }).then(({result})=>{
    res.send(result)
  })
})
app.post("/add", (req, res) => {
  console.log(req.body)

  axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions`,{
    body:req.body.body,
     name:req.body.name,
     email:req.body.email,
     product_id: req.body.product_id
    },
    {
    headers: {
      Authorization: process.env.TOKEN,
    }
  }).then((result)=>{
    res.send({result})
    console.log(result)
  }).catch((err)=>{
    // res.status(400)
  res.send(err)
  })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

