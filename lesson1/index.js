var q, w, e, r, t;
var c = setInterval(start, 12000);
document.getElementById("red").style.backgroundColor = "black";
document.getElementById("green").style.backgroundColor = "black";
document.getElementById("yellow").style.backgroundColor = "black";

function stop() {
  // if (flag==false){
  // setTimeout(()=>{
  //     document.getElementById('red').style.backgroundColor='black'
  //     document.getElementById('yellow').style.backgroundColor='yellow'

  // },0)
  // setTimeout(()=>{

  //     document.getElementById('red').style.backgroundColor='red'
  //     document.getElementById('yellow').style.backgroundColor='black'
  //     document.getElementById('green').style.backgroundColor='black'
  // },2000)
  // flag=true
  // }
  clearInterval(c);
  clearInterval(q);
  clearInterval(w);
  clearInterval(e);
  clearInterval(r);
  clearInterval(t);
  document.getElementById("red").style.backgroundColor = "black";
  document.getElementById("green").style.backgroundColor = "black";
  document.getElementById("yellow").style.backgroundColor = "black";
}

function start() {
  q = setTimeout(() => {
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("yellow").style.backgroundColor = "black";
    document.getElementById("green").style.backgroundColor = "black";
  }, 0);
  w = setTimeout(() => {
    document.getElementById("yellow").style.backgroundColor = "yellow";
  }, 3000);

  e = setTimeout(() => {
    document.getElementById("red").style.backgroundColor = "black";
    document.getElementById("yellow").style.backgroundColor = "black";
    document.getElementById("green").style.backgroundColor = "green";
  }, 5000);
  r = setTimeout(() => {
    document.getElementById("red").style.backgroundColor = "black";
    document.getElementById("yellow").style.backgroundColor = "yellow";
  }, 7000);
  t = setTimeout(() => {
    document.getElementById("red").style.backgroundColor = "red";
    document.getElementById("yellow").style.backgroundColor = "black";
    document.getElementById("green").style.backgroundColor = "black";
  }, 9000);
}

let num1 = 9;
let num2 = 12

function add(num1, num2) {
    
let num1 = 9;
let num2 = 12

    return num1+num2;
}

add()


expect(add(2,3)).toEqual(5);