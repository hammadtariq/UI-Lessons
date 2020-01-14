import React from "react";
import { List, Card, Button } from "antd";
import Header from "./Header";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    const data = [
      {
        id: 1,
        title: "Ant Design Title 1",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
        price: 100,
        counter:1,
        flg:false,
      },
      {
        id: 2,
        title: "Ant Design Title 2",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/sxwquu1511793428.jpg",
        price: 825,
        counter:1,
        flg:false,
      },
      {
        id: 3,
        title: "Ant Design Title 3",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
        price: 854,
        counter:1,
        flg:false,
      },
      {
        id: 4,
        title: "Ant Design Title 4",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
        price: 455,
        counter:1,
        flg:false,
      },
      {
        id: 5,
        title: "Ant Design Title 4",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
        price: 484,
        counter:1,
        flg:false,
      }
    ];
    const { Meta } = Card;
    return (
      <div className="cardsliderP">
        <div className="mo">
       
          <h3>Mobile Phones</h3>
        </div>
        <div className="cardslider">
          <List
           
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item key={item.id}>
                <div className="cards">
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={<img alt="example" src={item.Img} />}
                  >
                    <Meta title={item.title} />
                    <div className="card-inner">
                      <p>Rs:{item.price}</p>
                      <Button 
                       onClick={()=>this.props.sendShowData(item.id,item.title,item.price,item.counter,item.Img)}
                      type="danger">{item.content}</Button>
                    </div>
                  </Card>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Cart;
