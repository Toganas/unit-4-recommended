function newGame(){
gameState = {
    gem1: Math.floor(Math.random() * 12 + 1),
    gem2: Math.floor(Math.random() * 12 + 1),
    gem3: Math.floor(Math.random() * 12 + 1),
    gem4: Math.floor(Math.random() * 12 + 1),
    target: Math.floor(Math.random() * 102 + 19),
    amount: 0
}
    $("#total").text(gameState.amount);
    $("#randTarget").text(gameState.target);
}
 var wins = 0;
 var losses = 0;
$("#wins").text(wins);
$("#loss").text(losses);
    
    newGame();

    console.log(gameState.gem1);
    console.log(gameState.gem2);
    console.log(gameState.gem3);
    console.log(gameState.gem4);
    console.log(gameState.target);
    console.log(gameState.amount);

    function addgem1() {
        gameState.amount = gameState.amount + gameState.gem1;
        test();
    }
    function addgem2() {
        gameState.amount = gameState.amount + gameState.gem2;
        test();
    }
    function addgem3() {
        gameState.amount = gameState.amount + gameState.gem3;
        test();
    }
    function addgem4() {
        gameState.amount = gameState.amount + gameState.gem4;
        test();
    }
    $("#gem1").click(function () {
        addgem1();
        $("#total").text(gameState.amount);
        console.log(gameState.amount)
    });
    $("#gem2").click(function () {
        addgem2();
        $("#total").text(gameState.amount);
        console.log(gameState.amount)
    });
    $("#gem3").click(function () {
        addgem3();
        $("#total").text(gameState.amount);
        console.log(gameState.amount)
    });
    $("#gem4").click(function () {
        addgem4();
        $("#total").text(gameState.amount);
        console.log(gameState.amount)
    });

    

    // if (amount === target){

    // }
   

function test() {
    if (gameState.amount > gameState.target) {
        newGame();
        losses++
        $("#loss").text(losses);
        console.log(losses)
    }
    else if (gameState.amount === gameState.target) {
        newGame();
        wins++
        $("#wins").text(wins);
        console.log(wins)
        
    }
}


 

