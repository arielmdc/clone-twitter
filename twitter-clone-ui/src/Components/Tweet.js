import React from 'react';
import '../App.css';
import QuickreplyOutlinedIcon from '@mui/icons-material/QuickreplyOutlined';
import FlipCameraAndroidOutlinedIcon from '@mui/icons-material/FlipCameraAndroidOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

function Tweet(props){
    return(
        <div className="feed-tweet-all-info">
                    <div className="name-nickname-box">
                      <div className="name">
                        {props.name}
                      </div>
                      <div className="nickname">
                        {'@'+props.screen_name}
                      </div>
                    </div>
                    <div className="text">
                      {props.full_text}
                    </div>
                    <div className="media">
                      
                      {props.media_type == "photo"
                        ?<img  className="tweet-img" src={props.media_url}/>
                        :<></>                        
                      }
                      {props.media_type == "video/mp4"
                      ?<div className="video-box" id="video-box">
                        <video controls>
                          <source src={props.media_url} type={props.media_type}/>
                        </video>
                      </div>
                      :<></>
                      }       
                    </div>
                    <div className="utility">
                      <div className="reply">
                        <QuickreplyOutlinedIcon fontSize="inherit"/>
                      </div>
                      <div className="retweet">
                        <FlipCameraAndroidOutlinedIcon fontSize="inherit"/>
                        {props.retweet_count}
                      </div>
                      <div className="like">
                        <FavoriteBorderOutlinedIcon fontSize="inherit"/>
                        {props.favorite_count}
                      </div>
                      <div className="share">
                      <IosShareOutlinedIcon fontSize="inherit"/>
                      </div>
                    </div>
                    
                  </div>
    )
}
export default Tweet