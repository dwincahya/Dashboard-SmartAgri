import React, { useState } from "react";

const WeatherAlarmSettings = () => {

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pengaturan Alarm Cuaca</h2>
          <p className="text-gray-600">Aktifkan peringatan cuaca seperti badai, kekeringan, atau hujan deras yang dapat mempengaruhi tanaman Anda.</p>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="weather-alert">
              Pilih Tipe Cuaca
            </label>
            <select id="weather-alert" className="w-full p-2 border rounded">
              <option value="badai">Badai</option>
              <option value="kekeringan">Kekeringan</option>
              <option value="hujan deras">Hujan Deras</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="notification-method">
              Metode Notifikasi
            </label>
            <select id="notification-method" className="w-full p-2 border rounded">
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="push">Push Notification</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="notification-frequency">
              Frekuensi Notifikasi
            </label>
            <select id="notification-frequency" className="w-full p-2 border rounded">
              <option value="real-time">Real-time</option>
              <option value="harian">Harian</option>
              <option value="mingguan">Mingguan</option>
            </select>
          </div>
    </div>
  );
};

export default WeatherAlarmSettings;
