import React from "react";
import { Icon } from "antd";
import {Link} from 'react-router-dom'
class Categories extends React.Component {
  description = (Id)=>{
    console.log(this.props,Id)

    this.props.history.push({
      pathname:`/category/${this.props.categories[Id].id}`
      // pathname:`/category:id`
    })
  }
    // console.log(this.props.categories,"Categories")
    render(){
    return (
      <div className="categoriesP">
        <div className="categories-heading">
          <h3>Categories</h3>
        </div>
        <div className="categories">
          {
          // this.props.categories.map(item => {
          //   return (
          //     <div className="categoriesC" onClick={() =>this.description(item.id)}>
          //       <div className="caategoriesImg" >
          //         <img src={item.imgUrl} width="120px"></img>
          //       </div>
          //       <div className="categoriesContent">
          //         <h4>{item.content}</h4>
          //         <p>{item.contentTwo}</p>
          //       </div>
          //       <div >
          //       {/* <Link to={`/category/${item.id}}`}> */}
          //       <Icon type="right" />
          //       {/* </Link> */}
          //       </div>
          //     </div>
          //   );
          // })
          }
        </div>
      </div>
    );
        }}
export default Categories;
