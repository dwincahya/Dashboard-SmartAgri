import React, {useState, useEffect}  from 'react';
import './dashboard.css'
import SalesReports from '../Reports/SalesReports';
import ProductionReports from '../Reports/ProductionReports';
import RecentSales from '../RecentSales/RecentSales';
import TopSelling from '../TopSelling/TopSelling';
import RecentActivity from '../RecentActivity/RecentActivity';
import BudgetReport from '../BudgetReport/BudgetReport';
import WebTraffic from '../WebTraffic/WebTraffic';
import Cards from '../Cards/Cards';
import farmImg1 from '../../images/smart-agri-ai.jpg';
import farmImg2 from '../../images/agricultural-robot.jpg';
import farmImg3 from '../../images/strawberry-field.jpg'

function Dashboard() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [farmImg1, farmImg2, farmImg3]; // Daftar gambar
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
    

    return (
        <section className="dashboard section">
            <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12 mt-4">
                            <div className="mb-8">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Cards/>
                  </div>
                </div>
              <div className="col-lg-4">
                {/* <RecentActivity /> */}
                <BudgetReport/>
                <WebTraffic/>
                {/* <News/> */}
              </div>
            </div>
            {/* Full width components */}
            <div className="col-12 px-0">
                            <div className="container-fluid">
                            <ProductionReports className="w-100" />
                            </div>
                        </div>
                        
                        <div className="col-12 px-0">
                            <div className="container-fluid">
                            <SalesReports className="w-100" />
                            </div>
                        </div>
                        
                        <div className="col-12 px-0">
                            <div className="container-fluid">
                            <RecentSales className="w-100" />
                            </div>
                        </div>

                        <div className="col-12 px-0">
                            <div className="container-fluid">
                            <TopSelling className="w-100" />
                            </div>
                        </div>
        </section>
    );
}

export default Dashboard;