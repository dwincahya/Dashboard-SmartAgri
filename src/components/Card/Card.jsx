import React, { useState } from 'react';
import './card.css'
import CardFilter from '../CardFilter/CardFilter';

function Card({ card }) {
    
   const [filter, setFilter] = useState('Today');
   const handleFilterChange = filter => {
    setFilter(filter);
   };

  return (
    <div className="col-xxl-6 col-md-6">
        <div className="card info-card sales-card bg-gradient-to-br from-blacard to-blacard2 text-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105">
            <CardFilter filterChange={handleFilterChange} />
            
            <div className="card-body overflow-hidden">
                <h5 className="card-title text-green text-xl font-semibold truncate">
                {card.name} <span className="text-gray-400">| {filter}</span>
                </h5>

                <div className="d-flex align-items-center mt-4">
                {/* Card Icon with Gradient and Animation */}
                <div className="card-icon rounded-full bg-gradient-to-r from-green-500 to-green-300 p-3 flex items-center justify-center shadow-md text-black animate-pulse">
                    <i className={`${card.icon} text-3xl`}></i>
                </div>

                {/* Card Content */}
                <div className="pl-4">
                    <h6 className="text-white text-2xl font-bold truncate">
                    {card.name === 'Revenue' 
                        ? `$${card.amount.toLocaleString('en-US')}` 
                        : card.amount.toLocaleString('en-US')}
                    </h6>

                    {/* Percentage Change with Color Indication */}
                    <span className={`${card.percentage > 0 ? 'text-green-400' : 'text-red-400'} text-lg font-bold`}>
                    {card.percentage > 0 
                        ? `+${(card.percentage * 100).toFixed(2)}%` 
                        : `${(-card.percentage * 100).toFixed(2)}%`}
                    </span>
                    <span className="text-gray-400 text-sm font-medium pl-2">
                    {card.percentage > 0 ? 'increase' : 'decrease'}
                    </span>
                </div>
                </div>
            </div>
            </div>

    </div>
  )
}

export default Card;