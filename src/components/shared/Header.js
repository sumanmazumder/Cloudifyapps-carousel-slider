import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import sound from "../../assets/sound/flow-211881.mp3";
// const EXTERNAL_AUDIO = '../assets/sound/flow-211881.mp3';
import logo from "../../assets/images/branding.svg";
import muteIcon from "../../assets/images/muted.svg";
import playIcon from "../../assets/images/play-icon.svg";
import soundIcon from "../../assets/images/sound-icon.svg";
import pauseIcon from "../../assets/images/pause-icon.svg";

const Header = () => {
    const refAudio = useRef(null);
    const [isPlay, setIsPlay] = useState(true);
    const [muted, setMuted] = useState(true);

    const playAudio = () => {
        if(!isPlay){
            refAudio.current.play();
            refAudio.current.muted = false;
            setIsPlay(true);
            setMuted(true);
        }
        else{
            refAudio.current.pause();
            refAudio.current.muted = true;
            setIsPlay(false);
            setMuted(false);
        }
    }
    const handleAudio = () => {
        console.log("Is play", muted);
        if (!muted) {
            setMuted(true);
            refAudio.current.muted = false;
        }
        else {
            setMuted(false);
            refAudio.current.muted = true;
        }
    }
    
    useEffect(() => {
        if (refAudio.current) {
            console.log("Audio muted", refAudio.current);
            // refAudio.current.muted = false;
            // refAudio.current.play();
        }
    }, [refAudio.current]);

    return (
        <>
            <audio autoPlay={true} allow="autoplay" controls loop ref={refAudio} style={{ visibility: "hidden", position: "absolute" }}>
                <source src={sound} type="audio/mpeg" />
            </audio>
            <div className="header">
                <div className="logo">
                    {/* <Link to=""><img src={logo} /></Link> */}
                    <img src={logo} />
                </div>
                <div className="audio">
                    <button className="play" onClick={playAudio}>
                        { isPlay ? <img src={playIcon} /> : <img src={pauseIcon} />}                    
                    </button>
                    <button className="sound" type="button" onClick={handleAudio}>
                        {muted ? <img src={soundIcon} /> : <img src={muteIcon} />}
                    </button>

                </div>
            </div>
        </>
    )
}

export default Header;