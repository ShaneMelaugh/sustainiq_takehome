import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between items-center p-4 m-4">
      <Link to="/">
      <span className="font-main text-right font-bold text-[#20211a] text-md lg:block lg:text-[1.5rem]">SustainIQ Takehome</span>
      </Link>
      <div className="flex flex-row items-center justify-center">

      {location.pathname !== '/' && (
      <Link to="/">
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4">Dashboard</button>
    </Link>
      )}

      {location.pathname !== '/visit' && (
      <Link to="/visit">
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4">Plan New Visit</button>
    </Link>
      )}
      </div>
    </div>
  );
};

export default Header;
