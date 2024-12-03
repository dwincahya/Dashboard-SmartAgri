import React from 'react';

const StepperControl = ({handleClick, currentStep, steps}) => {
  return <div className="container flex justify-around mt-4 mb-8">
            {/* Back Button */}
            <div className='group'>
                <button 
                    onClick={() => handleClick()}
                    className={`bg-slate-200 text-slate-800 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer 
                    border-2 border-slate-300 group-hover:bg-slate-500 group-hover:text-white 
                    transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                    Back
                </button>
            </div>

            

            {/* Next Button */}
            <button
            onClick={() => handleClick("next")}
            className="bg-green text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer 
            hover:bg-slate-700 hover:text-white transition duration-2oo ease-in-out">
                {currentStep === steps.length - 1 ? "Confirm":"Next"}
            </button>
        </div>;
};

export default StepperControl;