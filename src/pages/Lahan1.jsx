import React, { useState, useEffect } from 'react';
import { RiLeafLine, RiWaterFlashLine, RiDeviceLine, RiPlantLine, RiSeedlingLine,RiRouterLine } from 'react-icons/ri'; // Importing icons
import Chart from 'react-apexcharts';
import './page.css';
import farmImg from '../images/img-stocks/cabbagefarm.jpg';
import PompaIrigasi from '../components/IoT/PompaIrigasi';
import SistemVentilasi from '../components/IoT/SistemVentilasi';
import SistemPupuk from '../components/IoT/SistemPupuk';
import SistemSpraying from '../components/IoT/SistemSpraying';
import farmImg1 from '../images/smart-agri-ai.jpg';
import farmImg2 from '../images/smart-farming.jpg';
import farmImg3 from '../images/agricultural-robot.jpg';

function Lahan1() {
  const [currentImage, setCurrentImage] = useState(0);
    const images = [farmImg1, farmImg2, farmImg3]; // Daftar gambar

    // Fungsi untuk mengatur perpindahan otomatis gambar
    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Setiap 5 detik akan berganti gambar
        return () => clearInterval(timer);
    }, [images.length]);


  const [temperature, setTemperature] = useState(24);
  const [humidity, setHumidity] = useState(65);
  const [ph, setPh] = useState(7.0);
  const [lightIntensity, setLightIntensity] = useState([500, 600, 750, 900, 500]); // Array of light intensity data
  const [nutrient, setNutrient] = useState([100, 200, 300, 400, 250]); // Array of nutrient data
  const [soilMoisture, setSoilMoisture] = useState(40);

  const [fade, setFade] = useState(true); // To handle fading effect

    // Fungsi untuk mengatur perpindahan otomatis gambar
    useEffect(() => {
        const timer = setInterval(() => {
          setFade(false); // Start fading out
          setTimeout(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Change image
            setFade(true); // Start fading in
          }, 1000); // Match the duration of the fade-out transition
        }, 5000); // Every 5 seconds change the image
    
        return () => clearInterval(timer);
      }, [images.length]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(Math.floor(Math.random() * 10) + 20);
      setHumidity(Math.floor(Math.random() * 30) + 40);
      setSoilMoisture(Math.floor(Math.random() * 50) + 30);
      setPh((Math.random() * 7 + 1).toFixed(2)); // Random pH between 1-14
      setLightIntensity(Math.floor(Math.random() * 1000)); // Random light intensity between 0-1000
      setNutrient(Math.floor(Math.random() * 500)); // Random nutrient between 0-500
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Chart options for temperature (Line Chart)
  const tempOptions = {
    chart: {
      type: 'line',
      animations: { enabled: true, easing: 'easeinout', speed: 800 },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    colors: ['#1E90FF'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#00C9FF'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 0.7,
        opacityTo: 0.9,
      },
    },
    tooltip: { theme: 'dark' },
    xaxis: { categories: ['Time1', 'Time2', 'Time3'] },
  };

  // Chart options for humidity and soil moisture (Radial Bar Chart)
  const radialOptions = {
    chart: { type: 'radialBar' },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: { size: '70%' },
        track: { background: '#f9f9f9', strokeWidth: '100%' },
        dataLabels: {
          name: { fontSize: '14px' },
          value: {
            fontSize: '24px',
            color: '#000',
            formatter: (val) => `${val}%`,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        gradientToColors: ['#ABEBC6', '#F5B041'],
        stops: [0, 100],
      },
    },
  };

  // Chart options for pH
  const phOptions = {
    chart: {
      type: 'radialBar',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        dataLabels: {
          value: {
            fontSize: '22px',
            color: '#34D399', // Green for pH
          },
        },
      },
    },
    fill: {
      colors: ['#34D399'], // Green for pH
    },
    labels: ['pH Level'],
  };

  // Chart options for Light Intensity
  const lightOptions = {
    chart: {
      type: 'line',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: '#6B7280',
        },
      },
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#60A5FA'], // Blue for Light Intensity
    title: {
      text: 'Light Intensity (lux)',
      align: 'center',
      style: {
        fontSize: '14px',
        color: '#374151',
      },
    },
  };

  // Chart options for Nutrient Sensor
  const nutrientOptions = {
    chart: {
      type: 'bar',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        horizontal: false,
      },
    },
    fill: {
      colors: ['#FBBF24'], // Yellow for Nutrient Sensor
    },
    xaxis: {
      labels: {
        style: {
          colors: '#6B7280',
        },
      },
    },
    title: {
      text: 'Nutrient Levels (ppm)',
      align: 'center',
      style: {
        fontSize: '14px',
        color: '#374151',
      },
    },
  }

  return (
    <main className="main" id="main">
      <div className="min-h-screen bg-gray-100 flex">
     
      {/* Main Content */}
      <div className="flex-3 p-6">
        <div className="mb-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="bg-white rounded-lg overflow-hidden">
              <div className="container-fluid position-relative p-0">
                  {/* Gambar dengan efek sliding */}
                  <img
                      src={images[currentImage]}
                      alt="Farm"
                      className={`w-100 img-fluid object-fit-lg-fill transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                          filter: 'brightness(40%)',
                          height: '25em',
                          objectFit: 'cover',
                          transition: 'opacity 1s ease-in-out'
                        }}
                  />

                  {/* Overlay untuk Brand Name dan Deskripsi */}
                  <div className="overlay position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-start text-white p-4 p-md-5 gap-3">
                      <h1 className="display-4 text-white text-glow-green mb-3">
                      Smart Agri
                      </h1>
                      <p className="lead text-white">
                      Kami senang membantu Anda dalam menyediakan produk pertanian yang berkualitas
                      dan mewujudkan pertanian yang berkelanjutan.
                      </p>
                      <a
                      href="/"
                      className="btn btn-lg bg-gradient-to-r from-greencard to-emerald text-white rounded-pill shadow-lg mt-4 text-xs transition-transform transform hover:scale-105 hover:shadow-xl hover:from-emerald-500 hover:to-green-400 duration-300"
                      >
                      Silahkan masuk ke website kami
                      </a>
                      <span>Desingned by <a href="http://www.freepik.com/" className='hover:text-blue transition-colors ease-in-out duration-300'>Freepik</a></span>
                  </div>
              </div>
          </div>
        </div>

        {/* Grid Layout for Farm Data Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 my-4">
          {/* Farm Details */}
          <div className="bg-gradient-to-br from-blacard to-blacard2 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-2 flex items-center text-greentext">
              <RiLeafLine className="text-greentext mr-2" /> Lahan
            </h2>

            <table>
              <tbody>
                <tr>
                  <td className="text-white"> Luas</td>
                  <td className="text-white"> : </td>
                  <td className="text-white"> 100 m<sup>2</sup></td>
                </tr>
                <tr>
                  <td className="text-white"> Tanah</td>
                  <td className="text-white"> : </td>
                  <td className="text-white"> Loamy</td>
                </tr>
                <tr>
                  <td className="text-white"> Sumber Air</td>
                  <td className="text-white"> : </td>
                  <td className="text-white"> Air Tanah</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Commodities Information */}
          <div className="bg-gradient-to-br from-blacard to-blacard2 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-2 flex items-cente text-greentext">
              <RiPlantLine className="mr-2 text-greentext" /> Komoditas
            </h2>
            <table>
              <tbody>
                <tr>
                  <td className="text-white">Sayuran</td>
                  <td className="text-white"> : </td>
                  <td className="text-white"> Tomat</td>
                </tr>
                <tr>
                  <td className="text-white">Waktu Panen</td>
                    <td className="text-white"> : </td>
                    <td className="text-white"> 6 Minggu</td>
                </tr>
                <tr>
                  <td className="text-white">Kesehatan</td>
                    <td className="text-white"> : </td>
                    <td className="text-greentext"> Baik</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fertilizer Information */}
          <div className="bg-gradient-to-br from-blacard to-blacard2 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-2 flex items-center text-greentext">
              <RiSeedlingLine className="text-greentext mr-2" /> Pupuk
            </h2>
            <table>
              <tbody>
                <tr>
                  <td className="text-white">Tipe</td>
                  <td className="text-white"> : </td>
                  <td className="text-white"> Organik</td>
                </tr>
                <tr>
                  <td className="text-white">Merek</td>
                    <td className="text-white"> : </td>
                    <td className="text-white"> GreenGrow</td>
                </tr>
                <tr>
                  <td className="text-white">Frekuensi</td>
                    <td className="text-white"> : </td>
                    <td className="text-greentext"> Bulan</td>
                </tr>
              </tbody>
            </table>
          </div>


          {/* Paket */}
          <div className="bg-gradient-to-br from-blacard to-blacard2 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h2 className="text-xl font-semibold mb-2 flex items-center text-greentext">
              <RiRouterLine className="text-greentext mr-2" /> Paket Smart Agri
            </h2>
            <table>
              <tbody>
                <tr>
                  <td className="text-white">Paket</td>
                  <td className="text-white"> : </td>
                  <td className="text-white"> Basic</td>
                </tr>
                <tr>
                  <td className="text-white">Harga</td>
                    <td className="text-white"> : </td>
                    <td className="text-white"> Rp69.999</td>
                </tr>
                {/* <tr>
                  <td className="text-white"></td>
                    <td className="text-white"> : </td>
                    <td className="text-greentext"> Bulan</td>
                </tr> */}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 col-span-2 xl:col-span-2">
            <h2 className="text-xl font-semibold mb-2 flex justify-center">Sistem Irigasi</h2>
            <div className="flex-1 space-x-4">
              {/* PH */}
              <div className="bg-white rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                      Kadar pH
                    </h2>
                    <Chart options={phOptions} series={[ph]} type="radialBar" height={250} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                      Kelembapan Tanah
                    </h2>
                    <Chart
                      options={radialOptions}
                      series={[soilMoisture]}
                      type="radialBar"
                      height={250}
                    />
                  </div>
                  <PompaIrigasi/>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 col-span-2 xl:col-span-2">
            <h2 className="text-xl font-semibold mb-2 flex justify-center">Sistem Ventilasi</h2>
            <div className="flex-1 space-x-4">
              {/* DHT11 Card */}
              <div className="bg-white rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                      Suhu Udara
                    </h2>
                    <Chart
                      options={radialOptions}
                      series={[temperature]}
                      type="radialBar"
                      height={250}
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                      Kelembapan Udara
                    </h2>
                    <Chart
                      options={radialOptions}
                      series={[humidity]}
                      type="radialBar"
                      height={250}
                    />
                  </div>
                  <SistemVentilasi/>   
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 col-span-2 xl:col-span-2">
            <h2 className="text-xl font-semibold mb-2 flex justify-center">Sistem Pupuk</h2>
            <div className="flex-1 space-x-4">
              {/* Nutrisi */}
              <div className="bg-white rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 duration-300">
                <h2 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                  Kadar Nutrisi
                </h2>
                <Chart
                  options={nutrientOptions}
                  series={[{ name: 'Nutrient Levels', data: [nutrient] }]}
                  type="bar"
                  height={250}
                />
              </div>
              <SistemPupuk/>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 col-span-2 xl:col-span-2 ">
            <h2 className="text-xl font-semibold mb-2 flex justify-center">Sistem Spraying</h2>
            <SistemSpraying/>
          </div>

          
              

              {/* Light Intensity
              <div className="bg-white rounded-lg shadow-md p-6 transition transform hover:-translate-y-1 duration-300">
                <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
                  Intensitas Cahaya
                </h2>
                <Chart
                  options={lightOptions}
                  series={[{ name: 'Intensitas Cahaya', data: [lightIntensity] }]}
                  type="line"
                  height={250}
                />
              </div> */}
        </div>
      </div>
      <div className='flex-2'></div>
    </div>
    </main>
  );
}

export default Lahan1;
