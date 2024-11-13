import React, { useState } from 'react';
import { Card } from '../types/types';

const Cards: React.FC = () => {
const Stats: Card[] = [
    { title: 'Total Distance', desc: 'The total distance traveled by your company over the past month was 5,432 miles, which aligns with typical operational patterns and remains within the expected range.' },
    { title: 'KGCO2e', desc: 'Your companies carbon emissions for the month amounted to 12,345 kgCO2e, reflecting the current energy usage and transportation habits, which is in line with previous performance levels.' },
    { title: 'TCO2e', desc: 'The total carbon footprint for your company this quarter was 5.67 tons of CO2e, which is consistent with industry trends and falls within the target emission reduction range.' },
    ];
  return (
    <div className="grid grid-cols-12 gap-4 mb-8">
        {
            Stats.map((stat) => {
                return (
                    <div className="col-span-12 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 lg:col-span-4">
                    <h5 className="mb-2 text-2xl font-bold font-main tracking-tight text-gray-900">{stat.title}</h5>
                    <p className="font-normal font-secondary text-gray-700">{stat.desc}</p>
                  </div>
                )
            })
        }
    </div>
  );
};

export default Cards;