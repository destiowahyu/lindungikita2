import React from 'react';
import notfoundjpg from '../assets/notfound.jpg';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-6 mt-20 text-center">
      <h1 className="text-3xl font-bold">404 - Halaman Tidak Ditemukan</h1>
      <p className="mt-2">Maaf, halaman yang Anda cari tidak ditemukan.</p>
      <div className="flex justify-center my-4">
      <img src={notfoundjpg} alt="notfoundjpg" className="w-60 md:w-1/4"/>
    </div>
    </div>
  );
};

export default NotFound;
