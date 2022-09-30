import "./Plant.css";
import RoundedCard from "../Style/RoundedCard";
import { useState } from "react";
import plants from "../../Assets/plants.jpeg";

const Plant = () => {
const [discloseMoreInfo, setDiscloseMoreInfo] = useState(false);

const toggleDiscloseMoreInfo = () => {
    setDiscloseMoreInfo(true);
}

const toggleDiscloseLessInfo = () => {
    setDiscloseMoreInfo(false);
}

    return(
        <RoundedCard>
            <div className="disclose-plant">Plant</div>
            <img src={plants} alt="plant" className="plant-image"></img>
            {
                discloseMoreInfo ? (
                    <div>
                        <p>Descripción</p>
                        <p>Cuidados</p>
                        <button className="show-button" onClick={ toggleDiscloseLessInfo }>Leer menos</button>
                    </div>
                ) : (
                    <button className="show-button" onClick={ toggleDiscloseMoreInfo }>Leer más</button>
                )
            }
        </RoundedCard>
    );
}

export default Plant;