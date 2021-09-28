import React, {useEffect, useState} from 'react';
import './Advice.css'

function Advice() {
    //create a state that will get  the advice data
    const [Advice, setAdvice] = useState('');
   
//create a function and state to help reload the advice
const [seek, setSeek] = useState('');
    function Refresh(e) {
      setSeek(Advice)
    }



    //create a useffect function to get the advice
    useEffect ( () => {
        getAdvice();
    }, [seek]);
    
    // create async function to fetch data from the Api
    const getAdvice = async () =>{
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const data = await response.json();
        console.log(data.slip.advice);
        setAdvice(data.slip.advice);
    }

    
        
  return (
    <div className="advi">
     <div className="small">
       <p>{Advice}</p>
      <button onClick={Refresh}>Seek Advice </button> 
      </div>
     
    </div>
    
  );
}

export default Advice;
