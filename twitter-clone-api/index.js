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
    T.get('search/tweets', { q: tag, count: 20, tweet_mode: 'extended', exclude: "retweets"}, function(err, data, response) {
        resposta = [];
        data.statuses.map((val,key)=>{
            full_text_converted = val.full_text.split(" ");
            hashtags = "";
            media_type = "";
            media_url = "";
            val.entities.hashtags.map((val2,key)=>{
                hashtags+= "#"+val2.text+" ";
                full_text_converted = full_text_converted.filter(v => v !== "#"+val2.text);
            })
            full_text_converted = full_text_converted.join(" ");
            console.log(full_text_converted, hashtags);
            // console.log(full_text_converted);
            if(typeof val.entities.media != "undefined"){
                if(val.extended_entities.media['0'].type != "video"){
                    media_type = "photo"
                    media_url = val.entities.media['0'].media_url
                }else{
                    val.extended_entities.media['0'].video_info.variants.map((val3, key) =>{
                        if(val3.content_type == "video/mp4"){

                            media_type = val3.content_type
                            media_url = val3.url;
                        }
                    })
                }
            }
            resposta.push({"full_text": full_text_converted,"hashtags": hashtags, "retweet_count": val.retweet_count, "favorite_count": val.favorite_count,
             "profile_image_url": val.user.profile_image_url, "user_name": val.user.name, "screen_name": val.user.screen_name,
            "media_type": media_type,  "media_url":  media_url})
            // console.log(resposta)
            // console.log(y)
            // console.log(val.full_text)
            // x.push([val.full_text])
        })
        return res.json(resposta)
      })
});

app.listen(3001, () =>{
 console.log("500 Servidor ta funcionando");
});