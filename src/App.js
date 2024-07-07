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
        <input  className="search-box" type="text" placeholder="Search Challenge Collection"  />
      </div>
      <div className ="wallet-button">
        <button className = "Connect-wallet">Connect Wallet</button>
      </div>
    </header>
    </div>
  );
}

export default App;
