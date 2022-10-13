import { PlantsList } from "./Components/Plants/PlantsList"
import './App.css';
import RoundedCard from "./Components/Style/RoundedCard";
import Notifications from "./Components/Notifications/Notifications";
import { Link } from "react-router-dom";
import React from "react";

function App() {
  return (
        <div className='main'>
          <RoundedCard>
            <div className='header'>
              Header
            </div>
          </RoundedCard>
          <RoundedCard>
            <Notifications />
          </RoundedCard>
          <RoundedCard>
              <PlantsList />
              <div className="button-app">
                <button className="add-new-plant-button-app" >
                  <Link to="/form"> Registrar planta </Link>
                </button>
              </div>

          </RoundedCard>
          <RoundedCard>
            <div className='footer'>
              Footer
            </div>
          </RoundedCard>
        </div>
  );
}

export default App;
