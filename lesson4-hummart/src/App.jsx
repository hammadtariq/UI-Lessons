import React, { Component } from "react";
import "./App.css";
import { Icon, Input, Card, Button,Footer } from "antd";
import "antd/dist/antd.css";
const { Search } = Input;
const { Meta } = Card;
class App extends Component {
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
          <p>HumMart</p>
          <Search
            className="search"
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />
          <p>Infinix</p>
          <p>
            <Icon type="shopping-cart" />
          </p>
        </div>
        <div className="nav">
          <div className="nav-div"></div>
        </div>
        <div className="slider-parent">
          <div class="slider-main">
            <div className="left">
              <div className="left-top">Left Top</div>
              <div className="left-bottom">Left Bottom</div>
            </div>
            <div className="right">right</div>
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
            <div className="m">Mobile Phones</div>
            <div className="card">
              <Card hoverable style={{ width: 250 }} cover={<p>Picture1</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
              <Card hoverable style={{ width: 250 }} cover={<p>Picture2</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
              <Card hoverable style={{ width: 250 }} cover={<p>Picture3</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>

              <Card hoverable style={{ width: 250 }} cover={<p>Picture4</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
              <Card hoverable style={{ width: 250 }} cover={<p>Picture5</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </div>
          </div>
          <div className="offers">
            <div className="f"> Offer</div>
            <div className="card">
              <Card hoverable style={{ width: 250 }} cover={<p>Picture1</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
              <Card hoverable style={{ width: 250 }} cover={<p>Picture2</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
              <Card hoverable style={{ width: 250 }} cover={<p>Picture3</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>

              <Card hoverable style={{ width: 250 }} cover={<p>Picture4</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
              <Card hoverable style={{ width: 250 }} cover={<p>Picture5</p>}>
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
                <div className="card-button">
                  <strong>Rs 119000</strong>
                  <Button shape="round" type="danger">
                    Add to Cart
                  </Button>
                </div>
              </Card>
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
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>
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
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>Rs 119000</strong>
                    <Button>
                      <Icon type="phone" />
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
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>
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
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>Rs 119000</strong>
                    <Button>
                      <Icon type="phone" />
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
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>
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
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>Rs 119000</strong>
                    <Button>
                      <Icon type="phone" />
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
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>
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
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>Rs 119000</strong>
                    <Button>
                      <Icon type="phone" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            <div className="row5"><div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>
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
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>Rs 119000</strong>
                    <Button>
                      <Icon type="phone" />
                    </Button>
                  </div>
                </Card>
              </div></div>
            <div className="row6"><div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>
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
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>Rs 119000</strong>
                    <Button>
                      <Icon type="phone" />
                    </Button>
                  </div>
                </Card>
              </div></div>
            <div className="row7"><div className="row2-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>
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
              <div className="row2-child2">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<p>Picture1</p>}
                >
                  <div className="abc">
                    <strong style={{ marginRight: 200 }}>Rs 119000</strong>
                    <Button>
                      <Icon type="phone" />
                    </Button>
                  </div>
                </Card>
              </div></div>
          </div>
        </div>
        <div className='description'>
          <div className='des-child'>
          <h3>Online Supermarket, Delivery In Karachi, Pakistan</h3><p>Ever wondered of entering a grocery store and getting an overview of products sections and get to grab the required product from there? The alternate is our search bar of HumMart where you can search from a wide range of categories including grocery and staples, home furnishing, breakfast and dairy, instant foods, biscuits and snacks, beverages, household needs, personal care, home and kitchen, baby products, fruits and vegetables, ice creams and a lot more. Now with online phones and accessories purchase and with easy and timely home delivery all over Pakistan. The online shopping of grocery is a blessing to get the required products over a few clicks. We at HumMart provides our customers with the best deals to get value addition on the purchase of products available online as a bundle offer. If you are in a mood to mingle with friends but you got a grocery list in your pocket, just visit HumMart and order the grocery to get it delivered right at your home while you get yourself entertained with friends. Want to cook your favorite dish, no need to worry for the items to prepare a mouthwatering dish. HumMart offers you ample products to get the ingredients for the dish. We will provide you the products through express delivery within 2 hours. You have the independence to opt out from numerous products as HumMart focuses to bring utmost facilities through its online grocery store and adding value in life of our valued customers. You need to stay at your home, visit hummart.com through your laptop, smartphone or even from phone application.</p></div>
        </div>
        
      </div>
    );
  }
}

export default App;
