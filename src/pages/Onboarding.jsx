
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import {useNavigate} from 'react-router-dom';


const Onboarding = () => {

    const navigate = useNavigate();

    const navigateToVideos = () => {
        navigate('/video');
    };

    return (
        <>
            <div className="l-onboarding__container">
                <div className="l-onboarding__progressBar">
                    <div className="l-steps__progressBarFill Fill5" ></div>
                </div>
                <div className="l-onboarding__content">
                    <p className="l-onboarding__content-step">1/4</p>
                    <Title title="Imprégnez vous de votre environnement"/>
                    <p className="l-onboarding__content-description">Nous vous présenterons une sélection de vidéos d'ambiance qui représentent différents styles de voyage. <br />
                        Vous pourrez ainsi choisir le style qui correspond le mieux à vos aspirations et à vos préférences de voyage. <br />
                        Une fois que vous aurez sélectionné votre vidéo préférée, nous utiliserons cette information comme point de départ <br /> pour personnaliser votre itinéraire.</p>
                    <p className="l-onboarding__content-description"> Notre conseil : Mettez vos écouteurs pour encore plus d’immersion.</p>
                    <Button 
                        text="Allons-y !"
                        onClick = {navigateToVideos}
                    />
                </div>
            </div>    
        </>
    );
}

export default Onboarding;