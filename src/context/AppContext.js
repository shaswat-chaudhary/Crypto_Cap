import { createContext, useState } from "react";


const api = process.env.REACT_APP_API_KEY

export const AppContext = createContext();

export default function AppContextProvider({children}) 
{
    const [loading, setLoading] = useState(false);

    const [coins, setCoins] = useState([]);

    const [news, setNews] = useState([]);
  
    const [currency, setCurrency] = useState('INR');
    const [symbol, setSymbol] = useState('₹');

    const currencyChange = (e) => {

        setCurrency(e.target.value);
        if(e.target.value === 'INR') {
            setSymbol('₹');
        }
        else if(e.target.value === 'USD') {
            setSymbol('$');
        }
    }
  
   const fetchCoinData = async () => {
        setLoading(true);
        try {
            const result = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
            const coinsData = await result.json();
            setCoins(coinsData);
        }
        catch (error) {
            console.log("coins error", error);
        }
        setLoading(false);
    }

    const fetchNewData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://newsapi.org/v2/everything?q=crypto&apiKey=${api}`);
            const data = await res.json();
            setNews(data.articles);
        } catch (error) {
            console.log("news error", error);
        }
        setLoading(false);
    }

    

    const value = {
        loading,
        setLoading,
        coins,
        setCoins,
        fetchCoinData,
        fetchNewData,
        news, 
        currencyChange,
        currency,
        symbol
       
    }


    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
