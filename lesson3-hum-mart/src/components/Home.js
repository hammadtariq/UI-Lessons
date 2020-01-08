import React from 'react';
import { Icon,Input  } from 'antd';
import { Card, Avatar } from 'antd';

class Home extends React.Component{
    render(){
        const { Search } = Input;
        const { Meta } = Card;
      return(
       <section>
           <div className="karachiP"><div className="karachiC"><p>Delivering Only in Karachi</p></div></div>
           <div className="customcare"><div className="customcare custom" ><p> <Icon type="phone" />(021) 111 116 278 </p><p>Customer Care</p> <p>Login</p></div></div>
           <div className="logHeader"><p>HumMart</p>
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
  <nav><div className="navC"></div></nav>
  <div className="sliderP"> <div className="parent">
      <div className="slideOne">
          <div className="advOne"></div>
          <div className="advTwo"></div>
      </div>
      <div className="slideTwo"></div>
      </div></div>
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
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
        </div>
        <h3>Mobile Phones</h3>
        <div className="cardslider">
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
            <div className="cards">
            <Card
    hoverable
    style={{ width: 200 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
            </div>
        </div>
    </div>
       </section>
      )
    }
}
export default Home;