import React from 'react';
import { WeatherData } from '../types/types';
import { temperatureBackground, temperatureIcon } from './utils/TemperatureUtils';

interface CurrentWeatherProps {
  currentWeather: WeatherData;
  location: string
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather, location }) => {
  return (
    <div className={`flex items-center justify-center p-8 m-8 rounded-md flex-col lg:justify-end lg:items-start lg:h-[400px] shadow-lg ${temperatureBackground(currentWeather.temperature)}`}>
      <div className="hidden lg:block lg:mb-[-20px]">{temperatureIcon(currentWeather.temperature)}</div>
      <div className="flex items-center justify-center border-slate-700 border-8 rounded-full w-[16rem] h-[16rem] lg:w-auto lg:h-auto lg:border-none">
        <span className="font-main text-[#20211a] font-bold text-[5rem] lg:text-[4rem] lg:mb-[-30px]">{currentWeather.temperature}°C</span>
      </div>
      <span className="font-secondary text-[#20211a] text-lg text-center pt-4">{location}</span>
    </div>
  );
};

export default CurrentWeather;