import Plant from "./Plant";
import "./PlantsList.css";
import { useEffect, useState } from "react";
import PlantAPI from "../../API/PlantAPI";


export const PlantsList = () => {
    const [plantsList, setPlantsList] = useState([]);  

    useEffect(() => {
        PlantAPI.getAll()
        .then(function (response) {
            setPlantsList(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }, [])

    console.log(plantsList);

    /**
     *                  key={plant.id}
                        name={plant.name}
                        picture={plant.picture}
                        specie={plant.specie}
                        characteristic={plant.characteristic}
                        care={plant.care}
                        wateringInterval={plant.wateringInterval}
                        lastWateredDate={plant.lastWateredDate}
     */

    return(
        <div className="plants">
            <div className="disclose-plants">                
            {
                plantsList.map((plant) => (
                    <Plant 
                        key={plant.id}
                        name={plant.name}
                        picture={plant.picture}
                        specie={plant.specie}
                        characteristic={plant.characteristic}
                        care={plant.care}
                        wateringInterval={plant.wateringInterval}
                        lastWateredDate={plant.lastWateredDate}
                    />
                ))
            }
            </div>
        </div>
    );
}

export default PlantsList;