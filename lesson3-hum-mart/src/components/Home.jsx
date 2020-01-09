import React from "react";
import { Icon, Input } from "antd";
import { Card, Avatar, List } from "antd";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        },
        {
          content: "hasjhjdhj",
          contentTwo: "twokdfkldsl"
        }
      ]
    };
  }
  render() {
    const data = [
      {
        title: "Ant Design Title 1"
      },
      {
        title: "Ant Design Title 2"
      },
      {
        title: "Ant Design Title 3"
      },
      {
        title: "Ant Design Title 4"
      }
    ];
    const { Search } = Input;
    const { Meta } = Card;
    return (
      <section>
        <div className="karachiP">
          <div className="karachiC">
            <p>Delivering Only in Karachi</p>
          </div>
        </div>
        <div className="customcare">
          <div className="customcare custom">
            <p>
              {" "}
              <Icon type="phone" />
              (021) 111 116 278{" "}
            </p>
            <p>Customer Care</p> <p>Login</p>
          </div>
        </div>
        <div className="logHeader">
          <p>HumMart</p>
          <Search
            size="large"
            placeholder="input search text"
            enterButton="Search"
            onSearch={value => console.log(value)}
            className="searchInput"
          />
          <p>Zero 5</p>
          <Icon type="shopping-cart" />
        </div>
        <nav>
          <div className="navC">
          <a href="#">mobile tablets & laptops</a>
          <a href="#">electronic accessories</a>
          <a href="#">pharmacy</a>
          <a href="#">noodles sauces & frozen foods</a>
          <a href="#">household needs</a>
          <a href="#">baby & kids</a>
          <a href="#">more</a>
          </div>
          
        </nav>
        <div className="sliderP">
          {" "}
          <div className="parent">
            <div className="slideOne">
              <div className="advOne"></div>
              <div className="advTwo"></div>
            </div>
            <div className="slideTwo"></div>
          </div>
        </div>
        <div className="deliveryP">
          <div className="delivery">
            <div className="deliveryOne">
              <div className="deliveryImg"></div>
              <div className="deliveryContent"></div>
            </div>
            <div className="deliveryOne">
              <div className="deliveryImg"></div>
              <div className="deliveryContent"></div>
            </div>
            <div className="deliveryOne">
              <div className="deliveryImg"></div>
              <div className="deliveryContent"></div>
            </div>
          </div>
        </div>
        <div className="cardsliderP">
          <h3>Mobile Phones</h3>
          <div className="cardslider">
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </div>
          <h3>Mobile Phones</h3>
          <div className="cardslider">
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
            <div className="cards">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </div>
        </div>

        <div className="categoriesP">
          <div>
            <h3>Categories</h3>
          </div>
          <div className="categories">
            {this.state.categories.map(item => {
              return (
                <div className="categoriesC">
                  <div className="categoriesImg"></div>
                  <div className="categoriesContent">
                    <h4>{item.content}</h4>
                    <p>{item.contentTwo}</p>
                  </div>
                  <div>
                   
                    <Icon type="phone" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="onlineSuper">
          <h4> Online Supermarket, Delivery In Karachi, Pakistan</h4>
          <p>
            Ever wondered of entering a grocery store and getting an overview of
            products sections and get to grab the required product from there?
            The alternate is our search bar of HumMart where you can search from
            a wide range of categories including grocery and staples, home
            furnishing, breakfast and dairy, instant foods, biscuits and snacks,
            beverages, household needs, personal care, home and kitchen, baby
            products, fruits and vegetables, ice creams and a lot more. Now with
            online phones and accessories purchase and with easy and timely home
            delivery all over Pakistan. The online shopping of grocery is a
            blessing to get the required products over a few clicks. We at
            HumMart provides our customers with the best deals to get value
            addition on the purchase of products available online as a bundle
            offer. If you are in a mood to mingle with friends but you got a
            grocery list in your pocket, just visit HumMart and order the
            grocery to get it delivered right at your home while you get
            yourself entertained with friends. Want to cook your favorite dish,
            no need to worry for the items to prepare a mouthwatering dish.
            HumMart offers you ample products to get the ingredients for the
            dish. We will provide you the products through express delivery
            within 2 hours. You have the independence to opt out from numerous
            products as HumMart focuses to bring utmost facilities through its
            online grocery store and adding value in life of our valued
            customers. You need to stay at your home, visit hummart.com through
            your laptop, smartphone or even from phone application.
          </p>
        </div>
        <div className="pageMsg"></div>
        <footer></footer>
      </section>
    );
  }
}
export default Home;
