import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
        <div className="app__videos">
          <Video url={"https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"}/>
          <Video/>
          <Video/>

      </div>   
    </div>
  );
}

export default App;
