import { useMemo, useState } from "react";
function Mycalculation({value}){
    return value*5;
}
function MyUseMemo(){
    const[count,setCount]=useState(0);
    const calculation=useMemo(()=>MyCalculation(count)[count])
    return(
        <>
          <p>Count: {count}</p>
          <p>Calculation: {calculation}</p>
          <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )


}
export default MyUseMemo;