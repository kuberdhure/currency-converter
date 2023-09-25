import React from "react";
import '../css/InputBox.css'

function InputBox({
  label,
  amount,
  currency,
  isDisabled,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
}) {
  return (
    <div className="inputContainer">
      <label className="label" htmlFor={label}>{label}</label>
      <div className="inputItems">
      <input className="inputField" type="textfield" name={label} min={0} value={isNaN(amount) ? '' : amount.toString()} disabled={isDisabled} onChange={(e)=> {onAmountChange && onAmountChange(Number(e.target.value))}}/>
      <select 
            className="options"
            onChange={(e)=>{
                    onCurrencyChange && onCurrencyChange(e.target.value);
                    }
                } 
            value={currency}>
        {
            currencyOptions.map(
                (item)=>(
                     <option key={item} value={item}>{item}</option> 
                )
            )
        } 
      </select>
      </div>
    </div>
  );
}

export default InputBox;
