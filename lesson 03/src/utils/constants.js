export const ROUTES = {
    HOME: "/media",
    MOBILE: "/mobiles",
    Discription: "/description"

   
  };

  export const MYACTION = {
    CHANGECOUNT: "changeCount",
    DrawerState: "changeStateOfDrawer",
    updateCartList: "updateCartList"

   
  };

//   export function UPDATECOUNT  (index, props)  {
//     let count = props.bodyObject.count;
//     debugger;
//     let mytotal = props.bodyObject.Total + props.bodyObject.productImages[index].price;
//     count = count + 1;
//     debugger;
//     { props.changeCount(count, mytotal) }
//     debugger;
//     console.log(props.bodyObject.count);

//     let list = props.bodyObject.productImages[index];
//     list.counter += 1;
//     if (props.bodyObject.myCartList.length === 0) {
//         let list2 = props.bodyObject.myCartList;
//         list2.push(list);
//         props.updateCartList(list2)
//     } else {
//         let myVar = false;
//         let p = props.bodyObject.productImages[index].key;
//         for (let i = 0; i < props.bodyObject.myCartList.length; i++) {
//             if (props.bodyObject.myCartList[i].key === p) {
//                 this.setState({
//                     counter: list.counter
//                 });
//                 myVar = true;
//                 return;
//             }
//         }
//         if (myVar === false) {
//             let list2 = props.bodyObject.myCartList;
//             list2.push(list);
//             props.updateCartList(list2)

//         }
//     }
// };
  