import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,    
} from './../../../constants/weather';
import './styles.css';
const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]:"rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
    
};

const getWeatherIcons = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>;
    else
        return <WeatherIcons className="wicon"  name={"day-sunny"} size={sizeIcon}/>;
}
const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperatureCont">
       {
           getWeatherIcons(weatherState)
       }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperature">{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string.isRequired,

};

export default WeatherTemperature;