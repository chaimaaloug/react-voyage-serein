
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import style from "./Onboarding.module.scss";
import {useNavigate} from 'react-router-dom';

const OnboardingHasard = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className={style.container}>
                <div className={style.text}>
                    <Title title="“Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée...”"/>
                    <p className={style.description}>Astérix et Obélix mission Cléopâtre</p>
                    <Button 
                        text="C’est preque prêt !"
                    />
                </div>
            </div>    
        </>
    );
}

export default OnboardingHasard;