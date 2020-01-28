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
import { Icon, Select, Tabs, List, Card, Button } from "antd";
class CategoriesComponent extends React.Component {
  goToDescriptionPage = Id => {
    console.log(this.props, Id, this.props.data[Id].id - 1);
    this.props.history.push({
      pathname: `/description/${this.props.data[Id].id - 1}`,
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
        <Header showDrawer={this.showDrawer} />
        {/* <Drawers
             visible={this.state.visible}
             onClose={this.onClose}
             showCartData={this.state.cartItem}
             sendCount={this.state.count}
             sendAdd={this.add}
             sendMinus={this.delete}
            /> */}
        <nav>
          <Navbar />
        </nav>

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
                        onClick={() => this.goToDescriptionPage(item.id)}
                        key={item.id}
                      >
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
                                onClick={() =>
                                  this.props.sendShowData(
                                    item.id,
                                    item.title,
                                    item.price,
                                    item.counter,
                                    item.Img
                                  )
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
