import React,{useState,useEffect,useContext} from 'react';
import { CoinContext } from '../context/coinContext';
import Coinchart from './CoinChart';
import Coinlist from './CoinList';


const Coin = () => {

    const {charts, addChart,deleteChart} = useContext(CoinContext)
    return (
        <div className="coin border-top">
            <div className="coin-left">
                <Coinlist addChart={addChart} deleteChart={deleteChart}/>
            </div>
            <div className="coin-right d-flex flex-column justify-content-center align-items-center">
                {charts.length > 0 && charts.map((chart) => {
                    return <Coinchart chart={chart} deleteChart={deleteChart}/>
                })}
            </div>
        </div>
    );
}

export default Coin;
