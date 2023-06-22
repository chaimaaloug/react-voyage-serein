
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";

const OnboardingHasard = () => {

    return (
        <>
            <div className="l-onboarding__container">
                <div className="l-onboarding__progressBar">
                    <div className="l-steps__progressBarFill Fill25" ></div>
                </div>
                <div className="l-onboarding__content">
                    <Title title="“Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée...”"/>
                    <p className="l-onboarding__content-description">Astérix et Obélix mission Cléopâtre</p>
                    <Button 
                        text="C’est preque prêt !"
                    />
                </div>
            </div>    
        </>
    );
}

export default OnboardingHasard;