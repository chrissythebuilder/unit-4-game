//shown a random number at the start of the game




$(document).ready(function() {

    var wins = 0;
    var loss = 0;
    var totalscore = 0;

    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1))+ 19;

    // show random number at the start of game from 19 to 120
    $("#randNumber").html("<strong>" + randomNumber + "</strong>");

    // each image has its own random value from 1 to 12    
    // statement, does not return anything
    $("#img1").attr("data-value", Math.floor(Math.random() * 12) + 1);

    $("#img2").attr("data-value", Math.floor(Math.random() * 12) + 1);

    $("#img3").attr("data-value", Math.floor(Math.random() * 12) + 1);

    $("#img4").attr("data-value", Math.floor(Math.random() * 12) + 1);

    var finalscore = function () {
        if (totalscore === randomNumber) {
        $("#text").html("<strong> Yay! You won! </strong> <br />");
        wins++;
        $("#wins").html("<b>" + wins + "</b>")
        // game restarts when player win++ or loses++
        randomNumber = [];
        totalscore = [];
        return finalscore;
        
            };
        if (totalscore > randomNumber) {
        loss++;
        $("#loss").html("<b>" + loss + "</b>")
        // game restarts when player win++ or loses++
        $("#text").html("<strong> Sorry, try again! </strong> <br />");
        randomNumber = [];
        totalscore = [];
        return finalscore;
        
            };
    }  


    var imageClick = function () {

        $("#img1").on("click", function () {
            // $(this).data('value') = action to gen a value
            totalscore = totalscore + $(this).data('value');
            console.log($(this).data('value'));
            totalscore = parseInt(totalscore);
            $("#totalscore").html("<strong>" + totalscore + "</strong> <br>");
            finalscore();
        });

        $("#img2").on("click", function () {
            totalscore = totalscore + $(this).data('value');
            console.log($(this).data('value'));        
            totalscore = parseInt(totalscore);
            $("#totalscore").html("<strong>" + totalscore + "</strong>");
            finalscore();
        });

        $("#img3").on("click", function () {
            totalscore = totalscore + $(this).data('value');
            console.log($(this).data('value'));
            totalscore = parseInt(totalscore);
            $("#totalscore").html("<strong>" + totalscore + "</strong>");
            finalscore();
        });

        $("#img4").on("click", function () {
            totalscore = totalscore + $(this).data('value');
            console.log($(this).data('value'));
            totalscore = parseInt(totalscore);
            $("#totalscore").html("<strong>" + totalscore + "</strong>");
            finalscore();
        });
    };
    imageClick();


    // update total number every time each image is clicked
    // var total = $("#totalscore");
    // var randomNumber = $("#randNumber");
    // if (total === randomNumber) {
    //     $("#text").html("<strong> Yay! You won! </strong> <br />");
    //     wins++;
    // // game restarts when player win++ or loses++
    //     randomNumber = [];
    //     totalscore = [];
    // } 

    // // player loses if total score > random score

    // if (total > randomNumber) {
    //     loss++;
    // // game restarts when player win++ or loses++
    //     $("#text").html("<strong> Sorry, try again! </strong> <br />");
    //     randomNumber = [];
    //     totalscore = [];
    // }

    // player wins if total score = random score

});
