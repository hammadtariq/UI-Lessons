import React from "react";
import { List, Card ,Button } from "antd";

class Cart extends React.Component {
  render() {
    const data = [
      {
        title: "Ant Design Title 1",
        content:"ADD TO CART",
        Img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        price:420
      },
      {
        title: "Ant Design Title 2",
        content:"ADD TO CART",
        Img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        price:825
      },
      {
        title: "Ant Design Title 3",
        content:"ADD TO CART",
        Img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        price:854
      },
      {
        title: "Ant Design Title 4",
        content:"ADD TO CART",
        Img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        price:455
      },
      {
        title: "Ant Design Title 4",
        content:"ADD TO CART",
        Img:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        price:484
      }
    ];
    const { Meta } = Card;
    return (
      <div className="cardsliderP">
      <div className="mo">  <h3>Mobile Phones</h3></div>
        <div className="cardslider">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <div className="cards">
                  <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={
                      <img
                        alt="example"
                        src={item.Img}
                      />
                    }
                  >
                    <Meta
                      title={item.title}
                    />
                     <div className="card-inner">
                  <p>Rs:{item.price}</p>
                  <Button type="danger">{item.content}</Button>
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
