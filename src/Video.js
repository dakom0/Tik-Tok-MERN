import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video({url}) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null)

    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false)
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <div className="video-container">
                <video onClick={handleVideoPress} loop ref={videoRef}  
                className="video__player" 
                autoPlay src={url}>
                </video>
                <VideoFooter channel={"@sssangha"} description={"EPIC MERN Tik-Tok Clone"} song={"Get 6 figs in 5 years"}/>
                <VideoSidebar likes={111} shares={222} messages={250}/>
            </div>
        </div>



    )
}

export default Video
