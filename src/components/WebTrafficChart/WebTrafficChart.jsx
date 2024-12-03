import React, {useEffect} from 'react';
import * as echarts from 'echarts';

function WebTrafficChart() {
    var dataChart = [
        { value: 1048, name: 'Lahan 1 (Brokoli)', penjualan: 10000, pendapatan: 100000 },
        { value: 735, name: 'Lahan 3 (Bawang Putih)', penjualan: 8000, pendapatan: 85000 },
        { value: 580, name: 'Lahan 5 (Cabai Merah)', penjualan: 5000, pendapatan: 60000 }
    ];

    useEffect(() => {
        echarts.init(document.querySelector('#trafficChart')).setOption({
            tooltip:{
                trigger:'item',
                formatter: function (params) {
                    // Ensure that `params.data.penjualan` and `params.data.pendapatan` exist
                    const penjualan = params.data.penjualan ? params.data.penjualan : 'N/A';
                    const pendapatan = params.data.pendapatan ? params.data.pendapatan : 'N/A';

                    // Custom tooltip to display additional data
                    return `
                        <strong>${params.name}</strong><br/>
                        Penjualan: ${penjualan}<br/>
                        Pendapatan: ${pendapatan}
                    `;
                }
            },
            legend: {
                top:'5%',
                left:'center',
            },
            series: [
                {
                    name:'Hasil',
                    type:'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap:false,
                    label:{
                        show:false,
                        position:'center',
                    },
                    emphasis: {
                        label:{
                            show:true,
                            fontSize:'18',
                            fontWeight:'bold',
                        },
                    },
                    labelLine: {
                        show:false,
                    },
                    data: dataChart,
                },
            ],
        });
    }, []);

  return (
    <div id='trafficChart' style={{minHeight:'25em'}} className='echart'></div>
  );
}

export default WebTrafficChart;