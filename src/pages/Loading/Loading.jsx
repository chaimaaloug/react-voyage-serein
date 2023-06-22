import React from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import {useNavigate} from 'react-router-dom';
import chargement from "../../assets/Frame 1527.png";
import videoCharg from "../../assets/Morphing_1.mp4";
import LottieControl from "./LottieControl";


const Distance = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };


    return (
        <>
            <div className="l-steps">
                <div className="l-steps__progressBar">
                    <div className="l-steps__progressBarFill Fill90" ></div>
                </div>
                <div className="l-steps__text">
                    <img src={chargement} alt="" />
                    {/* <script type= "module" src="https://unpkg.com/@dotlottie/player-component@1.0.0/dist/dotlottie-player.js"></script>
                    <dotlottie-player autoplay loop mode="normal" src="https://static9.lottiefiles.com/lotties/01_ramen_character.lottie" style={{ width: "320px", height:"320px" }}></dotlottie-player> */}
                    <LottieControl />

                    <video src={videoCharg} autoPlay="true"></video>
                    <p className="l-steps__step">4/4</p>
                    <Title title="Vos réponses m'ont inspiré"/>
                    <p className="l-steps__description">Encore quelques instants avant de découvrir vos itinéraires de rêves.</p>
                    <Button
                        text="C'est presque prêt"
                        onClick = {navigateToHome}
                    />
                </div>
            </div>
        </>
    );
}

export default Distance;