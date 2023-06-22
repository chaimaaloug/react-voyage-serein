import Title from "../components/Title/Title"
import Button from "../components/Button/Button"
import ActivityChanger from "../components/Range/ActivityChanger";

const Activities = () => {
   
    return (
        <div className="l-activities__container">
            <div className="l-activities__content">
                <Title title="Vous avez envie de"/>
                <ActivityChanger />   
                <Button text="Valider mes envies"/>
            </div>
        </div>
    )
}

export default Activities;