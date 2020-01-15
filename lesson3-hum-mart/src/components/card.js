import React from "react";
import { List, Card, Button } from "antd";
import Header from "./Header";
import { connect} from "react-redux";
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    console.log(this.props);
    const { Meta } = Card;
    return (
      <div className="cardsliderP">
        <div className="mo">
       
          <h3>Mobile Phones</h3>
        </div>
        <div className="cardslider">
          <List
           
            itemLayout="horizontal"
            dataSource={this.props.data}
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
const mapStateToProps= (state)=>{
 return{
  data:state.data
 }
}
export default connect(mapStateToProps)(Cart);
