import { useState } from "react"
import Search from "./components/Search";
import InfoCard from "./components/InfoCard";

function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        FeelsLike: "321.35",
        City: "ccw",
        Temp: "14",
        Humidity: "28",
        TempMax: "316.15",
        TempMin: "316.15",
        GrundLevel: "975",
        SeaLevel: "989",
        Weather: "scattered clouds",
        Wind: {
            deg: "187",
            gust: "3.94",
            speed: "5.23",
        },
        Country: "PK",
    });
 const updateInfo =(newResults)=>{
     setWeatherInfo(newResults);
 }

  return (
   <>
    <Search updateInfo={updateInfo}/>
    <InfoCard info={weatherInfo}/>
   </>
  )
}

export default WeatherApp