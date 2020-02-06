import React from "react";

class mycl extends React.Component {
  updateCount = (index, props) => {
    let count = props.bodyObject.count;
    debugger;
    let mytotal =
      props.bodyObject.Total + props.bodyObject.productImages[index].price;
    count = count + 1;
    debugger;
    {
      props.changeCount(count, mytotal);
    }
    debugger;
    console.log(props.bodyObject.count);

    let list = props.bodyObject.productImages[index];
    list.counter += 1;
    if (props.bodyObject.myCartList.length === 0) {
      let list2 = [...props.bodyObject.myCartList];
      debugger;
      list2.push(list);
      props.updateCartList(list2);
    } else {
      let myVar = false;
      let p = props.bodyObject.productImages[index].key;
      for (let i = 0; i < props.bodyObject.myCartList.length; i++) {
        if (props.bodyObject.myCartList[i].key === p) {
          this.setState({
            counter: list.counter
          });
          myVar = true;
          return;
        }
      }
      if (myVar === false) {
        let list2 = props.bodyObject.myCartList;
        list2.push(list);
        props.updateCartList(list2);
      }
    }
  };
  CartMinus = (index, props) => {
    let count = props.bodyObject.count;
    count = count - 1;

    let mytotal =
      props.bodyObject.Total - props.bodyObject.myCartList[index].price;

    let list = props.bodyObject.myCartList;

    list[index].counter -= 1;
    if (list[index].counter === 0) {
      list.splice(index, 1);
      {
        props.changeCount(count, mytotal);
      }
      //////////////////
      // this.setState({
      //   myCartList: list,
      //   count: count,
      //   Total: mytotal
      // });
    } else {
      {
        props.changeCount(count, mytotal);
      }

      // this.setState({
      //   myCartList: list,
      //   count: count,
      //   Total: mytotal
      // });
    }
  };
  Cartadd = (index, props) => {
    let count = props.bodyObject.count;
    count = count + 1;
    let mytotal =
      props.bodyObject.Total + props.bodyObject.myCartList[index].price;
    {
      props.changeCount(count, mytotal);
    }

    let list = props.bodyObject.myCartList[index];
    list.counter += 1;
  };
  updateProductImagesCounter = (props)=>{
   for (let index = 0; index < props.bodyObject.productImages.length; index++) {
      props.updateProductImagesCounter(index,0)
     
   }

  }
}
export default mycl;
