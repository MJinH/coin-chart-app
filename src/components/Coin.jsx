import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const Coin = ({coin,deleteCoin,addChart,deleteChart}) => {

    return (
        <li className="coin list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-4" role="button" onClick={(e) => {addChart(coin) 
            e.preventDefault()}}>
            <div className="coin-image-name">
                <img src={coin.image} alt="" className="coin-image" />
                <span className="coin-name ml-4">{coin.name}</span>
            </div>
            <div className="coin-price-icon">
                <span className="coin-price">{`$${coin.current_price.toFixed(2)}`}</span>
                {coin.price_change_24h > 0 ? (
                    <span className="price text-success">{`${coin.price_change_percentage_24h.toFixed(2)}%`}</span>
                ) : (
                    <span className="price text-danger">{`${coin.price_change_percentage_24h.toFixed(2)}%`}</span>
                )}
                <RemoveCircleOutlineIcon className="delete-coin" onClick={(e) => {
                    e.preventDefault()
                    deleteCoin(coin.id)
                    deleteChart(coin)
                }}/>
            </div>
        </li>
    );
}

export default Coin;
