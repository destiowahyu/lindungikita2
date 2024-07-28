import React from 'react';
import { Link } from 'react-router-dom';

const ShelterItem = ({ shelter }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{shelter.nama}</h2>
      <p className="mb-2">{shelter.lokasi}</p>
      <p className="mb-4">Kapasitas: {shelter.kapasitas} orang</p>
      <Link
        to={`/shelters/${shelter.id}`}
        className="inline-block px-6 py-3 bg-gray-200 text-black font-semibold rounded-3xl shadow-md hover:text-[#147970] hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Detail
      </Link>
    </div>
  );
};

export default ShelterItem;
