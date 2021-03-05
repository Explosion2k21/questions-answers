const express = require("express");
const morgan = require("morgan");
const path = require("path");
const axios = require("axios");
const TOKEN = process.env.TOKEN;


const app = express();
var cors = require("cors");

app.use(cors());

const port = process.env.PORT || 3001;
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));
require("dotenv").config();
// this is a get request to fetch the questions data of the product selected
app.get("/questions", (req, res) => {
  axios
    .get(
      "https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11048&page=1&count=5",
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
    .then((result) => {
      res.send(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
// this is a put request to update the count of helpfulness for each question
app.put("/questions/update/:id", (req, res) => {
  console.log("tttt", req.params);
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions/${req.params.id}/helpful`,
      {},
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
    .then(({ result }) => {
      res.send(result);
    });
});
//this is a put request to update the count of helpfulness for each answer

app.put("/questions/updateAnswer/:id", (req, res) => {
  console.log("tttt", req.params);
  axios
    .put(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/answers/${req.params.id}/helpful`,
      {},
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    )
    .then(({ result }) => {
      res.send(result);
    });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
