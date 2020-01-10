import React from "react";
import { Icon } from "antd";
class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          content: "Mobiles,Tablets & laptops",
          contentTwo: "Mobile Phones"
        },
        {
          content: "Grocery & Staples",
          contentTwo: "Pulses,Atta,Rice,Dry Fruits,Oil,Ghee,Spices,Salt,Sugar,Vineger & Dressing"
        },
        {
          content: "Noodles,Sauces & Frozen Foods",
          contentTwo: "Noodles,Baking & Desserts Items,Sauces & Ketchuo,Pasta & Soups,Jam,Honey"
        },
        {
          content: "Beverages",
          contentTwo: "Soft Drinks,Juices & Concentrates,Tea & Coffee,Energy Drinks,Water,Milk Drinks"
        },
        {
          content: "Home & Kitchen",
          contentTwo: "Bathroom Essentials,Cookware,Kitchen Tools & Accessories,DIning & Serving,Cleaning"
        },
        {
          content: "Ice Creams",
          contentTwo: "Ice Lollies,Sticks,Cones,Cups & Tubs"
        },
        {
          content: "Pet Care",
          contentTwo: "Dog Supplies,Cat Supplies,Fish Supplies"
        },
        {
          content: "Pharmacy",
          contentTwo: "Contraceptives,Pain Relivers,Antiseptics,OTCs,Health Supplements,Hand & Foot Care"
        },
        {
          content: "Biscuits,Snacks & Chocolates",
          contentTwo: "Biscuits & Cookies,Namkeen & Snack,Chips & Crips,Chocolates & Candles,Sweets"
        },
        {
          content: "Breakfast & Dairy",
          contentTwo: "Milk,Bread & Eggs,Yougurt,Breakfast Cereals,Butter & Cheese,Jam"
        },
        {
          content: "Household Needs",
          contentTwo: "Laundry Detergents,Dish washers,Cleaners,Cleaning tools,Air Freshers,Tissues,Shoe"
        },
        {
          content: "Baby & Kids",
          contentTwo: "Baby Food,Diapers & Wipes,Baby Skin & Hair Products,Baby Accessories & More"
        },
        {
          content: "Personal Care",
          contentTwo: "Bath & body,Hair care,Skin care,Oral care,face car,shaving needs,Health & Wellness"
        },
        {
          content: "Furnishing & Home Needs",
          contentTwo: "Bedding Curtains & Home decor,Bathing Needs,Mats & carpets,furniture & storage"
        }
      ]
    };
  }
  render() {
    return (
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
