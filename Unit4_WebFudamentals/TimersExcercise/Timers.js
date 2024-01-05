
/*Countdown Function */
function countDown(sec) {
    let intervalId = setInterval(function() {
        console.log(sec);
        sec--;
        if (sec < 1) {
            clearInterval(intervalId);
            console.log("DONE!");
        }
    }, 1000);
}

/* Randome Game*/

function randomGame(){
    var count = 0
    let funGame = setInterval(function (){
        var ranNum = Math.random()
        console.log(ranNum)
        if(ranNum > .75){
            clearInterval(funGame)

            console.log(count)
        }else{
            count++
        }
    }, 1000)
}
