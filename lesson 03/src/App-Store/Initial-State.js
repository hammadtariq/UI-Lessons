import imgdiv2 from "../images/one.jpg"
import imgdiv3 from "../images/three.jpg"
import imgdiv1 from "../images/on.jpg";
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.jpg";

const appInitialState = {
        SliderImages: [imgdiv3, imgdiv3,imgdiv3, imgdiv3],
        leftImages:[imgdiv1,imgdiv2],
        productImages: [

            {
                key: 1,
                img: m1,
                price: 10,
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
        ],
        categoriesdiv: [{
            img: imgdiv3,
            text: "something"
        },
        {
            img: imgdiv3,
            text: "something"
        },
        {
            img: imgdiv3,
            text: "something"
        },
        {
            img: imgdiv3,
            text: "something"
        }


        ]

        
  };
  
  export default appInitialState;
  