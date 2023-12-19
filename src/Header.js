import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
        <Link to={"/"}><button className="btn btn-dark">All</button></Link> 
       <Link to={"/FullStack"}><button className="btn btn-dark">Full Stack</button></Link>
       <Link to={"/Datascience"}><button className="btn btn-dark">Data Science </button></Link>
       <Link to={"/Cybersecurity"}><button className="btn btn-dark"> Cyber Security</button></Link>
    </nav>
        </>
    )
}
export default Header;