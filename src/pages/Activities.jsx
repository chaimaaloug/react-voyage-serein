import Title from "../components/Title/Title"
import Button from "../components/Button/Button"
import ActivityChanger from "../components/Range/ActivityChanger";
import {useNavigate} from 'react-router-dom';

const Activities = () => {

    const navigate = useNavigate();

    const navigateToLoading = () => {
        navigate('/loading');
    };
   
    return (
        <div className="l-activities__container">
            <div className="l-activities__progressBar">
                <div className="l-activities__progressBarFill Fill85"></div>
            </div>
            <div className="l-activities__content">
                <p className="l-activities__step">3/4</p>
                <Title title="Vous avez envie de"/>
                <ActivityChanger />   
            </div>
            <div className="l-activities__btn">
                <Button text="Valider mes envies" onClick = {navigateToLoading}/>
            </div>
        </div>
    )
}

export default Activities;