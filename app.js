var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

function play() {
    // alert("ufribwdsiu")
    var user_guess = +document.getElementById("guess").value;  
    console.log(typeof user_guess);  
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number Between 1 to 100");
    } else {
        guesses_num.push(user_guess);
        no_of_guesses += 1;
        // alert('sfmm')
        if (user_guess < answer) {

            document.getElementById("m1").innerHTML="Your Guess is low";
           
        } else if (user_guess > answer) {
            document.getElementById("m1").innerHTML="Your Guess is high";
           
        } else if (user_guess == answer) {
            document.getElementById("m1").innerHTML="Yaa!!! you are right this time .<br> I was thinking of " +answer;
        }
    }
}