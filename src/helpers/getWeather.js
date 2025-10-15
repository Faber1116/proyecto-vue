import axios from "axios";
const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=10.3997&longitude=-75.5144&current=temperature_2m&timezone=auto";

export const getTemperatura = async () => {
  const response = await axios.get(API_URL);
  const nuevaTemperatura = response.data.current.temperature_2m;
  return nuevaTemperatura;
}
