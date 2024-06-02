import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import { Link } from "react-router-dom"
import sound from "../assets/sound/flow-211881.mp3"
// const EXTERNAL_AUDIO = '../assets/sound/flow-211881.mp3';
import playIcon from "../assets/images/lets-paly-icon.svg";
import Header from "./shared/Header";

const Home = ({ soundFile = sound }) => {
    
    const mutedAudio = () => {
        // console.log("Audio muated", refAudio);
        // const audio = new Audio(soundFile);
        // audio.muted = true;
        // audio.currentTime = 0;
        // audio.pause();
        // audio.volume = 0;

        // refAudio.current.muted = true;
        // refAudio.current.currentTime = 0;
        // refAudio.current.pause();
    }

    // useEffect(() => {
    //     if (!refAudio.current.muted) {
    //         console.log("Audio muted", refAudio.current.muted);
    //         // refAudio.current.muted = true;
    //         //   refAudio.current.play();
    //     }
    // }, [refAudio.current]);


    return (
        <>
            <div className="home-bg">
                <div className="home-text">
                    <h1>Addition and Subtraction Facts within 20</h1>
                    <p>Test your knowledge with the following questions, tap a card to flip it and uncover the answer, good luck!</p>
                    <Link to="slider"><img src={playIcon} /> Let’s play</Link>
                </div>
                
            </div>
            {/* <audio src={gameSound} autoPlay controls loop ref={refAudio} /> */}
            {/* <h1>Home</h1> */}
        </>
    )
}
export default Home