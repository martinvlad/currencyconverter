import React from 'react'

export default function CurrencyRow() {
    return (
        <div>
            <input type="number" className="input"/>
            <select>
                <option value ="USD">USD</option>
                <option value ="EURO">EURO</option>
            </select>
        </div>
    )
}
