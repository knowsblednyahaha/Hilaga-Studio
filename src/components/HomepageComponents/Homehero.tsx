import "../sass/Homehero.scss"

import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";

export default function Homehero() {

    
    return (
        <div className="home-hero-container">
            <div className="text-header">
            <h1>Hilaga Studio</h1>
                {/* <h1>We find the answers to the question of what is required.</h1> */}
            </div>
            <div className="video">
                <video src="/video.mp4" autoPlay loop muted ></video>
            </div>
            <div className="text-container">
                <div className="about">
                    <p>
                        We are Hilaga Studio. We are a creative team, 
                        and every very day, we work to share beauty 
                        by making holistic approach products experiences
                    </p>
                </div>
                <div className="social">
                    <div>
                        <span>Facebook</span>
                    </div>
                    <div>
                        <span>Instagram</span>
                    </div>
                    <div>
                        <span>Youtube</span>
                    </div>
                </div>
            </div>
        </div>
    )
}