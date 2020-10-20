import React from 'react'

export default function CurrencyRow(props) {
  const {
      currencyOptions,
      selectedCurrency,
      onChangeCurrency
  } = props
    
    return (
        <div>
            <input type="number" className="input"/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(currency =>(
                    <option key={currency} value ={currency}>{currency}</option>
                ))}
                
                
            </select>
        </div>
    )
}
