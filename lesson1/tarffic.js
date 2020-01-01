  
  
  var myvar = document.getElementsByClassName("dot");
  var i=q=0;
  color = ["red", "blue", "green", "white"];
  function run(){
      document.getElementById("b").disabled=false;
    if (document.getElementById("a").innerHTML=="stop"){
      document.getElementById("b").disabled=true;
      
      document.getElementById("a").innerHTML="start";
      clearTimeout(q);
      i = 0;
     

    }else{
    StartSignal();
    document.getElementById("a").innerHTML="stop";
  }
  }
  function StartSignal() {
    
    myvar[i].style.backgroundColor = color[i];
    setTimeout(myfunc2, 2000, i,myvar,color);

    if (i == 2) {
      i = 0;
    } else {
      i++;
      
    }
    q = setTimeout(StartSignal, 2000,myvar,color,i,q);

  }
  function myfunc2(i,myvar,color) {
    myvar[i].style.backgroundColor = color[3];
  }
  function restartStartSignal() {
    clearTimeout(q);
    i = 0;
    setTimeout(StartSignal, 2000);
  }
