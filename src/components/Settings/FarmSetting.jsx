import React from "react";

const FarmManagementSettings = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pengaturan Pengelolaan Lahan</h2>

      <button className="p-2 w-full bg-green-500 text-white rounded-lg mb-4">Tambah Lahan Baru</button>
      
      <label className="block mb-2 text-gray-600">Edit Informasi Lahan</label>
      <input 
        type="text" 
        className="w-full p-2 border rounded-lg mb-2" 
        placeholder="Nama Lahan"
      />
      <input 
        type="number" 
        className="w-full p-2 border rounded-lg mb-2" 
        placeholder="Luas Lahan (ha)"
      />
      <input 
        type="text" 
        className="w-full p-2 border rounded-lg mb-2" 
        placeholder="Jenis Tanah"
      />
      <input 
        type="text" 
        className="w-full p-2 border rounded-lg mb-2" 
        placeholder="Sumber Air"
      />

      <button className="p-2 w-full bg-blue-500 text-white rounded-lg">Simpan Pengaturan Lahan</button>
    </div>
  );
};

export default FarmManagementSettings;
