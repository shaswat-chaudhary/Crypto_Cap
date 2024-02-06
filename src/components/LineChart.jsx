import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Chart from 'react-apexcharts';
import { Spinner } from './Spinner';


export const LineChart = () => {

    const { id } = useParams();

    const { currency } = useContext(AppContext);

    const [days, setDays] = useState(1);

    const [isChart, setIsChart] = useState();

    const [loading, setLoading] = useState(false);

    const chartDays = [
        {
            label: "1 D",
            value: 1,
        },
        {
            label: "1 W",
            value: 7,
        },
        {
            label: "1 M",
            value: 30,
        },
        {
            label: "3 M",
            value: 90,
        },
        {
            label: "1 Y",
            value: 365,
        },
    ];


    const fetchChartData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
            const data = await res.json();
            setIsChart(data);

        } catch (error) {
            console.log("chart error", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchChartData();
    }, [days, currency, id]);

    const series = [
        {
            data: isChart?.prices.map((price) => ({
                x: new Date(price[0]),
                y: price[1].toFixed(1)
            }))
        },
    ];

    const options = {
        chart: {
            type: 'line',
        },
        xaxis: {
            type: 'datetime',
        },
        title: {
            text: 'Chart',
            align: 'left',
        },
        yaxis: {
            tooltip: {
                enabled: true,
            },
        },

    };


    return (
        <div>

            <div className='gap-5 flex justify-around my-4 mx-2 md:w-1/2'>
                {
                    chartDays.map((day, index) => (
                        <button
                            key={day.value}
                            onClick={() => setDays(day.value)}
                            className={`border border-slate-700 text-sm rounded-md font-semibold py-1 md:text-[15px] grow ${day.value === days ? 'bg-green-200' : 'bg-gray-100'}
                             hover:bg-green-300`}
                        >
                            {day.label}
                        </button>
                    ))
                }
            </div>

            {
                isChart ? (
                    <Chart
                        options={options}
                        series={series}
                        type="line"
                        width="100%"
                        height="400"
                    />
                ) : (
                    <Spinner />
                )
            }



        </div >

    )
}
