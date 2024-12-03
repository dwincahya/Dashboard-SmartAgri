import Stepper from '../components/MultiStepForm/Stepper';
import StepperControl from '../components/MultiStepForm/StepperControl';
import Final from '../components/MultiStepForm/Steps/Final';
import { useState } from 'react';
import { StepperContext } from '../components/Context/StepperContext';
import FarmForm from '../components/MultiStepForm/Steps/FarmForm';
import VegetablesForm from '../components/MultiStepForm/Steps/VegetablesForm';
import FertilizerForm from '../components/MultiStepForm/Steps/FertilizerForm';
import IoTForm from '../components/MultiStepForm/Steps/IoTForm';
import './page.css';

export default function LahanBaruModal({ isOpen, onClose }) {

  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "Lahan",
    "Komoditas",
    "Pupuk",
    "Perangkat",
    "Selesai"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <FarmForm />;
      case 2:
        return <VegetablesForm />;
      case 3:
        return <FertilizerForm />;
      case 4:
        return <IoTForm />;
        case 5:
            return <Final />
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  // If the modal isn't open, return null to hide it
  if (!isOpen) return null;

  return (
    <main className="main" id="main">
        <div className="bg-white p-8 min-h-screen inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-5xl p-8"> 
                {/* Increase width to 'max-w-5xl' or larger for more horizontal space */}
                <button
                className="absolute top-2 right-2 text-xl text-gray-700 hover:text-red-500"
                onClick={onClose}
                >
                X
                </button>
        
                <div className="modal-body">
                <h2 className="text-2xl font-semibold mb-6">Form Lahan Baru</h2>
        
                {/* Adjust the form to be more landscape oriented */}
                <div className="w-full mb-2 mt-5 p-1">
                    <Stepper steps={steps} currentStep={currentStep} />

                    {/* Display Components */}
                    <div className="my-10 p-10">
                    <StepperContext.Provider
                        value={{
                        userData,
                        setUserData,
                        finalData,
                        setFinalData,
                        }}
                    >
                        {displayStep(currentStep)}
                    </StepperContext.Provider>
                    </div>
                        {currentStep !== steps.length && (
                        <StepperControl
                            handleClick={handleClick}
                            currentStep={currentStep}
                            steps={steps}
                        />
                        )}
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
