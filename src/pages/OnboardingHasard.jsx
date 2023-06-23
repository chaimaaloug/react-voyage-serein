
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import {useNavigate} from 'react-router-dom';

const OnboardingHasard = () => {

    const navigate = useNavigate();

    const navigateToDestination = () => {
        navigate('/destination');
    };

    return (
        <>
            <div className="l-onboardinghasard__container">
                <div className="l-onboarding__progressBar">
                    <div className="l-steps__progressBarFill Fill25" ></div>
                </div>
                <div className="l-onboarding__content">
                    <Title title="“Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée...”"/>
                    <p className="l-onboarding__content-description">Astérix et Obélix mission Cléopâtre</p>
                    <Button 
                        text="C’est prêt !"
                        onClick={navigateToDestination}
                    />
                </div>
            </div>    
        </>
    );
}

export default OnboardingHasard;