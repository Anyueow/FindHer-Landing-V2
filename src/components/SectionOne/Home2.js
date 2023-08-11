import React from "react";
import './sectionOne.css'; // Importing the custom CSS

function Home2() {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h1 className="main-name-sect">

                        <span className="text-wrapper">Job postings </span>
                        can be quite vague, and it's hard to figure out if a workplace
                        aligns with your requirements and values.

                </h1>
                <h1 className="main-sub">
             Sometimes, you’re left with
                    <strong style={{color:"#ee2c5b"}}> more questions </strong>
                    than answers!
                </h1>
            </div>
        </div>
    );
}

export default Home2;
