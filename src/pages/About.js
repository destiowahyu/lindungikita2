import React from 'react';
import logoabout from '../assets/logoabout.png';

const About = () => (
  <div className="p-4 bg-white min-h-screen">
    <div className="max-w-5xl mx-auto py-10 px-4 mt-20">
      <h1 className="text-3xl font-bold text-black mb-4">Tentang Aplikasi Lindungi Kita</h1>
      <p className="text-lg text-black mb-4">
        Aplikasi ini, Lindungi Kita, merupakan aplikasi pendataan lokasi pengungsian yang bertujuan untuk memberikan informasi akurat dan tepat waktu tentang lokasi-lokasi pengungsian saat terjadi bencana atau keadaan darurat.
      </p>
      <p className="text-lg text-black mb-4">
        Aplikasi ini murni dibuat 100% oleh Destio Wahyu Lanio dengan menggunakan sumber sumber yang ada di internet serta referensi design dari aplikasi yang sudah ada. Serta bantuan chatgpt dalam mengatasi error.
      </p>
    </div>
    <div className="flex justify-center my-4">
      <img src={logoabout} alt="logoabout" className="w-60 md:w-1/4 rounded-lg"/>
    </div>
  </div>
);

export default About;
