import React, { useState } from 'react';
import "./page.css";
import LanguageSettings from '../components/Settings/LanguageSetting';
import NotificationSettings from '../components/Settings/NotifSetting';
import FarmManagementSettings from '../components/Settings/FarmSetting';
import DataStorageSettings from '../components/Settings/DataStorageSetting';
import AnalyticsSettings from '../components/Settings/AnalyticsSetting';
import WeatherAlarmSettings from '../components/Settings/WeatherAlarmSetting';
import CommodityPriceSettings from '../components/Settings/CommodityPriceSetting';
import FertilizerUsageSettings from '../components/Settings/FertilizerUsageSetting';

function SettingPage() {
    const [theme, setTheme] = useState('light');
    const [notifications, setNotifications] = useState(true);
    const [iotEnabled, setIotEnabled] = useState(true);

    const handleThemeChange = (e) => setTheme(e.target.value);
    const toggleNotifications = () => setNotifications(!notifications);
    const toggleIot = () => setIotEnabled(!iotEnabled);

    return (
        <div className='main' id='main'>
            <div className="bg-gray-100 p-6 min-h-screen ">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">Pengaturan</h1>
                {/* Komponen pengaturan */}
                <LanguageSettings />
                <NotificationSettings />
                <FarmManagementSettings />
                <DataStorageSettings />
                <AnalyticsSettings />
                <WeatherAlarmSettings />
                <CommodityPriceSettings />
                <FertilizerUsageSettings />

                {/* Simpan Perubahan */}
                <div className="group flex justify-end mt-4">
                    <button className="bg-green text-white px-4 py-2 rounded-lg shadow-md group-hover:bg-whitecard transition duration-300">
                        <p className='group-hover:text-green'>Simpan Perubahan</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SettingPage;
