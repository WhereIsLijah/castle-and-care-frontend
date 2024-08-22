import React from 'react';
// @ts-ignore
import VideoBg from '../../videos/videoBg.mp4';
import '../../styles/common/backgroundVideo.css';

const BgVideo:React.FC = () => {
    return(
        <>
            <div className="video-container">
                <div className="video-content"></div>
                <video src={VideoBg} autoPlay loop muted/>
            </div>
        </>
    );
}

export default BgVideo;