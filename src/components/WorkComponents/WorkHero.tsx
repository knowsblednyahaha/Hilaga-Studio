import "../sass/Workhero.scss"
import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function WorkHero() {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false,
        dots: true,
        infinite: true,
        adaptiveHeight: true,
        arrows: false
    };
    return (
        <div className='work-hero-container'>
            <div className="text-header">
                    <h1>Hilaga Works</h1>
            </div>
            <div className="work-image-container">
                <Slider {...settings}>
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
