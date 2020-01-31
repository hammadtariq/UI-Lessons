import m1 from "../pictures/mobile1.jpg";
import m2 from "../pictures/mobile2.jpg";
import m3 from "../pictures/mobile3.jpg";
import m4 from "../pictures/mobile4.jpg";
import m5 from "../pictures/mobile5.jpg";
import of1 from "../pictures/of1.jpg";
import of2 from "../pictures/of2.jpg";
import of3 from "../pictures/of3.jpg";
import of4 from "../pictures/of4.jpg";
import of5 from "../pictures/of5.jpg";

const initialstate = {
  items: {
    Mobiledata: [
      {
        key: 1,
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        key: 2,
        title: "Nokia",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m2,
        quantity: 1
      },
      {
        key: 3,
        title: "Iphone",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m3,
        quantity: 1
      },
      {
        key: 4,
        title: "Motorola",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m4,
        quantity: 1
      },
      {
        key: 5,
        title: "Oppo",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m5,
        quantity: 1
      }
    ],

    offers: [
      {
        key: 6,
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of1,
        quantity: 1
      },
      {
        key: 7,
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of2,
        quantity: 1
      },
      {
        key: 8,
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of3,
        quantity: 1
      },
      {
        key: 9,
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of4,
        quantity: 1
      },
      {
        key: 10,
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of5,
        quantity: 1
      }
    ],

    mobilesCategory: [
      {
        key:11,
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        key:12,
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        key:13,
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        key:14,
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        key:15,
        title: "Nokia",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m2,
        quantity: 1
      },
      {
        key:16,
        title: "Iphone",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m3,
        quantity: 1
      },
      {
        key:17,
        title: "Motorola",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m4,
        quantity: 1
      },
      {
        key:18,
        title: "Oppo",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m5,
        quantity: 1
      }
    ]
  },

  cart: {
    showZero: true,
    count: 0,
    total: 0,
    index: [],
    visible: false
  },
  nav: {
    style: "nav-div"
  },
  checkOut:{
     order:[
    //  {
    //   key: 1,
    //   title: "Samsung",
    //   description: "Lorem Ipsem",
    //   price: 12000,
    //   picture: m1,
    //   quantity: 1
    // }
  ]
  }
};
export default initialstate;
