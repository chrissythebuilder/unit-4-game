//shown a random number at the start of the game


var wins = 0;
var loss = 0;
var totalscore = 0;


$(document).ready(function() {
    console.log("ready!");

    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1))+ 19;
    console.log(randomNumber);

    // show random number at the start of game from 19 to 120
    $("#randNumber").html("<strong>" + randomNumber + "</strong>");
    // each image has its own random value from 1 to 12    

    var imgRandom = Math.floor(Math.random() * 12) + 1;
    console.log(imgRandom);

    totalscore = parseInt(totalscore);
    

    $("img1").on("click", function () {
        var img1 = $("#img1").attr("data-value");
        totalscore = totalscore + imgRandom;
        $("#totalscore").html("<strong>" + totalscore + "</strong>");
    })

    $("img2").on("click", function () {
        $("#img2").attr("data-value", imgRandom);
        totalscore = totalscore + imgRandom;
    })

    $("img3").on("click", function () {
        $("#img3").attr("data-value", imgRandom);
        totalscore = totalscore + imgRandom;
    })

    $("img4").on("click", function () {
        $("#img4").attr("data-value", imgRandom);
        totalscore = totalscore + imgRandom;
        $("#totalscore").html("<strong>" + totalscore + "</strong>");
    })

    // update total number every time each image is clicked
    


    // player wins if total score = random score
    if (totalscore === randomNumber) {
        wins++;
    // game restarts when player win++ or loses++
        randomNumber = [];
        imgRandom = [];
        $("#text").html("<strong> Yay! You won! </strong> <br />");
    } 

    // player loses if total score > random score

    if (totalscore > randomNumber) {
        loss++;
    // game restarts when player win++ or loses++
        return randomNumber;
        $("#text").html("<strong> Sorry, try again! </strong> <br />");
    }


    // new game = new random number & new crystal values & total score = 0

    // show wins and losses without refreshing page when restarting game
});
