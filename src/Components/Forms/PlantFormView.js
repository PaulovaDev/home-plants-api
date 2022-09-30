import CreatePlantForm from "./CreatePlantForm";
import React from "react";
import FormCard  from "../Style/FormCard";
import "./PlantFormView.css";

const PlantFormView = () => {
    return(
            <FormCard className="plant-form-view">
                <div >
                    <h1>Registra tu nueva planta</h1>
                    <CreatePlantForm></CreatePlantForm>
                </div>
            </FormCard>
    );
}

export default PlantFormView;