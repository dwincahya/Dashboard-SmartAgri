import React, { useState } from "react";

const AnalyticsSettings = () => {

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pengaturan Analisis Data</h2>
          <p className="text-gray-600">Kelola analisis data untuk berbagai metrik pertanian yang Anda inginkan.</p>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="report-frequency">
              Frekuensi Pelaporan
            </label>
            <select id="report-frequency" className="w-full p-2 border rounded">
              <option value="mingguan">Mingguan</option>
              <option value="bulanan">Bulanan</option>
              <option value="real-time">Real-time</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="data-range">
              Rentang Data
            </label>
            <input type="date" id="data-range" className="w-full p-2 border rounded" />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="data-visualization">
              Visualisasi Data
            </label>
            <select id="data-visualization" className="w-full p-2 border rounded">
              <option value="chart">Grafik</option>
              <option value="table">Tabel</option>
              <option value="summary">Ringkasan</option>
            </select>
          </div>
    </div>
  );
};

export default AnalyticsSettings;
