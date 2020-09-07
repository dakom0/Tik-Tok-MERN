import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
        <div className="app__videos">
          <Video channel={"@ssasangha"} description={"EPIC MERN Tik-Tok clone"} song={"Get 6 figs in 5 years"} 
          likes={100} shares={20} messages={250}
          url={"https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"}/>
          <Video channel={"@ssasangha"} description={"EPIC MERN Tik-Tok clone"} song={"Get 6 figs in 5 years"} 
          likes={150} shares={20} messages={750}
          url={"https://assets.mixkit.co/videos/preview/mixkit-young-sportsman-jumping-rope-at-home-5050-large.mp4"}/>          
          <Video channel={"@ssasangha"} description={"EPIC MERN Tik-Tok clone"} song={"Get 6 figs in 5 years"} 
          likes={100} shares={20} messages={250}
          url={"https://assets.mixkit.co/videos/preview/mixkit-panting-dog-1548-large.mp4"}/>      
        </div>   
    </div>
  );
}

export default App;
