import React from 'react';
import { WeeklyWeatherData } from '../types/types';
import { temperatureBackground, temperatureIcon } from './utils/TemperatureUtils';

interface WeeklyWeatherProps {
  weeklyWeather: WeeklyWeatherData[];
}

const WeeklyWeather: React.FC<WeeklyWeatherProps> = ({ weeklyWeather }) => {
  return (
    <div className="m-8 mt-4 p-4 rounded-md shadow-lg">
      <span className="font-main text-[1.5rem] text-right font-bold text-[#20211a]">The Week Ahead:</span>
      <div className="flex flex-row rounded overflow-x-scroll lg:flex-col lg:overflow-x-hidden lg:overflow-y-scroll xl:max-h-[250px]">
          {weeklyWeather.map((data, index) => (
          <div key={index} className={`flex items-center flex-row justify-between rounded-md p-2 m-1 min-w-[200px] ${temperatureBackground(data.temperature)}`}>
          {temperatureIcon(data.temperature)}
          <div className="flex flex-col px-2">
              <span className="font-main text-[1.5rem] text-right font-bold text-[#20211a]">{data.temperature}°C</span>
              <span className="font-secondary capitalize text-xs text-right">{data.time}</span>
          </div>
          </div>
          ))}
      </div>
    </div>
  );
};

export default WeeklyWeather;