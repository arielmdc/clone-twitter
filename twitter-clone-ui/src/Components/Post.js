import React from 'react';
import '../App.css';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarPhoto from "../assets/foto_perfil.jpg"
import PublicIcon from '@mui/icons-material/Public';
import Button from '@mui/material/Button';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';

function Post(){
    return(
        <div className="post-box">
            <div className="post-title-box">
                <div className="post-title">
                    Home
                </div>
                <div className="post-top-tweets">
                    <AutoAwesomeOutlinedIcon fontSize='inherit'/>
                </div>
            </div>
            <div className="post-tweet-text-box">
                <div className="post-tweet-photo">
                    <Avatar alt="ProfilePhoto" src={AvatarPhoto} sx={{ width: 56, height: 56 }}/>
                </div>
                <div className="post-tweet-text">
                    <div className="text">
                        What's happening?
                    </div>
                    <div className="settings">
                        <PublicIcon className="settins-icon" fontSize='inherit' /> Everyone can reply
                    </div>
                    <div className="buttons">
                        <div className="small-buttons">
                            <InsertPhotoOutlinedIcon fontSize='inherit' />
                            <GifBoxOutlinedIcon fontSize='inherit'/>
                            <PollOutlinedIcon fontSize='inherit'/>
                            <SentimentSatisfiedOutlinedIcon fontSize='inherit'/>
                            <EventNoteOutlinedIcon fontSize='inherit'/>
                            <PinDropOutlinedIcon fontSize='inherit'/>
                        </div>
                        <Button className="tweet-button" variant="contained">Tweet</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post