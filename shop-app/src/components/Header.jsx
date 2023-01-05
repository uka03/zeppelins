import blog from "../images/blog.svg";
import "../style/Header.css";
import twitter from "./icons/twitter.svg"
import linked_in from "./icons/linked_in.svg"
import medium from "./icons/medium.svg"
export default function Header(){
    return <header className="blogHeader">
        <div className="blogContent">
            <h2 className="title">Blog Posts</h2>
            <h2 className="bio">I think so, this is it</h2>
            <p className="desc">Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
            <div className="socials">
                <div className="social" id="twitter"><img src={twitter} alt="" /> TWITTER</div>
                <div className="social" id="linkedin"><img src={linked_in} alt="" /> LINKEDIN</div>
                <div className="social" id="medium"><img src={medium} alt="" /> MEDIUM</div>
            </div>
        </div>
        <img src={blog} className="blogImg" alt="" />
        
    </header>
}