import React, { useState } from 'react'
import CardFilter from '../CardFilter/CardFilter';
import ProductionReportCharts from '../ReportCharts/ProductionReportCharts';

function ProductionReports() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };
  return (
    <div className="card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
            <h5 className="card-title">
                Data Produksi <span>/{filter}</span>
            </h5>
            <ProductionReportCharts />
        </div>
    </div>
  )
}

export default ProductionReports