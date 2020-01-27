
import React from 'react';
class Navbar extends React.Component{
 handleScroll =()=>{
   const NavBar= document.querySelector("#NavBar");
        var scrollPosY = window.pageYOffset | document.body.scrollTop;
        if(scrollPosY > 100) {
            NavBar.className = ('navC navX');
      } else if(scrollPosY <= 100) {
        NavBar.className =  ('navC');
      }
    }
    render(){
   return(
    <div className="navC" id="NavBar" onScroll={this.handleScroll}>
    <a href="#">mobile tablets & laptops</a>
    <a href="#">electronic accessories</a>
    <a href="#">pharmacy</a>
    <a href="#">noodles sauces & frozen foods</a>
    <a href="#">household needs</a>
    <a href="#">baby & kids</a>
    <a href="#">more</a>
    </div>
   )
   }
};
export default Navbar;