import React,{useRef,useEffect,useState} from 'react';
import Chart from "chart.js/auto"
import coinGecko from '../coingecko/coinGecko';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { weekOption, monthOption } from '../dateoptions/dateOptions';

const Coinchart = ({chart,deleteChart}) => {
    const chartRef = useRef()
    const [price,setPrice] = useState([])
    const [date,setDate] = useState('7')
    
    useEffect(() => {
        const getPrice = async() => {
            const priceData = await coinGecko.get(`/coins/${chart.id}/market_chart`, {
            params: {
                vs_currency: "usd",
                days:date,
                interval:"daily"
            }
        })
            setPrice(priceData.data.prices)
        }
        getPrice()
    },[date])

    useEffect(() => {
        const myChart = new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: date === '7' ? weekOption() : monthOption(),
                datasets: [{
                    label: `${chart.name}`,
                    data: price,
                    backgroundColor: "rgba(174, 305, 194, 0.5)",
                    borderColor: 'rgb(75, 192, 192)',
                    borderWidth: 3,
                    pointRadius: 0,
                }]
            },
            options: {
                animation: {
                    duration: 2000
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        
                    },
                    x: {
                        grid: {
                        borderColor: 'red'
                        }
                    }
                }
            }
        });
        return () => {
            myChart.destroy()
        }
        
    })

    const handleClick = (time) => {
        setDate(time)
    }

    return (
        <>
            <div className="coin-chart p-4 position-relative">
                <canvas id="myChart" ref={chartRef}></canvas>
                <HighlightOffIcon className="delete-icon position-absolute text-danger" role="button" onClick={() => deleteChart(chart)}/>
                <div className="date-buttons d-flex position-absolute justify-content-between align-items-center">
                    <button className="date-button bg-white" onClick={()=>handleClick("30")}>30days</button>
                    <button className="date-button bg-white" onClick={()=>handleClick("7")}>7days</button>
                </div>
            </div>
        </>
    );
}

export default Coinchart;
