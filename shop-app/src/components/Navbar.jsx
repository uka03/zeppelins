import logo from "../images/Logo.svg";
import linked from "../images/linked.svg";
import "../style/Navbar.css"
 
 export default function Navbar(){
    return <div className="navbar ">
       <div className="logo">
       <img src={logo} alt="" />
       <div className="leftPoint">
        <img src={linked} alt="" /> 
        Hire Me
       </div>
      </div>
      <div className="navList">
        <ul>
            <li><a href="#" >PORTFOLIO</a></li>
            <li><a className="select"href="#">BLOG</a></li>
            <li><a href="#">CV</a></li>
            <li><a href="#">STORE</a></li>
            <li><a href="#">FREELANCE</a></li>
            <li><a href="#">ABOUT ME</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
      </div>
    </div>
 }