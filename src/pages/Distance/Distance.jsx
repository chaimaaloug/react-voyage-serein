import React from "react";
import Button from "../../components/Button/Button";
// import Jauge from "../../components/Jauge/Jauge";
import Title from "../../components/Title/Title";
// import style from "./Distance.module.scss";
import {useNavigate} from 'react-router-dom';
// import { Slider } from "@material-ui/core";
import TextChanger from "../../components/Range/TextChanger";



const Distance = () => {

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };
    
    // const [value, setValue] = React.useState(30);
      
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };



    return (
        <>
            <div className="l-steps">
                <div className="l-steps__progressBar">
                    <div className="l-steps__progressBarFill Fill50" ></div>
                </div>
                <div className="l-steps__text">
                    <p className="l-steps__step">2/4</p>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Title title="Vous partez de " />
                        <label className="l-steps__selectCityLabel" htmlFor="ville">
                            Sélectionnez votre ville:
                            <input className="l-steps__selectCity" type="select" name="ville" id="ville" placeholder="Villizy-Villicoublay"/>
                        </label>
                    </div>
                    <Title title="et vous pourriez aller jusqu'au bout"/>
                    
                    <TextChanger/>


                    {/* <select name="distance" id="distance-select">
                        <option value="rue">de la rue</option>
                        <option value="region">de la région</option>
                        <option value="pays">de votre pays</option>
                        <option value="continent">du continent</option>
                        <option value="monde">du mooooooooonnnnndddeeee</option>
                    </select> */}
                    
                    {/* <div className="l-steps__distance">de la rue</div>
                    <input className="l-steps__jauge" type="range" defaultValue="0" min="0" max="4" step="1" onChange={handleChange}/> */}
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button 
                        text="Passez aux activités"
                        onClick = {navigateToHome}
                    />
                </div>
            </div>    
        </>
    );
}

export default Distance;