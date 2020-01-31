import React from "react";
import ExtraContentTwo from "./ExtraContentTwo";
import ExtraContentThree from "./ExtraContentThree";
import Footer from "./Footer";
import { connect } from "react-redux";
import ExtraContentOne from "./ExtraContentOne";
import Header from "./Header";
import Navbar from "./Navbar";
import Drawers from "./Drawer";
import Sider from "./SideMenu";
import "../css/categories-components.css";
import ShowCardProvider from '../providers/show-card-provider';
import DrawerProvider from '../providers/drawer-provider';
import { Icon, Select, Tabs, List, Card, Button } from "antd";

class CategoriesComponent extends React.Component {
 handleClick = (Id)=>{
   console.log(this.props.addtocart(this.props.data[Id].id));
  //  this.props.addtocart(this.props)
 }
  goToDescriptionPage = Id => {
    console.log(this.props, Id, this.props.data[Id].id );
    this.props.history.push({
      pathname: `/description/${this.props.data[Id].id }`,
      data: this.props.data
    });
  };
  render() {
    const { Option } = Select;
    const { TabPane } = Tabs;
    const { Meta } = Card;
    console.log(this.props.dataItem);
    return (
      <section>
        <div className="karachiP">
          <ExtraContentOne />
        </div>
        <div className="customcare">
          <ExtraContentTwo />
        </div>
        <ShowCardProvider/>
        <DrawerProvider/>
        {/* <Drawers
             visible={this.state.visible}
             onClose={this.onClose}
             showCartData={this.state.cartItem}
             sendCount={this.state.count}
             sendAdd={this.add}
             sendMinus={this.delete}
            /> */}
      
          <Navbar />
            

        <div className="cate-page">
          <div className="side-nav">
            <Sider />
          </div>
          <div className="page-content">
            <div className="side-nav-information">
              <Icon type="home" />
              <Icon type="right" />
              <p>Mobiles Tablets & Laptops</p>
              <Icon type="right" />
              <p>Mobiles</p>
            </div>
            <div className="side-nav-information-one">
              <p>Mobiles</p>
              <p>
                Sort By
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Icon type="arrow-up" />
              </p>
            </div>
            <div className="tab-pane">
              <Tabs defaultActiveKey="1">
                <TabPane tab="ALL PRODUCTS" key="1">
                  <List
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                      <List.Item
                        
                        key={item.id}
                      >
                        <div className="cards">
                          <Card
                         
                            hoverable
                            style={{ width: 170 }}
                            cover={<img alt="example" src={item.Img}  onClick={() => this.goToDescriptionPage(item.id)}/>}
                          >
                            <Meta title={item.title} />
                            <div className="card-inner">
                              <p>Rs:{item.price}</p>
                              <Button
                                onClick={() =>
                                  // this.props.sendShowData(
                                  //   item.id,
                                  //   item.title,
                                  //   item.price,
                                  //   item.counter,
                                  //   item.Img
                                  // )
                                  this.handleClick(item.id)
                                }
                                type="danger"
                              >
                                {item.content}
                              </Button>
                            </div>
                          </Card>
                        </div>
                      </List.Item>
                    )}
                  />
                  <Icon type="car" />
                </TabPane>
                <TabPane tab="EXPRESS" key="2">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>

        <ExtraContentThree />
        <Footer />
      </section>
    );
  }
}

export default CategoriesComponent;
