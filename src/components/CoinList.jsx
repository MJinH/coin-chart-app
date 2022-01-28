import React,{useContext,useState,useEffect} from 'react';
import { CoinContext } from '../context/coinContext';
import { coinList } from '../coinListData';
import coinGecko from '../coingecko/coinGecko';
import Coin from './Coin';

const Coinlist = ({addChart,deleteChart}) => {

    const {coins,addCoin,deleteCoin,setCharts} = useContext(CoinContext);
    const [coinData,setCoinData] = useState([])
    useEffect(() => {
        const getCoinData = async () => {
            const coin = await coinGecko.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: coins.join(",")
                }
            }
            )
            setCharts([])
            setCoinData(coin.data)
        }
        getCoinData() 
    },[coins])


    return (
        <div className="coinList border p-4">
            <div className="btn-group mb-5" role="group">
                <button id="btnGroupDrop1" type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Coins
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                {coinList.map((coin) => {
                    return  (
                    <li><a className="coinListItem dropdown-item" href="/#" onClick={() => {
                        addCoin(coin.toLocaleLowerCase())}}>
                        {coin}
                        </a>
                    </li>
                    )
                })}
                </ul>
            </div>
            <ul className="list-group">
                {coinData?.map((coin) => {
                    return (
                        <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} addChart={addChart} deleteChart={deleteChart}/>
                    )
                })}
            </ul>
        </div>
    );
}

export default Coinlist;
