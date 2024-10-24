import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { LocationProps, FormInputs } from '../types/types';

const LocationSearch: React.FC<LocationProps> = ({ setLocation }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const key = import.meta.env.VITE_API_KEY;

    const fetchLocation = async (data: FormInputs) => {
        const { query } = data;
        try {
            const response = await axios.get('https://geocode.maps.co/search', {
            params: {
                q: query,
                api_key: key,
            },
            });
            
            const locationData = response.data[0];
            setLocation({
            lat: locationData.lat,
            lon: locationData.lon,
            display_name: locationData.display_name,
            });

            console.log(locationData);
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
        };

  return (
    <div className="flex justify-between items-center p-4 m-4">
      <span className="hidden font-main text-[1.5rem] text-right font-bold text-[#20211a] lg:block">CGX Takehome</span>
      <form onSubmit={handleSubmit(fetchLocation)} className="flex items-center justify-left">
        <div>
          <input className="font-main bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id="query" {...register('query', { required: 'This field is required' })} />
          {errors.query && <p>{errors.query.message}</p>}
        </div>
      </form>
    </div>
  );
};

export default LocationSearch;
