import React from "react";
import reviewAnimation from "../../../assets/review-animation.json";
import Lottie from "lottie-react";


const Hero = () => {

    return (
        <section className="custom-gradient mb-10 md:mb-20">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 py-10">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-extrabold uppercase">
                            Share Your Shopping Story
                        </h1>
                        <p className="text-lg leading-relaxed my-6">
                            Help others make smarter choices by sharing your real shopping
                            experiences. Post honest reviews, rate shops, and explore what
                            other shoppers are saying.
                        </p>
                    </div>
                    <div className="flex justify-end transform scale-x-[-1]">
                        <Lottie animationData={reviewAnimation} loop={true} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;