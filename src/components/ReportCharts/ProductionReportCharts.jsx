import React, { useState } from 'react';
import Chart from 'react-apexcharts';

function ProductionReportCharts() {
    const [data, setData] = useState({
        series: [
            {
                name:'Lahan 1 (Kangkung)',
                data:[31,40,28,51,42, 85,56, 70, 75, 40, 45, 50],
            },
            {
                name:'Lahan 2 (Bayam)',
                data:[40,20,10,78,60, 95,25, 70, 75, 40, 45, 50],
            },
            {
                name:'Lahan 3 (Bawang Putih)',
                data:[10,30,60,40,80,70,65, 70, 75, 40, 45, 50],
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
                    return val + ' Kg'; // Append 'Kg' to the data label
                }
            },
            stroke:{
                curve:'smooth',
                width:2,
            },
            xaxis: {
                categories:['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
            },
            tooltip: {
                x:{
                    format: "dd/MM/yy HH:mm",
                },
                y:{
                    formatter: function (val) {
                        return val + ' Kg'; // Append 'Kg' to the data label
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

export default ProductionReportCharts;