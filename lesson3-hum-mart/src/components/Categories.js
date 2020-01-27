import React from "react";
import { Icon } from "antd";
import {Link} from 'react-router-dom'
const Categories =props=> {
    console.log(props.categories,"Categories")
    return (
      <div className="categoriesP">
        <div className="categories-heading">
          <h3>Categories</h3>
        </div>
        <div className="categories">
          {props.categories.map(item => {
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
export default Categories;
