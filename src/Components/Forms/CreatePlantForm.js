import "./CreatePlantForm.css";
import { Link } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";
import PlantAPI from "../../API/PlantAPI";

const CreatePlantForm = () => {
    const [classType, setClassType] = useState("");
    const [specie, setSpecie] = useState("");
    const [wateringInterval, setWateringInterval] = useState("");
    const [picture, setPicture] = useState("");
    const [characteristic, setCharacteristic] = useState("");
    const [care, setCare] = useState("");

    function handleSubmit() {
        const plantDetails = {
            classType,
            specie,
            wateringInterval,
            picture,
            characteristic,
            care
        };
        createPlant(plantDetails);

        console.log(classType);
        console.log(specie);
        console.log(wateringInterval);
        console.log(picture);
        console.log(characteristic);
        console.log(care);    
    }


    function createPlant(plantDetails) {
        PlantAPI.create(plantDetails);          
      }

    return(
        <form onSubmit={ handleSubmit } className="plant-form">
            <div className="class-species-div">
                <div className="species-div">
                    <label>Clase</label>
                    <input type="text" onChange={ setClassType } required></input>
                </div>
                <div className="class-div"> 
                    <label>Especie</label>
                    <input type="text" onChange={ setSpecie } required></input>                   
                </div>
            </div>
            <div className="class-species-div">
                <div className="species-div">
                <FormControl>
                    <FormLabel 
                        id="demo-radio-buttons-group-label">
                        Intervalo de regado
                    </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="1 semana"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="1 semana" control={<Radio />} label="1 semana" />
                            <FormControlLabel value="2 semanas" control={<Radio />} label="2 semanas" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="class-div"> 
                    <label for="file">Imagen</label>
                    <input type="file" id="file" name="plant-image" onChange={ setPicture } required></input>                   
                </div>
            </div>
            <div className="characteristics-care-div">
                <label className="characteristics-care-label">Características</label>
                <textarea 
                    className="characteristics-care-input" rows="5" type="text"
                    onChange={ setCharacteristic } required
                />
            </div>
            <div className="characteristics-care-div">
                <label className="characteristics-care-label">Cuidados</label>
                <textarea 
                    className="characteristics-care-input" rows="5" type="text"
                    onChange={ setCare } required
                />
            </div>
            <div className="form-buttons">
                <button className="form-button">
                    <Link to="/"> Cancelar </Link>  
                </button>
                <input className="form-button" type="submit" value="Registrar" />	
            </div>
        </form>
    );
}

export default CreatePlantForm;