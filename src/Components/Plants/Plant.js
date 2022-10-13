import "./Plant.css";
import RoundedCard from "../Style/RoundedCard";
import { useState } from "react";
import plants from "../../Assets/plants.jpeg";

const Plant = (props) => {
const [discloseMoreInfo, setDiscloseMoreInfo] = useState(false);

const toggleDiscloseMoreInfo = () => {
    setDiscloseMoreInfo(true);
}

const toggleDiscloseLessInfo = () => {
    setDiscloseMoreInfo(false);
}

    return(
        <RoundedCard className="plant-information">
            <div className="disclose-plant">                 
                <h2>{ props.name }</h2> 
                <img src={plants} alt="plant" className="plant-image"></img>
            </div>
            {
                discloseMoreInfo ? (
                    <div>
                        <div>
                            <h5>Especie:</h5>
                            <p>{ props.specie }</p>
                        </div>
                        <div>
                            <h5>Características:</h5>
                            <p>{ props.characteristic }</p>
                        </div>
                        <div>
                            <h5>Cuidados:</h5>  
                            <p>{ props.care }</p>                          
                        </div>
                        <div>
                            <h5>Intervalo de regado:</h5>  
                            <p>{ props.wateringInterval }</p>                          
                        </div>
                        <div>
                            <h5>Último regado:</h5>  
                            <p>{ props.lastWateredDate }</p>                          
                        </div>
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