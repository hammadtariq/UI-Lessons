
import React from 'react';
import '../App.css';
class Navbar extends React.Component{
  scrollFunction=e=> {
    let element = e.target
    console.log(element.scrollTop,"sdhsah")
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      document.getElementById("navbar").style.backgroundColor = "red";
      
    } else {
      document.getElementById("navbar").style.backgroundColor = "yellow";
    
  }
}
handleClick = ()=>{
  // this.props.history.push({
  //   pathname:`/category/${this.props}`
  // })
 
}
    render(){
   return(
   
    <nav >
      <div className="navC" id="navbar" onScroll={()=>this.scrollFunction}>
    <a href="#" onClick={this.handleClick}>mobile tablets & laptops</a>
    <a href="#">electronic accessories</a>
    <a href="#">pharmacy</a>
    <a href="#">noodles sauces & frozen foods</a>
    <a href="#">household needs</a>
    <a href="#">baby & kids</a>
    <a href="#">more</a>
    </div>
    </nav>
   
   )
   }
};
export default Navbar;