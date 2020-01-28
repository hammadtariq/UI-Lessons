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
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        title: "Nokia",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m2,
        quantity: 1
      },
      {
        title: "Iphone",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m3,
        quantity: 1
      },
      {
        title: "Motorola",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m4,
        quantity: 1
      },
      {
        title: "Oppo",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m5,
        quantity: 1
      }
    ],
    offers: [
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of1,
        quantity: 1
      },
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of2,
        quantity: 1
      },
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of3,
        quantity: 1
      },
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of4,
        quantity: 1
      },
      {
        title: "ABC",
        description: "asfasgasfasfasfas",
        price: 10212,
        picture: of5,
        quantity: 1
      }
    ],
    mobilesCategory: [
      {
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        title: "Samsung",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m1,
        quantity: 1
      },
      {
        title: "Nokia",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m2,
        quantity: 1
      },
      {
        title: "Iphone",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m3,
        quantity: 1
      },
      {
        title: "Motorola",
        description: "Lorem Ipsem",
        price: 12000,
        picture: m4,
        quantity: 1
      },
      {
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
    visible: false
  }
};
export default initialstate;
