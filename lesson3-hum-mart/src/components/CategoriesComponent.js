import React from "react";
import ExtraContentTwo from "./ExtraContentTwo";
import ExtraContentThree from "./ExtraContentThree";
import Footer from "./Footer";
import ExtraContentOne from "./ExtraContentOne";
import Navbar from "./Navbar";
import Sider from "./SideMenu";
import "../css/categories-components.css";
import ShowCardProvider from '../providers/show-card-provider';
import DrawerProvider from '../providers/drawer-provider';
import { Icon, Select, Tabs, List, Card, Button ,Pagination,message} from "antd";

class CategoriesComponent extends React.Component {
  constructor (props){
    super(props);
    this.state={
      categoriesdata:[]
    }
  }
 handleClick = (Id, Price) => {
    let newSum, newvalue,cartCounter;
     let cartCopy = this.props.categoriesData.value;
     cartCounter=this.props.cartItem.count;
     console.log(cartCopy)
      let cartItemCopy = this.props.cartItem;
      console.log(cartItemCopy)
          let newCartItem = cartCopy.find(ele => ele.id == Id);
        console.log(newCartItem,"newCartItem")
    if(this.props.cartItem.value.length >0){
      let cartflg = false; let i; 
        for( i=0;i<cartItemCopy.value.length;i++){
          if(newCartItem.id ===cartItemCopy.value[i].id){
            cartflg=true     
          }    
        }
        if(cartflg ===false){ 
          message.success("added");
          cartCounter +=1;
          newvalue=[...cartItemCopy.value,newCartItem];
          newSum=cartItemCopy.sum+Price
          this.props.addToCart(newvalue,newSum,cartCounter);    
        }
        else{
          cartflg=false;
          message.success("exist")
        }
        }
        else{
          cartCounter +=1;
           newvalue=[...cartItemCopy.value,newCartItem];
           newSum=cartItemCopy.sum+Price
          message.success("added")
          this.props.addToCart(newvalue,newSum,cartCounter);
        }
  };
  goToDescriptionPage = Id => {
    console.log(this.props, Id, this.props.categoriesData.value[Id].id );
    this.props.history.push({
      pathname: `/description/${this.props.categoriesData.value[Id].id }`,
      data: this.props.data
    });
  };
  handleChange=(value)=> {
    console.log(`selected ${value}`);
    let sortData = this.props.categoriesData.value.slice();
    if(value=="price"){
      function compare(a, b) {
        const bandA = a.price;
        const bandB = b.price;
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }
      sortData.sort(compare);
this.props.sortByPrice(sortData)  
     }
     if(value=="product"){
      function compare(a, b) {
        const bandA = a.title;
        const bandB = b.title;
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison;
      }
      sortData.sort(compare);
this.props.sortByPrice(sortData)  
     }
    }
  
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
                <Select defaultValue="Position" style={{ width: 120 }} onChange={this.handleChange}>
                  <Option value="price">Price</Option>
                  <Option value="product">Product</Option>
                 
                </Select>
                <Icon type="arrow-up" />
              </p>
            </div>
            <Pagination defaultCurrent={1} total={20} />
            <div className="tab-pane">
           
              <Tabs defaultActiveKey="1">
                <TabPane tab="ALL PRODUCTS" key="1">
                  <List
                    itemLayout="horizontal"
                    dataSource={this.props.categoriesData.value}
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
                                  this.handleClick(item.id,item.price)
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
