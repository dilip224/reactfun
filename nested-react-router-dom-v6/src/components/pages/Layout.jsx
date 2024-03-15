import { Link,NavLink, Outlet } from "react-router-dom"
export const Layout = () => {
  return (
    <>
  
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul> */}
        <ul>
            <li><NavLink to="/" style={({isActive})=>{return({color: isActive? "red":""})}}>Home</NavLink></li>
            <li><NavLink to="/about" style={({isActive})=>{return({color: isActive? "red":""})}}>About</NavLink></li>
            <li><NavLink to="/contact" style={({isActive})=>{return({color: isActive? "red":""})}}>Contact</NavLink></li>
            <li><NavLink to="/prop/lauda" style={({isActive})=>{return({color: isActive? "red":""})}}>Props</NavLink></li>
            <li><NavLink to="/dash" style={({isActive})=>{return({color: isActive? "red":""})}}>DashBoard</NavLink></li>
            <li><NavLink to="/login" style={({isActive})=>{return({color: isActive? "red":""})}}>Login</NavLink></li>
        </ul>
   
    <Outlet/>
    </>
  )
}
