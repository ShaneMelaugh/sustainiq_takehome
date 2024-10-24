import React from 'react';
import { WeatherData } from '../types/types';
import { WiThermometerExterior, WiThermometer, WiCloudy, WiWindy, WiDayRain, WiStrongWind, WiWindDeg } from "react-icons/wi";

interface CurrentWeatherProps {
  currentWeather: WeatherData;
}

const CurrentWeatherDetails: React.FC<CurrentWeatherProps> = ({ currentWeather }) => {

  const iconMapping: { [key: string]: JSX.Element } = {
    temperature: <WiThermometerExterior size={50} color='#20211a' />,
    apparent_temperature: <WiThermometer size={50} color='#20211a' />,
    cloud_cover: <WiCloudy size={50} color='#20211a'/>,
    rain: <WiDayRain size={50} color='#20211a'/>,
    wind_speed: <WiWindy size={50} color='#20211a' />,
    wind_gusts: <WiStrongWind size={50} color='#20211a'/>,
    wind_direction: <WiWindDeg size={50} color='#20211a'/>,
  };

  return (
    <div className=" m-8 mt-4 p-4 shadow-md rounded-lg">
      <span className="font-main text-[1.5rem] text-right font-bold text-[#20211a]">Details:</span>
      <div className="grid grid-cols-2 rounded overflow-hidden md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {
          Object.entries(currentWeather).map(([key, value], index) => (
            <div key={index} className="bg-[#f0f8ff] flex items-center flex-row justify-between rounded-md p-2 m-1">
              {iconMapping[key] || <WiCloudy size={40} />}
              <div className="flex flex-col px-2 py-4">
                <span className="font-main text-[1.5rem] text-right font-bold text-[#20211a]">{value !== undefined ? value : 'N/A'}</span>
                <span className="font-secondary capitalize text-xs text-right">{key.replace(/_/g, ' ')}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;