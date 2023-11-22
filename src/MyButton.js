import React from "react";
import "./MyButton.css";

const MyButton = ({ children }) => {
    return (
        <div className="myButton">
            {children}
        </div>
    );
};

export default MyButton;
