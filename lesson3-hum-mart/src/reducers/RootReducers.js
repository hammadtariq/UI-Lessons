const initState={
    data:[ {
        id: 1,
        title: "Ant Design Title 1",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
        price: 100,
        counter:1,
        flg:false,
      },
      {
        id: 2,
        title: "Ant Design Title 2",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/sxwquu1511793428.jpg",
        price: 825,
        counter:1,
        flg:false,
      },
      {
        id: 3,
        title: "Ant Design Title 3",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
        price: 854,
        counter:1,
        flg:false,
      },
      {
        id: 4,
        title: "Ant Design Title 4",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
        price: 455,
        counter:1,
        flg:false,
      },
      {
        id: 5,
        title: "Ant Design Title 4",
        content: "ADD TO CART",
        Img:
          "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
        price: 484,
        counter:1,
        flg:false,
      }],
    cartItem: [],
}
const RootReducers = (state = initState,action)=>{
    return state;
}
export default RootReducers;