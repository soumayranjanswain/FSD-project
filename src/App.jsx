//import MyComponent from"./MyComponent"
//import MyClassComponent from "./MyClassComponent"
//import MyProps from"./MyProps"
//import MyState from "./MyState"
//import{useState}from"react"
//import UserProfile from "./UserProfile"
//import MyUseEffect from "./MyUseEffect"
//function App() {
  //const [name,setName]=useState('guest')
   //const [role,setRole]=useState('visitor')
   //const [user,setUser]=useState=useState({name:'guest',role:'visitor'});
  //return (
   // <>
   // <MyProps name="soumya" />
    //<MyState/>
    //</>
    //<>
    //<UserProfile name={name} role={role}/>
    //<button onClick={()=>{setName('soumya');setRole('admin')}}>Login</button>
    //</>
   // <>
   // <MyUseEffect/>
   // </>
 // )
//}

//export default App
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Layout/Home";
import About from "./Layout/About";
import Contact from "./Layout/Contact";
import MyNavigation from "./MyNavigation";
import MyContext from "./MyContext";
import MyCallback from "./MyCallback";
import Footer from "./Layout/Footer";
import MyUseMemo from "./Layout/MyUseMemo";
import FormHandling from "./FormHandling";
import ApiConnectivity from "./ApiConnectivity";
import LCMethod from "./LCMethod";
import UCComponent from "./UCComponent";
import UseZustand from "./UseZustand";



function App(){
  return(
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/mypath" element={<MyNavigation />}/>
      <Route path="/contextpath" element={<MyContext />}/>
      <Route path="/mycallback" element={<MyCallback />}/>
      <Route path="/myusememo" element={<MyUseMemo/>}/>
      <Route path="/form" element={<FormHandling/>}/>
      <Route path="/apiconnectivity" element={<ApiConnectivity/>}/>
      <Route path="/lcmethod" element={<LCMethod a={10} favcolor="white"/>}/>
      <Route path="/uccomponent" element={<UCComponent/>}/>
      <Route path="/usezustand" element={<UseZustand/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App;


