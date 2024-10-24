// temperatureUtils.ts
import { WiSnowWind, WiDaySunnyOvercast, WiDaySunny, WiHot } from "react-icons/wi";

// Function to get background color based on temperature
export const temperatureBackground = (temperature: any): string => {
  if (temperature <= 0) return 'bg-cold-gradient';
  if (temperature > 0 && temperature <= 15) return 'bg-mild-gradient';
  if (temperature > 15 && temperature <= 25) return 'bg-warm-gradient';
  if (temperature > 25) return 'bg-veryWarm-gradient';
  return 'bg-mild-gradient';
};

// Function to get icon based on temperature
export const temperatureIcon = (temperature: any): JSX.Element => {
  if (temperature <= 0) return <WiSnowWind size={60} />;
  if (temperature > 0 && temperature <= 15) return <WiDaySunnyOvercast size={60} />;
  if (temperature > 15 && temperature <= 25) return <WiDaySunny size={60} />;
  if (temperature > 25) return <WiHot size={60} />;
  return <WiDaySunny size={60} />;
};

