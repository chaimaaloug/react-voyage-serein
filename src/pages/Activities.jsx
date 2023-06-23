import Title from "../components/Title/Title"
import Button from "../components/Button/Button"
import ActivityChanger from "../components/Range/ActivityChanger";
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import back1 from '../assets/activities/back1.png'
import back2 from '../assets/activities/back2.png'
import back3 from '../assets/activities/back3.png'
import back4 from '../assets/activities/back4.png'
import back5 from '../assets/activities/back5.png'

const Activities = () => {

    const navigate = useNavigate();

    const navigateToLoading = () => {
        navigate('/loading');
    };

    const backgroundImages = [back1, back2, back3, back4, back5];
    const [currentBackground, setCurrentBackground] = useState(back1);

    useEffect(() => {
        const interval = setInterval(() => {
          // Get the next background image
          const currentIndex = backgroundImages.indexOf(currentBackground);
          const nextIndex = (currentIndex + 1) % backgroundImages.length;
          const nextBackground = backgroundImages[nextIndex];
    
          // Update the state to trigger a re-render with the new background image
          setCurrentBackground(nextBackground);
        }, 2000); // Change the background every 5 seconds
    
        return () => clearInterval(interval); // Clean up the interval on component unmount
      }, [backgroundImages, currentBackground]);
    
   
    return (
        <div className="l-activities__container"  style={{ backgroundImage: `url(${currentBackground})` }}>
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