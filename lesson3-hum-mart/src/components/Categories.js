import React from "react";
import { Icon } from "antd";
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          content: "Mobiles,Tablets & laptops",
          contentTwo: "Mobile Phones",
          imgUrl:"https://www.themealdb.com/images/ingredients/Lime.png"
        },
        {
          content: "Grocery & Staples",
          contentTwo: "Pulses,Atta,Rice,Dry Fruits,Oil,Ghee,Spices,Salt,Sugar,Vineger & Dressing",
          imgUrl:"https://www.themealdb.com/images/ingredients/Orange%20Blossom%20Water.png"
        },
        {
          content: "Noodles,Sauces & Frozen Foods",
          contentTwo: "Noodles,Baking & Desserts Items,Sauces & Ketchuo,Pasta & Soups,Jam,Honey",
          imgUrl:"https://www.themealdb.com/images/ingredients/Paccheri%20Pasta.png"
        },
        {
          content: "Beverages",
          contentTwo: "Soft Drinks,Juices & Concentrates,Tea & Coffee,Energy Drinks,Water,Milk Drinks",
          imgUrl:"https://www.themealdb.com/images/ingredients/Bramley%20Apples.png"
        },
        {
          content: "Home & Kitchen",
          contentTwo: "Bathroom Essentials,Cookware,Kitchen Tools & Accessories,DIning & Serving,Cleaning",
          imgUrl:"https://www.themealdb.com/images/ingredients/Almonds.png"
        },
        {
          content: "Ice Creams",
          contentTwo: "Ice Lollies,Sticks,Cones,Cups & Tubs",
          imgUrl:"https://www.themealdb.com/images/ingredients/Red%20Pepper.png"
        },
        {
          content: "Pet Care",
          contentTwo: "Dog Supplies,Cat Supplies,Fish Supplies",
          imgUrl:"https://www.themealdb.com/images/ingredients/Tomato.png"
        },
        {
          content: "Pharmacy",
          contentTwo: "Contraceptives,Pain Relivers,Antiseptics,OTCs,Health Supplements,Hand & Foot Care",
          imgUrl:"https://www.themealdb.com/images/ingredients/Basil.png"
        },
        {
          content: "Biscuits,Snacks & Chocolates",
          contentTwo: "Biscuits & Cookies,Namkeen & Snack,Chips & Crips,Chocolates & Candles,Sweets",
          imgUrl:"https://www.themealdb.com/images/ingredients/Olive%20Oil.png"
        },
        {
          content: "Breakfast & Dairy",
          contentTwo: "Milk,Bread & Eggs,Yougurt,Breakfast Cereals,Butter & Cheese,Jam",
          imgUrl:"https://www.themealdb.com/images/ingredients/Peas.png"
        },
        {
          content: "Household Needs",
          contentTwo: "Laundry Detergents,Dish washers,Cleaners,Cleaning tools,Air Freshers,Tissues,Shoe",
          imgUrl:"https://www.themealdb.com/images/ingredients/Peas.png"
        },
        {
          content: "Baby & Kids",
          contentTwo: "Baby Food,Diapers & Wipes,Baby Skin & Hair Products,Baby Accessories & More",
          imgUrl:"https://www.themealdb.com/images/ingredients/Thai%20Red%20Curry%20Paste.png"
        },
        {
          content: "Personal Care",
          contentTwo: "Bath & body,Hair care,Skin care,Oral care,face car,shaving needs,Health & Wellness",
          imgUrl:"https://www.themealdb.com/images/ingredients/Vegetable%20Stock%20Cube.png"
        },
        {
          content: "Furnishing & Home Needs",
          contentTwo: "Bedding Curtains & Home decor,Bathing Needs,Mats & carpets,furniture & storage",
          imgUrl:"https://www.themealdb.com/images/ingredients/Vegetable%20Stock%20Cube.png"
        }
      ]
    };
  }
  render() {
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
                <Icon type="right" />
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
