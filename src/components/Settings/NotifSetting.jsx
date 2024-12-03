import React, { useState } from "react";

const NotificationSettings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [frequency, setFrequency] = useState("real-time");

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pengaturan Notifikasi</h2>

      <label className="block mb-2 text-gray-600">Jenis Notifikasi</label>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={emailNotif} 
            onChange={() => setEmailNotif(!emailNotif)}
          />
          <span className="ml-2">Email</span>
        </label>
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={smsNotif} 
            onChange={() => setSmsNotif(!smsNotif)}
          />
          <span className="ml-2">SMS</span>
        </label>
        <label className="flex items-center">
          <input 
            type="checkbox" 
            checked={pushNotif} 
            onChange={() => setPushNotif(!pushNotif)}
          />
          <span className="ml-2">Push Notification</span>
        </label>
      </div>

      <label className="block mt-4 mb-2 text-gray-600">Frekuensi Notifikasi</label>
      <select 
        className="w-full p-2 border rounded-lg" 
        value={frequency} 
        onChange={(e) => setFrequency(e.target.value)}
      >
        <option value="real-time">Real-time</option>
        <option value="daily">Harian</option>
        <option value="weekly">Mingguan</option>
      </select>
    </div>
  );
};

export default NotificationSettings;
