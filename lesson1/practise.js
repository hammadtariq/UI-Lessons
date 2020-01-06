window.onload=function(){
    let changeBackColor = (bgColor) => {
        return function (){
           document.querySelector("body").style.backgroundColor=bgColor;
        };
    };
    let redBg = changeBackColor("red");
    let blueBg = changeBackColor("blue");
    let greenBg = changeBackColor("green");
    document.querySelector("#red").addEventListener("click",redBg);
    document.querySelector("#blue").addEventListener("click",blueBg);
    document.querySelector("#green").addEventListener("click",greenBg);
};