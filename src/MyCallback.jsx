import { useCallback,useState } from "react";
import Button from "./Button";
function MyCallback(){
    const [count,setCount]=useState(0);
    const increment=useCallback(()=>{
    setCount(count+1)
},[count])
console.log('my call back')
return(
    <>
    <p>Count:{count}</p>
    <Button handleClick={increment}text={"increment"}/>
    </>
)
}
export default MyCallback;