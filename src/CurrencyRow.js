import React from 'react'

export default function CurrencyRow(props) {
  const {
      currencyOptions
  } = props
    
    return (
        <div>
            <input type="number" className="input"/>
            <select>
                {currencyOptions.map(currency =>(
                    <option key={currency} value ={currency}>{currency}</option>
                ))}
                
                
            </select>
        </div>
    )
}
