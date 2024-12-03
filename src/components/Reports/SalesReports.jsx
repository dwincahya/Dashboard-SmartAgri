import React, { useState } from 'react'
import CardFilter from '../CardFilter/CardFilter';
import SalesReportCharts from '../ReportCharts/SalesReportCharts';

function SalesReports() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };
  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
            <h5 className="card-title">
                Data Penjualan <span>/{filter}</span>
            </h5>
            <SalesReportCharts />
        </div>
    </div>
  )
}

export default SalesReports;