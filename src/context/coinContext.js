import React, {useEffect,useState,createContext} from 'react';

export const CoinContext = createContext()

export const CoinContextProvider = ({children}) => {
    const [coins,setCoins] = useState(
        localStorage.getItem("coins")?.split(",") || [
            "bitcoin",
            "ethereum"
        ]
    )

    const [charts,setCharts] = useState(JSON.parse(localStorage.getItem("charts")) || [])
    

    useEffect(() => {
        localStorage.setItem("coins",coins)
    },[coins])

    useEffect(() => {
        localStorage.setItem("charts",JSON.stringify(charts))
    },[charts])




    const addCoin = (coin) => {
        if(!coins.includes(coin)) {
            setCoins([...coins,coin])
        }
    }

    const deleteCoin = (coin) => {
        if(coins.includes(coin)) { 
            setCoins(
                coins.filter((c) => {
                    return c !== coin
                }) 
            )
        } 
    }

    const addChart = (coin) => {
        if(!charts.includes(coin)){
            setCharts([...charts,coin])
        }
    }
    const deleteChart = (coin) => {
        setCharts(charts.filter((chart) => {
            return chart.id !== coin.id
        }))
    }
    return (
        <CoinContext.Provider value={{coins,addCoin,deleteCoin,addChart,deleteChart,charts,setCharts}}>
            {children}
        </CoinContext.Provider>
    )

}
