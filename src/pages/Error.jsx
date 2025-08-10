import React from "react";
import errorImg from "../assets/not-found.png";

const Error = () => {

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <img src={errorImg} alt="not found page" />
                <h2 className="text-lg font-semibold text-center pt-4">Page Not Found!</h2>
            </div>
        </div>
    );
};

export default Error;