import { useContext } from 'react';
import { StepperContext } from '../../Context/StepperContext';

export default function FertilizerForm() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col w-full px-4">
        {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Fertilizer Type */}
        <div className="w-full my-2">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Jenis Pupuk
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <select
                name="fertilizerType"
                value={userData["fertilizerType"] || ""}
                onChange={handleChange}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            >
                <option value="">Pilih Jenis Pupuk</option>
                <option value="Organik">Organik</option>
                <option value="Anorganik">Anorganik</option>
                <option value="Cair">Cair</option>
                <option value="Granular">Granular</option>
            </select>
            </div>
        </div>

        {/* Fertilizer Brand */}
        <div className="w-full my-2">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Merek Pupuk
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
                type="text"
                name="fertilizerBrand"
                value={userData["fertilizerBrand"] || ""}
                onChange={handleChange}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                placeholder="Merek Pupuk"
            />
            </div>
        </div>

        {/* Application Frequency */}
        <div className="w-full my-2">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Frekuensi Aplikasi (per bulan)
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
                type="number"
                name="applicationFrequency"
                value={userData["applicationFrequency"] || ""}
                onChange={handleChange}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                placeholder="Frekuensi Aplikasi"
            />
            </div>
        </div>

        {/* Quantity Used */}
        <div className="w-full my-2">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Jumlah yang Digunakan (per siklus)
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
                type="number"
                name="quantityUsed"
                value={userData["quantityUsed"] || ""}
                onChange={handleChange}
                className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                placeholder="Jumlah yang Digunakan (kg atau liter)"
            />
            </div>
        </div>

        {/* Source of Fertilizer */}
        <div className="w-full my-2">
            <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Sumber Pupuk
            </div>
            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
                <select
                    name="sourceOfFertilizer"
                    value={userData["sourceOfFertilizer"] || ""}
                    onChange={handleChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
                >
                    <option value="">Pilih Sumber Pupuk</option>
                    <option value="Toko Lokal">Toko Lokal</option>
                    <option value="Subsidi Pemerintah">Subsidi Pemerintah</option>
                    <option value="Sampah Organik">Sampah Organik</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  );
}
