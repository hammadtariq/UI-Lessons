import imgdiv2 from "../images/one.jpg";
import imgdiv3 from "../images/three.jpg";
import imgdiv1 from "../images/on.jpg";
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
import s4 from "../images/s4.jpg";
import s10 from "../images/c10.jpg";
import s11 from "../images/c11.jpg";
import s12 from "../images/c12.jpg";
import s13 from "../images/c13.jpg";
import s14 from "../images/c14.jpg";

const appInitialState = {
  SliderImages: [imgdiv3, imgdiv3, imgdiv3, imgdiv3],
  leftImages: [imgdiv1, imgdiv2],
  finalList:[],
  bodyObject: {
    myCartList: [],
    visible: false,
    Total: 0,
    count: 0,
    productImages: [
      {
        key: 1,
        img: m1,
        price: 100,
        text: "Samsung A1 (2018) | Blue | With Official Warranty",
        counter: 0
      },
      {
        key: 2,

        img: m2,
        price: 20,
        text: "Samsung A2 (2018) | Blue | With Official Warranty",
        counter: 0
      },
      {
        key: 3,

        img: m3,
        price: 30,
        text: "Samsung A3 (2018) | Blue | With Official Warranty",
        counter: 0
      },
      {
        key: 4,

        img: m4,
        price: 40,
        text: "Samsung A4 (2018) | Blue | With Official Warranty",
        counter: 0
      }
    ],
    categoriesdiv: [
      {
        img: m2,
        text: "Samsung A7 (2018) | Blue | With Official Warranty"
      },
      {
        img: s2,
        text: "Cookware,Kitchen Tools Accessories,Dining,Servings"
      },
      // {
      //   img: s3,
      //   text: "something"
      // },
      {
        img: s4,
        text: "something"
      },
      {
        img: s11,
        text: "something"
      },
      {
        img: s12,
        text: "something"
      },
      {
        img: s13,
        text: "something"
      },
      {
        img: s14,
        text: "something"
      }
    ]
  },
  MenuList: [
    "Mobiles",
    "Nokia",
    "Xiaomi",
    "Samsung",
    "Huawei",
    "Infinity",
    "Tecno",
    "Motorola"
  ],
  CardImages: [
    {
      key: 1,
      img: m1,
      price: 100,
      text: "Samsung A7 (2018) | Blue | With Official Warranty",
      counter: 0
    },
    {
      key: 2,
      img: m2,
      price: 20,
      text: "Samsung A7 (2018) | Blue | With Official Warranty",
      counter: 0
    },
    {
      key: 3,
      img: m3,
      price: 30,
      text: "Samsung A7 (2018) | Blue | With Official Warranty",
      counter: 0
    },
    {
      key: 4,
      img: m4,
      price: 40,
      text: "Samsung A7 (2018) | Blue | With Official Warranty",
      counter: 0
    }
  ]
};

export default appInitialState;
