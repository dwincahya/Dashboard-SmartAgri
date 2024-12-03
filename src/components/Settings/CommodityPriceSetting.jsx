import React, { useState } from "react";

const CommodityPriceSettings = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pengaturan Harga Komoditas</h2>
          <p className="text-gray-600">Kelola harga komoditas di pasar dan lacak perubahan harga secara real-time.</p>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="commodity-tracking">
              Pilih Komoditas
            </label>
            <select id="commodity-tracking" className="w-full p-2 border rounded">
              <option value="padi">Padi</option>
              <option value="jagung">Jagung</option>
              <option value="kedelai">Kedelai</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="price-threshold">
              Batas Perubahan Harga
            </label>
            <input type="number" id="price-threshold" placeholder="Masukkan batas harga" className="w-full p-2 border rounded" />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="price-notification">
              Frekuensi Notifikasi Harga
            </label>
            <select id="price-notification" className="w-full p-2 border rounded">
              <option value="real-time">Real-time</option>
              <option value="harian">Harian</option>
              <option value="mingguan">Mingguan</option>
            </select>
          </div>

    </div>
  );
};

export default CommodityPriceSettings;
