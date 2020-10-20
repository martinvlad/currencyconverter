import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

const mainurl = 'https://api.exchangeratesapi.io/latest';

function App() {

const [currencyOptions, setCurrencyOptions] = useState([])
const [fromCurrency, setFromCurrency] = useState()
const [toCurrency, setToCurrency] = useState()
const [exchangeRate, setExchangeRate] = useState()
const [amount, setAmount] = useState(1)
const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

let toAmount,fromAmount ;
if(amountInFromCurrency){
  fromAmount = amount;
  toAmount = amount * exchangeRate;
}
else{
  toAmount = amount;
  fromAmount = amount / exchangeRate;
}
console.log(exchangeRate)
  useEffect(()=> {
    fetch(mainurl)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0];
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
      
    }, [])
  return (
    <>
      
    <h1>Convert</h1>
    <CurrencyRow 
    currencyOptions= {currencyOptions}
    selectedCurrency = {fromCurrency}
    onChangeCurrency = {e => setFromCurrency(e.target.value)}
    amount={fromAmount}
    />
    <div className="equals"> = </div>
    <CurrencyRow 
    currencyOptions= {currencyOptions}
    selectedCurrency = {toCurrency}
    onChangeCurrency = {e => setToCurrency(e.target.value)}
    amount={toAmount}
    />
    </>
    

  );
}

export default App;
