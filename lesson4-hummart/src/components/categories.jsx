import React,{Component} from 'react'
import {Button,Icon,Card} from 'antd'
import c1 from "../pictures/c1.jpg";
import c2 from "../pictures/c2.jpg";
import c3 from "../pictures/c3.jpg";
import c4 from "../pictures/c4.jpg";
import c5 from "../pictures/c5.jpg";
import c6 from "../pictures/c6.jpg";
import c7 from "../pictures/c7.jpg";
import c8 from "../pictures/c8.jpg";
import c9 from "../pictures/c9.jpg";
import c10 from "../pictures/c10.jpg";
import c11 from "../pictures/c11.jpg";
import c12 from "../pictures/c12.jpg";
import c13 from "../pictures/c13.jpg";
import c14 from "../pictures/c14.jpg";

class Categories extends Component{

    render() {
        return(
            <div className="category-parent">
          <div className="category-child">
            <div className="text">Categories</div>
            <div className="row1">
              <div className="row1-child1">
                <Card
                  className="card-row1"
                  hoverable
                  style={{ width: 500, height: 150 }}
                  cover={<img src={c1} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c2} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c3} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
                      Grocery & Staples
                      <br />
                      <small>
                        Pulses, Atta, Rice, Dry Fruits, Oil, Ghee,Spices &
                        Dressings
                      </small>
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
                  cover={<img src={c1} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
                      Mobile Phones, Tablets, Laptops
                      <br />
                      <small>Mobile Phones</small>
                    </strong>
                    <Button>
                      <Icon type="right" />
                    </Button>
                  </div>
                  cover={<img src={c4} alt="pic" width="100%" height="100%" />}>
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c5} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c6} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c7} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
                      Beverages
                      <br />
                      <small>
                        Softdrinks, Juices & Concentrates, Tea & Coffee Milk.
                      </small>
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
                  cover={<img src={c8} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c9} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
                      Home and Kitchen
                      <br />
                      <small>
                        Bathroom Essentials, Cookware, Kitchen Tools{" "}
                      </small>
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
                  cover={<img src={c10} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c11} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c12} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c13} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
                  cover={<img src={c14} alt="pic" width="100%" height="100%" />}
                >
                  <div className="abc">
                    <strong>
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
        )
    }

}

export default Categories;