import "../sass/Workhero.scss"
import React, { useEffect, useRef } from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function WorkHero() {
    const settings:any = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        // focusOnSelect: true,
        infinite: true,
        centerMode: true,
        centerPadding: 0
    };
    
    const slider: any = useRef(null);

    
    function scroll(e : any){
        if (slider === null)
            return 0;
    
        e.wheelDelta < 0 ? (
            slider.current.slickNext()
        ) : (
            slider.current.slickPrev()
        );
    };
    useEffect(() => {
        window.addEventListener("wheel", scroll , true);
    
        return () => {
            window.removeEventListener("wheel", scroll , true);
        };
    }, []);
    return (
        <div className='work-hero-container'>
            <div className="text-header">
                    <h1>Hilaga Works</h1>
            </div>
            <div className="work-image-container">
                <Slider {...settings} ref={slider}>
                    <div className="work-image 1">
                        <img src="/1.jpg" alt="" />
                    </div>
                    <div className="work-image 2">
                        <img src="/1.jpg" alt="" />
                    </div>
                    <div className="work-image 3">
                        <img src="/1.jpg" alt="" />
                    </div>
                    <div className="work-image 4">
                        <img src="/1.jpg" alt="" />
                    </div>
                    <div className="work-image 5 ">
                        <img src="/1.jpg" alt="" />
                    </div>
                    <div className="work-image 6 ">
                        <img src="/1.jpg" alt="" />
                    </div>
                </Slider>
            </div>
            {/* <div className="work-image-container">
                <div className="work-image">
                    <img src="/1.jpg" alt="" />
                </div>
                <div className="work-image">
                    <img src="/1.jpg" alt="" />
                </div>
                <div className="work-image"> 
                    <img src="/1.jpg" alt="" />
                </div>
                <div className="work-image">
                    <img src="/1.jpg" alt="" />
                </div>
                <div className="work-image">
                    <img src="/1.jpg" alt="" />
                </div>
                <div className="work-image"> 
                    <img src="/1.jpg" alt="" />
                </div>
            </div> */}
        </div>
    )
}
