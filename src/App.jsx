import { useEffect, useState } from 'react'
import './css/App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [amount,setAmount] = useState(0);
  const [convertedAmount, setconvertedAmount] = useState(0);
  const [fromCurrency,setFromCurrency] = useState("usd");
  const [toCurrency,setToCurrency] = useState("inr");
  const data = useCurrencyInfo(fromCurrency);
  const options = Object.keys(data);

  function convert(){
      setconvertedAmount(amount * data[toCurrency])
  }

  useEffect(()=>convert(),[amount,data,fromCurrency,toCurrency])
  
  return (
    <>
        <h1 className="heading" style={{backgroundColor:"black",padding:"10px",borderRadius:"8px"}}>Currency converter</h1>
        <div className='mainContainer'>

        <InputBox 
                label="From" 
                amount={amount} 
                onAmountChange={setAmount}
                currency={fromCurrency}
                currencyOptions={options}
                onCurrencyChange={setFromCurrency}
                isDisabled={false}
                />
        <InputBox 
                label="To" 
                amount={convertedAmount} 
                onAmountChange={setconvertedAmount}
                currency={toCurrency}
                currencyOptions={options}
                onCurrencyChange={setToCurrency}
                isDisabled={false}
                />
        {/* <button onClick={convert}>Convert</button> */}
        </div>
    </>
  )
}

export default App
