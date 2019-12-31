  var myvar = document.getElementsByClassName("dot");
  color = ["red", "blue", "green", "black"];
  //    var i=0;
  let q;
  function StartSignal() {
    myvar[i].style.backgroundColor = color[i];
    q = setTimeout(myfunc2, 2000, i);
    q = setTimeout(StartSignal, 2000, i);
    console.log("sw34333dsd", q);

    if (i == 2) {
      i = 0;
    } else {
      i++;
    }
  }
  function myfunc2(i) {
    myvar[i].style.backgroundColor = color[3];
  }
  function restartStartSignal(abc) {
    console.log("sdsd", abc);
    clearTimeout(q);
    i = 0;
    q = setTimeout(StartSignal, 2000);
  }
