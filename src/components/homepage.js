import React, { useState, useEffect } from "react";
import './homepage.css';

function Homepage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        "resources/testimonial-1.png",
        "resources/testimonial-2.png",
        "resources/testimonial-3.png",
        "resources/testimonial-4.png",
        "resources/testimonial-5.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="body">
            <div className="flex">
                <div className="borders">
                    <div className="navbar flex">
                        <div>
                            <img className="titlesize" src="resources/jsm-logo.svg" alt="jsimage" />
                        </div>
                        <div className="display flex">
                            <p className="marginNav white">Next.js 14 Course</p>
                            <p className="marginNav color">Masterclass Coaching</p>
                            <img className="lineimagesize" src="resources/hamburger-menu.svg" alt="lineimage" />
                        </div>
                    </div>
                    <div className="bodycontent">
                        
                    <div className="bodyinfo">
                        <p className="text"><span className="shadow texting">Master</span> Modern </p>
                        <p className="text">Web Development </p>
                        <p className="text">With a <span className="shadow1 texting">Project</span> </p>
                        <p className="text"><span className="shadow2 texting">Based </span>Approach</p>
                    </div>
                    <p className="text1">Gain real-world experience and land that dev job</p>
                    <p className="text1">you've always imagined</p>
                    <div className="bottombox"></div>
                    <div className="box">
                        <div className="middletext">Ultimate Next.js 14 Cource <span className="arrow">&rarr;</span></div>   
                    </div>
                    <div className="secondbox">JSM Masterclass<span className="arrow">&rarr;</span></div>
                    <div className="starimage">
                        <img className="starsize" src="resources/starimage.png" alt="starimage" />
                        <div className="trust">Trustpilot</div>
                    </div>
                    <div className="flex">
                        <div className="fivestar">
                            <img className="fivestars" src="resources/stars.png" alt="starimage" />
                            <img className="fivestars"src="resources/stars.png" alt="starimage" />
                            <img className="fivestars" src="resources/stars.png" alt="starimage" />
                            <img className="fivestars" src="resources/stars.png" alt="starimage" />
                            <img className="fivestars"src="resources/stars.png" alt="starimage" />
                        </div>
                        <div className="youtubesize flex">
                            <img className="imagesize" src="resources/youtube.svg" alt="youtubeimage" />
                            <span className="insta" >700k</span>
                            <img className="imagesize" src="resources/instagram.svg" alt="instagramimage" />
                            <span className="insta" >230k</span>
                        </div>
                        <div className="followers">Followers & subscribers</div>
                    </div>    
                    <div className="trustscore">TrustScore 4.8</div>
                    <div className="trustscore">1,792 reviews</div>
                </div>
            </div>
            
                        {/* Your existing content */}
           
                <div className="borders">
                    <div className="bordersize">
                        <img className="testimonial" style={{left: `calc(${currentIndex * 100}% - ${currentIndex * 20}px)`}} src={testimonials[currentIndex]} alt="images" />
                    </div>
                    <div className="jsimage">
                        <img className="jsimagesize" src="resources/github-star-jsm.png" alt="images" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;

