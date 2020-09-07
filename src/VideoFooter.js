import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';


function VideoFooter({channel, description, song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon"/>
                    <Ticker mode="smooth">
                        {({ index }) => (
                        <>
                        <p>{song}</p>
                        </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter__record" src="https://365psd.com/images/previews/0f6/vinyl-record-disc-icon-psd-image-2349vinyl-record-disc-512.png" alt=""/>
        </div>
    )
}

export default VideoFooter
