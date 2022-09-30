import Plants from "./Components/Plants/Plants"
import './App.css';
import RoundedCard from "./Components/Style/RoundedCard";
import Notifications from "./Components/Notifications/Notifications";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import PlantFormView from "./Components/Forms/PlantFormView";

function App() {
  return (
        <div className='main'>
          {console.log(window.location.href)}
          <RoundedCard>
            <div className='header'>
              Header
            </div>
          </RoundedCard>
          <RoundedCard>
            <Notifications />
          </RoundedCard>
          <RoundedCard>
              <Plants />
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
