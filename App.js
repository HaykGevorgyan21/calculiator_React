import { useEffect, useState } from 'react';
import './App.css';
import KeyData from './keyData';


function App() {
const [data, setData] = useState(KeyData)
const [value, setValue] = useState('')
const [value1, setValue1] = useState('')
const [operator, setOperator] = useState('')
const [result, setResult] = useState('')
const [display, setDisplay] = useState('0')

useEffect(()=>{
   setDisplay(`${value}`)
},[value])
useEffect(()=>{
  setDisplay(`${value}${operator}${value1}`)
},[value1])
useEffect(()=>{
  setDisplay(`${value}${operator}`)
  },[operator])
  useEffect(()=>{
if(result){
  setDisplay(result)
}
  },[result])
const calculiation = (el)=>{
if(el.button!== '+' && el.button !== '-' && el.button !== '•/•' && el.button !== 'X' && el.button !== '=' && el.button !== 'AC' && el.button !== '%' && operator === ''){
    setValue(value+ el.button)
    console.log(1)
  }else if(el.button!== '+' && el.button !== '-' && el.button !== '•/•' && el.button !== 'X' && el.button !== 'AC' && el.button !== '=' && el.button !== '%' && operator){
  setValue1(value1+el.button)
}else if(el.button === '+' || el.button === '-' || el.button === '•/•' || el.button === 'X'  || el.button === '%'){
setOperator(el.button)
}else if(el.button === 'AC'){
    setDisplay('')
   setValue('')
    setValue1('')
    setOperator('')

    }else{
      mycalc()
      }
    }

const mycalc = () => {
  if(operator === '+'){
    setResult(Number(value) + Number(value1));
    setDisplay(result)
  }else if(operator === '-'){
    setResult(Number(value) - Number(value1));
    setDisplay(result)
  }else if(operator === '•/•'){
    setResult(Number(value) / Number(value1));
    setDisplay(result)
  }else if(operator === 'X'){
    setResult(Number(value) * Number(value1));
    setDisplay(result)
    }else if(operator === '%'){
  setResult(Number(value)*Number(value1)/100);
  setDisplay(result)
   }
   
}

let keyData = data.map((el,i)=>{
  return(<div key={i} className='element' onClick={()=>{
    calculiation(el)
    
  }}>{el.button}</div>)
})

  return (
    <div className="App">
      <div className='iphone'>
      <div className='calculiator_bar'>
        <div className='Resultat'><span>{display}</span></div>
        <div className='keydata'>{keyData}</div>
      </div>
      </div>
    </div>
  );
}

export default App;
