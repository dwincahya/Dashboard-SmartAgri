import React, { useState } from "react";

const DataStorageSettings = () => {
  const [storageOption, setStorageOption] = useState("local");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pengaturan Penyimpanan Data</h2>

      <label className="block mb-2 text-gray-600">Simpan Data Ke:</label>
      <select 
        className="w-full p-2 border rounded-lg" 
        value={storageOption} 
        onChange={(e) => setStorageOption(e.target.value)}
      >
        <option value="local">Penyimpanan Lokal</option>
        <option value="cloud">Cloud</option>
      </select>

      <label className="block mt-4 mb-2 text-gray-600">Batas Penyimpanan</label>
      <input 
        type="number" 
        className="w-full p-2 border rounded-lg" 
        placeholder="Batas Penyimpanan (GB)"
      />

      <label className="block mt-4 mb-2 text-gray-600">Durasi Penyimpanan Data</label>
      <input 
        type="number" 
        className="w-full p-2 border rounded-lg" 
        placeholder="Durasi (Bulan)"
      />
    </div>
  );
};

export default DataStorageSettings;
