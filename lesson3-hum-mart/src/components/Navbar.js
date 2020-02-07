
import React from 'react';
import '../App.css';
import classnames from "classnames";
import {Link} from 'react-router-dom';
class Navbar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: 100,
      visible: true
     

    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;
 
    const currentScrollPos = window.pageYOffset;
   
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      // prevScrollpos: currentScrollPos,
      visible
    });
   
  };

    render(){
   return(
   
    
    <nav
    className={classnames("navbar", {
      "navbar--hidden": !this.state.visible
 
    })}
  >
    <div className="navC" id="navbar" >
    <Link to="/category/id">mobile tablets & laptops</Link>
       <Link to="/default">electronic accessories</Link>
         <Link to="/default">pharmacy</Link>
        <Link to="/default">noodles sauces & frozen foods</Link>
         <Link to="/default">household needs</Link>
         <Link to="/default">baby & kids</Link>
         <Link to="/default">more</Link>
         </div>
         
  </nav>
  
   
   )
   }
};
export default Navbar;