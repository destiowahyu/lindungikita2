import React from "react";
import { Link } from "react-router-dom";
import shelter1 from '../assets/shelter1-logo-new.jpg';
import shelter2 from '../assets/shelter2.jpg';
import shelter3 from '../assets/shelter3.jpg';
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="bg-white text-gray-800 min-h-screen">
            <Header />
            <div className="h-20"></div>

            {/* Konten utama dengan padding responsif */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-5">LindungiKita</h1>
                        <p className="text-lg mb-5">
                            Aplikasi pendataan lokasi pengungsian korban bencana alam oleh Destio Wahyu
                        </p>
                        <p className="text-base mb-7">
                            Temukan Lokasi Pengungsian Dibawah ini :
                        </p>
                        <Link 
                            to="/shelters"
                            className="bg-gray-100 rounded-3xl shadow-lg hover:text-[#147970] hover:bg-gray-200 text-gray-800 py-4 px-6 font-semibold transition duration-300 ease-in-out"
                        >
                            Cari Lokasi Pengungsian Disini
                        </Link>
                    </div>
                    <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
                        <div>
                            <img src={shelter2} alt="shelter2" className="w-full rounded-lg"/>
                        </div>
                        <div>
                            <img src={shelter3} alt="shelter3" className="w-full rounded-lg"/>
                        </div>
                    </div>
                </div>
                <div className="w-full mb-10">
                    <img src={shelter1} alt="shelter1" className="w-full rounded-lg"/>
                </div>
            </div>

            {/* Deskripsi Tentang Kami */}
            <div className="py-10 text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-5">Tentang Kami</h2>
                    <p className="text-lg mb-5">
                        LindungiKita adalah aplikasi yang bertujuan untuk membantu masyarakat menemukan lokasi pengungsian terdekat pada saat terjadi bencana alam.
                        Dengan menggunakan aplikasi ini, Anda dapat dengan mudah mengetahui fasilitas, kapasitas, dan lokasi pengungsian yang tersedia di sekitar Anda.
                    </p>
                    <p className="text-lg mb-5">
                        Aplikasi ini juga menyediakan informasi terkait fasilitas yang ada di setiap lokasi pengungsian, seperti makanan, air bersih, tempat tidur, dan layanan kesehatan. Dengan demikian, Anda dapat mempersiapkan diri dengan lebih baik sebelum menuju ke lokasi pengungsian yang diinginkan.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
