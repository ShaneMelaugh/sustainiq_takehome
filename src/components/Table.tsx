import React, { useState } from 'react';
import { TableData } from '../types/types';

const data: TableData[] = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  location: `Location ${index + 1}`,
  deliveryDate: new Date(2024, 10, index + 1).toLocaleDateString('en-GB'),
  name: `Name ${index + 1}`,
  company: `Company ${index + 1}`,
  distance: parseFloat((Math.random() * 100).toFixed(2)),
  kgCO2e: parseFloat((Math.random() * 10).toFixed(2)),
  tCO2e: parseFloat((Math.random() * 5).toFixed(2)),
}));

const Table: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const index = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(index, index + rowsPerPage);

  return (
    <div className="container mx-auto p-4 overflow-x-auto bg-white border border-gray-200 rounded-lg shadow my-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="">
            <th className="px-6 lg:py-3">Record ID</th>
            <th className="px-6 lg:py-3">Location</th>
            <th className="px-6 lg:py-3">Delivery Date</th>
            <th className="px-6 lg:py-3">Name</th>
            <th className="px-6 lg:py-3">Company</th>
            <th className="px-6 lg:py-3">Distance</th>
            <th className="px-6 lg:py-3">KGCO2e</th>
            <th className="px-6 lg:py-3">TCO2e</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((row) => (
            <tr key={row.id} className="bg-white border-b">
              <td className="px-6 py-2 lg:py-4">{row.id}</td>
              <td className="px-6 py-2 lg:py-4">{row.location}</td>
              <td className="px-6 py-2 lg:py-4">{row.deliveryDate}</td>
              <td className="px-6 py-2 lg:py-4">{row.name}</td>
              <td className="px-6 py-2 lg:py-4">{row.company}</td>
              <td className="px-6 py-2 lg:py-4">{row.distance}</td>
              <td className="px-6 py-2 lg:py-4">{row.kgCO2e}</td>
              <td className="px-6 py-2 lg:py-4">{row.tCO2e}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500'}`}
        >
          Previous
        </button>
        
        <span className="text-sm px-8">
          Page {currentPage} of {totalPages}
        </span>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
