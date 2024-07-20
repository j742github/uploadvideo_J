//working on header of app
import './App.css';

function App() {
  return (
    <div className="upload-page">
      <header className="header">
        <div className="left-side">
          <div className="profile-pic">
            <img src={"profile-icon.svg"} alt="icon" />
          </div>
          <div className="camera-icon">
            <img src={"add-video.svg"} alt="add-video-icon" />
          </div>
        </div>
        <div className="search-bar">
          <div className="search-icon" ><img src={"searchicon.png"} alt="icon"/></div>
          <input className="search-box" type="text" placeholder="Search Challenge Collection" />
        </div>
        <div className="wallet-button">
          <button className="Connect-wallet">Connect Wallet</button>
        </div>
      </header>

      <div className="main-upload">
        <h2 className="heading2">Upload a Video</h2>
        <div className="columns">
          <div className="column1">
          <div>Details</div>
          <div>Title</div>
          <div>input box</div>
          </div>
          <div className="column2">
          <div>Preview</div>
          <div>Preview Box</div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div><b>Top Witness</b></div>
        <div className="witlist">
          <div className="witness-item">1 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Olivia</div>
          <div className="witness-item">2 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Jeff</div>
          <div className="witness-item">3 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Amrit</div>
          <div className="witness-item">4 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Ammy</div>
          <div className="witness-item">5 <div className="profile-pic1"> <img src={"profile-icon.svg"} alt="icon" /> </div>Joe</div>
        </div>
        <div>
          <a href="/" className="view-all">View All</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
