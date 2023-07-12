import './calc.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
export default function Calc() {
  let[temp,setTemp]=useState([]);
  let str="";

  function fun(temp)
  {
    let ans=0;
    let arr=[];
    console.log("-->",temp.length);
    for(let i=0;i<temp.length;i++)
    {
      if(temp[i]>='0' && temp[i]<='9')
      {
        ans=ans*10+parseInt(temp[i]);
      }
      else{
        arr.push(ans);
        arr.push(temp[i]);
        ans=0;
      }
    }
    if(ans!=0)
    {
      arr.push(ans);
    }
    console.log(arr);
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]=='+')
      {
        arr[i+1]= arr[i-1]+arr[i+1];
      }
      if(arr[i]=='-')
      {
        arr[i+1]= arr[i-1]-arr[i+1];
      }
      if(arr[i]=='*')
      {
        arr[i+1]= arr[i-1]*arr[i+1];
      }
      if(arr[i]=='/')
      {
        arr[i+1]= (arr[i-1]/arr[i+1]);
      }

    }
    return arr[arr.length-1];
  }
    function handleClick(v)
    {
      if(v===null)
      {
        setTemp([]);
      }
      else
      {
        setTemp(temp+v);

      }
            
    }
    function handleResult(){
        console.log(temp.length);
        if(temp.length==1)
        {
          str=temp[0];
          console.log(str); 
          setTemp([fun(str)]);
          
        }
        else
        {
          setTemp([fun(temp)]);

        }
        
    }
  return (
    <>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter" value={temp} id="fullWidth" onChange={(e)=>{
        setTemp([e.target.value])
      }} />
    </Box>
    <div className='main'>

        <button onClick={() => handleClick(7)}>7</button>
        <button onClick={() => handleClick(8)}>8</button>
        <button onClick={() => handleClick(9)}>9</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick(0)}>0</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleResult}>=</button>
        <button onClick={() => handleClick(null)}>C</button>
    </div>
    </>
  )
}
