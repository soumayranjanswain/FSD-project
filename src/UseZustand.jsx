import CreateZustand from "./CreateZustand";
function UseZustand(){
    const {count,increase,decrease,reset} = CreateZustand();
    return(
        <>
        <p>Count :{count} </p>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}
export default UseZustand;