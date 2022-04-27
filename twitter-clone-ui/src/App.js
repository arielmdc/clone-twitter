import React, { useState, useRef} from "react";
import { throttle } from "lodash";
import './App.css';
import Sidebar from './Components/Sidebar';
import Post from './Components/Post';
import SearchIcon from '@mui/icons-material/Search';
import api from "./services/api";



function App() {

  const delayedQuery = useRef(
    throttle(e =>{
      api.post('/usuarios', {
        searchTag: e,
      })
      .then(function (response) {
        console.log(response);
      })
    },1000)
  ).current;

// function handleKeyPress(event) {
    // api.post('/usuarios', {
    //   Name: 'Fred',
    //   Age: '23'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
// }
  function handleChange(e){
    delayedQuery(e.target.value);
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
          
        </div>
        
      </div>
      <div className="trending-grid">
        
        <div className="search">
          <input type="text" placeholder="Search Twitter" onChange={handleChange}></input>
        </div>

        <div className="trending-fake-box">
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
