
import React from "react";

const Card = (props) => {
    return (
        <section>
            <div className="card">
                <div className="card-img-container">
                    <img 
                        src={`./images/${props.img}`}
                        alt="Chosen"
                        className="card-img"
                    />
                </div>

                <div className="card-text-container">
                    <img
                        src="./images/reactLogo.png"
                        alt="Location Icon"
                        className="location-icon"
                    />
                    <span className="location">{props.location} </span>
                    <a href="google.com" className="google-map-link">{props.googleMapLink}</a>
                    <h3>{props.title}</h3>
                    <span className="start-date">{props.startDate} - </span>
                    <span className="end-date">{props.endDate}</span>
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Card