import CreatePlantForm from "../Forms/CreatePlantForm";
import Plant from "./Plant";
import "./Plants.css";


const Plants = () => {
    return(
        <div className="plants">
            <div className="disclose-plants">
                    <Plant />
                    <Plant />
                    <Plant />
                    <Plant />
                    <Plant />
                    <Plant />
            </div>
        </div>
    );
}

export default Plants;