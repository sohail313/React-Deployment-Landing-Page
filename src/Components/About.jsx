import React from 'react';

function About(props){
    return(
        <div id='about'>
            <div className="about-image">
                <img src={props.image} alt=""/>
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, alias architecto distinctio iure tempora beatae quod optio, non exercitationem, quae reprehenderit minus aliquam rerum dolorum officia! Modi repellendus veniam placeat!</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}
export default About;