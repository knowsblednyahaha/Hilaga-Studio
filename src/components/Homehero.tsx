import "../components/sass/Homehero.scss"

import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";

export default function Homehero() {

    
    return (
        <div className="home-hero-container">
            <div className="text-header">
                <h1>We find the answers to the question of what is required.</h1>
            </div>
            <div className="video">
                <video src="/video.mp4" autoPlay loop muted ></video>
            </div>
        </div>
    )
}