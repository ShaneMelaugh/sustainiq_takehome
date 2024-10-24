import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeeklyWeather from './WeeklyWeather';
import CurrentWeather from './CurrentWeather';
import CurrentWeatherDetails from './CurrentWeatherDetails';
import { WiDayHaze } from "react-icons/wi";
import { WeatherData, WeeklyWeatherData, WeatherFetcherProps } from '../types/types';

const Weather: React.FC<WeatherFetcherProps> = ({ lat, lon, name }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weeklyWeather, setWeeklyWeather] = useState<WeeklyWeatherData[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWeather = async () => {
      if (lat && lon) {
        setIsLoading(true);
        try {
            const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,rain,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&wind_speed_unit=mph&daily=temperature_2m_max`, {
            });

          const current = response.data.current;
          const currentUnits = response.data.current_units;
          const weekly = response.data.daily
          setWeather({
            temperature: current.temperature_2m,
            apparent_temperature: current.apparent_temperature + currentUnits.apparent_temperature,
            rain: current.rain + currentUnits.rain,
            cloud_cover: current.cloud_cover + currentUnits.cloud_cover,
            wind_direction: current.wind_direction_10m + currentUnits.wind_direction_10m,
            wind_speed: current.wind_speed_10m + currentUnits.wind_speed_10m,
            wind_gusts: current.wind_gusts_10m + currentUnits.wind_gusts_10m,
          });
          const week = weekly.temperature_2m_max.map((temp: number, index: number) => ({
            temperature: temp,
            time: weekly.time[index],
          }));
          setWeeklyWeather(week);

          setIsLoading(false);
        } catch (error) {
          console.error('Theres been a problem getting the data:', error);
          setIsLoading(false);
        }
      }
    };

    fetchWeather();
  }, [lat, lon]);

  if (isLoading) {
    return (
        <div className="flex items-center justify-center flex-col">
        <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="font-main text-2xl font-bold text-[#20211a] mt-[20px]">Loading Weather Data...</span>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="flex items-center justify-center flex-col">
        <WiDayHaze size={200} color="#FFC300" />
        <div className="flex flex-col items-center justify-center mt-[-40px]">
          <span className="font-main text-2xl font-bold text-[#20211a]">No weather data available.</span>
          <span className="font-secondary text-sm text-[#20211a]">Search for a location in the top right</span>
        </div>
      </div>
  );
  }

  return (
    <div>
    {
    weather ? (
      <CurrentWeather currentWeather={weather} location={name} />
    ) : (
      <p>No weather data available.</p>
    )
    }
    <div className="grid grid-cols-1 lg:grid-cols-2">
    {
    weather ? (
      <CurrentWeatherDetails currentWeather={weather} />
    ) : (
      <p>No weather data available.</p>
    )
    }
    {
    weeklyWeather ? (
      <WeeklyWeather weeklyWeather={weeklyWeather} />
    ) : (
      <p>No weather data available.</p>
    )
    }
    </div>
  </div>
  );
};

export default Weather;
