import React from 'react'
import axios from "axios"
import {useState, useEffect} from 'react'

function ClimAppScreem() {
const [latlon, setLatlon] = useState()
const [clima, setClima] = useState()
const [temperatura, setTemperatura] = useState("Celcius")
const iconsList = [
    "01n@4x.png",
    "02n@4x.png",
    "03n@4x.png",
    "04n@4x.png",
    "09n@4x.png",
    "10n@4x.png",
    "11n@4x.png",
    "13n@4x.png",
    "50n@4x.png",
  ];
 
  let weatherIcon = iconsList[8];
  switch (clima?.weather[0].description) {
    case "clear sky":
      weatherIcon = iconsList[0];
      break;

    case "few clouds":
      weatherIcon = iconsList[1];
      break;

    case "scattered clouds":
      weatherIcon = iconsList[2];
      break;

    case "broken clouds":
      weatherIcon = iconsList[3];
      break;

    case "shower rain":
      weatherIcon = iconsList[4];
      break;

    case "rain":
      weatherIcon = iconsList[5];
      break;

    case "thunderstorm":
      weatherIcon = iconsList[6];
      break;

    case "snow":
      weatherIcon = iconsList[7];
      break;

    case "mist":
      weatherIcon = iconsList[8];
      break;
  }


useEffect(() => {
  const success = (posicion)=>{
    const latitud = posicion.coords.latitude 
    const longitud = posicion.coords.longitude 

    setLatlon({latitud, longitud})
  }
  navigator.geolocation.getCurrentPosition(success)
}, [])

useEffect(() => {
  if(latlon != undefined){
    const API_KEY = "5f961bf11bc80bee3a05cb5da85cad2a";
    const city = "villavicencio"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;
    
    axios
    .get(URL)
    .then((res)=>setClima(res.data))
    .catch((err) => console.log(err))
}
}, [latlon])

const unidadesDeMedida = () =>{
    if(unidadesDeMedida=="Celcius"){
        setTemperatura("Fahrenheit")
    }else{
        setTemperatura("Celcius")
    }

}

console.log(latlon)
console.log(clima)

const valorTemp = () =>{
  if(temperatura=='Celcius'){
    return ((clima?.main.temp)).toFixed(2) + ' Celcius'
  }else{
    return ((clima?.main.temp)).toFixed(2) + ' F'
  }
}

const minTemp=()=>{
  return ((clima?.main.temp_min)).toFixed(2)
}

const maxTemp =()=>{
  return ((clima?.main.temp_max)).toFixed(2)
}
  return (
    <div>
    <div>
        <div>
            <h1>ClimApp</h1>
            <h2>Pais: {clima?.sys.country}</h2>
            <h3>Ciudad: {clima?.name}</h3>
        </div>
        <div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weatherIcon}`}></img>
            </div>
            <div>
                <h3>Temperatura: {valorTemp()}</h3>
                <h4>Temperatura minima: {minTemp()}</h4>
                <h4>Temperatura maxima: {maxTemp()}</h4>
                <div>
                    <i></i>
                    <h4></h4>
                </div>
                <div>
                    <i></i>
                    <h4></h4>
                </div>
                <div>
                    <i></i>
                    <h4></h4>
                </div>
            </div>
        </div>
        <div>
            <h2></h2>
            <div></div>
        </div>
    </div>
    </div>
  )
}

export default ClimAppScreem