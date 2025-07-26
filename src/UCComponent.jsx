import { useRef } from "react";

function UCComponent() {
    const inputRef = useRef();

    const show = () => {
        // Implement the desired functionality here
        console.log(inputRef.current.value); // Example: log the input value
    }

    return (
        <div>
            <input type="text" name="name" ref={inputRef} />
            <button onClick={show}>Show</button>
        </div>
    )
}

export default UCComponent;
