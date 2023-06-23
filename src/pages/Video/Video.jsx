import React from "react";
import Button from "../../components/Button/Button";
// import Jauge from "../../components/Jauge/Jauge";
import Title from "../../components/Title/Title";
// import style from "./Distance.module.scss";
import { useNavigate } from 'react-router-dom';
// import { Slider } from "@material-ui/core";
import TextChanger from "../../components/Range/TextChanger";
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo";
import TabsBar from "../../components/TabsBar/TabsBar";
import Tab from "../../components/Tab/Tab";
import VideoControl from "../../assets/control-video.png"



const Distance = () => {

    const navigate = useNavigate();

    const navigateToActivities = () => {
        navigate('/activities');
    };

    // const [value, setValue] = React.useState(30);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };



    return (
        <div className="l-video">
            <BackgroundVideo url="https://www.youtube.com/embed/Hco5Y8NJsac" />
            <div className="l-video__tabs">
                <TabsBar>
                    <Tab text="Univers 1" active />
                    <Tab text="Univers 2" />
                    <Tab text="Univers 3" />
                </TabsBar>
            </div>
            <div className="l-video__controls">
                <img src={VideoControl} alt="" />
            </div>
            <div className="l-video__next-button">
                <Button outline text="J'ai fait mon choix" />
            </div>
        </div>
    );
}

export default Distance;