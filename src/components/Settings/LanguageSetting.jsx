import React, { useState } from "react";

const LanguageSettings = () => {
  const [language, setLanguage] = useState("id");
  const [timezone, setTimezone] = useState("GMT+7");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pengaturan Bahasa & Zona Waktu</h2>

      <label className="block mb-2 text-gray-600">Bahasa Tampilan</label>
      <select 
        className="w-full p-2 border rounded-lg" 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="id">Bahasa Indonesia</option>
        <option value="en">English</option>
      </select>

      <label className="block mt-4 mb-2 text-gray-600">Zona Waktu</label>
      <select 
        className="w-full p-2 border rounded-lg" 
        value={timezone} 
        onChange={(e) => setTimezone(e.target.value)}
      >
        <option value="GMT+7">WIB (GMT+7)</option>
        <option value="GMT+8">WITA (GMT+8)</option>
        <option value="GMT+9">WIT (GMT+9)</option>
      </select>
    </div>
  );
};

export default LanguageSettings;
