import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ updateInfo }) {
    const [city, setCity] = useState('');
    const [error, setError] = useState(false);

    const API_KEY = "16c31d894b347004ea48ab0a058e225c";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   
    const genrateWeatherInfo = async ()=>{
        try{
        let reponse = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let ReponseJson = await reponse.json();
        console.log(ReponseJson);

        let results = { 
            FeelsLike: ReponseJson.main.feels_like,
            City: ReponseJson.name,
            Temp: ReponseJson.main.temp,
            Humidity: ReponseJson.main.humidity,
            TempMax: ReponseJson.main.temp_max,
            TempMin: ReponseJson.main.temp_min,
            Weather: ReponseJson.weather[0].description,
            Wind: ReponseJson.wind,
            Country: ReponseJson.sys.country,

        }
        return results;
    }
    catch(e){
           console.log(e)
    }
    }

    const handleSubmit = async (e) => {
        try{
        e.preventDefault();
        console.log(city);
        setCity('');
    
      let info =await genrateWeatherInfo();
         updateInfo(info)
       
        }
        catch(err){
            setError(err)
        }
    }

    const handleChange = (e) => {
        setCity(e.target.value);
    }
  return (
    <div style={{marginBottom:"20px"}}>
        <h3>Search City check weather</h3>
    <form onSubmit={handleSubmit}>
    <TextField id="city" label="Enter City Name" variant="outlined"  required value={city} onChange={handleChange}/> <br /><br />
    <Button variant="contained" type="submit">Search</Button>
    </form>

    {error && <p style={{color:"red"}}>City Not Found</p>}
    </div>
  )
}

Search.propTypes = {
  updateInfo: PropTypes.func.isRequired,
};

export default Search