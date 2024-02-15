import React, { useState } from 'react';
import "./App.css"

const App = () => {
const [userheight,setuserHeight]  = useState(0);
const [userweight,setuserWeight]  = useState(0);
const [userbmi,setuserBmi] = useState('');
const [weight,setWeight] = useState('');

const handleBmi = () =>{

    if(userheight === '' || userweight === ''){
        alert("Fill Information Correctly..");
        
    }else{
        const bmi = (userweight/(userheight*userheight))*703;
        setuserBmi(bmi.toFixed());

        if(bmi <= 18.5){
setWeight('Underweight');

        }
        else if (bmi > 18.5 && bmi <= 24.9){
            setWeight("Normal weight");
        }else if (bmi > 25 && bmi <= 29.9){
            setWeight("Overweight");
        }else{
            setWeight("Obese");
        }
    }

}


const handleReset = () =>{
    setWeight('');
  setuserHeight('');
  setuserWeight('')
    setuserBmi('');
    
}

  return (
   <>
   <main>
    <section className='container'>
     <section className='height'>
        <h1>Enter height(in)</h1>
        <input type='text' placeholder='Enter height...'  value={userheight} onChange={(e)=>setuserHeight(e.target.value)}/>
     </section>

     <section className='weight'>
     <h1>Enter weight(lbs)</h1>
        <input type='text ' placeholder='Enter weight...' value={userweight} onChange={(e)=>setuserWeight(e.target.value)}/>
     </section>

     <section className='calculate'>
        <button onClick={handleBmi}>Calculate</button>
     </section>
     <section className='reset'>
        <button onClick={handleReset}>Reset</button>
     </section>
     <section className='message'>
        <p>Your BMI is : {userbmi} </p>
        <p>Weight : {weight}</p>
     </section>

    </section>
   </main>
   </>
  )
}

export default App;