
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import style from "./Onboarding.module.scss";
import {useNavigate} from 'react-router-dom';

const Onboarding = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.text}>
                    <Title title="Imprégnez vous de votre environnement"/>
                    <p className={style.description}>Nous vous présenterons une sélection de vidéos d'ambiance qui représentent différents styles de voyage. <br />
                        Vous pourrez ainsi choisir le style qui correspond le mieux à vos aspirations et à vos préférences de voyage. <br />
                        Une fois que vous aurez sélectionné votre vidéo préférée, nous utiliserons cette information comme point de départ <br /> pour personnaliser votre itinéraire.</p>
                    <p className={style.parag}> Notre conseil : Mettez vos écouteurs pour encore plus d’immersion.</p>
                    <Button 
                        text="Allons-y !"
                        onClick = {navigateToHome}
                    />
                </div>
            </div>    
        </>
    );
}

export default Onboarding;