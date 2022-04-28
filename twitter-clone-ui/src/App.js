import React, { useState, useRef} from "react";
import { throttle } from "lodash";
import './App.css';
import Sidebar from './Components/Sidebar';
import Post from './Components/Post';
import SearchIcon from '@mui/icons-material/Search';
import api from "./services/api";
import { Avatar } from "@mui/material";
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import FlipCameraAndroidOutlinedIcon from '@mui/icons-material/FlipCameraAndroidOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';


function App() {
  const [dataTweet, setDataTweet] = useState([]);

  const delayedQuery = throttle(e =>{
      api.post('/tags', {
        searchTag: e,
      })
      .then(function (response) {
        let x = []
        response.data.map((val, key)=>{
          x.push(val);
        })
        setDataTweet(x);
        // console.log(typeof(dataTweet));
        console.log(dataTweet)
      })
    },1000)


  function handleChange(e){
    setDataTweet([])
    if(e.target.value.length >= 3){
      // console.log("#"+e.target.value.replace(/#/g, "").replace(/ /g, ""));
      delayedQuery("#"+e.target.value.replace(/#/g, "").replace(/ /g, "")); 
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
        <div className="feed-news">
          {dataTweet.map((val,key)=>{
              return(
                <div className="feed-box">
                  <div className="feed-tweet-profile-photo">
                    <Avatar alt="ProfilePhoto" src={val.user.profile_image_url}/>
                  </div>    
                  <div className="feed-tweet-all-info">
                    <div className="name-nickname-box">
                      <div className="name">
                        {val.user.name}
                      </div>
                      <div className="nickname">
                        {'@'+val.user.screen_name}
                      </div>
                    </div>
                    <div className="text">
                      {val.text}
                    </div>
                    <div className="media">
                      {typeof val.entities.media != "undefined"
                      ?<img  className="tweet-img"src={val.entities.media['0'].media_url}/>
                      :<></>
                      }       
                    </div>
                    <div className="utility">
                      <div className="reply">
                        <QuickreplyOutlinedIcon fontSize="inherit"/>
                      </div>
                      <div className="retweet">
                        <FlipCameraAndroidOutlinedIcon fontSize="inherit"/>
                        {val.retweet_count}
                      </div>
                      <div className="like">
                        <FavoriteBorderOutlinedIcon fontSize="inherit"/>
                        {val.favorite_count}
                      </div>
                      <div className="share">
                      <IosShareOutlinedIcon fontSize="inherit"/>
                      </div>
                    </div>
                    
                  </div>

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
