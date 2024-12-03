import React,{ useEffect } from 'react';
import * as echarts from 'echarts';

function BudgetChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#budgetChart')).setOption({
            legend: {
                data: ['Alokasi Budget','Biaya Produksi'],
            },
            radar: {
                shape:'circle',
                indicator:[
                    {
                        name:'Pupuk',
                        max:100000,
                    },
                    {
                        name:'Bibit',
                        max:60000,
                    },
                    {
                        name:'Listrik',
                        max:50000,
                    },
                    {
                        name:'Irigasi',
                        max:200000,
                    },
                    {
                        name:'Sumber Air',
                        max:50000,
                    },
                    {
                        name:'Inovasi',
                        max:200000,
                    },
                ]
            },
            series : [
                {
                    name: 'Budget vs Spending',
                    type:'radar',
                    data:[
                        {
                            value:[50000, 20000, 15000, 32000, 30000, 100000],
                            name:'Alokasi Budget',
                        },
                        {
                            value:[77000, 45000, 10000, 100000, 15000, 80000],
                            name:'Biaya Produksi',
                        },
                    ],
                },
            ],
        });
    }, []);

    return (
        <div className="echart" id='budgetChart' style={{minHeight:'25em'}}></div>
    );
}

export default BudgetChart;