// inspiration for this project from tutorial https://medium.com/swlh/creating-a-magic-8-ball-in-html5-with-javascript-40df2a0c6efb
// all credit to Sylvain Saurel

var answers = ["It is certain", 
"It is decidedly so", 
"Without a doubt", 
"Yes - definitely",
"You may rely on it", 
"As I see it, yes", 
"Most likely", 
"Outlook good", 
"Yes", "Signs point to yes",
"Don't count on it", 
"My reply is no",
"My sources say no", 
"Outlook not so good",
"Very doubtful", 
"Reply hazy, try again", 
"Ask again later", 
"Better not tell you now",
"Cannot predict now", 
"Concentrate and ask again"];

window.onload = function() {
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var question = document.getElementById("question");

question.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        if (question.value.length < 1) {
            alert('Enter a question!');
        } else {
            eight.innerText = "";
            var num = Math.floor(Math.random() * Math.floor(answers.length));
            answer.innerText = answers[num];
            }      }
            setTimeout(reset, 5000)
    });
};

function reset () {
    eight.innerText = "8";
    answer.innerText = "";
    question.value = "";
    question.placeholder = "Another one!"
}