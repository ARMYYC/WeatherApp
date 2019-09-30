import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <spam className="extraInfoText">{`Humedad: ${humidity} % - `}</spam>
        <spam className="extraInfoText">{`Vientos: ${wind}`}</spam>    
    </div>
);

WeatherExtraInfo.propTypes ={
    humidity:PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;