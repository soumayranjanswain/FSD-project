import { useState } from "react"

function MyState(){
    const[num,setNum]=useState(0);
    return(
        <>
        <h3>Number:{num}</h3>
        <button onClick={()=>setNum(num+1)}>inCrement</button>
        <button onClick={()=>setNum(num-1)}>deCrement</button>
        </>
    )

}
export default MyState