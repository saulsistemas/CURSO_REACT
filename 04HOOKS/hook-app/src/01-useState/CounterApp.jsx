import { useState } from "react";

export const CounterApp = () =>{
    const [counter,setCounter]=useState({
        counter1:10,
        counter2:20,
        counter3:30
    });
    const {counter1,counter2,counter3}=counter;
    return(
        <>
            <h1>Counter App</h1>
            <hr />
            <h1> counter : {counter1} </h1>
            <h1> counter : {counter2} </h1>
            <h1> counter : {counter3} </h1>
            <button 
            className="btn-primary" 
            onClick={ 
                ()=>setCounter( {
                    ...counter,
                    counter1: counter1 +1
                } ) 
            }
            >+1</button>
        </>
    );
}