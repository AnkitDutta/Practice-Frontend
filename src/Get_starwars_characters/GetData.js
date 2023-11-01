import React, {useState, useEffect} from 'react'
import axios from 'axios';

function GetData() {
    const [result, setResult] = useState(false);
    const [query, setQuery] = useState("");
    const [text, setText] = useState("");
    
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/getGames')
        .then((response) => {
            setResult(response.data);
        // console.log(response.data[0].name)
        })
    }, [])

    function handleChange(e){
        setText(e.target.value);
    }

    function handleSubmit(){
        axios.post("http://127.0.0.1:5000/addGame",{"name":text})
        .then((response)=>{
            console.log(response);
        })
        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
    

    return (
    <div className='h-screen flex bg-slate-300'>
        <div className='m-5 p-5 h-max w-64 bg-slate-400 rounded-md'>
            <input 
            type='text' 
            placeholder='Search name' 
            className='outline-none border-none w-full mb-2 p-2 rounded-md' 
            onChange={(e)=>setQuery(e.target.value)} />
                <ul className='flex rounded-md flex-col justify-center items-center p-3 bg-slate-300'>
                    {result?
                        result.filter((data)=> {
                            if(data.name.toLowerCase().includes(query.toLowerCase()))
                                return data;
                        }).map((data, idx)=>{
                            return(
                                <li className='text-md font-mono rounded-md w-full my-2 p-2 bg-slate-200' key={idx}>{data.name}</li>
                            )
                    }):
                    <div>Loading...</div>
                    }
                </ul>
        </div>
        <div className='flex flex-col items-center justify-center h-max w-60 mx-5 my-5 bg-slate-400 p-2 rounded'>
            <p className='text-white font-bold text-md font-thin mb-3'>ADD NEW GAME</p>
            
                <input onChange={e => handleChange(e)} value={text} type="text" className='rounded-sm p-2 bg-slate-200 outline-none' placeholder='Enter title' />
                <button onClick={handleSubmit} className='px-2 mt-4 bg-slate-500 text-white rounded-sm'>
                    Submit
                </button>
            
      </div>

    </div>
  )
}

export default GetData
