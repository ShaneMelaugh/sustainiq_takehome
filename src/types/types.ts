export interface WeatherData {
    temperature?: number;
    apparent_temperature?: number;
    wind_speed?: number;
    wind_gusts?: number;
    wind_direction?: number;
    cloud_cover?: number;
    interval?: number;
    rain?: number;
    time?: number;
  }
  
  export interface WeeklyWeatherData {
    temperature: number;
    time: number;
  }
  
  export interface WeatherFetcherProps {
    lat: number;
    lon: number;
    name: string;
  }

  export interface LocationFetcherProps {
    setLocation: (location: { lat: number; lon: number; display_name: string }) => void;
  }
  
  export interface FormInputs {
      query: string;
    }