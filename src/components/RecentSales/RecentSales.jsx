import React, {useState,useEffect} from 'react';
import './recentSales.css';
import CardFilter from '../CardFilter/CardFilter';
import RecentSalesTable from '../RecentSalesTable/RecentSalesTable';

function RecentSales() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('http://localhost:4000/recentsales')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    }; 

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="card recent-sales overflow-auto">
        <CardFilter filterChange={handleFilterChange} />

        <div className="card-body">
            <h5 className="card-title">
                Penjualan Terbaru <span>| {filter}</span>
            </h5>
            <RecentSalesTable items={items}/>
        </div>
    </div>
  )
}

export default RecentSales;