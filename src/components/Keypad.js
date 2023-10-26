// Code Keypad Component Here
import React, {useState} from "react";

function Keypad (){
    const[password, setPassword]= useState();
  
    
    function handleChange(){

        console.log('Entering password...')
        
    }
    return (
        
        <div>
            <form>
            <input type="password" onChange={(e)=> handleChange(()=>{
                e.preventDefault() 
                setPassword(e.target.value)
                
            }) } value={password}/>
            </form>
        </div>
    )
}

export default Keypad;