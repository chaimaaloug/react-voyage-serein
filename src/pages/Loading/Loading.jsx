import React from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import {useNavigate} from 'react-router-dom';


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