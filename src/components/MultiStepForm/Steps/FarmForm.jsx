import { useContext } from 'react';
import { StepperContext } from '../../Context/StepperContext';

export default function FarmForm() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUserData({ ...userData, farmImage: file });
  };

  return (
    <div className="flex flex-col space-y-4">
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Farm Name */}
            <div className="w-full">
                <label className="font-bold text-gray-500 text-xs uppercase leading-8">Nama Lahan</label>
                <input
                className="w-full p-2 mt-1 border rounded-md"
                onChange={handleChange}
                value={userData["farmName"] || ""}
                name="farmName"
                placeholder="Masukkan nama lahan"
                />
            </div>

            {/* Farm Size */}
            <div className="w-full">
                <label className="font-bold text-gray-500 text-xs uppercase leading-8">Luas Lahan (meter<sup>2</sup>) </label>
                <input
                type="number"
                className="w-full p-2 mt-1 border rounded-md"
                onChange={handleChange}
                value={userData["farmSize"] || ""}
                name="farmSize"
                placeholder="Masukkan luas lahan"
                />
            </div>

            {/* Address */}
            <div className="w-full">
                <label className="font-bold text-gray-500 text-xs uppercase leading-8">Lokasi (Alamat)</label>
                <input
                className="w-full p-2 mt-1 border rounded-md"
                onChange={handleChange}
                value={userData["address"] || ""}
                name="address"
                placeholder="Masukkan lokasi lahan"
                />
            </div>

            {/* Latitude and Longitude */}
            <div className="w-full">
                <label className="font-bold text-gray-500 text-xs uppercase leading-8">Latitude dan Longitude</label>
                <input
                className="w-full p-2 mt-1 border rounded-md"
                onChange={handleChange}
                value={userData["latLong"] || ""}
                name="latLong"
                placeholder="Masukkan data latitude dan longitude"
                />
            </div>

            {/* Water Source Type */}
            <div className="w-full">
                <label className="font-bold text-gray-500 text-xs uppercase leading-8">Sumber Air</label>
                <select
                className="w-full p-2 mt-1 border rounded-md"
                onChange={handleChange}
                value={userData["waterSourceType"] || ""}
                name="waterSourceType"
                >
                <option value="">Select water source</option>
                <option value="Groundwater">Air Tanah</option>
                <option value="Rainwater">Air Hujan</option>
                <option value="Canal Irrigation">Irigasi</option>
                <option value="River">Sungai</option>
                </select>
            </div>

            {/* Soil Type */}
            <div className="w-full">
                <label className="font-bold text-gray-500 text-xs uppercase leading-8">Jenis Tanah</label>
                <select
                className="w-full p-2 mt-1 border rounded-md"
                onChange={handleChange}
                value={userData["soilType"] || ""}
                name="soilType"
                >
                <option value="">Pilih jenis tanah</option>
                <option value="Sandy">Pasir</option>
                <option value="Clayey">Tanah Liat</option>
                {/* <option value="Loamy">Loamy</option> */}
                <option value="Peaty">Gambus</option>
                </select>
            </div>

            {/* Ownership Status */}
            <div className="w-full">
                <label className="font-bold text-gray-500 text-xs uppercase leading-8">Status Kepemilikan</label>
                <select
                className="w-full p-2 mt-1 border rounded-md"
                onChange={handleChange}
                value={userData["ownershipStatus"] || ""}
                name="ownershipStatus"
                >
                <option value="">Pilih status kepemilikan lahan</option>
                <option value="Owned">Pribadi</option>
                <option value="Rented">Sewa</option>
                <option value="Government-owned">Pemerintah</option>
                </select>
            </div>

            {/* Image Upload */}
            <div className="w-full">
                <label className="font-bold text-gray-500 text-xs uppercase leading-8">Gmabar Lahan</label>
                <input
                type="file"
                className="w-full p-2 mt-1 border rounded-md"
                onChange={handleFileChange}
                />
            </div>
        </div>
    </div>
  );
}
