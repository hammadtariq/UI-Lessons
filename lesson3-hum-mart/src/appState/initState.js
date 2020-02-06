const initState = {
  data:{
    loading:false,
    error:null,
   value: [
     {
       id: 0,
       title: "Ant Design Title 1",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
       price: 100,
       counter: 1,
       flg: false,
       sum:100,
     },
     {
       id: 1,
       title: "Ant Design Title 2",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/sxwquu1511793428.jpg",
       price: 825,
       counter: 1,
       flg: false,
       sum:825,
     },
     {
       id: 2,
       title: "Ant Design Title 3",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
       price: 854,
       counter: 1,
       flg: false,
       sum:854,
     },
     {
       id: 3,
       title: "Ant Design Title 4",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
       price: 455,
       counter: 1,
       flg: false,
       sum:455,
     },
     {
       id: 4,
       title: "Ant Design Title 5",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
       price: 484,
       counter: 1,
       flg: false,
       sum:484,
     }
   ],
  },
   categoriesData: [
     {
       id: 0,
       title: "Ant Design Title 1",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg",
       price: 100,
       counter: 1,
       flg: false,
       sum:0,
     },
     {
       id: 1,
       title: "Ant Design Title 2",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/sxwquu1511793428.jpg",
       price: 825,
       counter: 1,
       flg: false,
       sum:0,
     },
     {
       id: 2,
       title: "Ant Design Title 3",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
       price: 854,
       counter: 1,
       flg: false,
       sum:0,
     },
     {
       id: 3,
       title: "Ant Design Title 4",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
       price: 455,
       counter: 1,
       flg: false,
       sum:0,
     },
     {
       id: 4,
       title: "Ant Design Title 5",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
       price: 484,
       counter: 1,
       flg: false,
       sum:0,
     },
     {
       id: 5,
       title: "Ant Design Title 6",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
       price: 854,
       counter: 1,
       flg: false,
       sum:0,
     },
     {
       id: 6,
       title: "Ant Design Title 7",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
       price: 455,
       counter: 1,
       flg: false,
       sum:0,
     },
     {
       id: 7,
       title: "Ant Design Title 8",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
       price: 484,
       counter: 1,
       flg: false,
       sum:0,
     },
     {
       id: 8,
       title: "Ant Design Title 8",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
       price: 484,
       counter: 1,
       flg: false,
       sum:0,
     }
     ,{
       id: 9,
       title: "Ant Design Title 8",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
       price: 484,
       counter: 1,
       flg: false,
       sum:0,
     }
     ,{
       id: 10,
       title: "Ant Design Title 8",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
       price: 484,
       counter: 1,
       flg: false,
       sum:0,
     }
     ,{
       id: 11,
       title: "Ant Design Title 8",
       content: "ADD TO CART",
       Img: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
       price: 484,
       counter: 1,
       flg: false,
       sum:0,
     }
   ],
   cartItem: {
     loading:false,
     error:null,
     value:[],
     sum:0,
     count:0,
   }
 ,
   categories: {
 loading:false,
 error:null,
 value:[
   {
     id: 1,
     content: "Mobiles,Tablets & laptops",
     contentTwo: "Mobile Phones",
     imgUrl: "https://www.themealdb.com/images/ingredients/Lime.png"
   },
   {
     id: 2,
     content: "Grocery & Staples",
     contentTwo:
       "Pulses,Atta,Rice,Dry Fruits,Oil,Ghee,Spices,Salt,Sugar,Vineger & Dressing",
     imgUrl:
       "https://www.themealdb.com/images/ingredients/Orange%20Blossom%20Water.png"
   },
   {
     id: 3,
     content: "Noodles,Sauces & Frozen Foods",
     contentTwo:
       "Noodles,Baking & Desserts Items,Sauces & Ketchuo,Pasta & Soups,Jam,Honey",
     imgUrl:
       "https://www.themealdb.com/images/ingredients/Paccheri%20Pasta.png"
   },
   {
     id: 4,
     content: "Beverages",
     contentTwo:
       "Soft Drinks,Juices & Concentrates,Tea & Coffee,Energy Drinks,Water,Milk Drinks",
     imgUrl:
       "https://www.themealdb.com/images/ingredients/Bramley%20Apples.png"
   },
   {
     id: 5,
     content: "Home & Kitchen",
     contentTwo:
       "Bathroom Essentials,Cookware,Kitchen Tools & Accessories,DIning & Serving,Cleaning",
     imgUrl: "https://www.themealdb.com/images/ingredients/Almonds.png"
   },
   {
     id: 6,
     content: "Ice Creams",
     contentTwo: "Ice Lollies,Sticks,Cones,Cups & Tubs",
     imgUrl: "https://www.themealdb.com/images/ingredients/Red%20Pepper.png"
   },
   {
     id: 7,
     content: "Pet Care",
     contentTwo: "Dog Supplies,Cat Supplies,Fish Supplies",
     imgUrl: "https://www.themealdb.com/images/ingredients/Tomato.png"
   },
   {
     id: 8,
     content: "Pharmacy",
     contentTwo:
       "Contraceptives,Pain Relivers,Antiseptics,OTCs,Health Supplements,Hand & Foot Care",
     imgUrl: "https://www.themealdb.com/images/ingredients/Basil.png"
   },
   {
     id: 9,
     content: "Biscuits,Snacks & Chocolates",
     contentTwo:
       "Biscuits & Cookies,Namkeen & Snack,Chips & Crips,Chocolates & Candles,Sweets",
     imgUrl: "https://www.themealdb.com/images/ingredients/Olive%20Oil.png"
   },
   {
     id: 10,
     content: "Breakfast & Dairy",
     contentTwo:
       "Milk,Bread & Eggs,Yougurt,Breakfast Cereals,Butter & Cheese,Jam",
     imgUrl: "https://www.themealdb.com/images/ingredients/Peas.png"
   },
   {
     id: 11,
     content: "Household Needs",
     contentTwo:
       "Laundry Detergents,Dish washers,Cleaners,Cleaning tools,Air Freshers,Tissues,Shoe",
     imgUrl: "https://www.themealdb.com/images/ingredients/Peas.png"
   },
   {
     id: 12,
     content: "Baby & Kids",
     contentTwo:
       "Baby Food,Diapers & Wipes,Baby Skin & Hair Products,Baby Accessories & More",
     imgUrl:
       "https://www.themealdb.com/images/ingredients/Thai%20Red%20Curry%20Paste.png"
   },
   {
     id: 13,
     content: "Personal Care",
     contentTwo:
       "Bath & body,Hair care,Skin care,Oral care,face car,shaving needs,Health & Wellness",
     imgUrl:
       "https://www.themealdb.com/images/ingredients/Vegetable%20Stock%20Cube.png"
   },
   {
     id: 14,
     content: "Furnishing & Home Needs",
     contentTwo:
       "Bedding Curtains & Home decor,Bathing Needs,Mats & carpets,furniture & storage",
     imgUrl:
       "https://www.themealdb.com/images/ingredients/Vegetable%20Stock%20Cube.png"
   }
 ],
   },
    visible:{
      visi:false
    },
   
    
 
  
   flg:false
  
 };
 
 export default initState;
 