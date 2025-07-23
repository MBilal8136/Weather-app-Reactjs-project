import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import PropTypes from 'prop-types';

function InfoCard({ info }) {

    const Hot_Url = "https://media.istockphoto.com/id/998390080/photo/lavender-field-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=b4BJWKaI-_0Gt5sHyyPVyZGH6w9P_dye0VdNYqUjJGY=";
    const cold_Url = "https://plus.unsplash.com/premium_photo-1668792545129-72d876248c1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMGltYWdlfGVufDB8fDB8fHww";
    const rain_Url = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    
  return (
    <Card style={{backgroundColor:"#cccccc"}} sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={info.Humidity >80 ? rain_Url: (info.Temp > 15 ? Hot_Url : cold_Url)}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.City } &nbsp;&nbsp; {info.Humidity >80 ? <CloudySnowingIcon/> : info.Temp > 15 ? <SunnyIcon style={{color:'yellow'}}/> :<AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Weather = {info.Weather}</p>
         <p>Temperature = {info.Temp}&deg;C</p>
         <p>Max Temperature = {info.TempMax}&deg;C</p>
         <p>Min Temperature = {info.TempMin}&deg;C</p>
         <p>Humidity = {info.Humidity}</p>
         <h3 >Wind</h3>
         <p>Wind Speed = {info.Wind.speed}</p>
         <p>Wind Gust = {info.Wind.gust}</p>
         <p>Wind Deg = {info.Wind.deg}</p>
         <p>Country = {info.Country}</p>
         <p>The weather can be described as <i>{info.Weather}</i> and feels like {info.Temp}&deg;C</p>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}
  InfoCard.propTypes= {
     info: PropTypes.func.isRequired

}
export default InfoCard