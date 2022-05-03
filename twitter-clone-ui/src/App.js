import React, { useState, useRef} from "react";
import { throttle } from "lodash";
import './App.css';
import Sidebar from './Components/Sidebar';
import Tweet from './Components/Tweet';
import Post from './Components/Post';
import SearchIcon from '@mui/icons-material/Search';
import api from "./services/api";
import { Avatar } from "@mui/material";

function App() {
  const [dataTweet, setDataTweet] = useState([]);

  const delayedQuery = throttle(e =>{
      api.post('/tags', {
        searchTag: "#"+e.replace(/#/g, "").replace(/ /g, ""),
      })
      .then(function (response) {
        let x = []
        response.data.map((val, key)=>{
          x.push(val);
        })
        setDataTweet(x);
        console.log(dataTweet)
      })
    },1000)

  function handleChange(e){
    setDataTweet([])
    if(e.target.value.length >= 3){
      delayedQuery(e.target.value); 
    }
  }

  return (
    <div className="container">
      <div className="menu-grid">
        <Sidebar />
      </div>
      <div className="feed-grid">
        <div className="post">
          <Post />
        </div>
        <div className="search-small">
          <input type="text" placeholder="Search Twitter" onChange={handleChange}></input>
        </div>
        <div className="feed-news">
        
          {dataTweet.map((val,key)=>{
              return(
                <div className="feed-box">
                  <div className="feed-tweet-profile-photo">
                    <Avatar alt="ProfilePhoto" src={val.profile_image_url}/>
                  </div>    
                  <Tweet name={val.user_name} 
                        screen_name={val.screen_name} 
                        full_text={val.full_text}
                        hashtags={val.hashtags}
                        media_type={val.media_type} 
                        media_url={val.media_url} 
                        retweet_count={val.retweet_count} 
                        favorite_count={val.favorite_count}
                  />
                </div>
              )
          })}
        </div>
      </div>
      <div className="trending-grid">
        <div className="search">
          <input type="text" placeholder="Search Twitter" onChange={handleChange}></input>
        </div>
        <div className="trending-fake-box" onClick={()=> console.log(dataTweet)}>
          What’s happening
        </div>
        <div className="trending-fake-box">
          Who to follow
        </div>
      </div>
    </div>
  );
}

export default App;
