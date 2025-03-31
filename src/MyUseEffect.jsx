//import {useState } from "react";
//import{useEffect} from "react";
//function MyUseEffect(){
   // const [click,setClick]=useState(0);
    //useEffect(()=>{
      //  document.tittle= 'You Clicked For ${click} times'; 
   // }

   // )
   // return(
      //  <>
        //<h4>You clicked for {click} times</h4>
        //<button onClick={()=>setClick(click+1)}>Click me</button>
       // </>
   // )
//}
//export default MyUseEffect;

import {useState } from "react";
import{useEffect} from "react";
function MyUseEffect(){
    const [user,setuser]=useState([])
    useEffect(()=>{
        setuser(userDetails);
        console.log(user);
    },[])
    const userDetails=[
        {id:1,name:"soumya",email:"soumya@gmail.com",age:19},
        {id:2,name:"muna",email:"muna45@gmail.com",age:21},
        {id:3,name:"sangram",email:"sangram35@gmail.com",age:22},
        {id:4,name:"aurobinda",email:"auro124@gmail.com",age:20},
        {id:5,name:"sanatanu",email:"santanu214746@gmail.com",age:20},
    ]

return(
    <>
        <table border={2} width={"100%"} cellPadding={0} cellSpacing={0} style={{textAlign:"center"}}>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>email</th>
            </tr>
            {
                user.map((element,index)=>(
                    <tr key={index}>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.age}</td>
                        <td>{element.email}</td>

                    </tr>
                ))
            }
        </table>
    
    
    </>
)
}
export default MyUseEffect;