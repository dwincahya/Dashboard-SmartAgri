import 'flowbite';

// Import icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// Routing
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Layout from './pages/Layout';
import MainPage from './components/Main/MainPage';
import LahanBaruModal from './pages/LahanBaru';
import Lahan1 from './pages/Lahan1';
import SettingPage from './pages/SettingPage';
import ProfilePage from './pages/ProfilePage';
import Logout from './components/logout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="lahan-baru" element={<LahanBaruModal />} />
          <Route path="lahan-1" element={<Lahan1 />} />
          <Route path="pengaturan" element={<SettingPage/>} />
          <Route path="profil" element={<ProfilePage/>} />
          <Route path="keluar" element={<Logout/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

<script src="../path/to/flowbite/dist/flowbite.min.js"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);