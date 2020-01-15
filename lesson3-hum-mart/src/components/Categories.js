import React from "react";
import { Icon } from "antd";
import {Link} from 'react-router-dom'
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id:1,
          content: "Mobiles,Tablets & laptops",
          contentTwo: "Mobile Phones",
          imgUrl:"https://www.themealdb.com/images/ingredients/Lime.png"
        },
        {
          id:2,
          content: "Grocery & Staples",
          contentTwo: "Pulses,Atta,Rice,Dry Fruits,Oil,Ghee,Spices,Salt,Sugar,Vineger & Dressing",
          imgUrl:"https://www.themealdb.com/images/ingredients/Orange%20Blossom%20Water.png"
        },
        {
          id:3,
          content: "Noodles,Sauces & Frozen Foods",
          contentTwo: "Noodles,Baking & Desserts Items,Sauces & Ketchuo,Pasta & Soups,Jam,Honey",
          imgUrl:"https://www.themealdb.com/images/ingredients/Paccheri%20Pasta.png"
        },
        {
          id:4,
          content: "Beverages",
          contentTwo: "Soft Drinks,Juices & Concentrates,Tea & Coffee,Energy Drinks,Water,Milk Drinks",
          imgUrl:"https://www.themealdb.com/images/ingredients/Bramley%20Apples.png"
        },
        {
          id:5,
          content: "Home & Kitchen",
          contentTwo: "Bathroom Essentials,Cookware,Kitchen Tools & Accessories,DIning & Serving,Cleaning",
          imgUrl:"https://www.themealdb.com/images/ingredients/Almonds.png"
        },
        {
          id:6,
          content: "Ice Creams",
          contentTwo: "Ice Lollies,Sticks,Cones,Cups & Tubs",
          imgUrl:"https://www.themealdb.com/images/ingredients/Red%20Pepper.png"
        },
        {
          id:7,
          content: "Pet Care",
          contentTwo: "Dog Supplies,Cat Supplies,Fish Supplies",
          imgUrl:"https://www.themealdb.com/images/ingredients/Tomato.png"
        },
        {
          id:8,
          content: "Pharmacy",
          contentTwo: "Contraceptives,Pain Relivers,Antiseptics,OTCs,Health Supplements,Hand & Foot Care",
          imgUrl:"https://www.themealdb.com/images/ingredients/Basil.png"
        },
        {
          id:9,
          content: "Biscuits,Snacks & Chocolates",
          contentTwo: "Biscuits & Cookies,Namkeen & Snack,Chips & Crips,Chocolates & Candles,Sweets",
          imgUrl:"https://www.themealdb.com/images/ingredients/Olive%20Oil.png"
        },
        {
          id:10,
          content: "Breakfast & Dairy",
          contentTwo: "Milk,Bread & Eggs,Yougurt,Breakfast Cereals,Butter & Cheese,Jam",
          imgUrl:"https://www.themealdb.com/images/ingredients/Peas.png"
        },
        {
          id:11,
          content: "Household Needs",
          contentTwo: "Laundry Detergents,Dish washers,Cleaners,Cleaning tools,Air Freshers,Tissues,Shoe",
          imgUrl:"https://www.themealdb.com/images/ingredients/Peas.png"
        },
        {
          id:12,
          content: "Baby & Kids",
          contentTwo: "Baby Food,Diapers & Wipes,Baby Skin & Hair Products,Baby Accessories & More",
          imgUrl:"https://www.themealdb.com/images/ingredients/Thai%20Red%20Curry%20Paste.png"
        },
        {
          id:13,
          content: "Personal Care",
          contentTwo: "Bath & body,Hair care,Skin care,Oral care,face car,shaving needs,Health & Wellness",
          imgUrl:"https://www.themealdb.com/images/ingredients/Vegetable%20Stock%20Cube.png"
        },
        {
          id:14,
          content: "Furnishing & Home Needs",
          contentTwo: "Bedding Curtains & Home decor,Bathing Needs,Mats & carpets,furniture & storage",
          imgUrl:"https://www.themealdb.com/images/ingredients/Vegetable%20Stock%20Cube.png"
        }
      ]
    };
  }
  render() {
    console.log(this.props)
    return (
      <div className="categoriesP">
        <div className="categories-heading">
          <h3>Categories</h3>
        </div>
        <div className="categories">
          {this.state.categories.map(item => {
            return (
              <div className="categoriesC">
                <div className="caategoriesImg" >
                  <img src={item.imgUrl} width="120px"></img>
                </div>
                <div className="categoriesContent">
                  <h4>{item.content}</h4>
                  <p>{item.contentTwo}</p>
                </div>
                <div>
                <Link to={`/category/${item.id}}`}>
                <Icon type="right" />
                </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Categories;
