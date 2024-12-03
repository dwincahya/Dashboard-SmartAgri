import { useContext } from 'react';
import { StepperContext } from '../../Context/StepperContext';

export default function IoTForm() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Type of IoT Device */}
            <div className="w-full my-2">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Jenis Perangkat IoT
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <select
                    name="iotDeviceType"
                    value={userData["iotDeviceType"] || ""}
                    onChange={handleChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                    <option value="">Pilih Jenis Perangkat IoT</option>
                    <option value="Sensor">Sensor</option>
                    <option value="Kamera">Kamera</option>
                    <option value="Drone">Drone</option>
                    <option value="Sistem Irigasi Otomatis">Sistem Irigasi Otomatis</option>
                </select>
                </div>
            </div>

            {/* Purpose */}
            <div className="w-full my-2">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Tujuan
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    type="text"
                    name="purpose"
                    value={userData["purpose"] || ""}
                    onChange={handleChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    placeholder="Misalnya: Pemantauan Kelembaban Tanah"
                />
                </div>
            </div>

            {/* Model/Brand of IoT Device */}
            <div className="w-full my-2">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Model/Brand Perangkat IoT
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    type="text"
                    name="iotDeviceModel"
                    value={userData["iotDeviceModel"] || ""}
                    onChange={handleChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                    placeholder="Model atau Merek Perangkat"
                />
                </div>
            </div>

            {/* Power Source */}
            <div className="w-full my-2">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Sumber Daya
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <select
                    name="powerSource"
                    value={userData["powerSource"] || ""}
                    onChange={handleChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                    <option value="">Pilih Sumber Daya</option>
                    <option value="Solar">Solar</option>
                    <option value="Baterai">Baterai</option>
                    <option value="Listrik">Listrik</option>
                    <option value="Manual">Manual</option>
                </select>
                </div>
            </div>

            {/* Device Connectivity */}
            <div className="w-full my-2">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Konektivitas Perangkat
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <select
                    name="deviceConnectivity"
                    value={userData["deviceConnectivity"] || ""}
                    onChange={handleChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                    <option value="">Pilih Konektivitas Perangkat</option>
                    <option value="Wi-Fi">Wi-Fi</option>
                    <option value="Jaringan Seluler">Jaringan Seluler</option>
                    <option value="Bluetooth">Bluetooth</option>
                </select>
                </div>
            </div>

            {/* Installation Date */}
            <div className="w-full my-2">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Tanggal Pemasangan
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <input
                    type="date"
                    name="installationDate"
                    value={userData["installationDate"] || ""}
                    onChange={handleChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                />
                </div>
            </div>

            {/* Operational Status */}
            <div className="w-full my-2">
                <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
                Status Operasional
                </div>
                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <select
                    name="operationalStatus"
                    value={userData["operationalStatus"] || ""}
                    onChange={handleChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                    <option value="">Pilih Status Operasional</option>
                    <option value="Aktif">Aktif</option>
                    <option value="Tidak Aktif">Tidak Aktif</option>
                    <option value="Pemeliharaan">Pemeliharaan</option>
                </select>
                </div>
            </div>
        </div>
    </div>
  );
}
