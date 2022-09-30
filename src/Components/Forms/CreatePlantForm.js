import { useState } from "react";
import "./CreatePlantForm.css";
import { Link } from "react-router-dom";

const CreatePlantForm = () => {
    return(
        <form className="plant-form">
            <div className="class-species-div">
                <div className="species-div">
                    <label>Clase</label>
                    <input type="text"></input>
                </div>
                <div className="class-div"> 
                    <label>Especie</label>
                    <input type="text"></input>                   
                </div>
            </div>
            <div className="characteristics-care-div">
                <label className="characteristics-care-label">Características</label>
                <textarea className="characteristics-care-input" rows="5" type="text"></textarea>
            </div>
            <div className="characteristics-care-div">
                <label className="characteristics-care-label">Cuidados</label>
                <textarea className="characteristics-care-input" rows="5" type="text"></textarea>
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