import React from 'react';
import '../App.css';
import { SidebarData } from './SidebarData';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import AvatarPhoto from "../assets/foto_perfil.jpg"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TwitterIcon from '@mui/icons-material/Twitter';

function Sidebar(){
    return(
        <div className="Sidebar">
            <ul className="SidebarList">
                <li className="row-logo">
                    <TwitterIcon id="icon-logo"/>
                    <div id="title-logo"></div>
                </li>
            {SidebarData.map((val, key)=> {
                return(
                    <li key={key} className="row" id={window.location.pathname} onClick={()=> {window.location.pathname = val.link}}>
                        {window.location.pathname == val.link
                            ?<div id="icon">{val.activeIcon}</div>
                            :<div id="icon">{val.icon}</div>
                        }
                        <div id="title">
                            {val.title}
                        </div>
                    </li>
                )
            })}
            </ul>
            <div className="SidebarButton">
                <Button className="tweet-button" variant="contained">Tweet</Button>
            </div>

            <div className="SidebarProfile"> 
                <div className="SidebarProfileBox"> 
                    <div className="SidebarProfilePhoto">
                        <Avatar alt="ProfilePhoto" src={AvatarPhoto}/>
                    </div>

                    <div className="SidebarProfileText">
                        <div className="SidebarProfileTextName">
                            Ariel Mota
                        </div>
                        <div className="SidebarProfileTextNickname">
                            @ArielMota12
                        </div>
                    </div>

                    <div className="SidebarProfileMore">
                        <MoreHorizIcon />
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Sidebar