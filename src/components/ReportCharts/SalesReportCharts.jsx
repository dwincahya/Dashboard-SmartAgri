import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function SalesReportCharts() {
    const [data, setData] = useState({
        series: [
            {
                name:'Bayam',
                data:[150000,60000,30000,68000,250000, 85000,140000, 50000, 70000, 120000],
            },
            {
                name:'Bawang Putih',
                data:[50000,25000,50000,60000,35000, 85000,56000, 125000, 70000, 20000],
            },
            {
                name:'Kangkung',
                data:[35000,60000,55000,58000,30000, 80500,42000, 50000, 60000, 55000],
            },
        ],
        options: {
            chart : {
                height:350,
                type:'area',
                toolbar: {
                    show:false,
                },
            },
            markers:{
                size:4,
            },
            colors: ['#4154f1', '#2eca6a', '#ff771d'],
            fill: {
                type:'gradient',
                gradient:{
                    shadeIntensity:1,
                    opacityFrom:0.3,
                    opacityTo:0.4,
                    stops:[0,90,100],
                },
            },
            dataLabels:{
                enabled:true,
                formatter: function (val) {
                    return 'Rp' + val; // Append 'Rp' to the data label
                }
            },
            stroke:{
                curve:'smooth',
                width:2,
            },
            xaxis: {
                categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
            },
            tooltip: {
                x:{
                    format: "dd/MM/yy HH:mm",
                },
                y:{
                    formatter: function (val) {
                        return 'Rp' + val; // Append 'Rp' to the data label
                    }
                }
            },
        },
    });

  return (
    <Chart 
        options={data.options}
        series={data.series}
        type={data.options.chart.type}
        height={data.options.chart.height}
    />
  );
}

export default SalesReportCharts;