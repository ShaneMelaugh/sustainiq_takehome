import React from 'react';
import Chart from '../components/Chart';
import Table from '../components/Table';
import Cards from '../components/Cards';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Cards/> 
      <Chart />
      <Table/>
    </div>
  );
};

export default Dashboard;