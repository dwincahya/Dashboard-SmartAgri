import React, { useState } from "react";
import './iot.css';

const PompaIrigasi = () => {
  const [mode, setMode] = useState("manual"); // manual, scheduled, smart
  const [isPumpOn, setIsPumpOn] = useState(false);
  const [scheduleTime, setScheduleTime] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
        Pompa Irigasi
      </h2>

      {/* Pilihan Mode */}
      <div className="mb-4">
        {/* <label className="block mb-2 text-gray-600">Mode Penyiraman</label> */}
        <select
          className="w-full p-2 border rounded-lg"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="manual">Manual</option>
          <option value="scheduled">Terjadwal</option>
        </select>
      </div>

      {/* Manual Mode: Pump Switch */}
      {mode === "manual" && (
        <div className="mb-4">          
          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"></input>
            <div class="relative w-12 h-6 bg-gray peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-greentext dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-whitecard after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-greencard peer-unchecked:bg-gray-300"></div>
            <span class="ms-3 text-sm font-medium dark:text-gray-300">Katup Pompa</span>
          </label>

        </div>
      )}

      {/* Scheduled Mode */}
      {mode === "scheduled" && (
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Waktu Penyiraman</label>
          <input
            type="time"
            className="w-full p-2 border rounded-lg"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />

          <label className="block mt-4 mb-2 text-gray-600">Durasi (Menit)</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default PompaIrigasi;
