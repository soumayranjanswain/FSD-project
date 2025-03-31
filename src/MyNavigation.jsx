import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function MyNavigation(){
    const navigate=useNavigate();
    let isLoggedIn=true;
    useEffect(()=>{
        if(isLoggedIn){
            navigate("/about");
        }
    })
    return(
        <>
        <h4>This is my MyNavigation Component</h4>
        </>
    )
}
export default MyNavigation;

