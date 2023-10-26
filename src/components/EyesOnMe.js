// Code EyesOnMe Component Here
import React from 'react'

export default function EyesOnMe() {
    function handleFocus(){
       console.log('Good!');
    }

    function handleBlur(){
       console.log('Hey! Eyes on me!')
    }
  return (
    <div>
      <button onFocus={(e)=> handleFocus(e)} onBlur={(e)=> handleBlur(e)}>Eyes on me</button>
    </div>
  )
}

