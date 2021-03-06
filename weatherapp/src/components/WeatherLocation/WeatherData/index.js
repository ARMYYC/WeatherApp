import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,    
} from './../../../constants/weather';
import './styles.css';
const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={20} 
            weatherState ={CLOUDY}/>
        <WeatherExtraInfo humidity={80} wind ={"10 ms"}/>
    </div>
);

export default WeatherData;