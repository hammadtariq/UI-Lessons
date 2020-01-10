import React, { Component } from "react";
import "./App.css";
import one from "./pictures/2020-web.jpg";
import two from "./pictures/prayer.jpg";
import three from "./pictures/price.jpg";
import m1 from "./pictures/mobile1.jpg";
import m2 from "./pictures/mobile2.jpg";
import m3 from "./pictures/mobile3.jpg";
import m4 from "./pictures/mobile4.jpg";
import m5 from "./pictures/mobile5.jpg";
import of1 from './pictures/of1.jpg'
import of2 from './pictures/of2.jpg'
import of3 from './pictures/of3.jpg'
import of4 from './pictures/of4.jpg'
import of5 from './pictures/of5.jpg'
import c1 from './pictures/c1.jpg'
import c2 from './pictures/c2.jpg'
import c3 from './pictures/c3.jpg'
import c4 from './pictures/c4.jpg'
import c5 from './pictures/c5.jpg'
import c6 from './pictures/c6.jpg'
import c7 from './pictures/c7.jpg'
import c8 from './pictures/c8.jpg'
import c9 from './pictures/c9.jpg'
import c10 from './pictures/c10.jpg'
import c11 from './pictures/c11.jpg'
import c12 from './pictures/c12.jpg'
import c13 from './pictures/c13.jpg'
import c14 from './pictures/c14.jpg'

import { Icon, Input, Card, Button, Carousel, Badge,Drawer } from "antd";
import "antd/dist/antd.css";
const { Search } = Input;
const { Meta } = Card;

class App extends Component {
  state = {
    count: 0,
    visible:false,
    mobiles:[{title:'Samsung',description:'adastyghdfdg',price:126000,picture:<img src={m1} alt='pic' width='100%' height='100%'/>},{title:'Samsung',description:'adastyghdfdg',price:126000,picture:<img src={m2} alt='pic' width='100%' height='100%'/>},{title:'Samsung',description:'adastyghdfdg',price:126000,picture:<img src={m3} alt='pic' width='100%' height='100%'/>},{title:'Samsung',description:'adastyghdfdg',price:126000,picture:<img src={m4} alt='pic' width='100%' height='100%'/>},{title:'Samsung',description:'adastyghdfdg',price:126000,picture:<img src={m5} alt='pic' width='100%' height='100%'/>}],
    offers:[{title:'ABC',description:'asfasgasfasfasfas',price:10212,picture:<img src={of1} alt='offer1' width='100%' height='100%'></img>},{title:'ABC',description:'asfasgasfasfasfas',price:10212,picture:<img src={of2} alt='offer1' width='100%' height='100%'></img>},{title:'ABC',description:'asfasgasfasfasfas',price:10212,picture:<img src={of3} alt='offer1' width='100%' height='100%'></img>},{title:'ABC',description:'asfasgasfasfasfas',price:10212,picture:<img src={of4} alt='offer1' width='100%' height='100%'></img>},{title:'ABC',description:'asfasgasfasfasfas',price:10212,picture:<img src={of5} alt='offer1' width='100%' height='100%'></img>}],
    index:[]
  };

  Cart = (id,arr) => {
    let count = this.state.count;
    let index;
    count =count+ 1;
    if (arr=='mobiles'){
       index=this.state.mobiles[id]
    }
    else{
       index=this.state.offers[id]
    }

     this.setState({
       count,
       index
    });
  };

  Display=()=>{
      this.setState({
        visible:true
      })
  }
  onClose=()=>{
    this.setState({
      visible:false
    })
  }

  render() {
    return (
      <div className="main">
        <div className="top">
          <div className="karachi">Delivering Only in Karachi</div>
          <div className="contact">
            <p>
              <Icon type="phone" />
              (021)111116278 <a href="https://">Costumer Care</a>
              <a href="https://">Login</a>
            </p>
          </div>
        </div>
        <div className="header">
          <p><span className='h'>H</span><span className='um'>um</span><span className='ma'>M</span><span className='art'>art</span></p>
          <Search
            className="search"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          <p>Infinix</p>
          <Badge onClick={this.Display} className="badge" count={this.state.count} showZero="true">
            <Icon style={{ fontSize: "50px" }} type="shopping-cart" />
          </Badge>
        </div>
        <div className="nav">
          <div className="nav-div">
            <a href="./App.jsx">MOBILES TABLES & LAPTOPS</a>
            <a href="./App.jsx">ELECTRONIC ACCESORIES</a>
            <a href="./App.jsx">PHARMACY</a>
            <a href="./App.jsx">NOODLES SAUCES & FROZEN FOODS</a>
            <a href="./App.jsx">HOUSEHOLD NEEDS</a>
            <a href="./App.jsx">BABY & KIDS</a>
            <a href="./App.jsx">MOBILES TABLES & LAPTOPS</a>
            <a href="./App.jsx">MORE</a>
          </div>
        </div>
        <div className="slider-parent">
          <div class="slider-main">
            <div className="left">
              <div className="left-top">
                <img
                  src={two}
                  alt="prayer-mat"
                  width="100%"
                  height="100%"
                ></img>
              </div>
              <div className="left-bottom">
                <img
                  src={three}
                  alt="prayer-mat"
                  width="100%"
                  height="100%"
                ></img>
              </div>
            </div>
            <div className="right">
              <Carousel className="slide" autoplay>
                <div>
                  <h1>
                    <img src={one} alt="data" width="100%" height="450px"></img>
                  </h1>
                </div>
                <div>
                  <h3>
                    <img src={one} alt="data" width="100%" height="450px"></img>
                  </h3>
                </div>
                <div>
                  <h3>
                    <img src={one} alt="data" width="100%" height="450px"></img>
                  </h3>
                </div>
                <div>
                  <h3>
                    <img src={one} alt="data" width="100%" height="450px"></img>
                  </h3>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="deliveryp">
          <div className="delivery">
            <div className="items">
              <span>
                <Icon type="car" />
                Same/Next Day Delivery
                <br />
                <small>
                  Free delivery on all orders over
                  <br /> Rs. 1,000 Rs 100 for orders below Rs 1000
                </small>
              </span>
              <span>
                <Icon type="dollar" />
                Cash On Delivery
                <br />
                <small>You pay when rider comes at your address.</small>
              </span>
              <span>
                <Icon type="phone" />
                Online Support
                <br />
                <small>You pay when rider comes at your address.</small>
              </span>
            </div>
          </div>
        </div>
        <div className="item-parent">
          <div className="mobile">
            <div className="m">MOBILE PHONES</div>
            <div className="card">
              {this.state.mobiles.map((item,index)=>{
                return(
                <Card key={index} hoverable style={{ width: 250 }} cover={item.picture}>
                <Meta
                  title={item.title}
                  description={item.description}
                />
                <div className="card-button">
                  <strong>{item.price}</strong>
                  <Button onClick={()=>this.Cart(index,'mobiles')} shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>)
              })}
              
            </div> 
          </div>
          <div className="offers">
            <div className="f"> NEW BUNDLE OFFERS</div>
            <div className="card">
              {this.state.offers.map((item,index)=>{
                return(
                  <Card key={index} hoverable style={{ width: 250 }} cover={item.picture}>
                <Meta
                  title={item.title}
                  description={item.description}
                />
                <div className="card-button">
                  <strong>{item.price}</strong>
                  <Button onClick={()=>this.Cart(index,'offers')} shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
                )
              })}
            </div>
          </div>
        </div>
        <div className="category-parent">
          <div className="category-child">
            <div className="text">Categories</div>
            <div className="row1">
              <div className="row1-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c1} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Mobile Phones, Tablets, Laptops
                      <br />
                    <small>Mobile Phones</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="row1-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c2} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Pharmacy
                      <br />
                    <small>Antiseptics , OTCs & Food Care,</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row2">
              <div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c3} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Grocery & Staples
                      <br />
                    <small>Pulses, Atta, Rice, Dry Fruits, Oil, Ghee,Spices & Dressings</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c1} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Mobile Phones, Tablets, Laptops
                      <br />
                    <small>Mobile Phones</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>cover={<img src={c4} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Biscuits, Snacks & Choclates
                      <br />
                    <small>Biscuits and cookies, Namkeen & Snacks</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row3">
              <div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c5} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Noodles, Sauces & Frozen Foods 
                      <br />
                    <small>Noodles, Baking Items etc</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c6} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Breakfast and Diary 
                      <br />
                    <small>Milk, Bread, Eggs Yougurt etc</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row4">
              <div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c7} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Beverages 
                      <br />
                    <small>Softdrinks, Juices & Concentrates, Tea & Coffee Milk.</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c8} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      HouseHold Needs 
                      <br />
                    <small>Laundary Detergents, Dish Washes, Cleaners</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row5">
              <div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c9} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Home and Kitchen  
                      <br />
                    <small>Bathroom Essentials, Cookware, Kitchen Tools </small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c10} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Baby & Kids 
                      <br />
                    <small>Baby Food, Diapers etc</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row6">
              <div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c11} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Ice Creams 
                      <br />
                    <small>Ice Lollies, Sticks, Cone</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c12} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Personal Care 
                      <br />
                    <small>Baby Food, Bath Shampoo, Hair & Body Lotion</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row7">
              <div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c13} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Pet Care
                      <br />
                    <small>Dog Supplies, Cat Supplies, Fish Supplies</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c14} alt='pic' width='100%' height='100%'/>}
                >
                  <div className="abc">
                    <strong >
                      Furnishing & Home Needs 
                      <br />
                    <small>Begging Curtains, & Home Decors</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="des-child">
            <h3>Online Supermarket, Delivery In Karachi, Pakistan</h3>
            <p>
              Ever wondered of entering a grocery store and getting an overview
              of products sections and get to grab the required product from
              there? The alternate is our search bar of HumMart where you can
              search from a wide range of categories including grocery and
              staples, home furnishing, breakfast and dairy, instant foods,
              biscuits and snacks, beverages, household needs, personal care,
              home and kitchen, baby products, fruits and vegetables, ice creams
              and a lot more. Now with online phones and accessories purchase
              and with easy and timely home delivery all over Pakistan. The
              online shopping of grocery is a blessing to get the required
              products over a few clicks. We at HumMart provides our customers
              with the best deals to get value addition on the purchase of
              products available online as a bundle offer. If you are in a mood
              to mingle with friends but you got a grocery list in your pocket,
              just visit HumMart and order the grocery to get it delivered right
              at your home while you get yourself entertained with friends. Want
              to cook your favorite dish, no need to worry for the items to
              prepare a mouthwatering dish. HumMart offers you ample products to
              get the ingredients for the dish. We will provide you the products
              through express delivery within 2 hours. You have the independence
              to opt out from numerous products as HumMart focuses to bring
              utmost facilities through its online grocery store and adding
              value in life of our valued customers. You need to stay at your
              home, visit hummart.com through your laptop, smartphone or even
              from phone application.
            </p>
          </div>
        </div>
        <div className='drawer'>
        <Drawer
          title="MY CART"
          placement="right"
          onClose={this.onClose}
          visible={this.state.visible}
          keyboard='true'
        >
  <p>{this.state.index}</p>
          <div style={{marginTop:500}}><Button type='danger' block>Start Shopping</Button></div>
          
        </Drawer>
      </div>
      </div>
    );
  }
}

export default App;
