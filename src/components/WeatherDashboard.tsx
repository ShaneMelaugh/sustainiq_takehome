import React, { useState } from 'react';
import LocationSearch from './LocationSearch';
import Weather from './Weather';

const WeatherDashboard: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number; display_name: string }>({
    lat: 0,
    lon: 0,
    display_name: ''
  });

  return (
    <div>
      <LocationSearch setLocation={setLocation} />
      <Weather lat={location.lat} lon={location.lon} name={location.display_name} />
    </div>
  );
};

export default WeatherDashboard;