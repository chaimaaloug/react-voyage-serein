import React from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import {useNavigate} from 'react-router-dom';
import videoCharg from "../../assets/Morphing_2.mp4";
import style from "./Loading.module.scss";


const Distance = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };


    return (
        <>
            <div className="l-steps">
                <div className="l-steps__progressBar">
                    <div className="l-steps__progressBarFill Fill100" ></div>
                </div>
                <div className="l-steps__text">
                    <video autoPlay muted playsInline loop width={"200px"} style={{ borderRadius: "50px"}}>
                        <source src={videoCharg} type="video/mp4" />
                    </video>
                    <p className="l-steps__step">4/4</p>
                    <Title title="Vos réponses m'ont inspiré"/>
                    <p className="l-steps__description">Encore quelques instants avant de découvrir vos itinéraires de rêves.</p>
                    
                    {/* <button type="button" className="l-steps__button" disabled>C'est presque prêt</button> */}
                    <button type="button" className="l-steps__button" onClick={navigateToHome}>C'est prêt !</button>
                </div>
            </div>
        </>
    );
}

export default Distance;