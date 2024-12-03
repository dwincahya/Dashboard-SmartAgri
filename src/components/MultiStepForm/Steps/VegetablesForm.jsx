import { useContext } from 'react';
import { StepperContext } from '../../Context/StepperContext';

export default function VegetablesForm() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const selectedOptions = userData[name] || [];
      if (checked) {
        setUserData({ ...userData, [name]: [...selectedOptions, value] });
      } else {
        setUserData({
          ...userData,
          [name]: selectedOptions.filter((option) => option !== value),
        });
      }
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  return (
    <div className="flex flex-col w-full px-4">
      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Vegetable Type */}
        <div className="w-full my-2">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Jenis Sayuran
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <div className="grid grid-cols-2 gap-2 p-2">
              {['Tomat', 'Selada', 'Bayam', 'Kubis', 'Wortel'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    name="vegetableTypes"
                    value={type}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Quantity of Commodities */}
        <div className="w-full my-2">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Jumlah Komoditas (per siklus)
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="number"
              name="quantity"
              value={userData["quantity"] || ""}
              onChange={handleChange}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              placeholder="Jumlah Komoditas"
            />
          </div>
        </div>

        {/* Planting Season */}
        <div className="w-full my-2">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Musim Tanam
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <select
              name="plantingSeason"
              value={userData["plantingSeason"] || ""}
              onChange={handleChange}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            >
              <option value="">Pilih Musim</option>
              <option value="Musim Hujan">Musim Hujan</option>
              <option value="Musim Kemarau">Musim Kemarau</option>
            </select>
          </div>
        </div>

        {/* Preferred Harvest Time */}
        <div className="w-full my-2">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Waktu Panen yang Diinginkan (dalam minggu)
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="number"
              name="harvestTime"
              value={userData["harvestTime"] || ""}
              onChange={handleChange}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              placeholder="Waktu Panen (minggu)"
            />
          </div>
        </div>

        {/* Pesticides Used */}
        <div className="w-full my-2">
          <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Pestisida yang Digunakan
          </div>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              name="pesticidesUsed"
              value={userData["pesticidesUsed"] || ""}
              onChange={handleChange}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
              placeholder="Pestisida yang Digunakan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
