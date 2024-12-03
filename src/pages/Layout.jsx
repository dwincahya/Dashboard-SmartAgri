import { Outlet, useLocation } from "react-router-dom";
import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
import LahanBaruModal from './LahanBaru'; // Import the modal
import SideBar from "../components/Sidebar/SideBar";

const Layout = () => {
  const location = useLocation();
  const isLahanBaru = location.pathname === '/lahan-baru'; // Check if the current path is /lahan-baru

  return (
    <>
      <Header />
      <SideBar />
      
      <main>
        <Outlet /> {/* This will display the nested routes like MainPage */}
      </main>

      <Footer />
      
      {/* Show the modal if the user is on /lahan-baru */}
      {isLahanBaru && <LahanBaruModal isOpen={true} onClose={() => window.history.back()} />}
    </>
  );
};

export default Layout;
