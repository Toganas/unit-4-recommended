// variables
function gameStart() {
    var gem1 = 0;
    gem1 = Math.floor(Math.random() * 12 + 1);
    var gem2 = 0;
    gem2 = Math.floor(Math.random() * 12 + 1);
    var gem3 = 0;
    gem3 = Math.floor(Math.random() * 12 + 1);
    var gem4 = 0;
    gem4 = Math.floor(Math.random() * 12 + 1);
    var target = 0
    target = Math.floor(Math.random() * 102 + 19);
    var amount = 0;

    console.log(gem1);
    console.log(gem2);
    console.log(gem3);
    console.log(gem4);
    console.log(target);
    console.log(amount);

    function addgem1() {
        amount = amount + gem1;
        test();
    }
    function addgem2() {
        amount = amount + gem2;
    }
    function addgem3() {
        amount = amount + gem3;
    }
    function addgem4() {
        amount = amount + gem4;
    }
    $("#gem1").click(function () {
        addgem1();
        console.log(amount)
    });
    $("#gem2").click(function () {
        addgem2();
        console.log(amount)
    });
    $("#gem3").click(function () {
        addgem3();
        console.log(amount)
    });
    $("#gem4").click(function () {
        addgem4();
        console.log(amount)
    });

    console.log(target);

    // if (amount === target){

    // }
    function test(){
    if (amount > target) {
        
        gameStart()

    }
}
}
gameStart()


