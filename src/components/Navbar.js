import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";


const NavBar = ()=>{ 
  const {state,dispatch} = useContext(UserContext)
  const renderList = ()=>{
    if(state){
      return [
            <li><Link to="/profile">Profile</Link></li>,
            <li><Link to="/create">Create Post</Link></li>
      ]
    } else {
        return [   
           <li><Link to="/signin">Signin</Link></li>,
           <li><Link to="/signup">Signup</Link></li>
        ]
    }
  }
return(
  <nav>
    <div className="nav-wrapper white">
      <Link to={state?"/":"/signin"} className="brand-logo left">Instgram</Link>
      <ul id="nav-mobile" className="right hide-on-small-and-down">
        {renderList()}


        {/* <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/create">Create Post</Link></li> */}


      </ul>
    </div>
  </nav>

    ) 
}

export default NavBar;