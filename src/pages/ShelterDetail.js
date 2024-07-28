import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import shelters from '../data/shelters';
import Header from '../components/Header';
import 'swiper/swiper-bundle.css';
import './ShelterDetail.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ShelterDetail = () => {
  const { id } = useParams();
  const shelter = shelters.find((shelter) => shelter.id === parseInt(id));
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  if (!shelter) {
    return <p>Lokasi pengungsian tidak ditemukan.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setIsFormOpen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="container py-10 px-7 md:px-24 lg:px-40 mt-20">
        <h1 className="text-3xl font-bold mb-4">{shelter.nama}</h1>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full lg:w-2/3 mb-6 lg:mb-0">
            <div className="mb-2 flex">
              <strong className="w-1/3">Lokasi:</strong>
              <span className="w-2/3">{shelter.lokasi}</span>
            </div>
            <div className="mb-2 flex">
              <strong className="w-1/3">Alamat:</strong>
              <span className="w-2/3">{shelter.alamat}</span>
            </div>
            <div className="mb-2 flex">
              <strong className="w-1/3">Link Maps:</strong>
              <span className="w-2/3">
                <a href={shelter.linkMaps} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Klik disini</a>
              </span>
            </div>
            <div className="mb-2 flex">
              <strong className="w-1/3">Kapasitas:</strong>
              <span className="w-2/3">{shelter.kapasitas} orang</span>
            </div>
            <div className="mb-2 flex">
              <strong className="w-1/3">Fasilitas:</strong>
              <span className="w-2/3">{shelter.fasilitas.join(', ')}</span>
            </div>
            <div className="mb-2 flex">
              <strong className="w-1/3">Nomor yang bisa dihubungi:</strong>
              <span className="w-2/3">{shelter.nomor}</span>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay dengan delay 2 detik
              className="mySwiper"
            >
              {shelter.gambar.map((src, index) => (
                <SwiperSlide key={index}>
                  <img src={src} alt={`Gambar ${index + 1}`} className="w-full swiper-img" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <button
          onClick={() => setIsFormOpen(true)}
          className="hover:text-[#147970] hover:bg-gray-300 bg-gray-100 text-black py-4 px-6 font-semibold rounded-3xl hover:bg-gray-200 transition duration-300 mt-6"
        >
          Form Pengungsian
        </button>

        {isFormOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Form Pengungsian</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-800 font-bold mb-2">Nama Lengkap</label>
                  <input type="text" className="px-4 py-2 border border-gray-300 rounded-3xl w-full" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 font-bold mb-2">No HP</label>
                  <input type="text" className="px-4 py-2 border border-gray-300 rounded-3xl w-full" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 font-bold mb-2">Tanggal Lahir</label>
                  <input type="date" className="px-4 py-2 border border-gray-300 rounded-3xl w-full" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 font-bold mb-2">Alamat</label>
                  <input type="text" className="px-4 py-2 border border-gray-300 rounded-3xl w-full" required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 font-bold mb-2">Pekerjaan</label>
                  <input type="text" className="px-4 py-2 border border-gray-300 rounded-3xl w-full" required />
                </div>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    className="inline-block px-6 py-3 bg-[#c61212] text-[#fff] font-semibold rounded-3xl shadow-md hover:text-[#fff] hover:bg-[#f85b5b] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    onClick={() => setIsFormOpen(false)}
                  >
                    Tutup
                  </button>
                  <button
                    type="submit"
                    className="inline-block px-6 py-3 bg-gray-200 text-black font-semibold rounded-3xl shadow-md hover:text-[#fff] hover:bg-[#22a0db] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {isFormSubmitted && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Terima Kasih</h2>
              <p className='mb-6'>Data pengungsian Anda telah tersimpan.</p>
              <button
                className="inline-block px-4 py-2 bg-gray-200 text-black font-semibold rounded-3xl shadow-md hover:text-[#fff] hover:bg-[#bbbbbb] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
                onClick={() => setIsFormSubmitted(false)}
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShelterDetail;
