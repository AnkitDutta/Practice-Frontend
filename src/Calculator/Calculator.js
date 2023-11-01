import React, { useState } from 'react'

function Calculator() {

    const [input, setInput] = useState(0);
    const [result, setResult] = useState(0);

    const handleInput = (e) => {
        setInput(e.target.value);
    };
    function plus(){
        setResult(result + parseInt(input));
        setInput(result + parseInt(input));
        console.log(result);
        // setInput('');
    }
    function minus(){
        setResult(result - parseInt(input));
        setInput(result - parseInt(input));
        // setInput('');
    }
    function multiply(){
        setResult(result * parseInt(input));
        setInput(result * parseInt(input));
        // setInput('');
    }
    function divide(){
        setResult(result / parseInt(input));
        setInput(result / parseInt(input));
        // setInput('');
    }
    function ac(){
            setResult(0);
            setInput(0);
    }
    function equals(){
        console.log(input,result);
        // setResult(result + parseInt(input))
        setInput(result);
    }
  return (
    <>
        <div className='mx-auto mt-20 outline p-5 w-1/3 rounded-md'>
            <div className='flex items-center justify-center flex-col'>
                <div className='mb-4'>
                    <p className='text-xl font-bold '>CASIO</p>
                    <p className='m-1 text-xs'>fx-82MS</p>
                </div>            
            <div className='mb-3'>
                <input 
                className="p-2 outline rounded-md w-full" 
                type="number"
                value={input}
                placeholder='Number'
                onChange={handleInput}
                />
            </div>
            <div className='flex justify-items-center' >
                <button className='m-1 p-2 outline text-red-700 rounded-md' onClick={ac} >AC</button>

                <button className='m-1 p-2 outline rounded-md' onClick={plus} >+</button>
                <button className='m-1 p-2 outline rounded-md' onClick={minus}>-</button>
                <button className='m-1 p-2 outline rounded-md' onClick={multiply}>*</button>
                <button className='m-1 p-2 outline rounded-md' onClick={divide}>/</button>
                <button className='m-1 p-2 outline bg-orange-400 rounded-md' onClick={equals}>=</button>
            </div>
            <p className='text-xl'>Result: {result}</p> 
            </div>
        </div>
    </>
  )
}

export default Calculator
