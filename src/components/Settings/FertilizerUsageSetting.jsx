import React, { useState } from "react";

const FertilizerUsageSettings = () => {

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pengaturan Penggunaan Pupuk</h2>
          <p className="text-gray-600">Atur jadwal pemberian pupuk berdasarkan jenis tanaman dan dosis yang sesuai.</p>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fertilizer-type">
              Jenis Pupuk
            </label>
            <select id="fertilizer-type" className="w-full p-2 border rounded">
              <option value="organik">Organik</option>
              <option value="kimia">Kimia</option>
              <option value="campuran">Campuran</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fertilizer-amount">
              Dosis Pupuk (kg)
            </label>
            <input type="number" id="fertilizer-amount" placeholder="Masukkan dosis pupuk" className="w-full p-2 border rounded" />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="fertilizer-schedule">
              Jadwal Pemberian Pupuk
            </label>
            <input type="datetime-local" id="fertilizer-schedule" className="w-full p-2 border rounded" />
          </div>
    </div>
  );
};

export default FertilizerUsageSettings;
