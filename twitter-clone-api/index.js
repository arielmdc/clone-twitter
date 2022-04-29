const Twit = require('twit');
require('dotenv').config()

const T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret,
});

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/tags", (req,res)=>{
    const tag = req.body.searchTag;
    console.log(tag)
    T.get('search/tweets', { q: tag, count: 10, tweet_mode: 'extended', exclude: "retweets"}, function(err, data, response) {
        return res.json(data.statuses)
      })
});

app.listen(3001, () =>{
 console.log("Servidor ta funcionando");
});