import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
            <Link to='/mypath'>My Navigation</Link>
            <Link to='/contextpath'>My Context</Link>
            <Link to='/mycallback'>My Call Back</Link>
            <Link to='/myusememo'>My Use Memo</Link>'
            <Link to='/form'>Form</Link>
            <Link to='/apiconnectivity'>Api Connectivity</Link>
            <Link to='/lcmethod'>LCMethod</Link>
        </>
    )
}
export default Header;