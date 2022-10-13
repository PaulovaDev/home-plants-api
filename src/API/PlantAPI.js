import axios from 'axios';
import apiURL from './apiConfig.js';

const PlantAPI = {
  getAll: async () => await axios.get(`${apiURL}/home/plants`),
  //create: async (plantDetails) => await axios.post(`${apiURL}/form`, plantDetails),
  //get: async (id) => await axios.get(`${apiURL}/events/${id}`),
  //edit: async (pollEvent) =>
    //await axios.put(`${apiURL}/events/${pollEvent.eventId}`, pollEvent),
};

export default PlantAPI;
