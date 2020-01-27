import React from "react";
import "antd/dist/antd.css";
import { Drawer, Input, Button, Icon, Badge } from "antd";
import "../css/footer.css"

class Footer extends React.Component {
  state = {
    Footer: [
      {
        Title: "Hummart",
        list: ["About Us", "Careers", "Sell On Hammart", "Term", "Policies"]
      },
      {
        Title: "Help",
        list: [
          "FAQS",
          "How To Order",
          "How To Pay",
          "Return",
          "Contact Us",
          "Delivery"
        ]
      },
      {
        Title: "CONTACT INFORMATION",
        list: [
          "Phone",
          "Email",
          "Working Days",
          "Return",
          "Contact Us",
          "Delivery"
        ]
      },
      {
        Title: "Mobile App",
        list: ["Google", "App Store"]
      }
    ]
  };
  Footer = () => {
    return (
      <div className="Footer">
        <div className="pdiv">
          {this.state.Footer.map(item => (
            <div className="Fdiv1">
              <div>
                <h2 style={{ color: "white" }}>{item.Title}</h2>
              </div>
              <ul>
                {item.list.map(mylist => (
                  <li>
                    <Icon type="caret-right" style={{ color: "white" }} />
                    <a href="#">{mylist}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <this.Footer />
      </div>
    );
  }
}
export default Footer;
