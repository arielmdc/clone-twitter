import './App.css';
import Sidebar from './Components/Sidebar';
import Post from './Components/Post';
import SearchIcon from '@mui/icons-material/Search';

function App() {
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
          <input type="text" placeholder="Search Twitter"></input>
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
