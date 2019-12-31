//     document.getElementById("SBId").addEventListener("click",switchSignal)
        // //     document.getElementById("red").addEventListener("click",switchSignal);;
        // //    document.getElementById("yellow").addEventListener("click",switchSignal);;
        // //      document.getElementById("green").addEventListener("click",switchSignal);;
        //     function switchSignal (i){
        //         reset()
        //        if(i.target.id === `red`){
        //           document.getElementById("red").classList.add("red")

        //        }
        //        else if(i.target.id === `yellow`){
        //            document.getElementById("yellow").classList.add("yellow")
        //        }
        //        else{
        //            document.getElementById("green").classList.add("green")
        //        }
        //     }
        //     function reset(){
        //        document.getElementById("red").classList.remove("red");
        //        document.getElementById("yellow").classList.remove("yellow");
        //        document.getElementById("green").classList.remove("green");
        //     }

     window.onload = function(){
        let t = 5000;
        let flg = 1;
        let a, first, second, third, fourth;
        console.log(flg);
        const startButton = document.getElementById("SBId");
        startButton.addEventListener("click", signalSwitch);
        const resetButton = document.getElementById("RSBId").addEventListener("click", resetSwitch);
      
        function signalSwitch() {
            if (flg === 1) {
                first = setTimeout(() => {
                    document.querySelector("#green").classList.remove("green");
                    // document.querySelector("#yellow").classList.remove("yellow");
                    document.querySelector("#red").classList.add("red");
                }, 1000)
            }
            if (flg == 1) {
                second = setTimeout(() => {
                    document.querySelector("#yellow").classList.add("yellow");
                    // document.querySelector("#green").classList.remove("green");
                    document.querySelector("#red").classList.remove("red");

                }, 3000)
            }

            if (flg == 1) {
                third = setTimeout(() => {
                    document.querySelector("#green").classList.add("green");
                    document.querySelector("#yellow").classList.remove("yellow");
                    // document.querySelector("#red").classList.remove("red");

                }, 5000)
            }



            a = setInterval((flg) => {
                if (flg == 2) {
                    resetSwitch();
                }
                else {
                    signalSwitch();
                }
            }, 6000)



        }

        function resetSwitch() {
            clearTimeout(first);
            document.getElementById("red").classList.remove("red");
            clearTimeout(second);
            document.getElementById("yellow").classList.remove("yellow");
            clearTimeout(third);
            document.getElementById("green").classList.remove("green");


            // clearInterval(a);





        }

     }