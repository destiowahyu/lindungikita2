import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ShelterItem from '../components/ShelterItem';
import Header from '../components/Header';
import { fetchSheltersAction } from '../redux/actions/sheltersActions';
import { useSelector } from 'react-redux';

const ShelterList = ({ fetchSheltersAction }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const shelters = useSelector(state => state.shelters.shelters);

  useEffect(() => {
    fetchSheltersAction();
  }, [fetchSheltersAction]); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const filteredShelters = shelters.filter((shelter) => {
    if (typeof shelter.nama === 'string') {
      return shelter.nama.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return false;
  });

  return (
    <div className="bg-white">
      <Header />
      <div className="container py-10 px-7 md:px-24 lg:px-40 mt-20">
        <h1 className="text-3xl text-center font-bold mb-6">Daftar Lokasi Pengungsian</h1>

        {/* Search bar */}
        <div className="text-center mb-6">
          <input
            type="text"
            placeholder="Cari lokasi pengungsian disini"
            value={searchTerm}
            onChange={handleSearchChange}
            className="text-center max-w-xl px-4 py-2 border border-gray-300 rounded-3xl w-full transition duration-300 ease-in-out hover:bg-gray-100"
          />
        </div>

        {/*Daftar Lokasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredShelters.length > 0 ? (
            filteredShelters.map((shelter) => (
              <ShelterItem key={shelter.id} shelter={shelter} />
            ))
          ) : (
            <p className="text-gray-600">Tidak ada lokasi pengungsian yang cocok dengan pencarian Anda.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { fetchSheltersAction })(ShelterList);
