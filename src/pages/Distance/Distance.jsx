import React from "react";
import Button from "../../components/Button/Button";
// import Jauge from "../../components/Jauge/Jauge";
import Title from "../../components/Title/Title";
// import style from "./Distance.module.scss";
import {useNavigate} from 'react-router-dom';
// import { Slider } from "@material-ui/core";

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
            <div className="l-s-container">
                <div className="text">
                    <p className="step">1/4</p>
                    <label style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Title title="Vous partez de " />
                        <input type="text" name="ville" id="ville" />
                    </label>
                    <Title title="et vous pourriez allez jusqu'au bout" style={{display: "flex", alignItems: "center", justifyContent: "center"}}/>
                    
                    
                    {/* <Jauge /> */}
                    {/* <Slider aria-label="Distance" value={value} onChange={handleChange} size="medium" /> */}
                    
                    <input style={{accentColor: "var(--bleu-marine-900)"}} type="range"/>


                    <p className="parag"> Notre conseil : Mettez vos écouteurs pour encore plus d’immersion.</p>
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