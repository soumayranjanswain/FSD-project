import { useState } from "react";
function FormHandling(){
    const[formdata,setFormData]=useState({
         name:"",
        email:"",
        password:"",
        age:0,
        phone:""
 } )
 const handleChange=(event)=>{
    const {name,value}=event.target;
    setFormData({
        ...formdata,
        [name]:value
    })
 }
 const handleSubmit=(event)=>{
     event.preventDefault();
     console.log(formdata);
 }
return(
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="Enter your name" value={formdata.name} onChange={(e)=>{handleChange(e)}}/>
        <br/>
        <input type="text" name="email" id="email" placeholder="Enter your email" value={formdata.email} onChange={(e)=>{handleChange(e)}}/>
        <br/>
        <input type="text" name="password" id="password" placeholder="Enter your password" value={formdata.password} onChange={(e)=>{handleChange(e)}}/>
        <br/>
        <input type="text" name="age" id="age" placeholder="Enter your age" value={formdata.age} onChange={(e)=>{handleChange(e)}}/>
        <br/>
        <input type="text" name="phone" id="phone" placeholder="Enter your phone number" value={formdata.phone} onChange={(e)=>{handleChange(e)}}/>
        <br/>
        <button type="submit">login</button>
        </form>
        </>
)
}
export default FormHandling;
 