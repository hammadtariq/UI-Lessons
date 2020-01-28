import React from "react";
import {Icon} from 'antd';
import '../css/footer.css';
import playstore from '../assets/playstore.PNG';
import apple from '../assets/apple.PNG';
import delivery from '../assets/delivery.PNG';
import easypaisa from '../assets/easypaisa.PNG';
import jazzcash from '../assets/jazzcash.PNG';
import visa from '../assets/visa.PNG';
import mastercard from '../assets/mastercard.PNG'
const Footer = props => 

<footer>
<div className="footer-one">
<div>
    <h4>HUMMART</h4>
  
        <li>About us</li>
        <li>Careers</li>
        <li>Sell on HumMart</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
    
</div>
<div>
<h4>HELP</h4>
   
        <li>FAQs</li>
        <li>How to Order</li>
        <li>How to Pay</li>
        <li>Returns & Refunds</li>
        <li>Contact us</li>
        <li>Delivery</li>
        <li>Easy Paisa</li>
   
</div>
<div>
    <h4>CONTACT INFORMATION</h4>
    <h6>PHONE</h6>
    <p>(021) 111 556 566</p>
    <h6>EMAIL</h6>
    <p>customer@hummart.com</p>
    <h6>WORKING DAYS/HOURS</h6>
    <p>MON- SUN /9.00AM -9.00PM</p>
    <div className="footer-icon"><Icon type="facebook" /><Icon type="twitter" /><Icon type="linkedin" /><Icon type="instagram" /><Icon type="youtube" /><Icon type="google-plus" /></div>
</div>
<div className = "mobile-apps">
    <h4>MOBILE APPS</h4>
   <div><img src={playstore} ></img></div>
  <div> <img src={apple} ></img></div>
</div>
</div>  
    <div className="footer-two">
        <div><p>© Hummart.com 2018. All Rights Reserved</p></div>
        <div>
            <img src={delivery}></img>
            <img src={easypaisa}></img>
            <img src={jazzcash}></img>
            <img src={visa}></img>
            <img src={mastercard}></img>
        </div>
    </div>
</footer>;
export default Footer;
