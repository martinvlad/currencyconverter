import React from 'react'

export default function CurrencyRow(props) {
  const {
      currencyOptions,
      selectedCurrency,
      onChangeCurrency,
      onChangeAmount,
       amount
  } = props
    
    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(currency =>(
                    <option key={currency} value ={currency}>{currency}</option>
                ))}
                
                
            </select>
        </div>
    )
}
